"use client";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import { Box, MenuItem, FormControl, Select } from "@mui/material";
import Image from "next/image.js";
import "./style.css";
import Link from "next/link";

const LanguageCurrency = ({options}) => {
  const [currency, setCurrency] = useState(1);
  const [language, setlanguage] = useState(1);
  const params = useParams()

  const handleChange = (e) => {
    options === 'currency' ? setCurrency(e.target.value) : setlanguage(e.target.value)
  };

  useEffect(() => {
    params.lng === 'ar' ? setlanguage(2) : setlanguage(1);
  }, [language])

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
          value={options === 'currency' ? currency : language}
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
              <Link href={'/en'} style={{textDecoration: 'none', color: '#121212'}}>
              <Image
                className="language--options"
                src={"/English.svg"}
                width={32}
                height={21}
                alt="UK Flag"
              />{" "}
              English
              </Link>
            </MenuItem>
          )}
          {options === "language" && (
            <MenuItem className="options--menuitem" value={2}>
              <Link href={'/ar'} style={{textDecoration: 'none', color: '#121212'}}>

              <Image
                className="language--options"
                src={"/Arabic.svg"}
                width={32}
                height={21}
                alt="KSA Flag"
                />{" "}
              Arabic
                </Link>
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageCurrency;
