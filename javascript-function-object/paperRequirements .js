function paperRequirement(banglaQuentity,englishQuentity,mathQuentity){

    const perBanglaBook = 2;
    const perEnglishBook = 5;
    const perMathBook = 3;

    const BanglaPaper =banglaQuentity *perBanglaBook;
    const EnglishPaper = englishQuentity*perEnglishBook;
    const MathPaper =mathQuentity*perMathBook;

    const totalPaper =BanglaPaper+EnglishPaper+MathPaper;

    return totalPaper;


}

const totalPaper =paperRequirement(100,200,300);
console.log(totalPaper);