import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const EmojiGameNavbar = styled('div')`
${tw` flex justify-between flex-row m-2 shadow-lg
flex
`};
`
const EmojiGame = styled('div')`
${tw` text-3xl p-3
flex
`};
`

const ScoreSection = styled('h1')`
${tw`
flex justify-between p-4 
`};
`
const Score = styled('div')`
${tw`
p-2 font-bold
`};
`
const TopScore = styled('div')`
${tw`
p-2 font-bold
`};
`
const Button = styled('button')`
${tw`
p-2 border-solid border border-gray-600
`};
`



const AllEmojisSection = styled('div')`
${tw`
flex flex-wrap justify-around bg-indigo-100
`};
`
const EmojiData= styled('div')`
${tw`
w-64 p-5 mx-4 my-10 flex flex-col items-center shadow-custom bg-white
`};
`


const ImageName = styled.div`
  color: blue;
`

export { EmojiGameNavbar,EmojiGame,ScoreSection,Score,TopScore,Button,AllEmojisSection,ImageName,EmojiData}