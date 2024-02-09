import {Paper,MenuList,MenuItem} from '@mui/material';
import { HomeIcon, TagIcon,  } from '../../../assets/icon';
import { Link } from 'react-router-dom'

const TagsNavBar = () => {

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
    padding: '9px 16px 42px 16px',
}

const TagIconStyle = {
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
    padding: '0px 16px',
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
                <Link to='/exam2'>
                    <MenuItem sx={HomeIconStyle} disableRipple>
                            {TagIcon}
                    </MenuItem>
                </Link>
                <Link to='/exam2/tags' style={{ textDecoration: 'none' }}>
                    <MenuItem  sx={TagIconStyle} disableRipple>
                        <span>{HomeIcon}</span>
                        <span>Tags</span>
                    </MenuItem>
                </Link>
            </MenuList>
        </Paper>
    </div>
)
}

export default TagsNavBar