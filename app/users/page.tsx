import React from 'react'

const page = async () => {

    interface User {
        id: Number,
        name: string,
    }

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { next: { revalidate: 10 } })
    const users: User[] = await response.json()
    return (
        <>
            <h1>User Name</h1>
            <ul>
                {users.map((user, index) => {
                    return (
                        <li key={index}>{user.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default page

