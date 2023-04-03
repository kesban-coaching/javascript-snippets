const posts = [
  {
    id: 1,
    title: "Post 1",
    text: "Sunny weather",
    author: "Kesban",
    views: 23,
  }, // views: 24
  { id: 2, title: "Post 2", text: "Grey clouds", author: "Edward", views: 17 },
  {
    id: 3,
    title: "Post 3",
    text: "Lorem lorem lorem",
    author: "Rob",
    views: 4,
  },
];

// MAP
// arr.map( mapFunction )
const postsCopy = posts.map( (post) => {
  post.views++
  return post
} )

console.log(postsCopy)