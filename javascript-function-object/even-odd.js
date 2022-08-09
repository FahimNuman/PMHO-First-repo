function isEven(number){

    const reminder = number % 2;
    if(reminder===0){
        return true;
    }else{
        return false;
    }
    
}

const myNumber = isEven(124);

console.log(myNumber);