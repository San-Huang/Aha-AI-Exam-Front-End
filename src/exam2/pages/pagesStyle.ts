// ResultPage.tsx
export const resultBoxStyle = {
    display:'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '210px',
    transition: 'padding 0.7s ease',
    '@media (max-width: 1000px)': {
        paddingLeft: '160px',
      },
      '@media (max-width: 770px)': {
        paddingLeft: '100px',
      },
}

export const resultStyle = {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '94px',
    marginLeft: '-44px',
    paddingBottom: '24px'
}

export const leftArrowStyle = {
    width: '26px',
    height: '26px',
}

export const textStyle: React.CSSProperties = {
    width: '102px',
    height: '45px',
    color: 'white',
    fontFamily: 'Ubuntu',
    fontSize: '30px',
    fontWeight: '400',
    lineHeight: '45px',
    letterSpacing: '0.25px',
    textAlign: 'left',
    paddingLeft: '25px'
}

export const resultsCardStyle = {
    width: '725px',
    height: 'calc(100vh - 270px)',
    overflow: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '31px 34px',
    '@media (max-width: 900px)': {
        gridTemplateColumns: 'repeat(2, 1fr)', 
        width: '472px',
      },
}

export const hiddenNavBar = {
    '@media (max-width: 770px)': {
        visibility: 'hidden'
      },
}


export const resultLoading = {
    width: '40px',
    height: '40px',
    position: 'relative',
    top: '-40px',
    left: '110px',
}




// SearchPage.tsx
export const searchStyle = {
    display:'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '210px',
    transition: 'padding 0.7s ease',
    '@media (max-width: 800px)': {
        paddingLeft: '150px',
      },
      '@media (max-width: 670px)': {
        paddingLeft: '80px',
      },
}

export const textPerPageStyle = {
    margin: '0',
    color: 'white',
    fontFamily: 'Ubuntu',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '150%',
    textTransform: 'capitalize' as 'capitalize',
}

export const numberResultsStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    height:'50px',
    width: '115px',
    margin: '0px',
    padding:'15px 0px 16px 0px',
    color: 'white',
}

export const textNumberStyle = {
    height:'50px',
    fontFamily: 'Ubuntu',
    fontSize: '48px',
    fontWeight: '700',
    paddingRight: '10px',
}

export const textResultsStyle = {
    margin: '0px',
    paddingBottom: '4px',
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: '0.15px',
}

// TagsPage.tsx
export const tagStyle ={
    display:'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '337px',
    transition: 'padding 0.7s ease',
    '@media (max-width: 1300px)': {
        paddingLeft: '230px',
      },
      '@media (max-width: 900px)': {
        paddingLeft: '200px',
      },
      '@media (max-width: 670px)': {
        paddingLeft: '120px',
      },
}

export const tagNavBar = {
    '@media (max-width: 670px)': {
        visibility: 'hidden',
      },
}


export const tagResultStyle = {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '84px',
    paddingBottom: '24px'
}

export const tagTextStyle: React.CSSProperties = {
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

export const tagResultsCardStyle = {
    width: '846px',
    height: 'calc(100vh - 200px)',
    overflow: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '36px 24px',
    '@media (max-width: 1100px)': {
      gridTemplateColumns: 'repeat(4, 1fr)', 
      width: '672px',
    },
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(3, 1fr)', 
      width: '498px',
    },
    '@media (max-width: 670px)': {
      gridTemplateColumns: 'repeat(2, 1fr)', 
      width: '324px',
    },
}


export const tagLoading = {
    width: '40px',
    height: '40px',
    position: 'relative',
    top: '-40px',
    left: '70px',
}