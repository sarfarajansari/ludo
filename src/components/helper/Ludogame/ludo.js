import Player from './player';
import {colors} from "./initial"
import Paths from './paths'

class Ludo{
    constructor(n){
        this.n =n;
        this.winnerId = null;
        this.winner = "";
        this.runnerup1 = "";
        this.runnerup2 = "";
        this.loser = "";
        this.ended = false;
        this.turn = 0;
        this.players = this.setPlayers()
        this.rolled = false;
        this.dice = 6;
        this.old = [0,0]
        this.steps=[]
    }
    PlayersList(){
        let list =[];
        this.players.forEach((player)=>{
            list.push(player.colorId)
        })
        return list
    }
    get_next_turn(){
        const next_colorId=(colorId)=>{
            return colorId>=3?0 :colorId +1;
        }
        const next_player = (colorId)=>{
            return this.PlayersList().includes(next_colorId(colorId))?next_colorId(colorId):next_player(next_colorId(colorId),this.PlayersList())
        }
        let next = next_player(this.turn)
        this.turn = next
    }
    update_turn(stepped){
        if(!stepped){
            this.players[this.turn].coordinates.forEach((c) =>{
                if(!c.initial && !c.reached){
                    return false;
                }
            })
        }
        this.get_next_turn()
        return true

    }
    setPlayers(){
        let players = []
        for(let i =0;i<this.n;i++){
            players.push(new Player("player" + String(i+1),colors[i],i))
        }
        return players
    }
    check_attack(c){
        this.players.forEach((player)=>{
            if(!player.colorId ==c.colorId){
                player.coordinates.forEach((b)=>{
                    if(b.x === c.x && b.y == c.y){
                        this.players[b.colorId].coordinates[b.number].initialize()
                    }
                })
            }
        })
    }
    step(c,step){
        let r = [false,[]]
        if( step> 6 || step<1 || c.reached || c.colorId!==this.turn){
            return r
        }
        this.players[c.colorId].coordinates[c.number]
        if(c.initial){
            if(step==6){
                console.log(this.players[c.colorId].coordinates[c.number])
                this.players[c.colorId].coordinates[c.number].y = Paths[c.colorId][0][0]
                this.players[c.colorId].coordinates[c.number].x = Paths[c.colorId][0][1]
                this.players[c.colorId].coordinates[c.number].initial = false
                r[0]=true
                return r
            }
            return r
        }
        let current = [c.y,c.x]
        let start = false
        let step_up = 0
        let steps = []
        
        Paths[c.colorId].forEach((pos)=>{
            if(start){
                step_up++;
                r[1].push(pos)
            }
            if(step_up===step){
                this.players[c.colorId].coordinates[c.number].y =pos[0]
                this.players[c.colorId].coordinates[c.number].x=pos[1]
                if(c.y===Paths[c.colorId][56][0] && c.x===Paths[c.colorId][56][1]){
                    this.players[c.colorId].coordinates[c.number].reached = true;
                }
                if (!c.safe()){
                    this.check_attack(this.players[c.colorId].coordinates[c.number])
                }
                r[0]=true;
                start=false;
            }
            if(pos[0]===current[0] && pos[1]===current[1]){
                start = true
            }
        })

        return r

    }
}
export default ludo;