// Tehdään lista koirien nimille
let koirat = [];
for (let i = 0; i < 6; i++) {
  let nimi = prompt('Anna koiran nimi:');
  koirat.push(nimi);
}
koirat.sort();
koirat.reverse();
document.write('<ul>');
for (let i = 0; i < koirat.length; i++) {
  document.write('<li>' + koirat[i] + '</li>');
}
document.write('</ul>');
