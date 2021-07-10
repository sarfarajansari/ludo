import Player from './player';
import {colors} from "./initial"
import Paths from './paths'

export const get_index=(players,colorId)=>{
    let index = false;
    players.forEach((player,i)=>{
        if(player.colorId==colorId){
            index=i;
        }
    })
    return index;
}
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
        this.steps=[];
        this.extra_turn = false;
    }
    data(){
        let players = []
        this.players.forEach((player)=>{
            players.push(player.data())
        })
        return {
            ended: this.is_ended(),
            winnerId:this.winnerId,
            winner:this.winner,
            runnerup2: this.runnerup2,
            runnerup1: this.runnerup1,
            loser: this.loser,
            turn: this.turn,
            players:players
        }
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
        let r = true
        if(!stepped){
            this.players[get_index(this.players,this.turn)].coordinates.forEach((c) =>{
                if(!c.initial && !c.reached){
                    r = false
                }
            })
        }
        if(this.extra_turn){
            // for attacks
            this.extra_turn = false;
            return true
        }
        if(!r){
            return r
        }
        this.get_next_turn()
        return r

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
            if(player.colorId !== c.colorId){
                player.coordinates.forEach((b)=>{
                    if(b.x === c.x && b.y === c.y){
                        this.players[get_index(this.players,b.colorId)].coordinates[b.number].initialize()
                        this.extra_turn=true
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
        if(c.initial){
            if(step==6){
                this.players[get_index(this.players,c.colorId)].coordinates[c.number].y = Paths[c.colorId][0][0]
                this.players[get_index(this.players,c.colorId)].coordinates[c.number].x = Paths[c.colorId][0][1]
                this.players[get_index(this.players,c.colorId)].coordinates[c.number].initial = false
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
            if(step_up===step && start){
                this.players[get_index(this.players,c.colorId)].coordinates[c.number].y =pos[0]
                this.players[get_index(this.players,c.colorId)].coordinates[c.number].x=pos[1]
                if(c.y===Paths[c.colorId][56][0] && c.x===Paths[c.colorId][56][1]){
                    this.players[get_index(this.players,c.colorId)].coordinates[c.number].reached = true;
                }
                if (!c.safe()){
                    this.check_attack(this.players[get_index(this.players,c.colorId)].coordinates[c.number])
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

    initialize(g){
        this.dice = g.dice;
        this.turn= g.turn;
        this.winnerId = g.winnerId;
        this.runnerup1 = g.runnerup1;
        this.runnerup2 = g.runnerup2;
        this.rolled = g.rolled;
        this.old = g.old;
        this.loser = g.loser;
        if(g.get_winner){
            this.winner = g.get_winner
        }
        this.steps = g.steps;

        for(let i = 0; i<g.players.length; i++){
            this.players[i].color = g.players[i].color
            this.players[i].name = g.players[i].name
            this.players[i].colorId = g.players[i].colorId
            this.players[i].complete = g.players[i].complete
            
            for(let j=0;j<4;j++){
                this.players[i].coordinates[j].colorId=g.players[i].colorId
                this.players[i].coordinates[j].initial =g.players[i].coordinates[j].initial
                this.players[i].coordinates[j].reached=g.players[i].coordinates[j].reached
                this.players[i].coordinates[j].number =g.players[i].coordinates[j].number
                this.players[i].coordinates[j].x =g.players[i].coordinates[j].x
                this.players[i].coordinates[j].y =g.players[i].coordinates[j].y
            }

        }
    }
    is_ended(){
        if(this.ended){
            return true
        }
        let ended = true
        this.players.forEach((player)=>{
            if(player.is_complete()){
                if(!this.winner){
                    this.winner = player.name?player.name:player.color
                }
                else if(!this.runnerup1){
                    this.runnerup1= player.name?player.name:player.color
                }
                else if(!this.runnerup2){
                    this.runnerup2 = player.name?player.name:player.color
                }
                else{
                    this.loser= player.name?player.name:player.color
                }
                
            }
            else{
                ended= false
            }
        })
        return ended
    }
    // data(){
    //     return
    // }

}
export default Ludo;