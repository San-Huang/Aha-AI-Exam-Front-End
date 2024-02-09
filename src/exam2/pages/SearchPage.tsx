
import NavBar from "../components/NavBar/NavBar"
import SearchInput from "../components/SearchInput/SearchInput"
import ResultsSlider from "../components/ResultsSlider/ResultsSlider"
import SearchButton from "../components/SearchButton/SearchButton"
import FollowTab from "../components/FollowTab/FollowTab"
import { FC, useState } from 'react';
import { Users} from '../api/api';
import { Link } from 'react-router-dom'

interface SearchPageProps {
    users: Users;
  }

const SearchPage:FC<SearchPageProps> = ({users}) => {
const SearchStyle ={
    display:'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '210px'
}
const textPerPageStyle = {
    margin: '0',
    color: 'white',
    fontFamily: 'Ubuntu',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '150%',
    textTransform: 'capitalize' as 'capitalize',
}
const NumberResultsStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    height:'50px',
    width: '115px',
    margin: '0px',
    padding:'20px 0px',
    color: 'white',
}
const textNumberStyle = {
    height:'50px',
    fontFamily: 'Ubuntu',
    fontSize: '48px',
    fontWeight: '700',
    paddingRight: '10px',
}
const textResultsStyle = {
    margin: '0px',
    paddingBottom: '4px',
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: '0.15px',
}

    const [keyword, setKeyword] = useState('')
    const [pageSize, setPageSize] = useState(15)
   
    return (
        <div>
            <NavBar />
            <FollowTab Users={users} />

            <span style={SearchStyle}>
                <SearchInput setKeyword={setKeyword} />
                    <div style={textPerPageStyle}># of results per page</div>
                        <div style={NumberResultsStyle}>
                        <span style={textNumberStyle}>{pageSize}</span>
                        <span style={textResultsStyle}>results</span>
                    </div>
                <ResultsSlider pageSize={pageSize} setPageSize={setPageSize}/>
                <Link to={`/exam2/result?pageSize=${pageSize}&keyword=${keyword}`}>
                    <SearchButton />
                </Link>
            </span>
        </div>
    )
}

export default SearchPage