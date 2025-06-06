import Card from "@/components/common/Card"
import Header from "@/components/layout/Header"

const Home: React.FC = () => {
    return (
            <h1>
                <Header/>
                <Card title="This is the title" content="This is my content"/>
                <Card title="This is the title2" content="This is my content2"/>
            </h1>
    )
}

export default Home