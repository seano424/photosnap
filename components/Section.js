import tw from 'tailwind-styled-components/dist/tailwind'
import Image from 'next/image'
import Button from './Button'
import { homeContent } from '../lib/homeContent'

function Section() {
  return (
    <Container>
      {homeContent &&
        homeContent.map((h, idx) => (
          <Wrapper key={idx}>
            <ImageWrapper>
              <Image
                className="object-cover object-center"
                src={`/assets/home/desktop/${h.image}`}
                layout="fill"
              />
            </ImageWrapper>
            <ContentWrapper primary={idx === 0} swapped={idx % 2 !== 0}>
              {idx === 0 && <GradientBar />}
              <Title>{h.title}</Title>
              <Description primary={idx === 0}>{h.description}</Description>
              <Button
                primary={idx === 0}
                text={idx === 0 ? 'Get an invite' : 'View the stories'}
              />
            </ContentWrapper>
          </Wrapper>
        ))}
    </Container>
  )
}

export default Section

const Container = tw.div`
  mt-20
`
const Wrapper = tw.div`
  relative
  grid
  sm:grid-cols-5
  xl:grid-cols-12
  sm:h-full
  xl:h-[540px]
`

const ImageWrapper = tw.div`
  col-span-3
  xl:col-span-7
  relative
  min-h-full
  h-[300px]
  sm:h-full
  w-full
  `

const ContentWrapper = tw.div`
  col-span-2
  xl:col-span-5
  flex 
  flex-col 
  h-full 
  w-full  
  px-10
  py-20
  sm:py-10
  xl:justify-center
  xl:py-0
  xl:p-40
  space-y-4
  relative
${(p) => (p.swapped ? '' : 'sm:order-first')}
  ${(p) => (p.primary ? 'bg-black text-white' : 'bg-white text-black')}
  `

const Title = tw.h1`
  text-2xl
  font-bold
  tracking-wider
  uppercase
  `
const Description = tw.p`
  text-opacity-70
  leading-relaxed
  text-sm
  ${(p) => (p.primary ? 'text-grey' : 'text-black')}
  xl:w-80
`

const GradientBar = tw.div` 
  absolute 
  sm:w-1
  left-10 
  right-56
  top-0 
  sm:h-auto
  h-2
  sm:left-0 
  sm:top-20 
  bottom-20 
  bg-gradient-to-t from-blue via-pink to-orange
`
