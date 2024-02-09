import { FC, useState, useEffect } from 'react';
import {Avatar} from '@mui/material';
import FollowButton from '../FollowButton/FollowButton';
import FollowingButton from '../FollowingButton/FollowingButton';
import { Users } from '../../api/api'

interface FollowerProps {
    followers: Users[];
  }

const Follower:FC<FollowerProps> = ({ followers }) => {

    const FollowersStyle ={
        width: '343px',
        height: '45px',
        display:'flex',
        alignItems: 'center',
        paddingBottom: '16px'
    }
    const AvatarStyle = {
        width: '38px',
        height: '38px',
        border: '1px solid #F8F8F8',
        borderRadius: '5px',
    }
    const NameStyle = {
        width: '100%',
        height: '45px',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column' as 'column',
        paddingLeft: '15px',
    }
    const FullNameStyle = {
        fontFamily: 'Ubuntu',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '150%',
        letterSpacing: '0.15px',
        color: 'rgba(255, 255, 255, 1)',
    }
    const UsernameStyle = {
        fontFamily: 'Ubuntu',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '150%',
        letterSpacing: '0.25px',
        color: 'rgba(255, 255, 255, 0.5)',
    }
    const FollowButtonStyle = {
        width: '209px',
        height: '45px',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }

    return (
        <div>
            {followers.map(user => (
                <div style={FollowersStyle} key={user.id}>
                <Avatar 
                    sx={AvatarStyle} 
                    variant="square"
                    src={user.avater}/>
                <div style={NameStyle}>
                    <span style={FullNameStyle}>{user.name}</span>
                    <span style={UsernameStyle}>{user.username}</span>
                </div>
                <span style={FollowButtonStyle}>
                    {user.isFollowing ? <FollowingButton /> : <FollowButton />}
                </span>
            </div>
            ))}
        </div>
    )
}

export default Follower