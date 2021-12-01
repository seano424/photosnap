import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'

const fakeData = [
  {
    image: 'create-and-share.jpg',
    title: 'Create and share your photo stories',
    description:
      'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
  },
  {
    image: 'beautiful-stories.jpg',
    title: 'Beautiful stories every time',
    description:
      'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
  },
  {
    image: 'designed-for-everyone.jpg',
    title: 'Designed for everyone',
    description:
      'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Photosnap Home</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* <Header /> */}
      {fakeData &&
        fakeData.map((d, idx) => (
          <Section
            primary={idx === 0}
            swapped={idx % 2 !== 0}
            image={d.image}
            title={d.title}
            description={d.description}
          />
        ))}
      {/* PhotoGrid */}
      {/* Features */}
      {/* Footer */}
    </div>
  )
}
