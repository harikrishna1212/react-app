import styled from '@emotion/styled';
import tw from "tailwind.macro";

const ProductCartMainDiv = styled.div`${tw`top-0 right-0 fixed z-10 `}`
const ProductCartHiddenDiv = styled.div`${tw` bg-gray-600 border-solid border-4 border-gray-600 w-16 h-16 `}`


const ProductCartShowDiv = styled.div`${tw` bg-gray-600 border-solid border-4  h-screen border-gray-600 `}
width:350px`


const ShowCartCloseButton =styled.button`${tw`h-10 p-3 text-white bg-gray-800 focus:outline-none active:outline-none`}`
export {ProductCartMainDiv,ProductCartHiddenDiv,ProductCartShowDiv,ShowCartCloseButton}