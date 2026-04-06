// funktio nopan heittoon, sivujen mukaan
function heitaNoppaa(sivut){
  return Math.floor(Math.random() * sivut) + 1;
}
let sivuja = Number(prompt('Montako sivua nopassa on?'));
let luku = 0;
document.write('<ul>');
while (luku !== sivuja) {
  luku = heitaNoppaa(sivuja);
  document.write('<li>' + luku + '</li>');
}
document.write('</ul>');
