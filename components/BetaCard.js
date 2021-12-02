import React from 'react'
import Image from 'next/image'
import Button from './Button'
import tw from 'tailwind-styled-components/dist/tailwind'

function BetaCard() {
  return (
    <Container>
      <Image src={`/assets/shared/desktop/bg-beta.jpg`} layout="fill" />
      <Wrapper>
        <Title>We’re in beta. Get your invite today!</Title>
        <Button invitation text="Get an invite" primary />
      </Wrapper>
    </Container>
  )
}

export default BetaCard

const Container = tw.div`
  relative 
  h-56 
  w-full
`

const Wrapper = tw.div`
  absolute 
  px-8 
  gap-3 
  flex 
  justify-between 
  items-center 
  h-full 
  text-white 
  w-full
`

const Title = tw.h1`
  text-2xl 
  uppercase 
  font-semibold 
  tracking-widest 
  pr-4 
  md:max-w-sm
`
