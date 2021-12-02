import Image from 'next/image'
import tw from 'tailwind-styled-components/dist/tailwind'
import Button from './Button'

function Stories({ limit, items }) {
  return (
    <Container>
      {items &&
        items.slice(0, limit).map((h) => (
          <ImageWrapper>
            <Image
              src={`${h.image}`}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
            <ContentWrapper>
              <Content>
                <h1 className="">{h.title && h.title}</h1>
                <p>{h.author && `by ${h.author}`}</p>
              </Content>
              <Button text="Read story" primary={true} />
            </ContentWrapper>
          </ImageWrapper>
        ))}
    </Container>
  )
}

export default Stories

const Container = tw.div`
bg-black
  grid 
  md:grid-cols-2 
  xl:grid-cols-4 
  text-white
`

const ImageWrapper = tw.div`
  relative 
  w-full
  min-h-full
  h-[400px]
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
