import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class LoginForm extends React.Component{
    @observable userName='';
    @observable password="";
    @action
    onChangeUserName=(event)=>{
        this.userName=event.target.value;
        console.log(this.userName);

    }
    @action
    OnChangePassword=(event)=>{
       
        this.password= event.target.value;
        console.log(this.password);

    }
    @action
    onLoginPage=()=>{
       
        if(this.userName==="hari"&&this.password==="1212"){
            // console.log(this.props.forFalse)
            // const{history} = this.props;
            // console.log(history)
            // history.replace('grid-game')
            const{forFalse}= this.props;
            forFalse()
        
        
           
        }
    }

    render(){
        return(
        <div>
        <input type="text"  value ={this.userName}onChange={this.onChangeUserName}/>
        <input type="password"  value={this.password} onChange={this.OnChangePassword} />
        <button onClick={this.onLoginPage}> Login</button>
        </div>
        );
    }

}
export default LoginForm