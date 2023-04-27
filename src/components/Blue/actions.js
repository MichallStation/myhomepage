import Message from './Message';

async function sayJ(controls) {
  await controls.start('say');
  await controls.start('nothing');
  controls.stop();
}

function say({ id, mes, controls, toast }) {
  if (toast.isActive(id)) return;
  sayJ(controls);
  toast({
    id,
    duration: 5000,
    render: (props) => <Message {...props}>{mes}</Message>,
    position: 'top-left',
    isClosable: true,
  });
}

function says({ id, mes, controls, toast, delay = 1000 }) {
  mes.forEach((mesO, i) => {
    const idMes = `${id}${i}`;
    if (toast.isActive(idMes)) return;
    if (i === 0) {
      say({
        id: idMes,
        mes: mesO,
        toast,
        controls,
      });
    } else
      setTimeout(
        () =>
          say({
            id: idMes,
            mes: mesO,
            toast,
            controls,
          }),
        delay,
      );
  });
}

export default {
  say,
  says,
};
