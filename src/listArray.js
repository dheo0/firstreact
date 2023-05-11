import React, { useEffect } from "react";
// vue에 v-for와 같은 개념

function Users({user, onRemove, onToggle}) {
    useEffect(() => {
        // useEffect는 컴포넌트의 마운트 / 언마운트시 / 업데이트시 호출할 함수를 정의할 수 있음
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
