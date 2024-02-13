import {Button} from '@mui/material';
import * as style from './MoreButtonStyle';

const MoreButton = ({ onClick = () => {} }) => {

    return (
        <div>
            <Button 
                variant="text"
                sx={style.moreButtonStyle}
                onClick={onClick}
            >
                MORE
            </Button>
        </div>
    )
}

export default MoreButton;