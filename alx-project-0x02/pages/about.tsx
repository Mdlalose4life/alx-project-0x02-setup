import Button from "@/components/common/Button"
import Header from "@/components/layout/Header"

const Landing: React.FC = () => {
    return (
      <div>
        <Header/>
        <h1 className=" text-xl font-extralight">About Page</h1>
        <Button size="small" shape="rounded-sm"/>
        <Button size="medium" shape="rounded-md"/>
        <Button size="large" shape="rounded-full"  />
      </div>
    )
  }
export default Landing