import tw from 'tailwind-styled-components/dist/tailwind'
import PricingCard from './PricingCard'
import { pricingContent } from '../lib/pricingContent'

export default function PricingCards() {
  return (
    <Container>
      {pricingContent &&
        pricingContent.map((p, idx) => (
          <PricingCard idx={idx} content={p} key={p} />
        ))}
    </Container>
  )
}

const Container = tw.div`
  xl:flex
  xl:my-8
  xl:items-center
  xl:justify-center
  xl:space-x-16
`
