import * as style from './TagCardStyle';

interface results {
    id: string
    name: string
    count: number
}

const TagCard: React.FC<results> = ({ id, name, count }) => {
    
    return (
        <div style={style.cardStyle} key={id}>
            <div style={style.tagStyle}>
                <div style={style.tagFrameStyle}>
                    <div style={style.tagTextStyle}>
                        {name}
                    </div>
                </div>
            </div>
            <p style={style.nameStyle}>{name}</p>
            <p style={style.countStyle}>{count} Results</p>
        </div>
    )
}

export default TagCard