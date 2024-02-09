
interface results {
    name: string
    username: string
    avater: string
}

const ResultCard: React.FC<results> = ({name,username,avater}) => {
    const cardStyle = {
        width: '219px',
        height: '197px',
        display:'flex',
        flexDirection: 'column' as 'column',
    }
    const imageStyle = {
        width: '219px',
        height: '146px',

    }
    const titleStyle: React.CSSProperties = {
        fontFamily: 'Ubuntu',
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '22.35px',
        letterSpacing: '0.14px',
        textAlign: 'left',
        color: 'white',
        margin: '0',
        paddingTop: '12px'
    }
    const usernameStyle: React.CSSProperties = {
        fontFamily: 'Ubuntu',
        fontSize: '11.17px',
        fontWeight: '400',
        lineHeight: '16.76px',
        letterSpacing: '0.37px',
        textAlign: 'left',
        color: 'rgba(178, 178, 178, 1)',
        margin: '0',
    }



    return (
        <div style={cardStyle}>
            <img style={imageStyle} src={avater} alt={name}></img>
            <p style={titleStyle}>{name}</p>
            <p style={usernameStyle}>by {username}</p>
        </div>
    )
}

export default ResultCard