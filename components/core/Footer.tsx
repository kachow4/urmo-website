import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
  return (
    <div>
        <hr/>
        <div className="flex justify-between px-24 py-5">

            <div className="flex flex-col gap-5 text-start">
                CONNECT WITH US
                <a href="mailto:urmouci@gmail.com" className="flex gap-2">
                    <FontAwesomeIcon className="transition ease-out duration-500 hover:scale-[1.25]" icon={faEnvelope} size="xl"></FontAwesomeIcon> 
                    urmouci@gmail.com
                </a>
            </div>

            <div className="flex flex-col gap-5 text-end">
                FOLLOW US
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
    </div>
  );
};
