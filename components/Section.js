import tw from 'tailwind-styled-components/dist/tailwind'
import Image from 'next/image'
import Button from './Button'

export default function Section({ limit, items, page, text }) {
  const storiesPage = page === 'stories'
  return (
    <Container>
      {items &&
        items
          .slice(0, limit)
          .map(({ image, description, title, author, date }, idx) => (
            <Wrapper key={idx}>
              <ImageWrapper page={storiesPage}>
                <Image
                  className="object-cover object-center"
                  src={image}
                  layout="fill"
                />
              </ImageWrapper>
              <ContentWrapper
                page={storiesPage}
                primary={idx === 0}
                swapped={idx % 2 !== 0}
              >
                {storiesPage && (
                  <Image
                    className={`object-cover object-center`}
                    src={image}
                    layout="fill"
                  />
                )}

                {idx === 0 && <GradientBar page={storiesPage} />}
                <Content>
                  {storiesPage && (
                    <Headline>Last month's feature story</Headline>
                  )}
                  <Title>{title}</Title>
                  {storiesPage && (
                    <Subtitle>
                      <Date>{date}</Date> by {author}
                    </Subtitle>
                  )}
                  <Description primary={(idx === 0).toString()}>
                    {description}
                  </Description>
                  {text !== 'none' && (
                    <Button
                      primary={(idx === 0).toString()}
                      text={
                        text
                          ? text
                          : idx === 0
                          ? 'Get an invite'
                          : 'View the stories'
                      }
                    />
                  )}
                </Content>
              </ContentWrapper>
            </Wrapper>
          ))}
    </Container>
  )
}

const Container = tw.div`
  mt-20
`
const Wrapper = tw.div`
  relative
  sm:grid
  sm:grid-cols-5
  xl:grid-cols-12
  sm:h-full
  xl:h-[540px]
`

const ImageWrapper = tw.div`
  ${(p) => p.page && 'hidden'}
  col-span-3
  xl:col-span-7
  relative
  min-h-full
  h-[300px]
  sm:h-full
  w-full
  `

const ContentWrapper = tw.div`
  ${(p) =>
    p.page
      ? 'col-span-5 xl:col-span-12 px-20'
      : 'col-span-2 xl:col-span-5 xl:items-center px-6'}
  flex 
  flex-col 
  h-full 
  w-full  
  py-20
  sm:py-10
  xl:justify-center
  xl:py-0
  space-y-4
  relative
  ${(p) => (p.swapped ? '' : 'sm:order-first')}
  ${(p) => (p.primary ? 'bg-black text-white' : 'bg-white text-black')}
  `

const Content = tw.div`
  z-20
  space-y-8
  max-w-sm
  
`

const Headline = tw.h1`
  text-sm
  tracking-widest
  uppercase
  `

const Title = tw(Headline)`
  text-3xl
  font-bold
`

const Subtitle = tw.p`
  
`

const Date = tw.span`
  text-opacity-70
  text-white
`
const Description = tw.p`
  text-opacity-70
  leading-relaxed
  text-sm
  ${(p) => (p.primary ? 'text-grey' : 'text-black')}
  
`

const GradientBar = tw.div`
 ${(p) => p.page && 'hidden'}
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
