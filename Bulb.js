import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-1000 z-10 w-[200px] xl:w-[260px]">
      <Image
        src={"/bulb.webp"}
        width={260}
        height={200}
        alt=""
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
