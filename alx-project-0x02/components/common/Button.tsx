import { type ButtonProps } from "@/interfaces"

const Button: React.FC <ButtonProps> = ({title, styles}) => {
    return (
            <button className={`px-4 py-6 text-white bg-blue-500 ${styles}`}>
                {title}
            </button>
    )
}

export default Button