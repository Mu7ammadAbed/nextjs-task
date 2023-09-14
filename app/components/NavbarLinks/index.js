import Link from 'next/link';
import Image from 'next/image.js';
import { Box, Stack, Paper, styled, Menu } from "@mui/material";

import "./style.css";

import navbarLinks from '@/app/appData/navbarLinks';
import navbarIcons from '@/app/appData/navbarIcons';

const NavbarLinks = () => {
  return (
    <Box className="Navbarlinks--container">
      <Stack className="Navbarlinks--stack" direction="row" spacing={2} b="none">
        {navbarLinks.map((e) => (
          <Link href={e.href} className={e.className} key={e.value}>{e.value}</Link>
        ))}
      </Stack>

      <Stack className="Navbarlinks--stack Navbarlinks--icons" direction="row" spacing={2} b="none">
        {navbarIcons.map(e => (
          <Link href={e.href} className={e.className} key={e.imageSrc + e.alternativeText}><Image src={e.imageSrc} width={e.width} height={e.height} alt={e.alternativeText} /></Link>
        ))}
      </Stack>
    </Box>
  );
};

export default NavbarLinks;
