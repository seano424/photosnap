import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import { featureContent } from '../lib/featureContent'
import Features from '../components/Features'
import BetaCard from '../components/BetaCard'

export default function features() {
  return (
    <Layout>
      <Section items={featureContent} limit={1} text="none" />
      <Features />
      <BetaCard />
    </Layout>
  )
}
