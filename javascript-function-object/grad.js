
function grad (marks){

    if(marks<=100 && marks>=80){
        return 'A+';
    } else if (marks <= 79 && marks >= 70 )
    {
        return 'A'
    } else 
     return 'f';

}
 let m=70;
 console.log(grad(m));