// ResultPage.tsx
export const searchStyle = {
    display:'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '210px'
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
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '31px 34px',
}

// SearchPage.tsx
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
    '@media (max-width: 680px)': {
        gridTemplateColumns: 'repeat(1, 1fr)', 
        width: '220px',
    },
}
