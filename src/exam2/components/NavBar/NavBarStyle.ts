// NavBar.tsx
export const navPaperStyle = {
    backgroundColor:'#1B1B1B',
    width: '80px',
    height: '100vh',
    position: 'absolute',
    borderRadius: '0',
}

export const menuListStyle = {
    display:'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
}

export const logoIconStyle = {
    width: '80px',
    height: '88px',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    letterSpacing: '-0.65px',
    color: {
        backgroundImage: "linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      },
}

export const homeIconStyle = {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '150%',
    letterSpacing: '0.4px',
    color: 'white',
    padding: '7px 16px',
}

export const tagIconStyle = {
    padding: '15px 0px 0px 0px',
}

export const tagDotIconStyle = {
    position: 'absolute' as 'absolute',
    top: '1px',
    right: '-5px',
}


// TagsNavBar.tsx
export const homeIconTagBarStyle = {
    padding: '9px 16px 40px 16px',
}

export const tagIconTagBarStyle = {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '150%',
    letterSpacing: '0.4px',
    color: 'white',
    padding: '0px 16px',
}

export const tagTextStyle = {
    marginTop: '-3px',
}