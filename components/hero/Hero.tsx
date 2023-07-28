import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh]">
      <div className="z-[-1]">
        <Image
          priority
          src={"/images/TET2020Stage.jpg"}
          fill={true}
          style={{objectFit: "cover", objectPosition: "center"}}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};