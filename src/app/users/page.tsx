import React from 'react'
import styles from "./users.module.css";

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();

    return (

        <>
            <h1>Users Page</h1>
            <table className={styles.table}>
                <thead >
                    <tr>
                        <th className={styles.tableHeader}>Name</th>
                        <th className={styles.tableHeader}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user.id} >
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