function randomId(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function bindHistory(onBackHandler, hash = randomId(5)) {
  if (typeof onBackHandler !== 'function') return undefined;
  const handleHashChange =
    /** @param {HashChangeEvent} e */
    (e) => {
      const { newURL, oldURL } = e;
      const isBack = oldURL.startsWith(`${newURL}+`);
      if (!isBack) return;
      onBackHandler(e);
    };
  const oldHash = window.location.hash;
  window.location.hash = `${window.location.hash}+${hash}`;

  window.addEventListener('hashchange', handleHashChange);
  return () => {
    window.removeEventListener('hashchange', handleHashChange);
    window.location.hash = oldHash;
  };
}

export default {};
