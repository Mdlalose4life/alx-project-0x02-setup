import Button from "@/components/common/Button"

const Landing: React.FC = () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">About Page</h1>
        <Button title="Small Button" styles="text-sm rounded-sm"/>
        <Button title="Medium Button" styles="text-md rounded-md"/>
        <Button title="Big Button" styles="text-lg rounded-lg"  />
      </div>
    )
  }
export default Landing