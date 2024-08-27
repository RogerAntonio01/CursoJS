const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const titulo = document.querySelector('.container')
const h1 = document.querySelector('h1');
h1.style.backgroundColor = 'rgb(7, 236, 148)';
h1.style.borderRadius = '10px'
h1.style.padding = '10px';
h1.style.textAlign = 'center';
h1.style.border =  '10px solid black'; // Adiciona uma borda
h1.style.outline =  '10px solid red'; // Adiciona uma borda ao redor da borda

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
   p.style.backgroundColor = backgroundColorBody;
   p.style.color = '#FFFFFF';
   p.style.borderRadius = '10px';
   p.style.padding = '5px';


}


/* [kjjjj]*/