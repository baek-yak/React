import { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈'},
        { id: 4, text: '바람'}
    ])
    
    const [inputText, setInputText] = useState('')
    // 새로운 항목을 추가할 때 사용할 id
    const [nextId, setNextId] = useState(5)

    const onChange = e => setInputText(e.target.value)
    const onClick = () => {
        const nextNames = names.concat({
            //nextId 값을 id로 설정
            id: nextId,
            text:inputText
        })
        // nextId 값에 1 더해즘
        setNextId(nextId + 1)
        // names 값 업데이트
        setNames(nextNames)
        // inputText 비움
        setInputText('')
    }
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id)
        setNames(nextNames)
    }

    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ))
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    )
};
  
export default IterationSample;