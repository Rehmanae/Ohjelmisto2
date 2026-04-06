// funktio nopan heittoon
function heitaNoppaa(){
  return Math.floor(Math.random() * 6) + 1;
}
document.write('<ul>');
let l = 0;
while (l !== 6) {
  l = heitaNoppaa();
  document.write('<li>' + l + '</li>');
}
document.write('</ul>');
