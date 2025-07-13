const marvel_heros =[ "ironman", "hulk", "spiderman", ];
const dc_heros =["batman", "superman", "flash", ]

// marvel_heros.push(dc_heros) // Adding dc_heros array to marvel_heros array

// console.log(marvel_heros); 
// console.log(marvel_heros [3][1]); 

// const allHero = marvel_heros.concat(dc_heros) // Using concat method to merge arrays
// console.log(allHero); 

// const all_new_heros =[...marvel_heros, ...dc_heros]; // Using spread operator to merge arrays

// console.log(all_new_heros);


// const another_array=[1,2,3[4,5,6],7,[,6,7,[4,5]]]

// const new_arr = another_array.flat(infinity) // Flattening the nested array
// console.log(new_arr)


// const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const new_arr = another_array.flat(Infinity);

// console.log(new_arr);

console.log(Array.isArray("aniket"))// Checking if "aniket" is an array
console.log(Array.from("aniket"))  // Converting string "aniket" to an array
console.log(Array.from({name:"aniket"}))  // Converting an object to an array (empty array)






