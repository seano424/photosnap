import Layout from '../components/Layout'
import Section from '../components/Section'
import { pricingContent } from '../lib/pricingContent'
import BetaCard from '../components/BetaCard'
import Toggle from '../components/Toggle'

export default function pricing() {
  return (
    <Layout>
      <Section items={pricingContent} limit={1} text="none" />
      <BetaCard />
      <Toggle />
    </Layout>
  )
}
