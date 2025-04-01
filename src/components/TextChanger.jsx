import { useState } from 'react';


function TextChanger () {
    
    const [text, setText] = useState("");    // 1️⃣ Stan początkowy to pusty string
    const handleSearch = (saveInput) => {
        saveInput.preventDefault(); // 2️⃣ Zapobiega przeładowaniu strony
        alert(text); // 3️⃣ Wyświetla wpisany tekst
        
    } 
    
    return (
        <div>
            <form onSubmit={handleSearch} >
                <input 
                type="text" 
                placeholder="Enter Text"
                value={text}
                onChange={(saveInput) => setText(saveInput.target.value)} // 4️⃣ Aktualizuje stan
                />
                <button type="submit">Save Text</button>
            </form>
            <h2>Entered text: {text}</h2> {/* 5️⃣ Wyświetla aktualny stan */}
      <button onClick={() => setText("")}>Reset</button> {/* 6️⃣ Reset tekstu */}   
        </div>
    )

}



export default TextChanger;