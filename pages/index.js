import React, {useState} from "react";

const inputElement = () => {

    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] =useState([]);

    return<div>
        <input
        onChange={event => {
            setInputText(event.target.value);
            setHistoryList([...historyList, event.target.value]);
        }}
        placeholder="Enter Some Text"/><br/>
        {inputText}
        <hr/><br/>
        <ul>
            {historyList.map(item => <div>{item}</div>)}
        </ul>

    </div>
};

export default inputElement;