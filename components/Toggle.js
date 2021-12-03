import { useState } from 'react'
import { Switch } from '@headlessui/react'
import tw from 'tailwind-styled-components/dist/tailwind'

export default function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Wrapper>
      <CustomSwitch checked={enabled} onChange={setEnabled} enabled={enabled}>
        <Circle aria-hidden="true" enabled={enabled} />
      </CustomSwitch>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  pt-16 
  pb-4 
  flex 
  justify-center
`

const CustomSwitch = tw(Switch)`
  ${(p) => (p.enabled ? 'bg-black' : 'bg-grey pl-1')}
  relative 
  inline-flex 
  items-center 
  flex-shrink-0 
  h-[38px] 
  w-[74px]  
  rounded-full 
  cursor-pointer 
  transition-colors 
  ease-in-out 
  duration-200 
  focus:outline-none 
  focus-visible:ring-2  
  focus-visible:ring-white 
  focus-visible:ring-opacity-75
`

const Circle = tw.span`
${(p) => (p.enabled ? 'translate-x-9 bg-white' : 'translate-x-0 bg-black')}
  pointer-events-none 
  inline-block 
  h-[32px] 
  w-[32px] 
  rounded-full 
  shadow-lg 
  transform 
  ring-0 
  transition-all 
  ease-in-out 
  duration-200
`
