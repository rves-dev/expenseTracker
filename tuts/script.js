// // FIRST & SECOND CHALLENGE
// const weightMark = 78;
// const weightJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const bmiMark = weightMark / (heightMark ** 2);
// const bmiJohn = weightJohn / (heightJohn ** 2);

// // console.log(bmiMark);
// // console.log (bmiJohn);

// const isMarkHigherBMI = bmiMark > bmiJohn;
// // console.log(isMarkHigherBMI);
 
// if(isMarkHigherBMI){
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
// } else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's! (${bmiMark})`)
// }

// THIRD CHALLENGE

const dolphins = (97+112+101) / 3 ;
const koalas = (109+95+106) / 3;

console.log(`Dolphins' average score is ${dolphins}
Koalas' average score is ${koalas}`);

if ((dolphins > koalas) && (dolphins >= 100) ){
    console.log(`Dolphins wins!`);
} else if ((dolphins < koalas) && (koalas >= 100) ){
    console.log(`Koalas wins!`);
} else if(dolphins === koalas){
    console.log(`It's a draw.`)
} else console.log(`Nobody wins.`)

 