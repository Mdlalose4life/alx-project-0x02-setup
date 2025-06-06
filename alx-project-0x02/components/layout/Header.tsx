import Link from "next/link"

const Header: React.FC = () => {
    return (
            <div className="">
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