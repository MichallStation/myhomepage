const reLinkOrImage = /\[*\w*\]\(\.\/*\w*\.*\w*\)/;
const isMatches = reLinkOrImage.test(
  '[123 nsakdjahskjdh kjasdhksajdashd kajshdkjashd ](https://thumbnail.jpg)'
);

console.log(isMatches);
