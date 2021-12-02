import React, { useState } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Image from 'next/image'
import Button from './Button'

export default function GridItem({ item }) {
  const [transition, setTransition] = useState(false)

  return (
    <ImageWrapper
      onMouseOver={() => setTransition(true)}
      onMouseLeave={() => setTransition(false)}
    >
      <Image
        src={`${item.image}`}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
      <ContentWrapper>
        <Content>
          <h1 className="">{item.title && item.title}</h1>
          <p>{item.author && `by ${item.author}`}</p>
        </Content>
        <Button text="Read story" primary={true} />
      </ContentWrapper>
      <GradientBar show={transition} />
    </ImageWrapper>
  )
}

const ImageWrapper = tw.div`
  relative 
  w-full
  min-h-full
  h-[400px]
  cursor-pointer
  transition
  hover:-translate-y-3
  duration-200
  ease-in-out
`

const ContentWrapper = tw.div`
  absolute
  flex
  flex-col
  bottom-16
  px-10
  w-full
  space-y-3
`

const Content = tw.div`
  border-b
  pb-4
  border-grey
`

const GradientBar = tw.div`
 ${(p) => (p.show ? 'opacity-100' : 'opacity-0')}
  transition
  duration-200
  hover:-translate-y-9
  ease-in-out
  absolute 
  h-2
  left-0
  right-0
  bottom-0 
  bg-gradient-to-b from-blue via-pink to-orange
`
