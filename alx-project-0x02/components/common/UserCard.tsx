import { UserProps } from "@/interfaces";
import { GetStaticProps } from "next";

const UserCard: React.FC<UserProps> = ({users}) => {
    return (
        <div>
            {users.map((user, index) => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <div>
                        <p>{user.email}</p>
                        <p>{user.address}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json();

    return {
        props: {
            users,
        },
    };
};

export default UserCard