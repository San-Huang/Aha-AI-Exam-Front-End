// Password.tsx
export const passwordTitleStyle = {
    marginTop: '50px',
    color: 'white',
    fontFamily: 'Ubuntu',
    fontSize:'40px',
    fontWeight:'700',
    letterSpacing:'-1.5px',
  }

export const passwordFieldStyle = {
    marginTop: '50px',
    input: { 
      color: 'white',
      padding:'13px 9px',
      fontFamily: 'Ubuntu',
      fontSize:'16px',
      fontStyle:'normal',
      fontWeight:'400',
      lineHeight:'150%',
      letterSpacing:'0.15px',
    },
    '& .MuiOutlinedInput-root': {
      width: '334px',
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
    },
  }

  export const passwordLabelStyle = {
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



  // PasswordValidation.tsx
export const listStyle = {
    width: '310px',
    height: '210px',
    borderRadius: '8px',
    backgroundColor: '#242424',
    color: 'white',
    margin: 'auto',
    marginTop: '20px',
    boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.30)',
    position: 'flex',
    alignItems:'center',
    padding: '8px 12px 8px 12px',
}

export const iconStyle ={
    padding: '2px 12px 2px 2px',
    display: 'flex',
    alignItems: 'center',
}

export const generateListItemStyle = (height = '0') => ({ 
    paddingLeft: '0',
    width: '311px',
    height,
})

export const generateListItemTextStyle = (margin = '0') => ({
    '& .MuiListItemText-primary':{
        height:'24px',
        width: '273px',
        padding: '8px 16px 8px 0px',
        fontFamily: 'Ubuntu',
        fontSize:'14px',
        fontStyle:'normal',
        fontWeight:'400',
        lineHeight:'150%',
        letterSpacing:'0.25px',
        display: 'flex',
        alignItems: 'center',
        margin,
    }
})



