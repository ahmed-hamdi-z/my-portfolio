import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className=" h-8 fixed top-5 left-8  bg-transparent ">
      <Link href={"/"}>
        <Image
          src={"/logo.webp"}
          width={50}
          height={28}
          alt=""
          priority={true}
        />
      </Link>
    </div>
  );
};

export default Logo;
