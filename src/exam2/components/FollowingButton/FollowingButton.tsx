import { Button } from '@mui/material';
import * as style from './FollowingButtonStyle';

const FollowingButton = () => {

    return (
        <div>
            <Button 
                variant="text"
                autoCapitalize="none"
                sx={style.followingButtonStyle}
            >
                Following
            </Button>
        </div>
    )
}

export default FollowingButton;