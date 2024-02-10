import {Button} from '@mui/material';

const FollowingButton = () => {

    const FollowingButtonStyle = {
        backgroundColor: 'white',
        color: 'rgba(18, 18, 18, 1)',
        width:'76px',
        height: '28px',
        padding:'1px 0px 0px 0px',
        border: '1px solid white',
        borderRadius: '20px',
        fontFamily: 'Open Sans',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '100%', 
        letterSpacing: '0.2px',
        textTransform: 'capitalize',
        transition: '0.3s', 
        '&:hover': {
            backgroundColor: 'white',
            color: 'rgba(18, 18, 18, 1)',
            transition: '0.3s', 
          },
    }

    return (
        <div>
            <Button variant="text"
                    autoCapitalize="none"
                    sx={FollowingButtonStyle}
                    >Following</Button>
        </div>
    )
}


export default FollowingButton