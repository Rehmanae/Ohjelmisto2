// kysytään kuinka monta osallistujaa
let maara = Number(prompt('Montako osallistujaa?'));
let osallistujat = [];
for (let i = 0; i < maara; i++) {
  let nimi = prompt('Osallistujan nimi:');
  osallistujat.push(nimi);
}
osallistujat.sort();
document.write('<ol>');
for (let i = 0; i < osallistujat.length; i++) {
  document.write('<li>' + osallistujat[i] + '</li>');
}
document.write('</ol>');
