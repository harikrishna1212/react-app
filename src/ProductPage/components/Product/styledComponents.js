import styled from '@emotion/styled';
import tw from "tailwind.macro";

const ProductDiv = styled.div`${tw`flex flex-col items-center border border-solid border-transparent p-2 w-56 m-2 relative`}`
 const FreeShipping = styled.p`${tw`absolute top-10 right-0 bg-black p-1 text-xs text-white`}`;
 const Image = styled.img`${tw`w-48 object-contain mb-2`}`;
 const ProductTitle = styled.p`${tw`h-45px text-center`}`;
 const SmallLine = styled.div`${tw`w-4 border-t-2 rounded border-yellow-600 mt-2 mb-4`}`
 const Currency = styled.div`${tw`flex`}`;
  const CurrencyFormat =  styled.p`${tw`text-xs mr-1`}`
 const ProductCost = styled.p`${tw`text-xl`}`
 const MoneyForSingleItem = styled.p`${tw`text-sm text-gray-700 mb-4 h-5`}`
 const AddToCartButton = styled.button`${tw`text-white bg-black text-center h-12 text-sm w-56 p-3 rounded`}`;

 export {FreeShipping,Image,Currency,AddToCartButton,ProductDiv,ProductTitle,SmallLine,
    MoneyForSingleItem,ProductCost,CurrencyFormat}