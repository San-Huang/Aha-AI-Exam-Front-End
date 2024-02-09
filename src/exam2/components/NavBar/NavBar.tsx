import {Paper,MenuList,MenuItem} from '@mui/material';
import { HomeIcon, TagIcon, TagDotIcon } from '../../../assets/icon';
import { Link } from 'react-router-dom'

const NavBar = () => {

const NavPaperStyle = {
    backgroundColor:'#1B1B1B',
    width: '80px',
    height: '100vh',
    position: 'absolute',
    borderRadius: '0',
}
const MenuListStyle ={
    display:'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0'
}
const LogoIconStyle = {
    width: '80px',
    height: '88px',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    letterSpacing: '-0.65px',
    color: {
        backgroundImage: "linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      },
}

const HomeIconStyle = {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '150%',
    letterSpacing: '0.4px',
    color: 'white',
    padding: '7px 16px',
}

const TagIconStyle = {
    padding: '18px 0px 0px 0px',
}

const TagDotIconStyle = {
    position: 'absolute' as 'absolute',
    top: '4px',
    right: '-4px',
}

return(
    <div>
         <Paper sx={NavPaperStyle}>
            <MenuList
                sx={MenuListStyle}
            >
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <MenuItem sx={LogoIconStyle} disableRipple>LOGO</MenuItem>
                </Link>
                <Link to='/exam2' style={{ textDecoration: 'none' }}>
                    <MenuItem sx={HomeIconStyle} disableRipple>
                        {HomeIcon}
                        <span>Home</span>
                    </MenuItem>
                </Link>
                <Link to='/exam2/tags'>
                    <MenuItem  sx={TagIconStyle} disableRipple>
                        <span style={TagDotIconStyle}>{TagDotIcon}</span>
                        <span>{TagIcon}</span>
                    </MenuItem>
                </Link>
            </MenuList>
        </Paper>
    </div>
)
}

export default NavBar