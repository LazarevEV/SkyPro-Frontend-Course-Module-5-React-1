import React, { useState, useEffect, useRef } from 'react'

export default function SelectTaskComponent() {
    const [selectedOption, setSelectedOption] = useState('I');
    const prevInputState = useRef('I');

    function onSelectChange(e) {
        setSelectedOption(e.target.value)
    }

    useEffect(() => {
        document.getElementById(prevInputState.current).style.visibility = 'hidden';
        document.getElementById(selectedOption).style.visibility = 'visible';
        prevInputState.current = selectedOption;
    });

    return (
        <div className="cred-wrapper big">
            <select className="paragraph-selector" value={selectedOption} onChange={onSelectChange}>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
            </select>
            <div className="paragraph-wrapper">
                <div className="cred-wrapper paragraph" id="I">
                    ТЕКСТ АБЗАЦА №1
                </div>
                <div className="cred-wrapper paragraph" id="II">
                    ТЕКСТ АБЗАЦА №2
                </div>
                <div className="cred-wrapper paragraph" id="III">
                    ТЕКСТ АБЗАЦА №3
                </div>
            </div>
        </div>
    )
}