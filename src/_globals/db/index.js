import articles from './articles';
import collabs from './collabs';
import projs from './projs';
import works from './works';

export const getProjectsByLang = (lang = 'en') =>
  projs.map((p) => {
    const data = p?.[lang] || p.en;
    return {
      id: p.id,
      thumbnail: p.thumbnail,
      preview: p.preview,
      ...data,
    };
  });

export const getWorksByLang = (lang = 'en') =>
  works.map((p) => {
    const data = p?.[lang] || p.en;
    return {
      id: p.id,
      thumbnail: p.thumbnail,
      preview: p.preview,
      ...data,
    };
  });

export const getCollabsByLang = (lang = 'en') =>
  collabs.map((p) => {
    const data = p?.[lang] || p.en;
    return {
      name: p.name,
      thumbnail: p.thumbnail,
      ...data,
    };
  });

export const getArticleByLang = (lang = 'en') =>
  // const res = await fetch(`${HOST_URL}/data/articles.json`);
  // const articles = await res.json();
  // console.log(articles);

  articles.map((p) => {
    const data = p?.[lang] || p.en;
    return {
      id: p.id,
      type: p.type,
      markdown: p.markdown,
      thumbnail: p.thumbnail,
      images: p.images,
      ...data,
    };
  });

export default {};
