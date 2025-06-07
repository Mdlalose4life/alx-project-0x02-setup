import Posts from "@/components/common/PostCard"
import Header from "@/components/layout/Header"
const Home: React.FC = () => {

    return (
        <>
        <Header/>
        <div className="grid grid-cols-4 gap-4">
            <Posts/>
        </div>
        </>
    )
}

export default Home