import "../../assets/styles/Vocabulary.css";

type AddWorkProps = {
    onClose: () => void;
}

const AddWork: React.FC<AddWorkProps> = ({ onClose }) => {
    return (
        <section>
            <div className="add-work-container">
                <h2 className="title-add-word">Add New Word</h2>
                <input 
                    className="input-new-word"
                    type="text" 
                    placeholder="Enter word"
                />
                <div className="content-of-mean"></div>
                <div className="add-word-action">
                    <button 
                        className="action-cancel"
                        type="submit"
                        onClick={onClose}
                    >Cancel</button>
                    <button 
                        type="submit"
                        className="action-add"
                    >Add</button>
                </div>
            </div>
        </section>
    );
}

export default AddWork;