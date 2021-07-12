import React ,{ useState }from 'react';
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import Pageheader from '../../online/helper/page-header/pageheader';
import "./name.css"

const name = () => {
    const [name, setname] = useState("")
    const saveName=()=>{
        if(name!==""){
            localStorage.setItem("name", name)
        }
    }
    return (
        <div className="game-grid name box-element">
            <Pageheader title={"Enter Name"}/>
            <div className="nameSet-container">
                <Input
                    placeholder="Enter your name"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="This name will be used in all your games !">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                    onChange={(e)=>setname(e.target.value)}
                    value={name}
                    onPressEnter={saveName}
                /> 
            </div>
            <button className="btn" onClick={saveName}>Save</button>
        </div>
    );
}

export default name;
