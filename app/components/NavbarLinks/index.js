'use client'
import Link from 'next/link';
import Image from 'next/image.js';
import { Box, Stack, Paper, styled, Menu } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: '5px solid #000',
  boxShadow: '0'
}));
import "./style.css";

const NavbarLinks = () => {
  return (
    <Box className="Navbarlinks--container">
      <Stack className="Navbarlinks--stack" direction="row" spacing={2} b="none">
        <Link href={"#"} className="navbarlinks--item navbarlinks--firstitem">Home</Link>
        <Link href={"#"} className="navbarlinks--item">Products</Link>
        <Link href={"#"} className="navbarlinks--item">Categories</Link>
        <Link href={"#"} className="navbarlinks--item">Offers</Link>
        <Link href={"#"} className="navbarlinks--item">Contact Us</Link>
      </Stack>

      <Stack className="Navbarlinks--stack Navbarlinks--icons" direction="row" spacing={2} b="none">
        <Link href={"#"} className="navbarlinks--item"><Image src={'/NavbarIcons/message.svg'} width={24} height={24} alt='Messages Icon' /></Link>
        <Link href={"#"} className="navbarlinks--item"><Image src={'/NavbarIcons/heart.svg'} width={24} height={24} alt='Favorites Icon' /> </Link>
        <Link href={"#"} className="navbarlinks--item"><Image src={'/NavbarIcons/notification.svg'} width={24} height={24} alt='Notifications Icon' /></Link>
        <Link href={"#"} className="navbarlinks--item"><Image src={'/NavbarIcons/profile.svg'} width={24} height={24} alt='Profile Icon' /></Link>
        <Link href={"#"} className="navbarlinks--item navbarlinks--lastitem"><Image src={'/NavbarIcons/cart.svg'} width={24} height={24} alt='Cart Icon' /></Link>
      </Stack>
    </Box>
  );
};

export default NavbarLinks;
