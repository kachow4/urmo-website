import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh]">
      <div className="z-[-1]">
        <Image
          priority
          src={"/../public/images/TET2020Stage.jpg"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>
    </div>
  );
};