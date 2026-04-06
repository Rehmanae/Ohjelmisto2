// kerätään numeroita kunnes sama tulee
let luvut = [];
while (true) {
  let syote = Number(prompt('Anna numero:'));
  if (luvut.includes(syote)) {
    console.log('Numero annettu jo, lopetetaan.');
    break;
  }
  luvut.push(syote);
}
lv = luvut.sort(function(a,b){return a-b;});
for (let i = 0; i < luvut.length; i++) {
  console.log(luvut[i]);
}
