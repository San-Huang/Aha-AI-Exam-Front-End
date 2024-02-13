import { Box, Typography, TextField, Divider } from '@mui/material';
import * as style from './SearchInputStyle';

 const SearchInput = ({ setKeyword }:any) => {

    return (
        <Box sx={style.searchInputStyle}>
          <Typography sx={style.searchTitleStyle}>
            Search
          </Typography>
          <TextField
            type="text"
            placeholder="Keyword"
            sx={style.searchFieldStyle}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Divider sx={style.dividerStyle} />
        </Box>
    )
}

export default SearchInput;