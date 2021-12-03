import { useContext } from 'react'
import { Switch } from '@headlessui/react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { SwitchContext } from '../context/SwitchContext'

export default function Toggle() {
  const [toggled, setToggled] = useContext(SwitchContext)

  return (
    <Wrapper>
      <MonthlyText monthly={!toggled}>Monthly</MonthlyText>
      <CustomSwitch
        checked={toggled}
        onChange={() => setToggled(!toggled)}
        enabled={toggled}
      >
        <Circle aria-hidden="true" enabled={toggled} />
      </CustomSwitch>
      <YearlyText yearly={toggled}>Yearly</YearlyText>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  pt-16 
  pb-4 
  flex 
  justify-center
  items-center
  space-x-8
`

const MonthlyText = tw.div`
  ${(p) => (p.monthly ? 'text-black opacity-100' : 'text-black opacity-40')}
  font-bold
  transition
  duration-200
  ease-in-out
`

const YearlyText = tw.div`
  font-bold  
  transition
  duration-200
  ease-in-out
  ${(p) => (p.yearly ? 'text-black opacity-100' : 'text-black opacity-40')}
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
