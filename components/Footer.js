import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Logo from './Logo'
import { socialMedia } from '../lib/socialMedia'
import { links } from '../lib/links'
import Button from './Button'

export default function Footer() {
  return (
    <Container>
      <TopWrapper>
        <Logo />
        <SocialMediaIcons1>
          {socialMedia &&
            socialMedia.map((sm, idx) => (
              <img src={sm.icon} key={idx} alt={sm} />
            ))}
        </SocialMediaIcons1>
        <PageLinks1>
          {links && links.map(({ link }, idx) => <Link href="#">{link}</Link>)}
        </PageLinks1>
        <ButtonWrapper1>
          <Button primary text="Get an invite" />
        </ButtonWrapper1>
      </TopWrapper>
      <PageLinks2>
        {links && links.map(({ link }, idx) => <Link href="#">{link}</Link>)}
      </PageLinks2>
      <ButtonWrapper2>
        <Button primary text="Get an invite" />
      </ButtonWrapper2>
      <BottomWrapper>
        <SocialMediaIcons2>
          {socialMedia &&
            socialMedia.map((sm, idx) => (
              <img src={sm.icon} key={idx} alt={sm} />
            ))}
        </SocialMediaIcons2>
        <Copyright>Copyright 2021. All Rights Reserved.</Copyright>
      </BottomWrapper>
    </Container>
  )
}

const Container = tw.div`
  flex 
  flex-col 
  w-full
  bg-black
  text-white 
  justify-center
  items-center
  gap-4
  px-10
  py-16 
`

const TopWrapper = tw.div`
  items-center
  gap-4
  flex
  flex-col
  sm:flex-row
  sm:justify-between
  sm:w-full
  relative
  
`

const BottomWrapper = tw.div`
  sm:w-full
  sm:flex
  sm:justify-between
  sm:items-center
  
`

const ButtonWrapper1 = tw.div`
  hidden 
  sm:inline-flex
`
const ButtonWrapper2 = tw.div`
  sm:hidden
`

const SocialMediaIcons1 = tw.div`
  flex
  justify-center
  space-x-6
  mt-3
  mb-6
  sm:hidden
`
const SocialMediaIcons2 = tw.div`
  hidden 
  sm:inline-flex
  space-x-6
  mt-12
  mb-6
`

const PageLinks1 = tw.div`
  hidden
  xl:inline-flex
  flex-col
  items-start
  absolute
  -top-2
  space-y-4
  left-72
`
const PageLinks2 = tw.div`
  w-full
  flex
  xl:hidden
  flex-col
  sm:flex-row
  sm:items-center
  space-y-5
  sm:space-y-0
  sm:space-x-10
  justify-center
  sm:justify-start
  mb-20
  sm:mb-10
`

const Link = tw.a`
  uppercase
  text-center
  tracking-widest
  text-sm
`

const Copyright = tw.p`
  text-grey
  text-opacity-50
  my-4
`
