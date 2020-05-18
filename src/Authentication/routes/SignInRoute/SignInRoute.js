import React from "react";
import { inject, observer } from "mobx-react";
import { observable } from "mobx";
import { Redirect } from "react-router-dom";
import {getAccessToken} from '../../utils/StorageUtils';
import {SignInPage} from "../../components/SignInPage";
@inject('authStore')
@observer
class SignInRoute extends React.Component{
    @observable username='';
    @observable password='';
    @observable errorMessage='';


    
    // componentDidMount(){
    //     this.doSignInCall()
    // }

    // doSignInCall = ()=>{
       
    //     const {userSignIn} = this.props.authStore; 
    //     userSignIn();

    // }
    
    onChangeUsername=(event)=>{
      
        this.username = event.target.value;

    }
    
    onChangePassword=(event)=>{
      
        this.password = event.target.value;

    }
    onClickSignIn= async() =>{
        if (this.username === "" || this.username === undefined) {
            this.errorMessage = "Please enter username";
        }
        else if (this.password === "" || this.password === undefined) {
            this.errorMessage = "Please enter password";
            
         }
        
        else{
            this.errorMessage='';
              const {userSignIn} = this.props.authStore; 
              await userSignIn()
            
            if(getAccessToken()){
             
                const {history} = this.props;
                history.replace('/products-page')
                 //<Redirect to = {{pathname: "/products-page"}}/>
                // <Redirect to ='/products-page'/>
            }
        

         }

    }
    render(){
        const{authStore} = this.props;
     
        return(
        <SignInPage  errorMessage={this.errorMessage} username={this.username} password={this.password}
          onChangeUsername={this.onChangeUsername} onChangePassword={this.onChangePassword} 
          onClickSignIn={this.onClickSignIn} getUserSignInAPIStatus={authStore.getUserSignInAPIStatus}/>
    
        );

    }
}
export {SignInRoute}