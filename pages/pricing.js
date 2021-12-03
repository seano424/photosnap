import Layout from '../components/Layout'
import Section from '../components/Section'
import { pricingHeader } from '../lib/pricingContent'
import BetaCard from '../components/BetaCard'
import Toggle from '../components/Toggle'
import PricingCards from '../components/PricingCards'
import PricingTable from '../components/PricingTable'
import PricingTableSmall from '../components/PricingTableSmall'

export default function pricing() {
  return (
    <Layout>
      <Section items={pricingHeader} limit={1} text="none" />
      <BetaCard />
      <Toggle />
      <PricingCards />
      <PricingTable />
      <PricingTableSmall />
    </Layout>
  )
}
