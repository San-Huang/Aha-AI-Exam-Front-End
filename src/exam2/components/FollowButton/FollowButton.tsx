import {Button} from '@mui/material';

const FollowButton = () => {

    const FollowButtonStyle = {
        backgroundColor: 'rgba(18, 18, 18, 1)',
        color: 'white',
        width:'40px',
        height: '31px',
        padding:'8px 10px',
        border: '1px solid white',
        borderRadius: '20px',
        fontFamily: 'Open Sans',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '600',
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