import styled from '@emotion/styled';
import tw from "tailwind.macro";

const TotalDiv = styled.div`${tw`flex justify-center items-center h-screen bg-gray-200`}`
const SignInMainDiv = styled.div`${tw` flex flex-col p-12 bg-white`}`
const SignInHeading = styled.h2`${tw`font-bold`}`
const Username = styled.input`${tw` h-10 border rounded border-gray-400 focus:outline-none pl-2 w-48 mt-4`}`
const Password = styled.input`${tw` h-10 border rounded border-gray-400 focus:outline-none mt-3 pl-2 w-48`}`
const SignInButton = styled.button `${tw`bg-gray-900 rounded h-10 text-white mt-3 w-48`}`
const ErrorMessage = styled.span`${tw`text-red-600`}`

export {SignInMainDiv,Username,Password,SignInButton,SignInHeading,TotalDiv,ErrorMessage}