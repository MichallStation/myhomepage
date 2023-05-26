import React, { useCallback, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '@/lib/three';
import {
  blue3dDone,
  blue3dShows,
  DONE,
  LOADING,
  PAUSE,
  selectblue3dStatus,
} from '@/features/slices/ui';
import data from './envs';

const easeOutCirc = (x) => Math.sqrt(1 - (x - 1) ** 4);
const envs = {
  inView: true,
  status: LOADING,
};

function Blue3d() {
  const refContainer = useRef();
  const refRenderer = useRef();
  const dispatch = useDispatch();
  const inView = useInView(refContainer);
  const status = useSelector(selectblue3dStatus);
  envs.inView = status !== PAUSE && inView;
  envs.status = status;

  const handleWindowResize = useCallback(() => {
    const { current: rendererEl } = refRenderer;
    const { current: containerEl } = refContainer;
    if (containerEl && rendererEl) {
      const cWidth = containerEl.clientWidth;
      const cHeight = containerEl.clientHeight;

      rendererEl.setSize(cWidth, cHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    const { current: container } = refContainer;
    if (!container) return;
    const cWidth = container.clientWidth;
    const cHeight = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      // 75, // original
      1.5, // small
      // 1, // small
      cWidth / cHeight,
      0.1,
      50000,
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(cWidth, cHeight);
    refRenderer.current = renderer;

    // const target = new THREE.Vector3(0.3, -0.1, 0.15);
    // const target = new THREE.Vector3(0.25, -0.1, 0.15);
    // const target = new THREE.Vector3(0.2, -0.1, 0.13);
    const target = new THREE.Vector3(0.2, -0.1, 0.13);
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI),
    );

    const ambientLight = new THREE.AmbientLight(0xf1e7db, 0.5);
    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    const directionalLight = new THREE.DirectionalLight(0xf1e7db, 3);
    scene.add(ambientLight);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.target = target;
    // console.log(controls);

    let req = null;
    let frame = 0;
    const animate = () => {
      req = requestAnimationFrame(animate);
      if (!envs.inView) return;
      frame = frame <= 100 ? frame + 1 : frame;

      if (frame <= 100) {
        const p = initialCameraPosition;
        // const rotSpeed = easeOutCirc(frame / 120) * Math.PI * 10;
        const rotSpeed = easeOutCirc(frame / 120) * Math.PI * 6;
        camera.position.y = 10;
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        camera.lookAt(target);
      } else {
        if (envs.status !== DONE) {
          dispatch(blue3dDone());
        }
        controls.update();
      }

      renderer.render(scene, camera);
    };

    loadGLTFModel(scene, data.url, {
      name: 'ball',
      receiveShadow: false,
      castShadow: false,
    }).then(() => {
      animate();
      dispatch(blue3dShows());
    });

    container.appendChild(renderer.domElement);
    // eslint-disable-next-line consistent-return
    return () => {
      cancelAnimationFrame(req);
      renderer.domElement.remove();
      renderer.dispose();
      // controls = undefined;
    };
  }, [dispatch]);

  return (
    <Box
      ref={refContainer}
      className="ball-3d"
      m="auto"
      mb={['-160px', '-160px', '-180px']}
      ml={['calc((420px - 100%) / 2 * -1)', 'auto']}
      w={[420, 480, 560]}
      h={[420, 480, 560]}
      overflow="hidden"
    />
  );
}

export default Blue3d;
