export default function AnswerBtn({
    children,
    onCorrectAnswer,
    correctAnswer,
}) {
    return (
        <button onClick={onCorrectAnswer} className={correctAnswer}>
            {children}
        </button>
    );
}
