import { PostModalProps } from "@/interfaces"
import { useState } from "react"


const PostModal: React.FC <PostModalProps> = ({isOpen, onSubmit, onClose}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({title, content})
        setTitle('')
        setContent('')
        onClose();
    }

    if (!isOpen) return null

    return (
        <div className="fixed flex items-center bg-black opacity-50">
            <div className="bg-white w-full">
                <form onSubmit={handleSubmit}>
                    <label>
                        <input 
                            type="text"
                            placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full mb-4 p-2 border"
                            required
                        />
                    </label>
                    <label>
                        <input 
                            type="text"
                            placeholder="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full mb-4 p-2 border"
                            required
                        />
                    </label>
                    <div className="flex justify-end space-x-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostModal