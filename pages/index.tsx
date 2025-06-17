
import Head from 'next/head'
import SkipOverlay from '../components/SkipOverlay'

export default function Home() {
  return (
    <div className="relative h-screen bg-black text-white">
      <Head>
        <title>Skip That Demo</title>
      </Head>
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <SkipOverlay />
    </div>
  )
}
