import React from "react";
import InputElement from "./InputElement"
import { text} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
    component : InputElement,
    title : "Common/CommonInputElement"
}

export const defaultInputTag = () => <InputElement/>

export const withTypeAndPlaceholderAndValueInputTag = () =>(
    <InputElement
    type ={text("EnterInputType","text")}
    placeholder = "Username"
    value ="" 
    onChange = {action("onChange")}
    />
)
