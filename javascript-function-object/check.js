const country='Bangladesh';
const age =52;
const isIndependent =true;
const student ={ id:1211, class: 11, name:'Agun'};
const friends= [12,23,34,45,45];
const newFriends=[21,43,54,65];
function add(num1,num2){

    return num1+num2;
}


//  
console.log(typeof country);
console.log(typeof age);
console.log(typeof Independent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);

// 2 ta array concate korte chaile evabe kora laghe/

const allfriends = newFriends.concat(friends); 
console.log(allfriends);

// ekhon dhoren amar dorkar holo student er 34 ar 45 taile amader slick bebohar kore kora lagkbe/

// const partial  = friends.slice(2,4);
// console.log(partial);


// ekhon dhoren ekbare kichu jinis array theke remove korte can taile splice use kora lage

const partial = friends.splice(2 ,3);
console.log(partial);
console.log(friends);



