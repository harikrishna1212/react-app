import React from "react";
class WinOrLose extends React.Component{
    render(){
        const {score,gameState} = this.props;
        //console.log("vachindi")
        return (
            <div>
                <h1>{score}</h1>
                <h1>You {gameState}</h1>
                <button onClick={this.props.onPlayAgainClick}>Play Again</button>
            </div>
        )
    }
}
export default WinOrLose