import * as lodash from 'lodash';


const output = document.querySelector<HTMLDivElement>("#output");

if (output) {
  output.innerHTML = `<p>Das ist ein neues Vite-Project</p>`;
}


const superCodeKebab = lodash.kebabCase('HALLO SUPERCODE');
console.log(superCodeKebab);

if (output)
  output.innerHTML += superCodeKebab;
