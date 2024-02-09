
import NavBar from "../components/NavBar/NavBar"
import FollowTab from "../components/FollowTab/FollowTab"
import MoreButton from "../components/MoreButton/MoreButton";
import ResultCard from "../components/ResultCard/ResultCard";
import { FC, useState, useEffect } from 'react';
import { Users} from '../api/api';
import { leftArrow } from "../../assets/icon"; 
import { Link, useSearchParams } from 'react-router-dom'
import { getResults } from "../api/api";
import Loading from "../components/Loading/Loading";

interface SearchPageProps {
    users: Users;
  }

const ResultPage:FC<SearchPageProps> = ({users}) => {

const SearchStyle ={
    display:'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '210px'
}
const ResultStyle = {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '92px',
    marginLeft: '-40px',
    paddingBottom: '24px'
}
const leftArrowStyle = {
    width: '26px',
    height: '26px',
}
const textStyle: React.CSSProperties = {
    width: '102px',
    height: '45px',
    color: 'white',
    fontFamily: 'Ubuntu',
    fontSize: '30px',
    fontWeight: '400',
    lineHeight: '45px',
    letterSpacing: '0.25px',
    textAlign: 'left',
    paddingLeft: '25px'
}
const ResultsCardStyle = {
    width: '725px',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '31px 34px',

}

const [results, setResults] = useState<Users[]>([]);
const [page, setPage] = useState(1)
const [searchParams] = useSearchParams()
const pageSize = searchParams.get('pageSize')
const keyword = searchParams.get('keyword')

const [loading, setLoading] = useState(false);

useEffect(() => {
    const fetchResults = async () => {
      const data = await getResults({ page, pageSize, keyword });
    setResults((prevResults) => {
        const newData = data.filter(newItem => !prevResults.some(prevItem => prevItem.id === newItem.id));
        return [...prevResults, ...newData];
    });
    }
//為了讓Loading圖示出現的更清楚而故意延遲0.3秒後才加載資料
    setTimeout(() => {
        setLoading(false);
        fetchResults();
    }, 300); 
}, [page, pageSize, keyword,]);

const handleClick = () => {
    setLoading(true);
    setPage((page) => page + 1);
  };


    return (
        <div>
                <NavBar />
                <FollowTab Users={users} />
            <span style={SearchStyle}>
                <div style={ResultStyle}>
                    <Link to='/exam2'>
                    <span style={leftArrowStyle}>{leftArrow}</span>
                    </Link>
                    <span style={textStyle}>Results</span>
                </div>
                <div style={ResultsCardStyle}>
                {results.map((result)=>( 
                    <ResultCard name={result.name} username={result.username} avater={result.avater}/>
                    ))}
                </div>
                {loading ? (<Loading />) : ''}
                <MoreButton onClick={handleClick}/>
            </span>
        </div>
    )
}

export default ResultPage