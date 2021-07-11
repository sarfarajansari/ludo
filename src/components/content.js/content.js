import React,{ useEffect, useState} from 'react';
import Alert from "../helper/alert/alert"
import Loading from "../helper/alert/loading"
import useForceUpdate from "../helper/forceupdate"
import { Switch ,Route} from "react-router-dom";
import Localstarter from "../local/local_starter/localstarter"
import LocalCreator from "../local/localcreator/localCreator"
import Modeselector from "../modeSeletor/modeselector"
import OnlineGame from "../online/OnlineGame"
import OnlineManager from "../online/Manager/manager"
import Back from "../helper/back/back"
import "./content.css";



const Content = (props) => {
    const sidebar = props.sidebar
    const forceUpdate =useForceUpdate()
    const [storage, setStorage] = useState({
        alert:"",
        alertType:"error",
        loading:false,
        gamestarted:0,
        backtype:1,
        backclick:()=>{},
        backurl:"",
        hometype:1,
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
                    <Route exact path="/local/" render={(props) => <LocalCreator {...props} update={updateStorage} storage={storage} />} />
                    <Route exact path="/online/" render={(props) => <OnlineManager {...props} update={updateStorage} storage={storage} />} />
                    <Route exact path="/"  render={(props) => <Modeselector {...props} update={updateStorage}/>}/>
                </div>
                
            </Switch>
                <Back home={true} type={storage.hometype} url="/" name={"Home"}/>
                <Back type={storage.backtype} url={storage.backurl} onclick={storage.backclick} name={"back"}/>
            </div>
            <Loading loading={storage.loading}/>
            <Alert alert={storage.alert} update={updateStorage} alertType={storage.alertType}/>
        </div>
    );
}

export default Content;
