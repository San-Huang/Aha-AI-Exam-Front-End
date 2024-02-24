export const sliderBoxStyle = {
    textAlign: 'left',
}

export const sliderStyle = {
    width: '725px',
    height:'8px',
    transition: 'width 0.7s ease',
    '@media (max-width: 1000px)': {
      width: '500px', 
    },
    '@media (max-width: 670px)': {
      width: '343px', 
    },
    '& .MuiSlider-mark': {
      display: 'none',
    },
    '& .MuiSlider-thumb': {
      width:' 26px',
      height: '26px',
      backgroundColor: '#1B1B1B',
      border:'6px solid #FFD05D'
    },
    '& .MuiSlider-track': {
      border: 'none',
      backgroundImage: 'linear-gradient(to right, #FF5C01, #FFD25F)',
    },
    '& .MuiSlider-rail': {
      color: 'rgba(255, 255, 255, 0.3)',
    },
}

export const sliderValueStyle = {
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%', 
    letterSpacing: '0.15px',
    marginTop: '5px',
  }

export const dividerStyle = {
    width: '725px',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: '30px',
    marginBottom: '335px',
    transition: 'width 0.7s ease, margin 0.7s ease',
    '@media (max-width: 1000px)': {
      width: '500px',
    },
    '@media (max-width: 670px)': {
      width: '343px', 
    },
    '@media (max-height: 830px)': {
      marginBottom: '200px',
    },
    '@media (max-height: 680px)': {
      marginBottom: '30px',
    },
}