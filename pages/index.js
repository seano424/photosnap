import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'
import Stories from '../components/Stories'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Photosnap Home</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className="flex flex-col flex-1 w-full">
        <Section />
        <Stories limit={4} />
        {/* Features */}
        <Features limit={3} />
        {/* Footer */}
      </main>
      <Footer />
    </div>
  )
}
