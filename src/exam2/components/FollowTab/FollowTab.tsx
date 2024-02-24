import { FC, useState, useEffect } from 'react';
import { Box, Tab, Tabs } from '@mui/material/';
import Follower from '../Follower/Follower';
import { Users, getFollowers, getFollowing } from '../../api/api';
import Loading from '../../../assets/Loading';
import * as style from './FollowTabStyle';

interface FollowTabProps {
    Users: Users
  }

const FollowTab:FC<FollowTabProps> = () => {

  const [followers, setFollowers] = useState<Users[]>([])
  const [following, setFollowing] = useState<Users[]>([])
  const [currentTab, setCurrentTab] = useState('Followers')
  const [loading, setLoading] = useState(false)
    
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setCurrentTab(newValue)
  }

  useEffect(() => {
    const fetchData = async () => {
      let data: Users[] = []
      if (currentTab === 'Followers') {
        data = await getFollowers();
        setFollowers((prevData) => [...prevData, ...data])
      } else {
         data = await getFollowing();
         setFollowing((prevData) => [...prevData, ...data])
      }
      setLoading(false)
  }


  const scrollContainer = document.getElementById('FollowTab')
  if (scrollContainer && scrollContainer.scrollHeight <= scrollContainer.clientHeight) {
       fetchData();
  }

  if (currentTab === 'Followers') {
      setFollowing([]);
     } else {
      setFollowers([]);
     }

    fetchData()
  }, [currentTab])
      

  useEffect(() => {
    const scrollContainer = document.getElementById('FollowTab')
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
        const fetchData = async () => {
          let data: Users[] = [];
          if (currentTab === 'Followers') {
            data = await getFollowers();
            setFollowers((prevData) => [...prevData, ...data])
          } else {
            data = await getFollowing();
            setFollowing((prevData) => [...prevData, ...data])
          }
        }

        if (loading) { 
        // Deliberately delayed the loading of data by 0.3 seconds to make the loading icon appear more clearly.
        setTimeout(() => {
            setLoading(false)
            fetchData()
        }, 300)
    }
      }, [loading])

    return (
      <div>
          <Box sx={style.boxStyle} id={'FollowTab'}>
              <Tabs
                  sx={style.tabsStyle}
                  value={currentTab}
                  onChange={handleChange}
                  centered={true}
              >
                <Tab 
                  sx={style.tabStyle} 
                  value="Followers" 
                  label="Followers" 
                  disableRipple 
                />
                <Tab 
                  sx={style.tabStyle} 
                  value="Following" 
                  label="Following" 
                  disableRipple 
                />
              </Tabs>
              <span style={style.followerSpanStyle} >
                  <Follower followers={currentTab === 'Followers' ? followers : following} />
              </span>
              <Box sx={style.loadingStyle}>
                {loading ? <Loading/> : ''} 
              </Box>
          </Box>
      </div>
    )
}

export default FollowTab;