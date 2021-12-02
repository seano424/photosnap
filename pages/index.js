import Section from '../components/Section'
import Grid from '../components/Grid'
import Features from '../components/Features'
import Layout from '../components/Layout'
import { homeStories } from '../lib/homeStories'
import { homeContent } from '../lib/homeContent'

export default function Home() {
  return (
    <Layout>
      <Section items={homeContent} limit={3} />
      <Grid items={homeStories} limit={4} />
      <Features limit={3} />
    </Layout>
  )
}
