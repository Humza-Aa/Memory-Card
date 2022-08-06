import "../styles/Header.css"

function Header(props) {
    return(
        <div className="header">
            <h1>
                Planet Memory
            </h1>
            <div className="scoreDiv">
                <h4>Current Score: {props.currentScore}</h4>
                <h4>Best Score: {props.bestScore}</h4>
            </div>
        </div>
    )
}

export default Header;