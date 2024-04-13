export default function Options({ onUpdate, resetFeedback, totalFeedback }) {
    return (
        <>
            <button onClick={() => onUpdate("good")}>Good</button>
            <button onClick={() => onUpdate("neutral")}>Neutral</button>
            <button onClick={() => onUpdate("bad")}>Bad</button>
            {totalFeedback > 0 && (
                <button onClick={resetFeedback}>Reset</button>
            )}
        </>
    );
}
