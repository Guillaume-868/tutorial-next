
    type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default async function Posts() {

  // Avant : récupère le post original
  const beforeResultat = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const beforeDelete: Post = await beforeResultat.json();
  console.log(beforeDelete);

const resultat = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
  method: "DELETE",
});

console.log(resultat.status); // 200 = supprimé avec succès

  const post: Post = await resultat.json();
  console.log(post);

  return (
    <div>
      <h2>Avant modification :</h2>
      <h3> Titre : {beforeDelete.title}</h3>
      <p> Contenu : {beforeDelete.body}</p>
      <p>Post #{beforeDelete.id} — Auteur #{beforeDelete.userId}</p><br></br>
      
      <h2>Après modification :</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>Post #{post.id} — Auteur #{post.userId}</p>
    </div>
  );
}
