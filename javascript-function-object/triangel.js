let a=12;
let b= 4;
let c= 8;

 function rectArea(b1,b2,b3){
    let sum =(a+b+c)/2;
    

    let area = Math.sqrt(sum*(sum-6)*(sum-5)*(sum-8));

    return area;

 }

 console.log(rectArea(a,b,c));