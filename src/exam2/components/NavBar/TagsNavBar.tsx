import {Paper,MenuList,MenuItem} from '@mui/material';
import { HomeIcon, TagIcon,  } from '../../../assets/icon';
import { Link } from 'react-router-dom';
import * as style from './NavBarStyle';

const TagsNavBar = () => {

return(
    <div>
        <Paper sx={style.navPaperStyle}>
            <MenuList sx={style.menuListStyle}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <MenuItem sx={style.logoIconStyle} disableRipple>
                        LOGO
                    </MenuItem>
                </Link>
                <Link to='/exam2'>
                    <MenuItem sx={style.homeIconTagBarStyle} disableRipple>
                            {TagIcon}
                    </MenuItem>
                </Link>
                <Link to='/exam2/tags' style={{ textDecoration: 'none' }}>
                    <MenuItem  sx={style.tagIconTagBarStyle} disableRipple>
                        <span>{HomeIcon}</span>
                        <span style={style.tagTextStyle}>Tags</span>
                    </MenuItem>
                </Link>
            </MenuList>
        </Paper>
    </div>
)
}

export default TagsNavBar