import { ENV_DB_BASE_URL } from '@/globals/envs';

export async function fetchAllDataByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/.data/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchAllSetByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/.data/set/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchCollectById(id, lang = 'en') {
  let data = null;
  try {
    const res = await fetch(
      `${ENV_DB_BASE_URL}/.data/collect/${id}/${lang}.json`,
    );
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchSetComponentByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(
      `${ENV_DB_BASE_URL}/.data/set/component/${lang}.json`,
    );
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchSetPageByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/.data/set/page/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

/**
 * Fetch data and markdown
 * @param {*} url
 * @param {*} lang
 * @returns
 */
export async function fetchDataByUrl(url, lang = 'en') {
  try {
    // const result = {};
    const resData = await fetch(`${ENV_DB_BASE_URL}/.data/${url}/${lang}.json`);
    const data = await resData.json();
    let detailData = {};

    if (data?.md) {
      const { md } = data;
      detailData.markdown = md;
    }
    if (data?.json) {
      const { json } = data;
      detailData = { ...detailData, ...json };
    }
    return { ...data, ...detailData };
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function fetchAllDetailsByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/.data/detail/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchAllArticlesByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/.data/article/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchAllUsesByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/.data/use/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchAllCollabsByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/.data/collab/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchAllProjectsByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/.data/proj/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchAllWorksByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/.data/work/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchAllCommunitysByLang(lang = 'en') {
  let data = null;
  try {
    const res = await fetch(`${ENV_DB_BASE_URL}/.data/community/${lang}.json`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchArticleById(id, lang = 'en') {
  return fetchDataByUrl(`/article/${id}`, lang);
}

export async function fetchUseById(id, lang = 'en') {
  return fetchDataByUrl(`/use/${id}`, lang);
}

export async function fetchDetailById(id, type, lang = 'en') {
  return fetchDataByUrl(`/detail/${type}/${id}`, lang);
}

export default {};
