import Logo from "../Logo";
import SearchBar from "../SearchBar";
import LanguageCurrency from "../LanguageCurrency";

import './style.css'
import { Box } from "@mui/material";
import NavbarLinks from "../NavbarLinks";

const Navbar = () => {

    return (
        <Box>
            <Box className="navbar--container">
                <Logo />
                <SearchBar />
                <Box className="navbar--languagecurrency">
                <LanguageCurrency options={"language"} />
                <LanguageCurrency options={"currency"} />
                </Box>
            </Box>
            <NavbarLinks />
        </Box>
    )
}

export default Navbar