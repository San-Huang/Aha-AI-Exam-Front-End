import { Button } from '@mui/material';
import * as style from './SearchButtonStyle';

const SearchButton = () => {

    return (
        <div>
            <Button 
                variant="text"
                sx={style.searchButtonStyle}
            >
                SEARCH
            </Button>
        </div>
    )
}

export default SearchButton;