
interface results {
    id: string
    name: string
    count: number
}

const TagCard: React.FC<results> = ({id,name,count}) => {
    const cardStyle = {
        width: '150px',
        height: '199px',
        display:'flex',
        flexDirection: 'column' as 'column',
        backgroundColor: '',
    }
    const tagStyle = {
        width: '150px',
        height: '150px',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',

    }

    const tagFrameStyle = {
        maxWidth: '130px',
        marginLeft: '10px',
        marginBottom: '14px', 
    }

    const tagTextStyle: React.CSSProperties = {
        maxWidth: '130px',
        height: '36px',
        border: '4px solid white',
        borderRadius: '8px',
        color: 'white',
        fontFamily: 'Ubuntu',
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '36px',
        letterSpacing: '0px',
        textAlign: 'left',
        padding: '3px 10px',
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis', 
    }

    const nameStyle: React.CSSProperties = {
        fontFamily: 'Ubuntu',
        fontSize: '14.9px',
        fontWeight: '400',
        lineHeight: '22.35px',
        letterSpacing: '0.14px',
        textAlign: 'left',
        color: 'white',
        margin: '0',
        paddingTop: '12px',
        maxWidth: '150px',
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis', 
    }
    const countStyle: React.CSSProperties = {
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
        <div style={cardStyle} key={id}>
            <div style={tagStyle}>
                <div  style={tagFrameStyle}>
                    <div style={tagTextStyle}>
                        {name}
                    </div>
                </div>
            </div>
            <p style={nameStyle}>{name}</p>
            <p style={countStyle}>{count} Results</p>
        </div>
    )
}

export default TagCard