import { Paper, MenuList, MenuItem } from '@mui/material';
import { HomeIcon, TagIcon, TagDotIcon } from '../../../assets/icon';
import { Link } from 'react-router-dom';
import * as style from './NavBarStyle';

const NavBar = () => {

    return (
        <div>
            <Paper sx={style.navPaperStyle}>
                <MenuList sx={style.menuListStyle}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <MenuItem sx={style.logoIconStyle} disableRipple>
                            LOGO
                        </MenuItem>
                    </Link>
                    <Link to='/exam2' style={{ textDecoration: 'none' }}>
                        <MenuItem sx={style.homeIconStyle} disableRipple>
                            {HomeIcon}
                            <span>Home</span>
                        </MenuItem>
                    </Link>
                    <Link to='/exam2/tags'>
                        <MenuItem  sx={style.tagIconStyle} disableRipple>
                            <span style={style.tagDotIconStyle}>{TagDotIcon}</span>
                            <span>{TagIcon}</span>
                        </MenuItem>
                    </Link>
                </MenuList>
            </Paper>
        </div>
    )   
}

export default NavBar