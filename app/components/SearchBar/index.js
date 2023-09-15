import Image from "next/image.js";
import { Box, OutlinedInput, FormControl, InputAdornment } from "@mui/material";
import { useTranslation } from "@/app/i18n";
import "./style.css";

const SearchBar = async ({lng}) => {
  const { t } = await useTranslation(lng)

  return (
    <Box>
      <FormControl variant="standard">
        <OutlinedInput
          className="navbar--search"
          placeholder={t("Search-Anything")}
          endAdornment={
            <InputAdornment position="end">
              <Image
                src={"/SearchIcon.svg"}
                width={16}
                height={16}
                alt="Search Icon"
              />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
