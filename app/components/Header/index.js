import Navbar from "../Navbar";
import HeaderCarousel from "../HeaderCarousel";

const Header = ({lng}) => {
  return (
    <>
      <Navbar lng={lng} />
      <HeaderCarousel />
    </>
  );
};

export default Header;
