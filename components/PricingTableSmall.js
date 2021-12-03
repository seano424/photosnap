import tw from 'tailwind-styled-components/dist/tailwind'
import { CheckIcon } from '@heroicons/react/solid'
import { pricingContent } from '../lib/pricingContent'

export default function PricingTableSmall() {
  return (
    <Container>
      <Headline>The Features</Headline>
      <Wrapper>
        <Title>Unlimited story posting</Title>
        <ContentWrapper>
          {pricingContent.map((p) => (
            <div>
              <p>{p.type}</p>
              <p>{p.unlimitedStories && <CustomCheckIcon />}</p>
            </div>
          ))}
        </ContentWrapper>
      </Wrapper>
      <Wrapper>
        <Title>Unlimited Photo upload</Title>
        <ContentWrapper>
          {pricingContent.map((p) => (
            <div>
              <p>{p.type}</p>
              <p>{p.unlimitedPhotos && <CustomCheckIcon />}</p>
            </div>
          ))}
        </ContentWrapper>
      </Wrapper>
      <Wrapper>
        <Title>Embedding custom content</Title>
        <ContentWrapper>
          {pricingContent.map((p) => (
            <div>
              <p>{p.type}</p>
              <p>{p.embedding && <CustomCheckIcon />}</p>
            </div>
          ))}
        </ContentWrapper>
      </Wrapper>
      <Wrapper>
        <Title>customize metadata</Title>
        <ContentWrapper>
          {pricingContent.map((p) => (
            <div>
              <p>{p.type}</p>
              <p>{p.metaData && <CustomCheckIcon />}</p>
            </div>
          ))}
        </ContentWrapper>
      </Wrapper>
      <Wrapper>
        <Title>Advanced metrics</Title>
        <ContentWrapper>
          {pricingContent.map((p) => (
            <div>
              <p>{p.type}</p>
              <p>{p.advancedMetrics && <CustomCheckIcon />}</p>
            </div>
          ))}
        </ContentWrapper>
      </Wrapper>
      <Wrapper>
        <Title>Photo Downloads</Title>
        <ContentWrapper>
          {pricingContent.map((p) => (
            <div>
              <p>{p.type}</p>
              <p>{p.downloads && <CustomCheckIcon />}</p>
            </div>
          ))}
        </ContentWrapper>
      </Wrapper>
      <Wrapper>
        <Title>Search Engine Indexing</Title>
        <ContentWrapper>
          {pricingContent.map((p) => (
            <div>
              <p>{p.type}</p>
              <p>{p.seo && <CustomCheckIcon />}</p>
            </div>
          ))}
        </ContentWrapper>
      </Wrapper>
      <Wrapper>
        <Title>Custom Analytics</Title>
        <ContentWrapper>
          {pricingContent.map((p) => (
            <div>
              <p>{p.type}</p>
              <p>{p.analytics && <CustomCheckIcon />}</p>
            </div>
          ))}
        </ContentWrapper>
      </Wrapper>
    </Container>
  )
}

const Container = tw.div`
  px-10
  sm:hidden
  uppercase
  mb-20
`

const CustomCheckIcon = tw(CheckIcon)`
  h-6
  mt-2
`

const Headline = tw.h3`
  border-b 
  pb-5 
  tracking-widest 
  font-bold 
  text-opacity-90  
text-black
`
const Title = tw.h3`
  py-5 
  tracking-widest 
  font-bold 
  text-opacity-90  
  text-black
`

const Wrapper = tw.div`
  flex 
  flex-col 
  border-b 
  border-grey 
  pb-5
`

const ContentWrapper = tw.div`
  flex 
  justify-between
`
