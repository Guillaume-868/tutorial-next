type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default async function Posts() {

  // Avant : récupère le post original
  const beforeResultat = await fetch("https://jsonplaceholder.typicode.com/posts/5");
  const beforeUpdate: Post = await beforeResultat.json();
  console.log(beforeUpdate);

  // Modification
  const resultat = await fetch("https://jsonplaceholder.typicode.com/posts/5", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Titre modifié",
      body: "Contenu modifié",
      userId: 1,
    }),
  });

  const post: Post = await resultat.json();
  console.log(post);

  return (
    <div>
      <h2>Avant modification :</h2>
      <h3> Titre : {beforeUpdate.title}</h3>
      <p> Contenu : {beforeUpdate.body}</p>
      <p>Post #{beforeUpdate.id} — Auteur #{beforeUpdate.userId}</p><br></br>

      <h2>Après modification :</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>Post #{post.id} — Auteur #{post.userId}</p>
    </div>
  );
}

