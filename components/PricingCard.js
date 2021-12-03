import tw from 'tailwind-styled-components/dist/tailwind'
import { useContext } from 'react'
import { SwitchContext } from '../context/SwitchContext'

export default function PricingCard({ content, idx }) {
  const middle = idx === 1
  const { type, description, monthlyPrice, yearlyPrice } = content

  const [toggled] = useContext(SwitchContext)

  return (
    <Wrapper middle={middle}>
      {middle && <GradientBar />}
      <TopLeft>
        <Title>{type}</Title>
        <Subtitle middle={middle}>{description}</Subtitle>
        <div className="hidden sm:inline-flex xl:hidden">
          <Button middle={middle}>Pick Plan</Button>
        </div>
      </TopLeft>
      <CenterRight>
        <Price>${toggled ? yearlyPrice : monthlyPrice}</Price>
        <SubPrice>per month</SubPrice>
      </CenterRight>
      <BottomHidden>
        <Button middle={middle}>Pick Plan</Button>
      </BottomHidden>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  relative
  flex
  flex-col
  sm:flex-row
  xl:flex-col
  text-center
  sm:text-left
  xl:text-center
  xl:justify-center
  xl:items-center 
  xl:w-96
  xl:space-y-6
  sm:h-full
  ${(p) =>
    p.middle ? 'bg-black text-white xl:h-[450px]' : 'bg-grey bg-opacity-30'}
  shadow-sm
  h-96
  xl:h-[400px]
  mx-10
  xl:mx-0
  rounded-sm
  px-10
  py-10
  my-10
  justify-between
`

const GradientBar = tw.div`
  absolute
  top-0
  w-full 
  h-2
  left-0
  sm:bottom-0
  sm:h-full
  sm:w-1
  xl:w-full
  xl:h-2
  bg-gradient-to-b from-blue via-pink to-orange
`

const TopLeft = tw.div`
  sm:flex
  sm:flex-col
  sm:justify-between
  sm:space-y-4
  sm:pr-40
  xl:pr-0
  
`
const CenterRight = tw.div``
const BottomHidden = tw.div`
  sm:hidden
  xl:inline-flex
`

const Title = tw.h3`
  text-xl
  font-semibold
  tracking-widest
  pb-2
  sm:pb-0
`

const Subtitle = tw.h3`
  text-sm
  ${(p) =>
    p.middle ? 'bg-black text-white opacity-60' : 'text-black text-opacity-60'}
  px-8
  sm:px-0
  sm:pb-2
`

const Price = tw(Title)` 
  text-3xl
  pb-1
  sm:pb-2
`

const SubPrice = tw(Subtitle)``

const Button = tw.button`
  ${(p) => (p.middle ? 'bg-white text-black' : 'bg-black text-white')}
  px-10
  py-2
  w-full
  rounded-sm
  uppercase
  tracking-widest
  xl:px-20
`
