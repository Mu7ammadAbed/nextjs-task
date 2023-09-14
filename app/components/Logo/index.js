import Image from "next/image.js";
import "./style.css";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="navbar--logo">
      <Image src={"./Logo.svg"} width={48} height={48} alt="K Store Logo" />
      <h1 className="logo--heading">K Store</h1>
    </Link>
  );
};

export default Logo;
