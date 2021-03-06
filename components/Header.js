import { useState, useRef } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import tw from 'tailwind-styled-components/dist/tailwind'
import useOutsideClick from '../hooks/useOutsideClick'
import Logo from './Logo'
import { links } from '../lib/links'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef()

  useOutsideClick(ref, () => {
    setOpen(false)
  })

  return (
    <div ref={ref}>
      {/* Main Navigation Items */}
      <NavigationWrapper>
        <Logo />
        <NavigationItems>
          {links.map(({ link, title }) => (
            <Link key={link} href={`/${link}`}>
              <Anchor>{title}</Anchor>
            </Link>
          ))}
        </NavigationItems>
        <NavigationButton>Get an Invite</NavigationButton>
        <HamburgerWrapper>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </HamburgerWrapper>
      </NavigationWrapper>

      {/* Small Size Drawer */}
      <SideBarWrapper open={isOpen}>
        <ItemsWrapper>
          <Items>
            <Link href="/stories">
              <a>Stories</a>
            </Link>
            <Link href="/features">
              <a>Features</a>
            </Link>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </Items>
          <Button>Get an Invite</Button>
        </ItemsWrapper>
      </SideBarWrapper>
    </div>
  )
}

const NavigationWrapper = tw.div`
  z-50
  flex
  w-full
  h-20
  justify-between
  items-center
  fixed
  top-0
  bg-white
  px-10
  text-2xl
  sm:text-xl
  xl:px-20
`

const HamburgerWrapper = tw.div`
  md:hidden
`
const SideBarWrapper = tw.div`
md:hidden
fixed
top-20  
left-0 
right-0 
bg-white 
h-80 
z-40
transform 
${(p) => (p.open ? 'translate-y-0' : '-translate-y-96')}
transition-transform
duration-300
ease-in-out
flex 
flex-col
justify-center
items-center
`

const ItemsWrapper = tw.div`
  w-9/12
  flex 
  flex-col 
  justify-center 
  items-center 
  space-y-4 pb-4
`
const Items = tw.div`
  flex
  flex-col
  space-y-4
  items-center 
  justify-center  
  border-b
  border-grey
  w-full
  pb-4
  text-xl
  uppercase
  tracking-widest
  `
const NavigationItems = tw(Items)`
  sm:flex-row 
  sm:flex-1
  sm:border-none
  sm:pb-0
  sm:text-sm
  lg:text-base
  sm:space-y-0
  sm:space-x-2
  md:space-x-10
  hidden
  md:inline-flex
`
const Button = tw.button`
  bg-black
  text-white 
  uppercase
  w-full
  py-4
  sm:text-base
  sm:min-w-max
  sm:w-auto
  sm:px-8
  sm:py-3
`

const NavigationButton = tw(Button)`
  hidden
  md:inline-flex
`

const Anchor = tw.a`
  capitalize
  cursor-pointer
  transform
  motion-safe:hover:scale-110
  transition-transform
  duration-300
  ease-out
`
