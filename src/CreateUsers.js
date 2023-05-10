import React from "react";

function CreateUsers({username, email, onChange, onCreate}) {
    return (
        <div>
            <input 
                name="username" 
                placeholder="account name"
                onChange={onChange}
                value={username}
            />
            <input 
                name="email" 
                placeholder="email"
                onChange={onChange}
                value={email}
            />
            <button type="button" onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateUsers;