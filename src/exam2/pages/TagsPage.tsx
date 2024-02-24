import { FC, useState, useEffect, useRef } from 'react';
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
    const scrollContainer = document.getElementById('TagBox')
    const handleScroll = () => {
        if (
            scrollContainer
            && scrollContainer.scrollHeight - scrollContainer.scrollTop 
            === scrollContainer.clientHeight
             ) {
              setLoading(true)
             }
        }
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll)
            return () => {
                scrollContainer.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

  useEffect(() => {
    if (loading) {
      const fetchMoreTags = async () => {
        const data = await getTags();
        setTags((prevTags) => [...prevTags, ...data]);
      };
      // Intentionally delayed the loading of data by 0.3 seconds to make the loading icon appear more clearly.
        setTimeout(() => {
          setLoading(false)
          fetchMoreTags();
      }, 300); 
    }
  }, [loading]);

    return (
        <div>
            <Box sx={style.tagNavBar}>
              <TagsNavBar/>
            </Box>
            <Box sx={style.tagStyle}>
                <div style={style.tagResultStyle}>
                    <span style={style.tagTextStyle}>
                      Tags
                      <Box sx={style.tagLoading}>
                        {loading ? <Loading/> : ''}
                      </Box>
                    </span>
                </div>
                <Box sx={style.tagResultsCardStyle} id={'TagBox'}>
                  { tags.map((tag) => ( 
                      <TagCard 
                        id={tag.id} 
                        name={tag.name} 
                        count={tag.count}
                      />
                    ))
                  }
                </Box>
            </Box>
        </div>
    )
}

export default TagsPage;