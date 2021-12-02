import tw from 'tailwind-styled-components/dist/tailwind'
import GridItem from './GridItem'

export default function Grid({ limit, items }) {
  return (
    <Container>
      {items &&
        items
          .slice(0, limit)
          .map((item, idx) => <GridItem key={idx} item={item} />)}
    </Container>
  )
}

const Container = tw.div`
bg-white
  grid 
  md:grid-cols-2 
  xl:grid-cols-4 
  text-white
  
`
