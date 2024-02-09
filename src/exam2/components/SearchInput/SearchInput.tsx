import { Typography, TextField, Divider } from '@mui/material';

 const SearchInput = ({ setKeyword }:any) => {
      
    const SearchTitleStyle = {
      marginTop: '54px',
      color: 'white',
      fontFamily: 'Ubuntu',
      fontSize:'24px',
      fontStyle: 'normal',
      fontWeight:'400',
      letterSpacing:'-1.5px',
      lineHeight: '150%',
      textTransform: 'capitalize',
    }
    const passwordFieldStyle = {
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
        '@media (max-width: 1300px)': {
          width: '500px', 
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
    const dividerStyle = {
      width: '725px',
      height: '1px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      margin: '30px 0px',
      transition: 'width 0.7s ease',
      '@media (max-width: 1300px)': {
        width: '500px',
        height: '1px',  // 添加 height 属性
        backgroundColor: 'rgba(255, 255, 255, 0.1)',  // 添加 backgroundColor 属性
        margin: '30px 0px',  // 添加 margin 属性
      },
    };
    


    return (
        <div style={{
          textAlign: 'left',
          }}>
          <Typography sx={SearchTitleStyle}>
            Search
          </Typography>
          
          <TextField
            type="text"
            placeholder="Keyword"
            sx={passwordFieldStyle}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Divider sx={dividerStyle} />
        </div>
    )
}

export default SearchInput