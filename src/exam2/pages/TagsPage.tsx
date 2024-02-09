import { FC, useState, useEffect } from 'react';
import TagCard from "../components/TagCard/TagCard";
import { getTags } from "../api/api";
import TagsNavBar from "../components/TagsNavBar/TagsNavBar";
import Loading from '../components/Loading/Loading';
import { Box } from '@mui/system';

interface TagProps {
    id: string;
    name: string;
    count: number;
  }
  
  interface TagsPageProps {
    tagProps: TagProps;
  }

const TagsPage: FC<TagsPageProps> = ({tagProps}) => {

const SearchStyle ={
    display:'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '257px'
}
const ResultStyle = {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '92px',
    paddingBottom: '24px'
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
}
const ResultsCardStyle = {
    width: '846px',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '36px 24px',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(4, 1fr)', 
      width: '672px',
    },
    '@media (max-width: 992px)': {
      gridTemplateColumns: 'repeat(3, 1fr)', 
      width: '498px',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)', 
      width: '324px',
    },
}


const [tags, setTags] = useState<TagProps[]>([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
    const fetchTags = async () => {
      const data = await getTags();
      setTags(data)
      setLoading(false)
    };
    
    fetchTags()
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setLoading(true)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      const fetchMoreTags = async () => {
        const data = await getTags();
        setTags((prevTags) => [...prevTags, ...data]);
      };
      //為了讓Loading圖示出現的更清楚而故意延遲0.3秒後才加載資料
      setTimeout(() => {
        setLoading(false)
        fetchMoreTags();
    }, 300); 
    }
  }, [loading]);

    return (
        <div>
            <TagsNavBar />
            <span style={SearchStyle}>
                <div style={ResultStyle}>
                    <span style={textStyle}>Tags</span>
                </div>
                <Box sx={ResultsCardStyle}>
                {tags.map((tag) => ( 
                        <TagCard id={tag.id} name={tag.name} count={tag.count}/>
                        ))}
                {loading ? <Loading/> : ''}
                </Box>
            </span>
        </div>
    )
}

export default TagsPage