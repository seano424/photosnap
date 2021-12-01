import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'
import { homeContent } from '../lib/homeContent'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Photosnap Home</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      {homeContent &&
        homeContent.map((d, idx) => (
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
