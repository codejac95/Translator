import React, {useState} from "react";

function TranslationInput ({language, onTranslate}) {
    const [text, setText] = useState ("");

    const handleInputChange = (e) => {
        setText(e.target.value);
    }

    const handleTranslate = () => {
        onTranslate(text,language);
    }
        return (
            <div>
                <input type="text" value={text} onChange={handleInputChange} />
                <button onClick={handleTranslate}>Översätt</button>
            </div>
        )
    
}

export default TranslationInput;