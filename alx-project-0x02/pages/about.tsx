import Button from "@/components/common/Button"

const Landing: React.FC = () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">About Page</h1>
        <Button size="small" shape="rounded-sm"/>
        <Button size="medium" shape="rounded-md"/>
        <Button size="large" shape="rounded-lg"  />
      </div>
    )
  }
export default Landing