import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function ContactUs() {
  return (
    <div className="relative w-full h-[80vh]">
      <div className="z-[-1]">
        <Image
          priority
          src={"/images/ALLIDC2019.png"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>

      <div className="relative flex flex-col gap-10 items-center p-20 font-thin text-white text-xl">
        <p>We would love to connect with you! Please feel free to reach out through our socials or our email!</p>
        <a href="mailto:urmouci@gmail.com" className="flex gap-2">
          <FontAwesomeIcon className="transition ease-out duration-500 hover:scale-[1.25]" icon={faEnvelope} size="xl"></FontAwesomeIcon> 
          urmouci@gmail.com
        </a>
        <div className="flex gap-5">
            <Link href="https://www.instagram.com/urmo.uci/">
                <FontAwesomeIcon className="transition ease-out duration-500 hover:scale-[1.25]" icon={faInstagram} size="2xl"/>
            </Link>
            <Link href="https://www.youtube.com/c/URMOUCI">
                <FontAwesomeIcon className="transition ease-out duration-500 hover:scale-[1.25]" icon={faYoutube} size="2xl"/>
            </Link>
            <Link href="https://www.tiktok.com/@urmouci">
                <FontAwesomeIcon className="transition ease-out duration-500 hover:scale-[1.25]" icon={faTiktok} size="2xl"/>
            </Link>
            <Link href="https://www.facebook.com/urmouci/">
                <FontAwesomeIcon className="transition ease-out duration-500 hover:scale-[1.25]" icon={faFacebook} size="2xl"/>
            </Link>
        </div>
      </div>
    </div>
  )
}

