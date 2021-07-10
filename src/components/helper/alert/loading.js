import { Spin} from 'antd';
import React from "react";
import "./alert.css"

const Loading = (props) => {
    return (
        <div className="spinner">
            <Spin size="large" spinning={props.loading}/>
        </div>
    );
}

export default Loading;
