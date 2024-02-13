import { Button } from '@mui/material';
import * as style from './FollowButtonStyle';

const FollowButton = () => {

    return (
        <div>
            <Button 
                variant="text"
                autoCapitalize="none"
                sx={style.followButtonStyle}
            >
                Follow
            </Button>
        </div>
    )
}

export default FollowButton;