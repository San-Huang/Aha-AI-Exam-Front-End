export const boxStyle = {
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

export const tabsStyle = {
    padding:'16px 0px  32px 0px',
    backgroundColor: 'rgba(27, 27, 27, 1)',
    position: 'fixed',
    zIndex:'999',
    '& .MuiTabs-indicator': {
        backgroundColor: '#fff',
    },
}

export const tabStyle = {
    width: '187px',
    height: '33px',
    padding: '5px 0px 0px 0px',
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0.35px',
    textTransform: 'none',
    color: 'rgba(146, 146, 146, 0.87)',
    '&.Mui-selected': {
        color: '#fff',
        fontWeight: '700',
    },    
}

export const followerSpanStyle = {
    display:'flex',
    alignItems: 'center',
    flexDirection: 'column' as 'column',
    gap: '16px',
}

export const loadingStyle = {
    width: '50px',
    height: '50px',
    margin: 'auto',
}