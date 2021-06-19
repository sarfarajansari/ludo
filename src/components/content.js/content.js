import React,{ useEffect, useState} from 'react';
import BoardLogic from "../helper/board/boardlogic"
import Alert from "../helper/alert/alert"
import Loading from "../helper/alert/loading"
import useForceUpdate from "../helper/forceupdate"
import Editor from '../helper/board/editor';
import { Switch ,Route} from "react-router-dom";



const content = () => {
    const forceUpdate =useForceUpdate()
    const [storage, setStorage] = useState({
        alert:"",
        alertType:"error",
        loading:false
    })
    useEffect(() => {
        setInterval(forceUpdate,10)
    },[])
    const updateStorage =(lists)=>{
        var current_state = storage
        for(var i =0 ;i<lists.length;i++){
            current_state[lists[i][0]]=lists[i][1]
        }
        setStorage(current_state)
    }
    return (
        <div>
            <div className={storage.loading?"is_loading":""}>
            <Switch>
                <Route exact path="/play/:token/" render={(props) => <BoardLogic {...props} update={updateStorage} />} />
            </Switch>
            </div>
            {/* <Editor/> */}
            <Loading loading={storage.loading}/>
            <Alert alert={storage.alert} update={updateStorage} alertType={storage.alertType}/>
        </div>
    );
}

export default content;
