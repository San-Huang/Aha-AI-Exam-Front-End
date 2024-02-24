import { FC } from 'react';
import {Avatar} from '@mui/material';
import FollowButton from '../FollowButton/FollowButton';
import FollowingButton from '../FollowingButton/FollowingButton';
import { Users } from '../../api/api';
import * as style from './FollowerStyle';

interface FollowerProps {
    followers: Users[]
  }

const Follower:FC<FollowerProps> = ({ followers }) => {

    return (
        <div style={style.divStyle}>
            { followers.map(user => (
                <div style={style.followersStyle} key={user.id}>
                    <Avatar 
                        sx={style.avatarStyle} 
                        variant="square"
                        src={user.avater}/>
                    <div style={style.nameStyle}>
                        <span style={style.fullNameStyle}>{user.name}</span>
                        <span style={style.usernameStyle}>{user.username}</span>
                    </div>
                    <span style={style.followButtonStyle}>
                        {user.isFollowing ? <FollowingButton /> : <FollowButton />}
                    </span>
                </div>
                ))
            }
        </div>
    )
}

export default Follower;