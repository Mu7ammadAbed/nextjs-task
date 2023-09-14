"use client";
import { useState } from "react";
import { Box, MenuItem, FormControl, Select } from "@mui/material";
import Image from "next/image.js";
import "./style.css";

const LanguageCurrency = ({ options }) => {
  const [option, setOption] = useState(1);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Box>
      <FormControl
        variant="standard"
        sx={{ borderLeft: "1px solid #000", marginLeft: "10px" }}
        className="navbar--currency--select"
      >
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={option}
          onChange={handleChange}
          label="Language-Currency"
          disableUnderline
          IconComponent={() => (
            <Image
              src={"/SelectArrow.svg"}
              width={9.5}
              height={6}
              alt="Search Icon"
            />
          )}
        >
          {options === "currency" && (
            <MenuItem className="options--menuitem" value={1}>
              USD <span className="currency--symbol">$</span>
            </MenuItem>
          )}
          {options === "currency" && (
            <MenuItem className="options--menuitem" value={2}>
              NIS <span className="currency--symbol">₪</span>
            </MenuItem>
          )}
          {options === "language" && (
            <MenuItem className="options--menuitem" value={1}>
              <Image
                className="language--options"
                src={"/English.svg"}
                width={32}
                height={21}
                alt="UK Flag"
              />{" "}
              English
            </MenuItem>
          )}
          {options === "language" && (
            <MenuItem className="options--menuitem" value={2}>
              <Image
                className="language--options"
                src={"/Arabic.svg"}
                width={32}
                height={21}
                alt="KSA Flag"
              />{" "}
              Arabic
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageCurrency;
