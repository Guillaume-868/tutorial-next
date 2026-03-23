export default async function Posts() {
 
 /*Récupère 1 seul post en particulier: */ 
  const resultat = await fetch("https://jsonplaceholder.typicode.com/posts/1"); 

  const post = await resultat.json(); /*Requète stockée temporairement*/
  console.log(post); /*Résultat dans la console*/

   return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Post #{post.id} — Auteur #{post.userId}</p>
    </div>
  );
}
