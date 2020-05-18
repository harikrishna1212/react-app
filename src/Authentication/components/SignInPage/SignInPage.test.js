import React from "react";
import { render, getByText } from "@testing-library/react";

import {SignInPage} from ".";


describe("SignInPage", () => {
  it("should render typed username", () => {
    const username = "test-user";
    const { getByPlaceholderText ,debug} = render(
      <SignInPage  username={username} onChangeUsername={() => {}} />
    );
    const usernameField = getByPlaceholderText("Username");
   // console.log(22,usernameField)
 
    expect(usernameField.value).toBe(username)
    debug()
    
  });
  it("should render typed password",()=>{
    const password = "user-password";
    const {getByPlaceholderText,debug} = render(
      <SignInPage password={password} onChangePassword={()=>{}} />
    );
    const passwordField = getByPlaceholderText("Password");

    expect(passwordField.value).toBe(password);
    debug()
  });
  it("should render given error message",()=>{
    const {getByText} = render(
      <SignInPage errorMessage = "Please enter Username" />
    )
    getByText(/Please enter Username/i);

  });
});