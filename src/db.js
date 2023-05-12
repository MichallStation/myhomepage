import { ENV_DB_BASE_URL } from '@/globals/envs';

export async function fetchAllProjectsByLang(lang = 'en') {
  const res = await fetch(`${ENV_DB_BASE_URL}/projs/projs.json`);
  const data = await res.json();
  return data.map((p) => {
    const dataLang = p?.[lang] || p.en;
    return {
      ...p,
      ...dataLang,
    };
  });
}

export async function fetchAllWorksByLang(lang = 'en') {
  const res = await fetch(`${ENV_DB_BASE_URL}/works/works.json`);
  const data = await res.json();
  return data.map((p) => {
    const dataLang = p?.[lang] || p.en;
    return {
      ...p,
      ...dataLang,
    };
  });
}

export async function fetchAllCollabsByLang(lang = 'en') {
  const res = await fetch(`${ENV_DB_BASE_URL}/collabs/collabs.json`);
  const data = await res.json();
  return data.map((p) => {
    const dataLang = p?.[lang] || p.en;
    return {
      ...p,
      ...dataLang,
    };
  });
}

export async function fetchWorkpageByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/pages/work/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchUsepageByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/pages/use/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchProjectById(id, lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/projs/${id}/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchWorkById(id, lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/works/${id}/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchCollabById(id, lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/collabs/${id}/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchArticleById(id, lang = 'en') {
  try {
    const data = {};
    const resData = await fetch(
      `${ENV_DB_BASE_URL}/articles/${id}/${lang}.json`,
    );
    data.article = await resData.json();
    const resMarkdown = await fetch(data.article.md);
    data.markdown = await resMarkdown.text();
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export default {};
