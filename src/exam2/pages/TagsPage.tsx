import { FC, useState, useEffect } from 'react';
import TagCard from "../components/TagCard/TagCard";
import { getTags } from "../api/api";
import TagsNavBar from "../components/NavBar/TagsNavBar";
import Loading from '../../assets/Loading';
import { Box } from '@mui/system';
import * as style from './pagesStyle';

interface TagProps {
    id: string
    name: string
    count: number
  }
  
  interface TagsPageProps {
    tagProps: TagProps
  }

const TagsPage: FC<TagsPageProps> = () => {

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
      // Deliberately delayed the loading of data by 0.3 seconds to make the loading icon appear more clearly.
      setTimeout(() => {
        setLoading(false)
        fetchMoreTags();
    }, 300); 
    }
  }, [loading]);

    return (
        <div>
            <TagsNavBar />
            <span style={style.tagStyle}>
                <div style={style.tagResultStyle}>
                    <span style={style.tagTextStyle}>Tags</span>
                </div>
                <Box sx={style.tagResultsCardStyle}>
                  { tags.map((tag) => ( 
                      <TagCard 
                        id={tag.id} 
                        name={tag.name} 
                        count={tag.count}
                      />
                    ))
                  }
                  {loading ? <Loading/> : ''}
                </Box>
            </span>
        </div>
    )
}

export default TagsPage;