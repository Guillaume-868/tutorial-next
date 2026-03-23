interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}



export default async function Home() {
  /*Récupère tous les posts (100) de l'API placeholder : */
  const resultat = await fetch("https://jsonplaceholder.typicode.com/posts/");

  /*Récupère 1 seul post en particulier: */
  // const resultat = await fetch("https://jsonplaceholder.typicode.com/posts/1"); 

  const posts = await resultat.json(); /*Requète stockée temporairement*/
  console.log(posts); /*Résultat dans la console*/

  return (
    <div>
      <h1>Post</h1>
      {posts.map((post: Post) => (
        <>
          <p>{post.id}</p>
          <p>{post.body}</p>
        </>
      ))}

    </div>
  );
}

/*Les champs exploitables sont les suivants :
body
id
title
user_Id
*/