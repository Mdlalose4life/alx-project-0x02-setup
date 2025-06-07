import { type ButtonProps } from "@/interfaces"

const Button: React.FC <ButtonProps> = ({shape, size}) => {

    const ButtonSizes = {
        small: "px-4 py-2 text-sm",
        medium: "px-3 py-6 text-md",
        large: "px-6 py-7 text-lg ",
    }

    return (
            <button className={`text-white bg-blue-500 ${shape} ${ButtonSizes[size]}}`}>
                Button
            </button>
    )
}

export default Button