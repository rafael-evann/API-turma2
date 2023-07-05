const h1 = document.createElement('h1');
h1.innerHTML = 'MInha página dinânmica';
h1.setAttribute('id', 'titulo');
h1.setAttribute('data-test','test-title');
h1.classList.add('titulo-pagina');
h1.style.color='maroon';
h1.style.fontFamily="Arial";

const h2 = document.createElement('h2');
h2.innerHTML = "Esta pagina está sendo gerada dinamicamente"

const p1= document.createElement('p1');
p1.innerHTML ="fdjbvfjgkfbjsdfjgsdgfgbsdfgjkdfgdfçjgbdfjhg,kjdfsg";

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(p1);