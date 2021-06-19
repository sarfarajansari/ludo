const GetPlayer = (list,step)=>{
    const update =()=>{
        list.forEach((obj)=>{
            step(obj.colorId,obj.number)
        })
    }
    const Element = (props)=>{
        return (
                <div className={"playerobject "} onClick={update}>
                    <div style={{backgroundImage:props.image}}></div>
                </div>
            )
        }
    if (list.length<1 || list.length>4){
        return "";
    }
    else if(list.length===1){
        return list[0].value;
    }
    else if(list.length===2){
        if(list[0].colorId === 0 && list[1].colorId==1 ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130587/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.52_PM_1_ams2o2.jpg')"
            return <Element image ={img}/>
        }
        else if(list[0].colorId === 0 && list[1].colorId==2 ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130889/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.53_PM_ycqrtk.jpg')"
            return <Element image ={img}/>
        }
        else if(list[0].colorId === 0 && list[1].colorId==3 ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130583/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.52_PM_nlkt1p.jpg')"
            return <Element image ={img}/>
        }


        else if(list[0].colorId === 1 && list[1].colorId==0 ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130585/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.53_PM_1_valded.jpg')"
            return <Element image ={img}/>
        }
        else if(list[0].colorId === 1 && list[1].colorId==2 ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130573/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.47_PM_eilnvd.jpg')"
            return <Element image ={img}/>
        }
        else if(list[0].colorId === 1 && list[1].colorId==3 ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130588/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.48_PM_hjjuqm.jpg')"
            return <Element image ={img}/>
        }

        else if(list[0].colorId === 2 && list[1].colorId==0 ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130583/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.49_PM_t90ppd.jpg')"
            return <Element image ={img}/>
        }
        else if(list[0].colorId === 2 && list[1].colorId==1 ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130572/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.51_PM_ka3ibt.jpg')"
            return <Element image ={img}/>
        }
        else if(list[0].colorId ===2 && list[1].colorId==3 ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130574/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.50_PM_zravp8.jpg')"
            return <Element image ={img}/>
        }


        else if(list[0].colorId === 3 && list[1].colorId==0 ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130578/media/ludo/WhatsApp_Image_2021-06-19_at_6.50.15_PM_r3tzwi.jpg')"
            return <Element image ={img}/>
        }
        else if(list[0].colorId === 3 && list[1].colorId==1 ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130558/media/ludo/WhatsApp_Image_2021-06-19_at_6.50.16_PM_1_rxbt1z.jpg')"
            return <Element image ={img}/>
        }
        else if(list[0].colorId === 3 && list[1].colorId==2 ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130558/media/ludo/WhatsApp_Image_2021-06-19_at_6.50.16_PM_i4syly.jpg')"
            return <Element image ={img}/>
        }
        else{
            return list[0].value;
        }
    }
    else if(list.length===3){
        const ids = [list[0].colorId,list[1].colorId,list[2].colorId]
        if(ids.includes(0) && ids.includes(1) && ids.includes(2) ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130510/media/ludo/WhatsApp_Image_2021-06-19_at_7.22.16_PM_iyqzt7.jpg')"
            return <Element image ={img}/>
        }
        if(ids.includes(1) && ids.includes(2) && ids.includes(3) ){
            // error here change image later
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130574/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.50_PM_zravp8.jpg')"
            return <Element image ={img}/>
        }
        if(ids.includes(2) && ids.includes(3) && ids.includes(0) ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130511/media/ludo/WhatsApp_Image_2021-06-19_at_7.22.16_PM_1_reawaa.jpg')"
            return <Element image ={img}/>
        }
        if(ids.includes(3) && ids.includes(0) && ids.includes(1) ){
            const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130516/media/ludo/WhatsApp_Image_2021-06-19_at_7.22.15_PM_1_tdthuy.jpg')"
            return <Element image ={img}/>
        }
        else{
            return list[0].value;
        }
    }
    else{
        const img = "url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130653/media/ludo/WhatsApp_Image_2021-06-19_at_7.32.29_PM_ob1rqy.jpg')"
        return <Element image ={img}/>
    }
    
}
export default GetPlayer
