
import { FC, useState, useEffect } from 'react';
import NavBar from "../components/NavBar/NavBar";
import FollowTab from "../components/FollowTab/FollowTab";
import MoreButton from "../components/MoreButton/MoreButton";
import ResultCard from "../components/ResultCard/ResultCard";
import { Box } from '@mui/system';
import Loading from "../../assets/Loading";
import { Users, getResults } from '../api/api';
import { leftArrow } from "../../assets/icon"; 
import { Link, useSearchParams } from 'react-router-dom';
import * as style from './pagesStyle';

interface SearchPageProps {
    users: Users
  }

const ResultPage:FC<SearchPageProps> = ({ users }) => {

    const [results, setResults] = useState<Users[]>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [searchParams] = useSearchParams()
    const pageSize = searchParams.get('pageSize')
    const keyword = searchParams.get('keyword')


    useEffect(() => {
        const fetchResults = async () => {
        const data = await getResults({ page, pageSize, keyword });
        setResults((prevResults) => {
            const newData = data.filter(newItem => !prevResults.some(prevItem => prevItem.id === newItem.id))
            return [...prevResults, ...newData]
        });
        }
        // Intentionally delayed the loading of data by 0.3 seconds to make the loading icon appear more clearly.
        setTimeout(() => {
            setLoading(false)
            fetchResults()
        }, 300)
    }, [page, pageSize, keyword,])

    const handleClick = () => {
        setLoading(true);
        setPage((page) => page + 1)
    }

    return (
        <div>
            <Box sx={style.hiddenNavBar}>
                <NavBar />
            </Box>
            <FollowTab Users={users} />
            <Box sx={style.resultBoxStyle}>
                <div style={style.resultStyle}>
                    <Link to='/exam2'>
                        <span style={style.leftArrowStyle}>{leftArrow}</span>
                    </Link>
                    <span style={style.textStyle}>
                        Results
                        <Box sx={style.resultLoading}>
                        {loading ? <Loading/> : ''}
                      </Box>
                    </span>
                </div>
                <Box sx={style.resultsCardStyle}>
                    { results.map((result)=>( 
                        <ResultCard 
                            name={result.name} 
                            username={result.username} 
                            avater={result.avater}
                        />
                       ))
                    }
                </Box>
                <MoreButton onClick={handleClick}/>
            </Box>
        </div>
    )
}

export default ResultPage;