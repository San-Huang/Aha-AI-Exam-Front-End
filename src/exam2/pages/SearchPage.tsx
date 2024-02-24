
import NavBar from "../components/NavBar/NavBar";
import SearchInput from "../components/SearchInput/SearchInput";
import ResultsSlider from "../components/ResultsSlider/ResultsSlider";
import SearchButton from "../components/SearchButton/SearchButton";
import FollowTab from "../components/FollowTab/FollowTab";
import { FC, useState } from 'react';
import { Users} from '../api/api';
import { Link } from 'react-router-dom';
import * as style from './pagesStyle';
import Box from "@mui/system/Box";

interface SearchPageProps {
    users: Users
  }

const SearchPage:FC<SearchPageProps> = ({ users }) => {

    const [keyword, setKeyword] = useState('')
    const [pageSize, setPageSize] = useState(15)
   
    return (
        <div>
            <Box sx={style.tagNavBar}>
                <NavBar />
            </Box>
            <FollowTab Users={users} />
            <Box sx={style.searchStyle}>
                <SearchInput setKeyword={setKeyword} />
                    <div style={style.textPerPageStyle}># of results per page</div>
                    <div style={style.numberResultsStyle}>
                        <span style={style.textNumberStyle}>{pageSize}</span>
                        <span style={style.textResultsStyle}>results</span>
                    </div>
                <ResultsSlider pageSize={pageSize} setPageSize={setPageSize}/>
                <Link to={`/exam2/result?pageSize=${pageSize}&keyword=${keyword}`} style={{ textDecoration: 'none' }}>
                    <SearchButton />
                </Link>
            </Box>
        </div>
    )
}

export default SearchPage;