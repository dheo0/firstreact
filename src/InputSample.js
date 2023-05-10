import React, {useState, useRef} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })
    const {name, nickname} = inputs
    const nameInput = useRef()
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus();
    }
    return (
        <div>
            <input name="name" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name}  {nickname}</b>
            </div>
        </div>
    )
}

export default InputSample;