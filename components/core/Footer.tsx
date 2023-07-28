import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
  return (
    <div>
        <hr/>
        <div className="flex justify-between pl-24 pr-24 pt-5 pb-5">

            <div className="flex flex-col gap-5 text-start">
                CONNECT WITH US
                <button><FontAwesomeIcon icon={faEnvelope} size="lg"></FontAwesomeIcon> urmouci@gmail.com</button>
                
            </div>

            <div className="flex flex-col gap-5 text-end">
                FOLLOW US
                <div className="flex gap-5">
                    <Link href="https://www.instagram.com/urmo.uci/">
                        <FontAwesomeIcon icon={faInstagram} size="2xl"/>
                    </Link>
                    <Link href="https://www.youtube.com/c/URMOUCI">
                        <FontAwesomeIcon icon={faYoutube} size="2xl"/>
                    </Link>
                    <Link href="https://www.facebook.com/urmouci/">
                        <FontAwesomeIcon icon={faFacebook} size="2xl"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};
