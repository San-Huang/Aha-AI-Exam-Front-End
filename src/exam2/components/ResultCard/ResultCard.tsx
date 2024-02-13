import * as style from './ResultCardStyle';

interface results {
    name: string
    username: string
    avater: string
}

const ResultCard: React.FC<results> = ({ name, username, avater }) => {
    
    return (
        <div style={style.cardStyle}>
            <img style={style.imageStyle} src={avater} alt={name} />
            <p style={style.titleStyle}>
                {name}
            </p>
            <p style={style.usernameStyle}>
                by {username}
            </p>
        </div>
    )
}

export default ResultCard;