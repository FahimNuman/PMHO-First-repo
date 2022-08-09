const phones =[

    { Name: 'Nokia', camera:'12', storage:'128', price: 34000, color:'black'},
    { Name: 'Nokia', camera:'12', storage:'128', price: 24000, color:'black'},
    { Name: 'samsung', camera: '10', storage: '128', price: 64000, color: 'blue' },
    { Name: 'tecno', camera: '34', storage: '128', price: 56777, color: 'white' },
    { Name: 'walton', camera: '10', storage: '128', price: 45433, color: 'parpel' },
]
 function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i=0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price<cheapest.price){
            cheapest= phone;

        }
        
    }
     return cheapest;
 }
 const mySelection = cheapestPhone(phones);
 console.log(mySelection);