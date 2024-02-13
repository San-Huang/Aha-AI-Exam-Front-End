export const passwordTitle = {
    marginTop: '50px',
    color: 'white',
    fontFamily: 'Ubuntu',
    fontSize:'40px',
    fontWeight:'700',
    letterSpacing:'-1.5px',
    
  }

export const birthdayField = {
    marginTop: '50px',
    input: { 
      color: 'white',
      padding:'2px 9px 0px 12px',
      fontFamily: 'Ubuntu',
      fontSize:'16px',
      fontStyle:'normal',
      fontWeight:'400',
      lineHeight:'150%',
      letterSpacing:'0.15px',
    },
    '& .MuiOutlinedInput-root': {
      width: '335px',
      height: '57px',
      backgroundColor:'none',
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
        border: '3px solid #00A3FF',
      },
    },
    '& input::placeholder': {
      color: 'rgba(255, 255, 255, 0.5)',
      padding: '0px 0px 0px 3px',
    },
  }

  export const birthdayLabel = {
    shrink: true,
    style: {
      color: 'white',
      fontFamily: 'Ubuntu',
      marginLeft:'2px',
      fontWeight: '400',
      lineHeight: '18px',
      letterSpacing: '0.4px',
      marginTop: '3px',
    },
  }
