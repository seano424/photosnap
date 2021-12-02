import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'

function Button({ primary, text }) {
  return (
    <Wrapper>
      {text}
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
        <g fill="none" fill-rule="evenodd" stroke={primary ? 'white' : 'black'}>
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </Wrapper>
  )
}

export default Button

const Wrapper = tw.button`
  flex 
  items-center
  gap-4
`
