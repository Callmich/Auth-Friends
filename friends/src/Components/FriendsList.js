import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../Utils/axiosWithAuthority';


const FriendsList = () => {

    const [friends, setFriends] = useState([]);
    const [userId, setUserId] = useState("")



    console.log("Axios PALS",friends) 

    function deleteFriend(pal){
        axiosWithAuth()
        .delete(`/api/friends/${pal}`)
        .then(res=> {
            console.log("delete", res)
        })
        .catch(err => {
            console.log("delete err", err)
        })
    }

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
    }, [deleteFriend()])
    

    return (
        <div><Link to="/addfriend">Add Friend</Link>
        <div>
            {friends.map(pal => (
              <div key={pal.id}>
                  <h2>Name: {pal.name}</h2>
                  <h3>Age: {pal.age}</h3>
                  <h4>Email: {pal.email}</h4>
                  <button onClick={()=>{deleteFriend(pal.id)}}>Fire Friend</button>
                  <br/>
              </div>
            ))}
        </div>
        </div>
    )
}

export default FriendsList