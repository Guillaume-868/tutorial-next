
export default async function Posts() {

  // Tout récupérer
  const allresultat = await fetch("https://jsonplaceholder.typicode.com/comments?");
const allcomments = await allresultat.json();
console.log(allcomments);

// Récupèrer tous ceux qui ont un postID=2 (5 au total)
const resultat = await fetch("https://jsonplaceholder.typicode.com/comments?postId=2");
const comments = await resultat.json();
console.log(comments);

// Récupèrer tous ceux qui ont un postID=8 et un postID=32 (10 au total)
const result = await fetch("https://jsonplaceholder.typicode.com/comments?postId=8&postId=32");
const idposts = await result.json();
console.log(idposts);

// Récupèrer tous ceux qui ont un postID allant de 12 à 24 (65 au total)
const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId_gte=12&postId_lte=24");
const test = await res.json();
console.log(test);

}