const names = ['fahim','bappy','moli','salma','fahim','bappy'];

function removeDuplicated(names){

const unique = [];
    for(let i=0;i<names.length; i++){
        const name =names[i];
        if(unique.includes(name) === false ) {

            unique.push(name);

        }
    }
    return unique;

}



const uniqueNames =removeDuplicated(names);

console.log(uniqueNames);