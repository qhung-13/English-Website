import React from "react";
import { Word } from "../../types/vocabulary";

interface WordRowProps {
    data: Word;
}

const WordRow: React.FC<WordRowProps> = ({ data })=> {
    const speakWord = () => {
        const utterance = new SpeechSynthesisUtterance(data.word);
        utterance.lang = "en-US";   // Ngôn ngữ
        utterance.pitch = 0.5;        // Độ cao giọng (0 - 2) 1 là mặc định
        utterance.rate = 0.8;         // Tốc độ đọc (0.1 - 10) 1 là bình thường
        utterance.volume = 1;       // Âm lượng (0 - 1)
        speechSynthesis.speak(utterance);
    }

    return (
        <tr>
            <td>{ data.word }</td>
            <td>{ data.mean }</td>
            <td className="col-action">
                <button>
                    <i className="ri-edit-fill"></i>
                </button>
                <button
                    onClick={speakWord}
                >
                    <i className="ri-volume-up-line"></i>
                </button>
            </td>
        </tr>
    );
};

export default WordRow;