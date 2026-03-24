import Viewdetails from "@/components/Viewdetails";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export default async function Home() {
    const resultat = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const posts: Post[] = await resultat.json();

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post: Post) => ( // Boucle sur les 100 posts
                <Viewdetails key={post.id} post={post} />
            ))}
        </div>
    );
}