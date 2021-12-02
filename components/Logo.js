import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'

function Logo() {
  return (
    <Container>
      <img src="/favicon.svg" alt="Logo" />
      <h1>Photosnap</h1>
    </Container>
  )
}

export default Logo

const Container = tw.div`
  flex
  items-center
  space-x-2
  uppercase
  font-black
  text-2xl
`
