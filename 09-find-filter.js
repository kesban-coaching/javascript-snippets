const posts = [
  { id: 1, title: "Post 1", text: "Sunny weather", author: "Kesban", views: 23 }, // views: 24
  { id: 2, title: "Post 2", text: "Grey clouds", author: "Edward", views: 17 },
  { id: 3, title: "Post 3", text: "Lorem lorem lorem", author: "Rob", views: 4 },
]

// search an item by text
const itemFound = posts.find( post => {
  if(post.text.includes("clouds"))
    return post
})

console.log(itemFound)

// const itemFound = posts.find((item) => {
//   // check for an item we search using if
//   if(item.id === 2) {
//     console.log(item.title)
//     return item
//   }
// })

// console.log(itemFound)