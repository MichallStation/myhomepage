import {
  ENV_DB_BASE_URL,
  ENV_DB_HOST_DEV,
  ENV_DB_HOST_PROD,
} from '@/globals/envs';

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

export async function fetchDataByUrl(url, lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}${url}/${lang}.json`);
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

    if (process.env.NODE_ENV === 'development') {
      data.article.md = data.article.md.replace(
        ENV_DB_HOST_PROD,
        ENV_DB_HOST_DEV,
      );
    }

    const resMarkdown = await fetch(data.article.md);
    data.markdown = await resMarkdown.text();
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function fetchArticleHeaderById(id, lang = 'en') {
  try {
    const resData = await fetch(
      `${ENV_DB_BASE_URL}/articles/${id}/${lang}.json`,
    );
    const data = await resData.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function fetchArticleHeaderByUrl(url, lang = 'en') {
  try {
    const resData = await fetch(`${ENV_DB_BASE_URL}/${url}/${lang}.json`);
    const data = await resData.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function fetchAllArticleHeaderByIds(ids, lang = 'en') {
  const data = [];
  // eslint-disable-next-line no-restricted-syntax, no-unreachable-loop
  for (const id of ids) {
    // eslint-disable-next-line no-await-in-loop
    const articleHeader = await fetchArticleHeaderById(id, lang);
    data.push(articleHeader);
  }
  return data;
}

export default {};
