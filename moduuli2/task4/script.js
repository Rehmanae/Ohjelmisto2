// lista numeroille
let luvut = [];
let syote = Number(prompt('Anna numero (0 lopettaa):'));
while (syote !== 0) {
  luvut.push(syote);
  syote = Number(prompt('Anna numero (0 lopettaa):'));
}
lv = luvut.sort(function(a,b){return b-a;});
for (let i = 0; i < luvut.length; i++) {
  console.log(luvut[i]);
}
