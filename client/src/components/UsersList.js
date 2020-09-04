import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User'

const UserList = props => {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/users`)
            .then(res => {
                console.log(res)
                setUserList(res.data)
            })
            .catch(err => console.log('Error:', err))
    }, [])

    return (
        <div>
            {userList.map(userData => {
                return (
                    <User
                        key={userData.id}
                        user={userData.user}
                    />
                )
            })}
        </div>
    )
}

export default UserList