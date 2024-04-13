export default function Feedback({
    value: { good, neutral, bad },
    positiveFeedback,
    totalFeedback
}) {
    return (
        <>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>Total feedback: {totalFeedback}</p>
            <p>Positive: {positiveFeedback}%</p>
        </>
    );
}
