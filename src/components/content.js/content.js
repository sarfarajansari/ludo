import React,{ useEffect, useState} from 'react';
import Alert from "../helper/alert/alert"
import Loading from "../helper/alert/loading"
import useForceUpdate from "../helper/forceupdate"
import { Switch ,Route} from "react-router-dom";
import Localstarter from "../local/local_starter/localstarter"
import LocalCreator from "../local/localcreator/localCreator"
import modeselector from "../modeSeletor/modeselector"
import OnlineGame from "../online/OnlineGame"
import "./content.css";



const Content = (props) => {
    const sidebar = props.sidebar
    const forceUpdate =useForceUpdate()
    const [storage, setStorage] = useState({
        alert:"",
        alertType:"error",
        loading:false,
        gamestarted:0
    })
    useEffect(() =>setInterval(forceUpdate,10),[])
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
                <Route exact path="/local/play/:token/" render={(props) => <Localstarter {...props} update={updateStorage} sidebar={sidebar} storage={storage} />} />
                <Route exact path="/online/play/:gtoken/:ptoken/" render={(props) => <OnlineGame {...props} update={updateStorage} sidebar={sidebar}/>}/>
                <div className="game-grid">
                    <Route exact path="/newgame/" render={(props) => <LocalCreator {...props} update={updateStorage} storage={storage} />} />
                    <Route exact path="/" component={modeselector}/>
                </div>
            </Switch>
            </div>
            <Loading loading={storage.loading}/>
            <Alert alert={storage.alert} update={updateStorage} alertType={storage.alertType}/>
        </div>
    );
}

export default Content;
