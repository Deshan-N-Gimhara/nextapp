import React from 'react'
import styles from "./users.module.css";
import Link from 'next/link';
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users: User[] = await res.json();


    if (sortOrder == "name") {
        users = sort(users).asc(u => u.name);
    } else if (sortOrder == "email") {
        users = sort(users).asc(u => u.email);
    }

    return (

        <>
            <h1>Users Page</h1>
            <table className='table'>
                <thead >
                    <tr>
                        <th><Link href="/users?sortOrder=name">Name</Link></th>
                        <th ><Link href="/users?sortOrder=email">Email</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user.id} className="hover">
                                <td >{user.name}</td>
                                <td >{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default UsersPage