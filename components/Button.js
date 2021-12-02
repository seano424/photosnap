import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'

export default function Button({ primary, text, invitation }) {
  console.log()
  return (
    <Wrapper invitation={invitation}>
      <Text>{text}</Text>
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
        <g fill="none" fillRule="evenodd" stroke={primary ? 'white' : 'black'}>
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </Wrapper>
  )
}

const Wrapper = tw.button`
  flex 
  items-center
  gap-4
  min-w-max
  ${(p) => p.invitation && 'hover:underline'}
`
const Text = tw.p`
  uppercase
  min-w-max
  tracking-widest
  text-sm
`
