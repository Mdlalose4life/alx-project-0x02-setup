import { PostProps } from "@/interfaces";
import { GetStaticProps } from "next";

const PostsCard: React.FC<PostProps> = ({posts}) => {
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

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await response.json();

    return{
        props: {
            posts,
        },
    };
};

export default PostsCard