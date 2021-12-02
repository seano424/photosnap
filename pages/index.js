import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'
import Stories from '../components/Stories'
import { homeContent } from '../lib/homeContent'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Photosnap Home</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Section />
      <Stories limit={4} />
      {/* Features */}
      {/* Footer */}
    </div>
  )
}
