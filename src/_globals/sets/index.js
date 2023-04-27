import en from './en';
import vi from './vi';
// import zh from './zh';

// export const langs = ['en', 'vi', 'zh'];
export const langs = ['en', 'vi'];
export const sets = {
  en,
  vi,
  // zh,
};

export function getSet(id, lang = 'en') {
  const set = sets?.[lang] || sets.en;
  return set?.[id];
}

export default sets;
