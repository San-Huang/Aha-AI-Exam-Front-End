import {Typography, Card, CardMedia, CardActionArea} from '@mui/material';
import exam1 from '../../assets/images/exam1.png';
import exam2 from '../../assets/images/exam2.png';
import { Link } from 'react-router-dom';
import * as style from './pageStyle';

const HomePage = () => {

   return ( 
    <div>
        <p style={style.titleStyle}>Aha AI Front-end Exam</p>
        <p style={style.nameStyle}>Huang Chien Yeh</p>
        <div style={style.cardStyle} >
            <Link to='/exam1/password' style={{ textDecoration: 'none' }}>
                <Card sx={style.examOneCardStyle}>
                    <CardActionArea>
                        <CardMedia
                            sx={style.cardMediaStyle}
                            component="img"
                            image={exam1}
                            alt="exam 1"
                        />
                        <Typography sx={style.textStyle}>
                            Exam 1
                        </Typography>
                    </CardActionArea>
                </Card>
            </Link>
            <Link to='/exam2' style={{ textDecoration: 'none' }}>
                <Card sx={style.examTwoCardStyle}>
                    <CardActionArea>
                        <CardMedia
                            sx={style.cardMediaStyle}
                            component="img"
                            image={exam2}
                            alt="exam 2"
                        />
                        <Typography sx={style.textStyle}>
                            Exam 2
                        </Typography>
                    </CardActionArea>
                </Card>
            </Link>
        </div>
    </div>
    )
}

export default HomePage;