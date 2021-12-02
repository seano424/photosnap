import Layout from '../../components/Layout'
import Grid from '../../components/Grid'
import Section from '../../components/Section'
import { homeStories } from '../../lib/homeStories'

export default function index() {
  return (
    <Layout>
      {/* Section */}
      <Section
        items={homeStories}
        limit={1}
        page="stories"
        text="Read the story"
      />
      {/* Stories */}
      <Grid items={homeStories.slice(1, 13)} />
    </Layout>
  )
}
