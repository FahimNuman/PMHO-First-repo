const phones = [

    { Name: 'Nokia', camera: '12', storage: '128', price: 34000, color: 'black' ,quantity:5},
    { Name: 'Nokia', camera: '12', storage: '128', price: 24000, color: 'black', quantity: 3 },
    { Name: 'samsung', camera: '10', storage: '128', price: 64000, color: 'blue', quantity: 2 },
    { Name: 'tecno', camera: '34', storage: '128', price: 56777, color: 'white', quantity: 6 },
    { Name: 'walton', camera: '10', storage: '128', price: 45433, color: 'parpel', quantity: 8 },
]

function totalCost(phones) {

    let sum = 0;
    for (let i = 0; i < phones.length; i++) {

        const phone = phones[i];
        const productTotal= phone.price * phone.quantity;
        // sum = sum + phone.price;
        sum = sum + productTotal;
        console.log(phone);
    }


    return sum;
}

const mySelection = totalCost(phones);
console.log(mySelection);