import articles from './articles';
import collabs from './collabs';
import projs from './projs';
import works from './works';

export const getProjectsByLang = (lang = 'en') =>
  projs.map((p) => {
    const data = p?.[lang] || p.en;
    return {
      ...p,
      ...data,
    };
  });

export const getWorksByLang = (lang = 'en') =>
  works.map((p) => {
    const data = p?.[lang] || p.en;
    return {
      ...p,
      ...data,
    };
  });

export const getCollabsByLang = (lang = 'en') =>
  collabs.map((p) => {
    const data = p?.[lang] || p.en;
    return {
      // name: p.name,
      // thumbnail: p.thumbnail,
      ...p,
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
      // id: p.id,
      // type: p.type,
      // thumbnail: p.thumbnail,
      // images: p.images,
      // ...data,
      ...p,
      ...data,
    };
  });

export default {};
