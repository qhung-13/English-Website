import "../assets/styles/Vocabulary.css";

import { useState } from "react";
import { vocabulary as initialVocabulary} from "../assets/data/VocabularyData";

const Vocabulary = () => {
    const [flipped, setFlipped] = useState(false);

    const [wordList, setWordList] = useState(initialVocabulary);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [remembered, setRemembered] = useState<number[]>([]);
    const [forgotten, setForgotten] = useState<number[]>([]);
    const [finished, setFinished] = useState(false);

    const currentWord = wordList[currentIndex];

    const handleRemember = () => {
        setRemembered([...remembered, currentWord.id]);
        nextWord();
    }

    const handleForgotten = () => {
        setForgotten([...forgotten, currentWord.id]);
        nextWord();
    }

    const nextWord = () => {
        if(currentIndex + 1 < wordList.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setFinished(true);
        }
    }

    const percent = wordList.length > 0 ? Number(((remembered.length / wordList.length) * 100).toFixed(0)) : 0;

    const handleRestart = () => {
        const restart = initialVocabulary;
        setWordList(restart);
        setFinished(false);
        setRemembered([]);
        setForgotten([]);
        setCurrentIndex(0);
        setFlipped(false)
    }

    const handleStillLearning = () => {
        const stillLearning = initialVocabulary.filter(word => forgotten.includes(word.id));
        setWordList(stillLearning);
        setRemembered([]);
        setForgotten([]);
        setCurrentIndex(0);
        setFinished(false);
        setFlipped(false);
    }

    return (
        <section className="vocabulary section">
            <div className="vocabulary__container container">
                {finished ?   
                    <div className="result-learn-vocabulary__container">
                        <h2>Wow, you know your stuff! You've sorted all the cards.</h2>
                        <div className="content-container">
                            <div className="left-content">
                                <h2>How your're doing</h2>
                                <div className="content">
                                    <div 
                                        className="percent"
                                        style={{"--percent": percent} as React.CSSProperties}
                                    >
                                        <p>
                                            {percent === 100 
                                                ? <i 
                                                    className="ri-check-fill"
                                                    style={{ color: "#57f350", fontSize: "65px", fontWeight: "700" }}
                                                ></i>
                                                : `${percent}%`
                                            }
                                        </p>


                                    </div>
                                    <div className="description">
                                        <div className="box-content box-content-remember">
                                            <p>Know</p>
                                            <p>{remembered.length}</p>
                                        </div>
                                        <div className="box-content box-content-forget">
                                            <p>Still leaning</p>
                                            <p>{forgotten.length}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-content">
                                <h2>Next steps</h2>
                                <div className="action-btn">
                                    <button 
                                        className="btn-action btn-action-restart"
                                        onClick={handleRestart}
                                    >Restart Flashcards</button>
                                    {forgotten.length > 0 && (
                                        <button 
                                            className="btn-action btn-action-learn"
                                            onClick={handleStillLearning}
                                        >
                                            Review Forgotten Words
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div> 
                    : 
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
                }
            </div>
        </section>
    );
}

export default Vocabulary;