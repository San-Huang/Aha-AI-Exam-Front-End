import {Button} from '@mui/material';

const FollowButton = () => {

    const FollowButtonStyle = {
        backgroundColor: 'rgba(18, 18, 18, 1)',
        color: 'white',
        minWidth:'59px',
        height: '29px',
        padding:'0px',
        border: '1px solid white',
        borderRadius: '20px',
        fontFamily: 'Open Sans',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '100%', 
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
                    sx={FollowButtonStyle}
                    >Follow</Button>
        </div>
    )
}


export default FollowButton