import Image from 'next/image'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex p-5 justify-between">
        <div className="logo-wrapper justify-start">
            <Image 
                src="/images/urmologo.png"
                width={50}
                height={50}
                alt="urmo logo"
                />
        </div>
        <div className="tabs-wrapper">
            <ul className="tabs flex gap-5 justify-end">
                <li className="hover:underline">
                  <Link href="/">HOME</Link>
                </li>
                <li className="hover:underline">
                  <Link href="about.html">ABOUT US</Link>
                </li>
                <li className="hover:underline">
                  <Link href='team.html'>MEET THE TEAM</Link>
                </li>
                <li className="hover:underline">
                  <Link href='FamGrowth.html'>FAMILY & GROWTH</Link>
                </li>

            </ul>
        </div>
    </div>
  );
};
