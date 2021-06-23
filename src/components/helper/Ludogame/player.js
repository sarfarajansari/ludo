import Coordinate from "./coordinate";

class Player{
    constructor(name,color,colorId){
        this.name=name;
        this.color=color;
        this.colorId=colorId;
        this.coordinates =this.setcoordinates()
    }
    setcoordinates(){
        let coordinates = [];
        for (let i = 0; i <4;i++){
            coordinates.push(new Coordinate(i,this.colorId))
        }
        return coordinates;
    }
}
export default Player;