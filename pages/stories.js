import Layout from '../components/Layout'
import Stories from '../components/stories'
import Section from '../components/Section'
import { homeStories } from '../lib/homeStories'

function index() {
  return (
    <Layout>
      {/* Section */}
      <Section
        items={homeStories}
        limit={1}
        type="stories"
        text="Read the story"
      />
      {/* Stories */}
      <Stories items={homeStories.slice(1, 13)} />
    </Layout>
  )
}

export default index
