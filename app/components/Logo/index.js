import Image from 'next/image.js';
import { Box } from '@mui/material';
import './style.css'

const Logo = () => {
    return (
        <Box className='navbar--logo'>
            <Image src={'./Logo.svg'} width={48} height={48} alt='K Store Logo' />
            <h1 className='logo--heading'>K Store</h1>
        </Box>
    )
}

export default Logo;