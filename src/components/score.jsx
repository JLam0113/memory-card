function Score({ score, bestScore }) {
    return <>
        <div className="score">
            Current Score: {score}
            <br></br>
            Best Score: {bestScore}
        </div>
    </>
}

export default Score