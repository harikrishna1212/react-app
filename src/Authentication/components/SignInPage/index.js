import React from "react";

import {SignInMainDiv,Username,Password,SignInButton,SignInHeading,TotalDiv,ErrorMessage} from '../SignInPage/styledComponents'

class SignInPage extends React.Component{
  userNameRef = React.createRef();
  componentDidMount(){
    this.userNameRef.current.focus();
  }

    render(){
        const{getUserSignInAPIStatus,errorMessage,username,password,onChangeUsername,onChangePassword,onClickSignIn} = this.props;

        return (
            <TotalDiv>
            <SignInMainDiv>
                <SignInHeading>Sign in</SignInHeading>
                <Username ref = {this.userNameRef} type ="text" placeholder="Username" value={username} onChange={onChangeUsername}/>
                <Password type="password"  placeholder="Password" value={password} onChange={onChangePassword}/>
                <SignInButton onClick={onClickSignIn}>{getUserSignInAPIStatus===100 ? `Signing In` : `Sign In`}</SignInButton>
                {errorMessage !== "" && errorMessage !== undefined ? (
            <ErrorMessage>
              {errorMessage}
            </ErrorMessage>
          ) : null}
            </SignInMainDiv>
            </TotalDiv>
        )
    }
}


export  {SignInPage}