"use client"
import Card from "@/components/common/Card"
import PostModal from "@/components/common/PostModal"
import Header from "@/components/layout/Header"
import { useState } from "react"

const Home: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [posts, setPosts] = useState<{title: string; content: string}[]>([]);

    const handleAddPost = (data: { title: string; content: string }) => {
        setPosts((prev) => [...prev, data]);
      };


    return (
        <>
         <div className="p-6">
            <button onClick={()=> setModalOpen(true)} className="mv-4 px4 py-2 bg-green-500 text-white rounded">
                Create New Post
            </button>

            <PostModal
            isOpen={modalOpen}
            onClose={()=>setModalOpen(false)}
            onSubmit={handleAddPost}
            />

            <div className="space-y-4">
                {posts.map((post, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={index} className="border p-4 shadow">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
            <div>
                <section><Header/></section>
                <div className="flex flex-col items-center justify-center bg-gray-300 h-full p-20">
                    <Card title="This is the title" content="This is my content"/>
                    <Card title="This is the title2" content="This is my content2"/>
                </div>
            </div>
        </>
    )
}

export default Home