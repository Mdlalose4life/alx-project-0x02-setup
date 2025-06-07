import { type CardProps } from "@/interfaces"

const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className="flex flex-row items-center gap-3.5">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Card