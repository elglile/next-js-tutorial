// import Image from "next/image";
import React from 'react';
interface User {
    id: number;
    name: string;
}
const User = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', 
        {next: {revalidate: 10}}
    );
    const users: User[] = await res.json()
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <ul>
                <h1>User Data</h1>
                <p>{new Date().toLocaleTimeString()}</p> {/* that line to show as the referech time forthe component */}
                {users.map(u => (
                    <li key={u.id} >{u.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default User