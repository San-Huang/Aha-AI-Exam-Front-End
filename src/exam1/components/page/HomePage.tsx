import {Typography, Card, CardMedia, CardActionArea} from '@mui/material';
import exam1 from '../../../assets/images/exam1.png'
import exam2 from '../../../assets/images/exam2.png'
import { Link } from 'react-router-dom'

const HomePage = () => {
   
    const titleStyle = {
        color: 'white',
        fontFamily: 'Ubuntu',
        fontSize:'40px',
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:'150%',
        letterSpacing:'0.15px',
        marginTop: '100px'
    }
    const nameStyle = {
        color: 'white',
        fontFamily: 'Ubuntu',
        fontSize:'24px',
        fontStyle:'normal',
        fontWeight:'400',
        lineHeight:'150%',
        letterSpacing:'0.15px',
    }

    const CardStyle = {
        width: '630px',
        height: '344px',
        display: 'flex',
        gap: '30px',
        margin: 'auto',
        marginTop: '50px',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const examOneCardStyle = {
        width: '300px',
        height: '344px',
        borderRadius: '15px',
        transition: '0.3s',
        border: '3px solid #00A3FF', 
        '&:hover': {
            boxShadow: '0 0 30px 5px #00A3FF', 
            transition: 'box-shadow 0.3s ease-in-out',
            },
    }

    const examTwoCardStyle = {
        width: '300px',
        height: '344px',
        borderRadius: '15px',
        transition: '0.3s', 
        border: '3px solid #FF9730', 
        '&:hover': {
            boxShadow: '0 0 30px 5px #FF9730', 
            transition: 'box-shadow 0.3s ease-in-out',
            },
    }

    const CardMediaStyle = {
        width: '300px',
        height: '300px',
    }
    const TextStyle = {
        fontFamily: 'Ubuntu',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '150%',
        letterSpacing: '0.25px',
        padding: '7px 0px',
        backgroundColor:'#181818',
        color: 'rgba(255, 255, 255, 0.7)',
    }


   return ( 
    <>
     <p style={titleStyle}>Aha AI Front-end Exam</p>
     <p style={nameStyle}>Chien Yeh Huang</p>
     <div style={CardStyle} >
     <Link to='/exam1/password' style={{ textDecoration: 'none' }}>
        <Card sx={examOneCardStyle}>
            <CardActionArea>
                <CardMedia
                sx={CardMediaStyle}
                    component="img"
                    image={exam1}
                    alt="exam 1"
                    />
                    <Typography sx={TextStyle}>
                        Exam 1
                    </Typography>
            </CardActionArea>
        </Card>
    </Link>
    <Link to='/exam2' style={{ textDecoration: 'none' }}>
        <Card sx={examTwoCardStyle}>
            <CardActionArea>
                <CardMedia
                sx={CardMediaStyle}
                    component="img"
                    image={exam2}
                    alt="exam 2"
                    />
                    <Typography sx={TextStyle}>
                        Exam 2
                    </Typography>
            </CardActionArea>
        </Card>
    </Link>
    </div>
    </>
    )
}


export default HomePage