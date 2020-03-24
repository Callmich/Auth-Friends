import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../Utils/axiosWithAuthority';


const FriendsList = (props) => {

    const [friends, setFriends] = useState([]);

    useEffect(()=> {
        const getFriends= () => {
            axiosWithAuth()
            .get('/api/friends')
            .then(response => {
                console.log("Friends List", response.data)
                setFriends(response.data)
            })
            .catch(error=> {console.log("Friends Error", error)})
        }
        getFriends();
    }, [])

    console.log("Axios PALS",friends)
    

    return (
        <div>
            {friends.map(pal => (
              <div key={pal.id}>
                  <h2>Name: {pal.name}</h2>
                  <h3>Age: {pal.age}</h3>
                  <h4>Email: {pal.email}</h4>
                  <br/>
              </div>
            ))}
        </div>
    )
}

export default FriendsList