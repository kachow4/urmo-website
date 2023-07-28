import Image from 'next/image'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Hero from '@/components/hero/Hero'

export default function Home() {
  return (
   <>
    <Hero/>
   </>
  );
}
