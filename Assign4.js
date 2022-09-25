// Assignment 4 solution by MAHESH CHAND
ratingData = [
    {restaurent: 'KFC', rating: 5},
    {restaurent: 'Burger king', rating: 4},
    {restaurent: 'KFC', rating: 3},
    {restaurent: 'Domino', rating: 2},
    {restaurent: 'Subway', rating: 3},
    {restaurent: 'Domino', rating: 1},
    {restaurent: 'Subway', rating: 4},
    {restaurent: 'Pizza hut', rating: 5},
]
// Listing all the available Restaurents
console.log('\n Listing all the available Restaurents');
const uniqueReastaurent = Array.from(new Set(ratingData.map(({restaurent})=> restaurent)));
console.log(uniqueReastaurent);

// part (a) Average of the customers' stars the a particular restaurent
console.log('\n part-A \n');
let arr = [];
uniqueReastaurent.map(resName=>{
    const resRatings = ratingData.filter(obj=> obj.restaurent == resName);
    let outputObj = {
        restaurent: resName,
        avgRating: resRatings.reduce((x, y)=> x + y.rating,0)/resRatings.length
    }
    arr.push(outputObj);
})

// print restaurents with average rating
console.log(arr);


// Part (b)  Filter restaurents which have average rating >= 4
console.log('\n part-B \n');
const  xx= arr.filter(x=>x.avgRating >= 4);
console.log(xx);

console.log('\n\n Thank you !!!')
console.log("Assignment submitted by Mahesh Chand, B.Tech. student @ IIT Roorkee \n");