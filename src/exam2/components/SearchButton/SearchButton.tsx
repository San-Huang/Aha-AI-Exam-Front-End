import {Button} from '@mui/material';

const SearchButton = () => {

    const SearchButtonStyle = {
        backgroundColor: 'white',
        color: 'black',
        width:'343px',
        height: '40px',
        padding:'13px 16px',
        borderRadius: '4px',
        fontFamily: 'Ubuntu',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '100%', 
        textTransform: 'uppercase',
        transition: '0.3s', 
        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
            border: '1px solid white',
            transition: '0.3s', 
          },
    }

    return (
        <div>
            <Button variant="text"
                    sx={SearchButtonStyle}
                    >SEARCH</Button>
        </div>
    )
}


export default SearchButton