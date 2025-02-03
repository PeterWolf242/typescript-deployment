// * Build-TS-Level-1_1

const output = document.querySelector<HTMLDivElement>("#output");

if (output) {
  output.innerHTML = `<p>Das ist ein neues Vite-Project</p>`;
}

// * Build-TS-Level-2_1

import * as lodash from 'lodash';

const superCodeKebab = lodash.kebabCase('HALLO SUPERCODE');
console.log(superCodeKebab);

if (output)
  output.innerHTML += superCodeKebab;
