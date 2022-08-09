// let friendList = ['asif', 'rizv', 'mahfuz', 'tohid', 'emon'];
// function friendsArray(friendList) {
//     let bigFriend = '';
//     for (let i = 0; i < friendList.length; i++) {
//         const ele = friendList[i];
//         if (ele.length > bigFriend.length) {
//             bigFriend = ele
//         }
//     }
//     return bigFriend;
// }
// let bigFriend = friendsArray(friendList)
// console.log(bigFriend);


const frndName = ['Muhibl', 'Babui', 'Munahghbbbb', 'Korimhgfg'];
function bestFriend(names) {
    let largest = [];
    let k = 0;
    let l = [];

    for (let i = 0; i < names.length; i++) {

        //array length here...

        let b = names[i];
        let c = b.length;
        largest = c;
        if (largest > k) {

            k = largest;


        }


        l.push(largest);



    }


    console.log(k);
    console.log(l);
    console.log(typeof (l));
    let index = l.indexOf(k);
    console.log(index);
    console.log(names);
    let n = names[index];
    return n;



}


console.log(bestFriend(frndName));