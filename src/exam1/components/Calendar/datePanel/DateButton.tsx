import { FC } from "react";
import './DateButton.css'

type Props = {
    onOk: () => void;
    onCancel: () => void;
  }

const DateButton: FC<Props> = ({onOk, onCancel}) => {
    
    return (
        <div style={{
            height: '56px',
            width: '320px',
    }}>
        <button className="button-cancel" onClick={onCancel}>Cancel</button>
        <button className="button-OK" onClick={onOk}>OK</button>
    </div>
)
}

export default DateButton