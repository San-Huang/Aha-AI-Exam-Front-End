import { FC, useState, useEffect } from 'react';
import {Box,Tab,Tabs} from '@mui/material/';
import Follower from '../Follower/Follower';
import { Users, getFollowers, getFollowing } from '../../api/api';
import Loading from '../Loading/Loading';

interface FollowTabProps {
    Users: Users;
  }

const FollowTab:FC<FollowTabProps> = () => {

    const BoxStyle = {
        backgroundColor: 'rgba(27, 27, 27, 1)',
        width: '375px',
        height: '100vh',
        position: 'absolute',
        top: '0',
        right: '0',
        overflow: 'auto',
        '@media (max-width: 1300px)': {
            display: 'none',
          },
    }

    const TabsStyle ={
        padding:'16px 0px  32px 0px',
        '& .MuiTabs-indicator': {
            backgroundColor: '#fff',
        },
    }
    const TabStyle = {
        width: '187px',
        height: '33px',
        padding: '5px 0px 0px 0px',
        fontFamily: 'Ubuntu',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px',
        letterSpacing: '0.35px',
        textTransform: 'none',
        color: 'rgba(146, 146, 146, 0.87)',
        '&.Mui-selected': {
            color: '#fff',
        },    
    }
    const FollowerSpanStyle = {
        display:'flex',
        alignItems: 'center',
        flexDirection: 'column' as 'column',
        gap: '16px',
        
    }

      const [followers, setFollowers] = useState<Users[]>([]);
      const [following, setFollowing] = useState<Users[]>([]);
      const [currentTab, setCurrentTab] = useState('Followers');
      const [loading, setLoading] = useState(false);
    
      const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setCurrentTab(newValue);
      };

      useEffect(() => {
        const fetchData = async () => {
          let data: Users[] = [];
          if (currentTab === 'Followers') {
            data = await getFollowers();
            setFollowers((prevData) => [...prevData, ...data]);
          } else {
            data = await getFollowing();
            setFollowing((prevData) => [...prevData, ...data]);
          }
          setLoading(false);
        };

        const scrollContainer = document.getElementById('FollowTab');
        if (scrollContainer && scrollContainer.scrollHeight <= scrollContainer.clientHeight) {
            fetchData();
        }

        if (currentTab === 'Followers') {
            setFollowing([]);
          } else {
            setFollowers([]);
          }

        fetchData();
      }, [currentTab]);
      



      useEffect(() => {
        const scrollContainer = document.getElementById('FollowTab');
        const handleScroll = () => {
            if (
                scrollContainer &&
                scrollContainer.scrollHeight - scrollContainer.scrollTop === scrollContainer.clientHeight
            ) {
                setLoading(true);
            }
        };
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            return () => {
                scrollContainer.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);
    
      useEffect(() => {
        const fetchData = async () => {
          let data: Users[] = [];
          if (currentTab === 'Followers') {
            data = await getFollowers();
            setFollowers((prevData) => [...prevData, ...data]);
          } else {
            data = await getFollowing();
            setFollowing((prevData) => [...prevData, ...data]);
          }
        }

        if (loading) { 
        // 為了讓Loading圖示出現的更清楚而故意延遲0.3秒後才加載資料
        setTimeout(() => {
            setLoading(false);
            fetchData();
        }, 300);
    }
      }, [loading]);


   

    return (
    <div>
        <Box sx={BoxStyle} id={'FollowTab'}>
            <Tabs
                sx={TabsStyle}
                value={currentTab}
                onChange={handleChange}
                centered={true}
            >
                <Tab sx={TabStyle} value="Followers" label="Followers" disableRipple />
                <Tab sx={TabStyle} value="Following" label="Following" disableRipple />
            </Tabs>
            <span style={FollowerSpanStyle} >
                <Follower followers={currentTab === 'Followers' ? followers : following} />
            </span>
            {loading ? <Loading/> : ''}
        </Box>
    </div>)
}


export default FollowTab