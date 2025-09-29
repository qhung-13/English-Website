import "../assets/styles/Vocabulary.css";

import { useState, useRef } from "react";
import { vocabulary as initialVocabulary} from "../assets/data/VocabularyData";

const Vocabulary = () => {
    const originalVocabulary = useRef(initialVocabulary);
    const [flipped, setFlipped] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [remembered, setRemembered] = useState<number[]>([]);
    const [forgotten, setForgotten] = useState<number[]>([]);
    const [round, setRound] = useState(1);
    const [wordList, setWordList] = useState(originalVocabulary.current);

    const currentWord = wordList[currentIndex];

    const nextWord = (forgottenList = forgotten) => {
        setFlipped(false);
        if (currentIndex + 1 < wordList.length) {
        setCurrentIndex((i) => i + 1);
        } else {
        if (forgottenList.length > 0) {
            const newList = originalVocabulary.current.filter((w) =>
            forgottenList.includes(w.id)
            );
            resetForNextRound(newList);
        } else {
            alert("🎉 Congratulations!");
        }
        }
    };

    const resetForNextRound = (newList: typeof initialVocabulary) => {
        setWordList(newList);
        setCurrentIndex(0);
        setRemembered([]);
        setForgotten([]);
        setRound((r) => r + 1);
    };

    const handleRemember = () => {
        setRemembered((prev) => [...prev, currentWord.id]);
        nextWord();
    };

    const handleForgotten = () => {
        const updated = [...forgotten, currentWord.id];
        setForgotten(updated);
        nextWord(updated);
    };


    return (
        <section className="vocabulary section">
            <div className="vocabulary__container container">
                <div className="flashcard__container">
                    <div 
                        className= {`card ${flipped ? "flipped" : ""}`}
                        onClick={() => setFlipped(!flipped)}
                    >
                        <div className="front">{currentWord.word}</div>
                        <div className="back">{currentWord.mean}</div>
                    </div>
                    
                    <div className="controls">
                        <button className="button_voca" onClick={handleForgotten}>
                            <i className="ri-close-fill"></i>
                        </button>
                        <p className="number_of_word">{currentIndex + 1}/{wordList.length}</p>
                        <button className="button_voca" onClick={handleRemember}>
                            <i className="ri-check-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Vocabulary;