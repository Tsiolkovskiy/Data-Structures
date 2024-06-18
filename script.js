
'use strict';

const weekdays = ['mon','tue', 'wed','thu', 'fri','sat', 'sun'];

const hours= {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

   hours,

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery({starterIndex,mainIndex,time,address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);

  },

  orderPizza:function(mainIngredient,...otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr= `We are open on ${properties.length} days: `;
  for (const day of properties){
    openStr+= `${day}, `;
  }
console.log(openStr);

const values = Object.values(restaurant.openingHours);
console.log(values);


for (const day of Object.keys(restaurant.openingHours)){
  console.log(day);
}

const entries =Object.entries(restaurant.openingHours);
console.log(entries);

for (const x of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`)
};

// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// const days = ['mon','tue', 'wed','thu', 'fri','sat', 'sun'];
// for(const day of days){
//   console.log(day);
//   const open=restaurant.openingHours[day]?.open ??'closed';
//   console.log(`On ${day} we open at ${open}`);
// }
// console.log(restaurant.order?.(0,1)??'Method does not exist');
// console.log(restaurant.orderRisotto?.(0.1)??'Method does not exist');

// const users = [{name: 'Jonas',emaile: 'hello@jonas.io'}];
// console.log(users[0]?.name ?? 'User array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i,el] of menu.entries()){
//   console.log(`${i+1}: ${el}`);
// }

// const rest1={
//   name: "Capri",
//   numGuests: 20,
// };

// const rest2={
//   name: "La Piazza",
//   owner:'Giovanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||=10;
// // rest2.numGuests ||=10;

// rest1.numGuests ??=10;
// rest2.numGuests ??=10;

// // rest1.owner = rest2.owner && '<Anonymous>';
// // rest2.owner = rest2.owner && '<Anonymous>';
// rest1.owenr &&= '<Anonymous>';
// rest2.owner &&='<Anonymous>';

// console.log(rest1);
// console.log(rest2);




// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


// console.log(3||'Jonas');
// console.log(''||'Jonas');
// console.log(true||'Jonas');
// console.log(undefined||null);
// console.log(undefined||0||''||'Hello'||23||null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 =restaurant.numGuests || 10 
// console.log(guests2);

// console.log(0&&'Jonas');
// console.log(7&&'Jonas');

// if (restaurant.orderPizza){
//     restaurant.orderPizza('mushrooms', 'spincach');
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// const arr=[1,2,...[3,4]];

// const [a,b, ...others]=[1,2,3,4,5];

// console.log(a,b,others);


// const [pizza, ,risotto, ...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];

// console.log(pizza,risotto,otherFood);
// //objects
// const {sat,...weekdays}= restaurant.openingHours;
// console.log(weekdays);
// //functions
// const add = function(...numbers){
//   let sum=0;
//   for(let i=0;i<numbers.length;i++) sum+=numbers[i];
//   console.log(sum)
// }

// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);

// const x=[23,5,7];
// add(...x);

// restaurant.orderPizza('mushrooms','onions','olives','spinach');
// restaurant.orderPizza('mushrooms');


// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?' ), prompt('Ingredient 2'), prompt("Ingredient 3"),];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients)   ;

// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy={...restaurant};
// restaurantCopy.name = 'Ristorante Roma';




// const arr=[7,8,9];
// const badNewArr=[1,2, arr[0],arr[1], arr[2]];
// console.log(badNewArr);

// const newArr=[1,2,...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1,2,7,8,9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);


// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });




// const{name,openingHours,categories}=restaurant;
// console.log(name, openingHours,categories);

// const{name:restaurantName, openingHours:hours, categories:tags}=restaurant;
// console.log(restaurantName, hours, tags);

// const{menu=[], starterMenu: starters=[]}=restaurant;
// console.log(menu,starters);

// let a=111;
// let b = 999;
// const obj={a:23, b:7, c:14};
// ({a,b}=obj);
// console.log(a,b);

// const {
//   fri:{
//     open:o,close:c},
// }=openingHours;
// console.log(o,c)
//