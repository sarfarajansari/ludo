import Coordinate from "./coordinate";

class Player{
    constructor(name,color,colorId){
        this.name=name;
        this.active=false;
        this.color=color;
        this.colorId=colorId;
        this.coordinates =this.setcoordinates()
        this.complete = false;
        this.host=false;
        
    }
    singleturn(){
        let data = []
        this.coordinates.forEach((c)=>{
            if(!c.initial && !c.is_reached()){
                data.push(c.number)
            }
        })
        return data.length===1?{"value":true,"number":data[0]}:{"value":false}
    }
    onground(){
        let r = false;
        this.coordinates.forEach((c)=>{
            if(!c.initial && !c.is_reached()){
                r=true
            }
        })
        return r;
    }

    setcoordinates(){
        let coordinates = [];
        for (let i = 0; i <4;i++){
            coordinates.push(new Coordinate(i,this.colorId))
        }
        return coordinates;
    }
    is_complete(){
        let complete = true;
        this.coordinates.forEach((c)=>{
            complete = complete && c.is_reached()
        })
        return complete
    }
    data(){
        let coordinates =[]
        this.coordinates.forEach((c)=>{
            coordinates.push(c.data())
        })
        return {
            coordinates: coordinates,
            colorId: this.colorId
        }
    }
}
export default Player;