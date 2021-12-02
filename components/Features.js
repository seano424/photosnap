import tw from 'tailwind-styled-components/dist/tailwind'
import { features } from '../lib/features'

export default function Features({ limit }) {
  return (
    <Container>
      {features &&
        features.slice(0, limit).map(({ image, title, description }, idx) => (
          <Wrapper key={idx}>
            <Image src={image} />
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Wrapper>
        ))}
    </Container>
  )
}

const Container = tw.div`
  grid 
  xl:grid-cols-3
  md:grid-cols-2
  my-8
  xl:px-16
  `

const Wrapper = tw.div`
  flex
  flex-col
  gap-4
  p-20
  lg:p-10
  justify-center
  items-center
  text-center
  h-[250px]
`

const Image = tw.img`
  h-8
`
const Title = tw.h1`
  font-bold
  tracking-wider
  text-base
`

const Description = tw.p`
  font-thin
  text-sm 
  leading-relaxed 
`
