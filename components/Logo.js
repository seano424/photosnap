import { useRouter } from 'next/dist/client/router'
import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'

function Logo() {
  const router = useRouter()
  return (
    <Container onClick={() => router.push('/')}>
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
  cursor-pointer
`
