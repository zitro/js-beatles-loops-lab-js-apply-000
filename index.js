

function theBeatlesPlay(musicians, instruments){
let arr1 = [];
for(let i=0;i < musicians.length;i++){
    arr1.push(`${musicians[i]} plays ${instruments[i]}`)
}
return arr1
}

function johnLennonFacts(facts){
let i = 0;
let full = [];
  while (facts[i]) {
    full.push(facts[i] + '!!!');
    i++;
}
return full
}
function iLoveTheBeatles(number){
  let arr2 = [];
  do {
    arr2 += "I love the Beatles!" + i;
    i++;
}
while (i < 15);
  return arr2
}
