"use client"; // Fichier à exécuter dans le CSS

import { useState } from "react"; // Import useState de la librairie React

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

// Je permets à mon composant viewdetails d'être utilisé ailleurs.
// Pour chacun des posts, je devrais afficher cecui-ci grâce au bouton en respectant l'interface Post

export default function Viewdetails({ post }: { post: Post }) {
    const [showDetails, setShowDetails] = useState(false) // Ne rien afficher par defaut 

    return (
        <div>
            <h1> {post.title}</h1>
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Masquer" : "Voir les détails"}
            </button>

            {showDetails && (
                <div>
                    <p> ID : {post.id}</p>
                    <p> Utilisateur : {post.userId}</p>
                    <p> Contenu : {post.body}</p>
                </div >
            )}
        </div>

    )
}