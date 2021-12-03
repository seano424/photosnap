import tw from 'tailwind-styled-components/dist/tailwind'
import { CheckIcon } from '@heroicons/react/solid'
import { pricingContent } from '../lib/pricingContent'
export default function PricingTable() {
  const basic = pricingContent[0]
  const pro = pricingContent[1]
  const business = pricingContent[2]
  return (
    <Table>
      <Header>Compare</Header>
      <thead>
        <THeadRow>
          <PrimaryTH>The Features</PrimaryTH>
          <TH>Basic</TH>
          <TH>Pro</TH>
          <TH>Business</TH>
        </THeadRow>
      </thead>
      <TBody>
        {/*  */}
        <TableRow>
          <PrimaryTD>Unlimited story posting</PrimaryTD>
          <TD>{basic.unlimitedStories && <CustomCheckIcon />}</TD>
          <TD>{pro.unlimitedStories && <CustomCheckIcon />}</TD>
          <TD>{business.unlimitedStories && <CustomCheckIcon />}</TD>
        </TableRow>
        {/*  */}
        <TableRow>
          <PrimaryTD>Unlimited Photo upload</PrimaryTD>
          <TD>{basic.unlimitedPhotos && <CustomCheckIcon />}</TD>
          <TD>{pro.unlimitedPhotos && <CustomCheckIcon />}</TD>
          <TD>{business.unlimitedPhotos && <CustomCheckIcon />}</TD>
        </TableRow>
        <TableRow>
          <PrimaryTD>Embedding custom content</PrimaryTD>
          <TD>{basic.embedding && <CustomCheckIcon />}</TD>
          <TD>{pro.embedding && <CustomCheckIcon />}</TD>
          <TD>{business.embedding && <CustomCheckIcon />}</TD>
        </TableRow>
        <TableRow>
          <PrimaryTD>customize metadata</PrimaryTD>
          <TD>{basic.metaData && <CustomCheckIcon />}</TD>
          <TD>{pro.metaData && <CustomCheckIcon />}</TD>
          <TD>{business.metaData && <CustomCheckIcon />}</TD>
        </TableRow>
        <TableRow>
          <PrimaryTD>Advanced metrics</PrimaryTD>
          <TD>{basic.advancedMetrics && <CustomCheckIcon />}</TD>
          <TD>{pro.advancedMetrics && <CustomCheckIcon />}</TD>
          <TD>{business.advancedMetrics && <CustomCheckIcon />}</TD>
        </TableRow>
        <TableRow>
          <PrimaryTD>Photo Downloads</PrimaryTD>
          <TD>{basic.downloads && <CustomCheckIcon />}</TD>
          <TD>{pro.downloads && <CustomCheckIcon />}</TD>
          <TD>{business.downloads && <CustomCheckIcon />}</TD>
        </TableRow>
        <TableRow>
          <PrimaryTD>Search Engine Indexing</PrimaryTD>
          <TD>{basic.seo && <CustomCheckIcon />}</TD>
          <TD>{pro.seo && <CustomCheckIcon />}</TD>
          <TD>{business.seo && <CustomCheckIcon />}</TD>
        </TableRow>
        <TableRow>
          <PrimaryTD>Custom Analytics</PrimaryTD>
          <TD>{basic.analytics && <CustomCheckIcon />}</TD>
          <TD>{pro.analytics && <CustomCheckIcon />}</TD>
          <TD>{business.analytics && <CustomCheckIcon />}</TD>
        </TableRow>
      </TBody>
    </Table>
  )
}

const Table = tw.table`
  table-auto
  hidden
  flex-col 
  mx-8 
  justify-center 
  xl:mx-80 
  xl:my-10
  sm:flex
  mb-20
`

const TBody = tw.tbody`
  flex 
  flex-col
`
const Header = tw.h1`
  uppercase 
  text-5xl 
  justify-center 
  w-full 
  flex 
  py-10
`

const TableRow = tw.tr`
  grid 
  grid-cols-5 
  border-b 
  pl-4
  border-grey
  py-4
`

const THeadRow = tw(TableRow)`
  border-black
  pt-0
`

const PrimaryTH = tw.th`
  flex 
  col-span-2
`

const PrimaryTD = tw.td`
  col-span-2
`

const TH = tw.th`
  flex 
  justify-center
`

const TD = tw(TH)``

const CustomCheckIcon = tw(CheckIcon)`
  h-4
`
