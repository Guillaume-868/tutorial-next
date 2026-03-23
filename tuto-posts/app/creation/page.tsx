// Tableau avec champs existants
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default async function Posts() {

// Avant : récupère tous les posts
const beforeResultat = await fetch("https://jsonplaceholder.typicode.com/posts");
const beforePosts: Post[] = await beforeResultat.json();
console.log(beforePosts);

// Création
const resultat = await fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Bonjour Alexandre",
    body: "Ceci est ma route dédiée à la création.",
    userId: 101,
  }),
  
  });
  
const post: Post = await resultat.json();
console.log(post);
console.log(resultat.status); // 201 = créé avec succès (JSONPlaceholder est une fausse API, le résultat sera toujours = 100). Ce statut est donc nécéssaire.
  

  // Après : récupère tous les posts
const afterResultat = await fetch("https://jsonplaceholder.typicode.com/posts");
const afterPosts: Post[] = await afterResultat.json();
console.log(afterPosts);

  return (
   <div>
      <p>Nombre de posts avant : {beforePosts.length}</p>
      <p>Nombre de posts après : {afterPosts.length}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Post #{post.id} — Auteur #{post.userId}</p>
    </div>
  );

}