import Footer from './Footer'
import Head from 'next/head'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Photosnap Home</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className="flex flex-col flex-1 w-full">{children}</main>
      <Footer />
    </div>
  )
}
