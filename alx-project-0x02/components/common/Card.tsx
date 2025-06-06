import { type CardProps } from "@/interfaces"

const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className="flex flex-row items-center">
            <p>{title}</p>
            <p>{content}</p>
        </div>
    )
}

export default Card