import Link from "next/link"

const Header: React.FC = () => {
    return (
            <div className="flex flex-row justify-between">
                <Link href="/home">
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
            </div>
    )
}

export default Header