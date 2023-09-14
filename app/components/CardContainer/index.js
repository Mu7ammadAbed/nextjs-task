import { Box } from "@mui/material";
import "./style.css";
import Image from "next/image";

const CardContainer = () => (
  <Box className="Cards--container">
    <Image
      src={"/ContentImages/Rectangle 813631.png"}
      width={"575"}
      height={611}
      alt="Content"
      className="cards--image"
      />
    <Box className="cardscontainer--secondgroup">
      <Image
        src={"/ContentImages/Rectangle 813630.png"}
        width={575}
        height={285.5}
        alt="Content"
        className="cards--image"
      />
      <Image
        src={"/ContentImages/Rectangle 813629.png"}
        width={575}
        height={285.5}
        alt="Content"
        className="cards--image"
      />
    </Box>
  </Box>
);

export default CardContainer;
