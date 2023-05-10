import React, {useRef, useState} from 'react';
import Wrapper from './Wrappers';
import CreateUsers from './CreateUsers';
import PrintList from './listArray'
import './App.css'

function App() {
  const name ='Oslo'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  
  
  // input 초기값 세팅
  const [Inputs, setInputs] = useState({
    username: '',
    email: ''
  })
  // 구조분해할당 
  const {username, email} = Inputs
  // input값 변경시 value 값 세팅
  const onChange = (e) => {
    /**
     * 여러개의 input을 하나의 메서드로 제어하기 위하여 사용
     */
    const { name, value } = e.target; // 선택한 input에 대한 구조 분해 할당 
    // value값 변경시 값 할당
    setInputs({
      ...Inputs,
      [name] : value
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: true
    }
  ]);
  const arrLength = users.length + 1

  const nextID = useRef(arrLength)

  const onCreate = () => {
    const user = {
      id: nextID.current,
      username,
      email
    }
    /** 
     * 배열의 불변성을 지켜주기 위해 
     * ...스프레드 연산자 또는 
     * concat함수 사용 
     * ex) setUsers(users.concat(user)); 
     */
    setUsers([...users, user]) 
    
    // 배열 추가 후 input value 초기화
    setInputs({
      username:'',
      email:''
    })
    nextID.current += 1
  }
  const onRemove = (id) => {
    /**
     * 배열의 삭제시 불변성 지켜주기위해 filter 함수 사용
     */
    setUsers(users.filter(user => user.id !== id))
  }
  const onToggle = (id) => {
    setUsers(users.map(user => user.id === id ? {...user, active: !user.active} : user))
  }

  return (
    <Wrapper>
      <CreateUsers 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <PrintList user={users} onRemove={onRemove} onToggle={onToggle} />
    </Wrapper>
  );
}

export default App;
