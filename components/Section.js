import tw from 'tailwind-styled-components/dist/tailwind'
import Image from 'next/image'

function Section({ primary, swapped, image, title, description }) {
  return (
    <Container>
      <ImageWrapper>
        <Image
          className="object-cover object-center"
          src={`/assets/home/desktop/${image}`}
          layout="fill"
        />
      </ImageWrapper>
      <ContentWrapper primary={primary} swapped={swapped}>
        {primary && <GradientBar />}
        <Title>{title}</Title>
        <Content>{description}</Content>
        <Button>
          {primary ? 'Get an invite' : 'View the stories'}
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g
              fill="none"
              fill-rule="evenodd"
              stroke={primary ? 'white' : 'black'}
            >
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </Button>
      </ContentWrapper>
    </Container>
  )
}

export default Section

const Container = tw.div`
  grid
  sm:grid-cols-5
  xl:grid-cols-7
  sm:h-full
  xl:h-[500px]
`

const ImageWrapper = tw.div`
  col-span-3
  xl:col-span-4
  relative
  min-h-full
  h-[300px]
  sm:h-full
  w-full
  `

const ContentWrapper = tw.div`
col-span-2
xl:col-span-3
flex 
flex-col 
h-full 
w-full  
px-10
py-20
sm:py-10
xl:p-28
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
const Content = tw.p`
  text-opacity-70
  leading-relaxed
  text-sm
  tracking-wide
`
const Button = tw.button` 
  w-full 
  flex 
  items-center
  gap-4
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
