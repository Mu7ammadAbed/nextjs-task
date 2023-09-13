import Logo from "../Logo";
import SearchBar from "../SearchBar";
import LanguageCurrency from "../LanguageCurrency";

import './style.css'
import { Box } from "@mui/material";

const Navbar = () => {

    return (
        <Box className="navbar--container">
            <Logo />
            <SearchBar />
            <Box className="navbar--languagecurrency">
            <LanguageCurrency options={"language"} />
            <LanguageCurrency options={"currency"} />
            </Box>
        </Box>
    )
}

export default Navbar