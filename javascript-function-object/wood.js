// chair-->20cft
// table-->30cft
// bad -->50cft

function woodCalculation(chairQuantity,tableQuantity,badQuantity){

    const Perchair =2;

    const Pertable =3;

    const Perbad =5;

    const chairWood = chairQuantity *Perchair;
    const tableWood = tableQuantity * Pertable;
    const badWood = badQuantity * Perbad;


    const totalWood = chairWood+tableWood+badWood;
    return totalWood;
}
const totalWood = woodCalculation(20,30,50);
console.log(totalWood);