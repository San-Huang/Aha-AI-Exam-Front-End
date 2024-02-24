export const searchInputStyle = {
    textAlign: 'left',
}

export const searchTitleStyle = {
    marginTop: '54px',
    color: 'white',
    fontFamily: 'Ubuntu',
    fontSize:'24px',
    fontStyle: 'normal',
    fontWeight:'400',
    letterSpacing:'0px',
    lineHeight: '150%',
    textTransform: 'capitalize',
  }

 export const searchFieldStyle = {
    marginTop: '20px',
    input: { 
      color: 'white',
      padding:'20px 18px',
      fontFamily: 'Ubuntu',
      fontSize:'14px',
      fontStyle:'normal',
      fontWeight:'400',
      lineHeight:'150%',
      letterSpacing:'0.25px',
    },
    '& .MuiOutlinedInput-root': {
      width: '725px',
      height: '60px',
      backgroundColor:'none',
      transition: 'width 0.7s ease',
      '@media (max-width: 1000px)': {
        width: '500px', 
      },
      '@media (max-width: 670px)': {
        width: '343px', 
      },
      '& fieldset': {
        border: '3px solid rgba(255, 255, 255, 0.50)',
        borderRadius: '8px',
        transition: '0.3s', 
      },
      '&:hover fieldset': {
        borderColor: 'white',
        transition: '0.3s', 
      },
      '&.Mui-focused fieldset': {
        border: '3px solid #FF9B33',
      },
    },
    '& input::placeholder': {
      color: 'rgba(255, 255, 255, 0.5)',
      padding: ''
    },
  }
  
  export const dividerStyle = {
    width: '725px',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    margin: '30px 0px',
    transition: 'width 0.7s ease',
    '@media (max-width: 1000px)': {
      width: '500px',
    },
    '@media (max-width: 670px)': {
      width: '343px', 
    },
  };