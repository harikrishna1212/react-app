import React from "react";
import {AllEmojisSection} from "./Emojicss.js";
import {ImageName} from "./Emojicss.js";
import {EmojiData} from "./Emojicss.js"

class EmojiCard extends React.Component{
onEmojiClick=(event)=>{
    const {emoji}=this.props;
    const SelectedImage=emoji.find(({id})=>id === parseInt(event.target.id))
    this.props.onEmojiClick(SelectedImage)
}
renderEmojiList=(emoji)=>{
const allImages=emoji.map(eachEmoji=>{
    return <EmojiData key={eachEmoji.id} id={eachEmoji.id}  onClick={this.onEmojiClick} >
        <img  src={eachEmoji.image} id={eachEmoji.id} alt={eachEmoji.image} />
<ImageName id={eachEmoji.id}>{eachEmoji.name}</ImageName>
    </EmojiData>
})
return allImages;
}
render(){
    const {emoji}=this.props;
    return(
        <AllEmojisSection>
           {this.renderEmojiList(emoji)}
    </AllEmojisSection>
    );

}

}
export default EmojiCard