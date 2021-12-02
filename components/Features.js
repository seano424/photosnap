import tw from 'tailwind-styled-components/dist/tailwind'
import { features } from '../lib/features'
function Features({ limit }) {
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

export default Features

const Container = tw.div`
  md:flex
  md:justify-center
  `
const Image = tw.img`
  h-8
`
const Title = tw.h1`
  font-bold
  tracking-wider
  text-sm  
`

const Description = tw.p`
  font-thin
  text-xs  
  max-w-sm
`

const Wrapper = tw.div`
  flex
  flex-col
  space-y-2
  p-5
  my-8
  gap-4
  justify-center
  items-center
  text-center
  h-[250px]
`
