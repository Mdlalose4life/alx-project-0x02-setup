import { PostProps } from "@/interfaces";
import { useEffect, useState } from "react";


const PostsCard: React.FC<PostProps> = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json()
            setPosts(data)
        }
        fetchPosts();
    } , []);

    return (
      <div>
        {posts.map((post, index) => (
            <div key={post.userId}>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <p>{post.userId}</p>
            </div>
        ))}
      </div>
    )
}

export default PostsCard