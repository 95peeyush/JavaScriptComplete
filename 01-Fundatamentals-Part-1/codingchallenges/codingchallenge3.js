let avgScoreDolphin = (96 + 108 + 89) / 3;
let avgScoreKoalas = (88 + 91 + 110) / 3;

console.log(avgScoreDolphin, avgScoreKoalas);

if (avgScoreDolphin === avgScoreKoalas)
    console.log(`Both the team wins the trophy!`);
else if (avgScoreDolphin > avgScoreKoalas)
    console.log(`Doplhin win's the trophy 🏆`);
else
    console.log(`Koalas win's the trophy 🏆`);

//Bonus 1

avgScoreDolphin = (97 + 112 + 101) / 3;
avgScoreKoalas = (109 + 95 + 123) / 3;
console.log(avgScoreDolphin, avgScoreKoalas);


if (avgScoreDolphin === avgScoreKoalas)
    console.log(`Both the team wins the trophy!`);
else if (avgScoreDolphin > avgScoreKoalas && avgScoreDolphin >= 100)
    console.log(`Doplhin win's the trophy 🏆`);
else if (avgScoreDolphin < avgScoreKoalas && avgScoreKoalas >= 100)
    console.log(`Koalas win's the trophy 🏆`);

//Bonus 2

avgScoreDolphin = (97 + 112 + 101) / 3;
avgScoreKoalas = (109 + 95 + 106) / 3;
console.log(avgScoreDolphin, avgScoreKoalas);


if (avgScoreDolphin === avgScoreKoalas && avgScoreDolphin >= 100)
    console.log(`Both the team wins the trophy!`);
else if (avgScoreDolphin > avgScoreKoalas && avgScoreDolphin >= 100)
    console.log(`Doplhin win's the trophy 🏆`);
else if (avgScoreDolphin < avgScoreKoalas && avgScoreKoalas >= 100)
    console.log(`Koalas win's the trophy 🏆`);