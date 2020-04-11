import React from "react";
import Navbar from "./Navbar.js";
import EmojiCard from "./EmojiCard.js";
import WinOrLose from "./WinOrLose.js"
class EmojiGame extends React.Component{
    state={
        score:0,
        topScore:0,
        gameState:"playing" , // Win ,Lose
        emoji:[
            
{id:1,isClicked:false,name:"Exploding Head",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png"},
{id:2,isClicked:false,name:"Grinning Face With Sweat",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png"},
{id:3,isClicked:false,name:"Smiling Face With Heart-Eyes",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png"},
{id:4,isClicked:false,name:"Smirking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png"},
{id:5,isClicked:false,name:"Thinking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png"},
{id:6,isClicked:false,name:"Winking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png"},
{id:7,isClicked:false,name:"Grinning Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png"},
{id:8,isClicked:false,name:"Crying Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png"},
{id:9,isClicked:false,name:"Astonished Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png"},
{id:10,isClicked:false,name:"Face With Tears of Joy",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png"},
{id:11,isClicked:false,name:"Star-Struck",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png"},
{id:12,isClicked:false,name:"Winking Face With Tounge",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png"}
            ],
    }
    onEmojiClick=(clickedImage)=>{
        // console.log(clickedImage)
        const {score}=this.state;
        if(clickedImage.isClicked===false && score <11){
            clickedImage.isClicked=true;
           this.shuffleEmojis(clickedImage); 
           this.incrementScore()
        }
         else if(score===11){
            this.setState({ 
                 gameState:"Win" ,
                 score:12
             })
         }
        else{
            this.setState({
                gameState:"Lose"

                })
            

            // this.onPlayAgainClick()
        }

    }
    shuffleEmojis=()=>{
        function shuffle(dummyArray) {
            let currentIndex = dummyArray.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              temporaryValue = dummyArray[currentIndex];
              dummyArray[currentIndex] = dummyArray[randomIndex];
              dummyArray[randomIndex] = temporaryValue;
            }
            return dummyArray;
          }
          let dummyEmojis=this.state.emoji;
          shuffle(dummyEmojis);
          this.setState({
              emojis:dummyEmojis
          });
    }
    incrementScore=()=>{
        this.setState({
        score:this.state.score+1,
        })

    }
    onPlayAgainClick=()=>{
        this.setTopScore()
        this.resetGame()

    }
    resetGame=()=>{
        const {emoji}=this.state
        let changingisClickedState=emoji.map(item=>{
             (item.isClicked=false)
             return item
        });
        this.setState({
            score:0,
            emoji:changingisClickedState,
            gameState:"playing"
        })

        // for(let i=0;i<12;i++){
        //    this.setState({
        //        emoji:this.state.emoji[i].isClicked=false
        //    })
    }

    setTopScore=()=>{
        this.setState({
            topScore:this.state.score
        })

    }
    onChangeTheme=()=>{
      

    }
    
    render(){
        const {score,topScore,emoji,gameState}=this.state

return(
    <div>
<Navbar score={score} topScore={topScore}/>

{(gameState==="playing")? <EmojiCard emoji={emoji} onEmojiClick={this.onEmojiClick}/>:
    <WinOrLose gameState={gameState} score={score} onPlayAgainClick={this.onPlayAgainClick}/>}


</div>
);

    }
}

export default EmojiGame;