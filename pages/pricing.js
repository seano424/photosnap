import Layout from '../components/Layout'
import Section from '../components/Section'
import { pricingContent } from '../lib/pricingContent'

export default function pricing() {
  return (
    <Layout>
      <Section items={pricingContent} limit={1} text="none" />
    </Layout>
  )
}
