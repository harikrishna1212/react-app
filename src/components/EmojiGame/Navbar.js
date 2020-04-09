import React from "react";
import {EmojiGameNavbar} from "./Emojicss.js";
import {ScoreSection} from "./Emojicss.js";
import {EmojiGame} from "./Emojicss.js";
import {Score} from "./Emojicss.js";
import {TopScore} from "./Emojicss.js";
import {Button} from "./Emojicss.js"
class Navbar extends React.Component{
    render(){
        const {score,topScore}=this.props;
        return(
            <EmojiGameNavbar>
                <div>
            <EmojiGame>Emoji Game</EmojiGame>
            </div>
            <ScoreSection>
        <Score>Score:{score}</Score>
        <TopScore>TopScore:{topScore}</TopScore>
        <Button>DARK-THEME</Button>
        </ScoreSection>
            </EmojiGameNavbar>
        )
    }
    
}
export default Navbar