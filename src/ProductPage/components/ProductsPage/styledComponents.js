import styled from '@emotion/styled';
import tw from "tailwind.macro";

const ProductPageMainDiv  = styled.div`${tw``}`
const SignOutButtonAndProductCart = styled.div`${tw` border-solid border rounded border-red-600 flex `}`
const SignOutButton = styled.button`${tw`border-solid border rounded border-gray-600 p-1`}`

const SizeFilterAndProductsDiv = styled.div`${tw`flex mt-12 mr-12`}`;

const HeaderAndProducts = styled.div`${tw`flex flex-col flex-1`}`


export {ProductPageMainDiv,SignOutButton,SizeFilterAndProductsDiv,HeaderAndProducts,SignOutButtonAndProductCart}
