import {useState, useEffect}  from "react";
import axios from "../../Api/axios.jsx";

const User = ()=>{

    const [users, setUsers] = useState();
    return(
        <div>
            <article>
                <h2>User List</h2>
                {users?.length
                ?(
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                    </ul>
                    ):(
                        <p>No users</p>
                    )
                }
            </article>
        </div>
    )
}

export default User;