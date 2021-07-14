import initial_position from "./initial";
import Paths,{safe} from "./paths"

class Coordinate{
    constructor(number,colorId){
        this.y=initial_position[colorId][number][0];
        this.x=initial_position[colorId][number][1];
        this.number = number;
        this.initial = true;
        this.reached = false;
        this.colorId = colorId;
    }
    is_reached(){
        let final = Paths[this.colorId][56]
        return final[0] == this.y && final[1]==this.x
    }
    initialize(){
        this.y = initial_position[this.colorId][this.number][0]
        this.x = initial_position[this.colorId][this.number][1]
        this.initial = true
    }
    safe(){
        let safebool = false;
        safe.forEach((x)=>{
            if(x[0]===this.y && x[1]===this.x){
                safebool=true;
            }
        })
        initial_position[this.colorId].forEach((y)=>{
            if(y[0]===this.y && y[1]===this.x){
                safebool = true;
            }
        })
        return safebool;
    }
    data(){
        return {
            x: this.x,
            y: this.y,
            initial: this.initial,
            reached: this.is_reached(),
            number: this.number
        }
    }
        
}
export default Coordinate;