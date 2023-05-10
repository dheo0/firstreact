import React, { useState, useRef, useEffect } from "react";
// vue에 v-for와 같은 개념

function Users({user, onRemove, onToggle}) {
    useEffect(() => {
        console.log('화면에 나타남');
        console.log(user)
        return () => {
            console.log('화면에서 사라짐')
            console.log(user)
        }
    }, [user])
    return (
        <div>
            <b 
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >{user.username}</b> <span>{user.email}</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}


function PrintList ({user, onRemove, onToggle}) {
    return (
        <div>
        {
            user.map((item, index) => (<Users 
                    user={item}
                    onRemove={onRemove}
                    key={index}
                    onToggle={onToggle}
                    />
                ))
        }
        </div>
    )
}

export default PrintList;
