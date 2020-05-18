import styled from '@emotion/styled';
import tw from "tailwind.macro";
const Image = styled.img`${tw`w-12 h-14 `}`;
const CartItemTitleAndPrintStyleAndQuantity = styled.div`${tw``}`
const CartProductPrice = styled.div`${tw`flex`}`;

const RemoveProductFromCartButtonAndCartPrice  = styled.div`${tw``}`;
const ButtonForRemoveItemInCart = styled.button`${tw`ml-12`}`
const CartItemMainDiv = styled.div`${tw`flex`}`;


export{Image,ButtonForRemoveItemInCart,CartItemTitleAndPrintStyleAndQuantity,CartItemMainDiv,CartProductPrice,RemoveProductFromCartButtonAndCartPrice}