(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{28:function(e,a,r){},50:function(e,a,r){},52:function(e,a,r){},64:function(e,a,r){},67:function(e,a,r){},68:function(e,a,r){},69:function(e,a,r){},70:function(e,a,r){},71:function(e,a,r){},76:function(e,a,r){},77:function(e,a,r){},78:function(e,a,r){},79:function(e,a,r){},80:function(e,a,r){},81:function(e,a,r){"use strict";r.r(a);var t=r(2),l=r.n(t),n=r(34),s=r.n(n),c=r(4),o=(r(49),r(50),r(51),r(52),r(12)),i=r(16),d=(r(28),r(1));var u=function(e){return Object(t.useEffect)((function(){window.onscroll=function(){e.update([["alert",""]])}}),[]),e.alert?Object(d.jsx)("div",{className:"alertContainer",children:Object(d.jsx)("div",{className:"alert "+e.alertType,id:"alert",role:"alert",children:Object(d.jsx)("p",{children:e.alert})})}):Object(d.jsx)(d.Fragment,{})},h=r(83),p=function(e){return Object(d.jsx)("div",{className:"spinner",children:Object(d.jsx)(h.a,{size:"large",spinning:e.loading})})};function b(){var e=Object(t.useState)(0),a=Object(c.a)(e,2),r=(a[0],a[1]);return function(){return r((function(e){return e+1}))}}var v=r(5),j={name:"Schedule",url:"https://sarfaraj4444.pythonanywhere.com/ludo"},m=r(13),g=r(14),f=["red","yellow","blue","green"],y=[[[1,10],[1,13],[4,10],[4,13]],[[10,10],[10,13],[13,10],[13,13]],[[10,1],[10,4],[13,1],[13,4]],[[1,1],[1,4],[4,1],[4,4]]],x=[[[1,8],[2,8],[3,8],[4,8],[5,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[7,14],[8,14],[8,13],[8,12],[8,11],[8,10],[8,9],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[14,7],[14,6],[13,6],[12,6],[11,6],[10,6],[9,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[7,0],[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[5,6],[4,6],[3,6],[2,6],[1,6],[0,6],[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7]],[[8,13],[8,12],[8,11],[8,10],[8,9],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[14,7],[14,6],[13,6],[12,6],[11,6],[10,6],[9,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[7,0],[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[5,6],[4,6],[3,6],[2,6],[1,6],[0,6],[0,7],[.8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[7,14],[7,13],[7,12],[7,11],[7,10],[7,9],[7,8]],[[13,6],[12,6],[11,6],[10,6],[9,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[7,0],[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[5,6],[4,6],[3,6],[2,6],[1,6],[0,6],[0,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[7,14],[8,14],[8,13],[8,12],[8,11],[8,10],[8,9],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[14,7],[13,7],[12,7],[11,7],[10,7],[9,7],[8,7]],[[6,1],[6,2],[6,3],[6,4],[6,5],[5,6],[4,6],[3,6],[2,6],[1,6],[0,6],[0,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[7,14],[8,14],[8,13],[8,12],[8,11],[8,10],[8,9],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[14,7],[14,6],[13,6],[12,6],[11,6],[10,6],[9,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6]]],O=[[6,1],[2,6],[1,8],[6,12],[8,13],[12,8],[13,6],[8,2],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[8,7],[9,7],[10,7],[11,7],[12,7],[13,7]],_=function(){function e(a,r){Object(m.a)(this,e),this.y=y[r][a][0],this.x=y[r][a][1],this.number=a,this.initial=!0,this.reached=!1,this.colorId=r}return Object(g.a)(e,[{key:"is_reached",value:function(){var e=x[this.colorId][56];return e[0]==this.y&&e[1]==this.x}},{key:"initialize",value:function(){this.y=y[this.colorId][this.number][0],this.x=y[this.colorId][this.number][1],this.initial=!0}},{key:"safe",value:function(){var e=this,a=!1;return O.forEach((function(r){r[0]===e.y&&r[1]===e.x&&(a=!0)})),y[this.colorId].forEach((function(r){r[0]===e.y&&r[1]===e.x&&(a=!0)})),a}},{key:"data",value:function(){return{x:this.x,y:this.y,initial:this.initial,reached:this.is_reached()}}}]),e}(),I=function(){function e(a,r,t){Object(m.a)(this,e),this.name=a,this.color=r,this.colorId=t,this.coordinates=this.setcoordinates(),this.complete=!1}return Object(g.a)(e,[{key:"singleturn",value:function(){var e=[];return this.coordinates.forEach((function(a){a.initial||a.is_reached()||e.push(a.number)})),1===e.length?{value:!0,number:e[0]}:{value:!1}}},{key:"onground",value:function(){var e=!1;return this.coordinates.forEach((function(a){a.initial||a.is_reached()||(e=!0)})),e}},{key:"setcoordinates",value:function(){for(var e=[],a=0;a<4;a++)e.push(new _(a,this.colorId));return e}},{key:"is_complete",value:function(){var e=!0;return this.coordinates.forEach((function(a){e=e&&a.is_reached()})),e}},{key:"data",value:function(){var e=[];return this.coordinates.forEach((function(a){e.push(a.data())})),{coordinates:e,colorId:this.colorId}}}]),e}(),k=function(e,a){var r=!1;return e.forEach((function(e,t){e.colorId==a&&(r=t)})),r},w=function(){function e(a){Object(m.a)(this,e),this.n=a,this.winnerId=null,this.winner="",this.runnerup1="",this.runnerup2="",this.loser="",this.ended=!1,this.turn=0,this.players=this.setPlayers(),this.rolled=!1,this.dice=6,this.old=[0,0],this.steps=[],this.extra_turn=!1}return Object(g.a)(e,[{key:"data",value:function(){var e=[];return this.players.forEach((function(a){e.push(a.data())})),{ended:this.is_ended(),winnerId:this.winnerId,winner:this.winner,runnerup2:this.runnerup2,runnerup1:this.runnerup1,loser:this.loser,turn:this.turn,players:e}}},{key:"PlayersList",value:function(){var e=[];return this.players.forEach((function(a){e.push(a.colorId)})),e}},{key:"get_next_turn",value:function(){var e=this,a=function(e){return e>=3?0:e+1},r=function r(t){return e.PlayersList().includes(a(t))?a(t):r(a(t),e.PlayersList())}(this.turn);this.turn=r}},{key:"update_turn",value:function(e){var a=!0;return e||this.players[k(this.players,this.turn)].coordinates.forEach((function(e){e.initial||e.reached||(a=!1)})),this.extra_turn?(this.extra_turn=!1,!0):a?(this.get_next_turn(),a):a}},{key:"setPlayers",value:function(){for(var e=[],a=0;a<this.n;a++)e.push(new I("player"+String(a+1),f[a],a));return e}},{key:"check_attack",value:function(e){var a=this;this.players.forEach((function(r){r.colorId!==e.colorId&&r.coordinates.forEach((function(r){r.x===e.x&&r.y===e.y&&(a.players[k(a.players,r.colorId)].coordinates[r.number].initialize(),a.extra_turn=!0)}))}))}},{key:"step",value:function(e,a){var r=this,t=[!1,[]];if(a>6||a<1||e.reached||e.colorId!==this.turn)return t;if(e.initial)return 6==a?(this.players[k(this.players,e.colorId)].coordinates[e.number].y=x[e.colorId][0][0],this.players[k(this.players,e.colorId)].coordinates[e.number].x=x[e.colorId][0][1],this.players[k(this.players,e.colorId)].coordinates[e.number].initial=!1,t[0]=!0,t):t;var l=[e.y,e.x],n=!1,s=0;return x[e.colorId].forEach((function(c){n&&(s++,t[1].push(c)),s===a&&n&&(r.players[k(r.players,e.colorId)].coordinates[e.number].y=c[0],r.players[k(r.players,e.colorId)].coordinates[e.number].x=c[1],e.y===x[e.colorId][56][0]&&e.x===x[e.colorId][56][1]&&(r.players[k(r.players,e.colorId)].coordinates[e.number].reached=!0),e.safe()||r.check_attack(r.players[k(r.players,e.colorId)].coordinates[e.number]),t[0]=!0,n=!1),c[0]===l[0]&&c[1]===l[1]&&(n=!0)})),t}},{key:"initialize",value:function(e){this.dice=e.dice,this.turn=e.turn,this.winnerId=e.winnerId,this.runnerup1=e.runnerup1,this.runnerup2=e.runnerup2,this.rolled=e.rolled,this.old=e.old,this.loser=e.loser,e.get_winner&&(this.winner=e.get_winner),this.steps=e.steps;for(var a=0;a<e.players.length;a++){this.players[a].color=e.players[a].color,this.players[a].name=e.players[a].name,this.players[a].colorId=e.players[a].colorId,this.players[a].complete=e.players[a].complete;for(var r=0;r<4;r++)this.players[a].coordinates[r].colorId=e.players[a].colorId,this.players[a].coordinates[r].initial=e.players[a].coordinates[r].initial,this.players[a].coordinates[r].reached=e.players[a].coordinates[r].reached,this.players[a].coordinates[r].number=e.players[a].coordinates[r].number,this.players[a].coordinates[r].x=e.players[a].coordinates[r].x,this.players[a].coordinates[r].y=e.players[a].coordinates[r].y}}},{key:"is_ended",value:function(){var e=this;if(this.ended)return!0;var a=!0;return this.players.forEach((function(r){r.is_complete()?e.winner?e.runnerup1?e.runnerup2?e.loser=r.name?r.name:r.color:e.runnerup2=r.name?r.name:r.color:e.runnerup1=r.name?r.name:r.color:e.winner=r.name?r.name:r.color:a=!1})),a}}]),e}(),N=[[{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]}],[{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-top-left green-dark initial-pos",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-top-right green-dark initial-pos",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"red path",path:!0,children:[]},{value:"",class:"red path star-position",path:!0,safe:!0,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-top-left red-dark initial-pos",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-top-right red-dark initial-pos",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]}],[{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:" path star-position",path:!0,safe:!0,children:[]},{value:"",class:"red path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]}],[{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"red path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]}],[{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-bottom-left green-dark initial-pos",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-bottom-right green-dark initial-pos",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"red path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-bottom-left red-dark initial-pos",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-bottom-right red-dark initial-pos",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]}],[{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:"green no-border",path:!1,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"red path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]},{value:"",class:"red no-border",path:!1,children:[]}],[{value:"",class:" path",path:!0,children:[]},{value:"",class:"green path star-position",path:!0,safe:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" background-split-top-left no-border",path:!1,children:[]},{value:"",class:"red no-border path",path:!0,children:[]},{value:"",class:" background-split-top-right no-border",path:!1,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path star-position",path:!0,safe:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]}],[{value:"",class:" path",path:!0,children:[]},{value:"",class:"green path",path:!0,children:[]},{value:"",class:"green path",path:!0,children:[]},{value:"",class:"green path",path:!0,children:[]},{value:"",class:"green path",path:!0,children:[]},{value:"",class:"green path",path:!0,children:[]},{value:"",class:"green no-border path",path:!0,children:[]},{value:"",class:" no-border centre-grid ",path:!1,child:[{value:"",class:"background-split-top-left",path:!1},{value:"",class:"background-split-top-right",path:!1},{value:"",class:"background-split-bottom-left",path:!1},{value:"",class:"background-split-bottom-right",path:!1}],children:[]},{value:"",class:"yellow no-border path",path:!0,children:[]},{value:"",class:"yellow path",path:!0,children:[]},{value:"",class:"yellow path",path:!0,children:[]},{value:"",class:"yellow path",path:!0,children:[]},{value:"",class:"yellow path",path:!0,children:[]},{value:"",class:"yellow path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]}],[{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path star-position",path:!0,safe:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" background-split-bottom-left no-border",path:!1,children:[]},{value:"",class:"blue no-border path",path:!0,children:[]},{value:"",class:" background-split-bottom-right no-border",path:!1,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"yellow path star-position",path:!0,safe:!0,children:[]},{value:"",class:" path",path:!0,children:[]}],[{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"blue path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]}],[{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-top-left blue-dark initial-pos",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-top-right blue-dark initial-pos",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"blue path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-top-left yellow-dark initial-pos",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-top-right yellow-dark initial-pos",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]}],[{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"blue path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]}],[{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"blue path",path:!0,children:[]},{value:"",class:" path star-position",path:!0,safe:!0,children:[]},{value:"",class:"yellow no-border no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]}],[{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-bottom-left blue-dark initial-pos",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-bottom-right blue-dark initial-pos",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:"blue path star-position",path:!0,safe:!0,children:[]},{value:"",class:"blue path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-bottom-left yellow-dark initial-pos",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border",path:!1,children:[]},{value:"",class:" no-border initial-position-bottom-right yellow-dark initial-pos",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]}],[{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:"blue no-border",path:!1,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:" path",path:!0,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]},{value:"",class:"yellow no-border",path:!1,children:[]}]],T=(r(64),function(e){var a=Object(t.useState)(!1),r=Object(c.a)(a,2);r[0],r[1];return Object(d.jsx)("div",{className:"playerobject "+e.className,onClick:function(){return e.step(e.colorId,e.number)},children:Object(d.jsx)("div",{})})});function E(e){if(!e.ok)throw Error(e.statusText);return e}function P(e,a,r){a.token=localStorage.getItem("LudoToken");var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};fetch(j.url+e,t).then(E).then((function(e){return e.json()})).then((function(e){console.log(e),1===e.status&&(r([["alert",""]]),setTimeout((function(){r([["alert","some error occured please refresh!"],["alertType","error"],["loading",!1]])}),5))})).catch((function(e){r([["alert",""]]),setTimeout((function(){r([["alert","some error occured please refresh!"],["alertType","error"],["loading",!1]])}),5)}))}r.p;var q=function(e){var a=[3,0,2,1],r=Object(c.a)(e.state,2),t=r[0],l=r[1],n=function(e){a[e]!==t.turn||t.rolled||(document.getElementsByClassName("die-container")[e].click(),l([["rolled",!0]]))};return Object(d.jsxs)("div",{className:e.className,children:[Object(d.jsx)("div",{className:"faketurn",children:Object(d.jsx)("div",{onClick:function(){return n(e.index1)}})}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{className:"faketurn",children:Object(d.jsx)("div",{onClick:function(){return n(e.index2)}})})]})},S=r(40),A=r.n(S),M=(r(67),function(e){var a=[{class:"gr",obj:[{class:"greenturn",turn:3},{class:"redturn",turn:0}]},{class:"by",obj:[{class:"blueturn",turn:2},{class:"yellowturn",turn:1}]}],r=Object(c.a)(e.data,4),t=r[0],l=r[1],n=r[2],s=r[3];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"dice "+a[t].class,children:a[t].obj.map((function(e,a){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:s===e.turn?"box-element ":"box-element "+e.class,children:Object(d.jsx)(A.a,{numDice:1,rollDone:function(e){l([["dice",e],["rolled",!0]]),n(e)},margin:0})}),(r=a,0===r?Object(d.jsx)("div",{}):Object(d.jsx)(d.Fragment,{}))]});var r}))})})}),C=(r(68),r(69),function(e){var a=Object(c.a)(e.data,2),r=a[0];a[1];return Object(d.jsx)(d.Fragment,{children:r.map((function(e,a){return Object(d.jsx)("div",{className:"row",children:e.map((function(e,r){return 7===a&&7===r?Object(d.jsx)("div",{className:e.class,children:e.child.map((function(e,a){return Object(d.jsx)("div",{className:e.class},a)}))},r):Object(d.jsxs)("div",{className:e.class,children:[" ",e.value," "]},r)}))},a)}))})}),W=function(e){var a=Object(c.a)(e.data,4),r=a[0],t=a[1],l=a[2],n=a[3];return Object(d.jsxs)("div",{className:"board",children:[Object(d.jsx)(q,{className:"dice faketurn-container gr",state:[r,l],index1:0,index2:1}),Object(d.jsx)(M,{data:[0,l,n,r.turn]}),Object(d.jsx)("div",{className:"board main "+function(){switch(r.turn){case 0:return"r";case 1:return"y";case 2:return"b";case 3:return"g";default:return""}}(),children:Object(d.jsx)(C,{data:[t,l]})}),Object(d.jsx)(M,{data:[1,l,n,r.turn]}),Object(d.jsx)(q,{className:"dice faketurn-container-bottom gr",state:[r,l],index1:2,index2:3})]})},z=function(e,a){var r=function(){e.forEach((function(e){a(e.colorId,e.number)}))},t=function(e){return Object(d.jsx)("div",{className:"playerobject ",onClick:r,children:Object(d.jsx)("div",{style:{backgroundImage:e.image}})})};if(e.length<1||e.length>4)return"";if(1===e.length)return e[0].value;if(2===e.length){if(0===e[0].colorId&&1==e[1].colorId){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130587/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.52_PM_1_ams2o2.jpg')"})}if(0===e[0].colorId&&2==e[1].colorId){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130889/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.53_PM_ycqrtk.jpg')"})}if(0===e[0].colorId&&3==e[1].colorId){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130583/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.52_PM_nlkt1p.jpg')"})}if(1===e[0].colorId&&0==e[1].colorId){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130585/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.53_PM_1_valded.jpg')"})}if(1===e[0].colorId&&2==e[1].colorId){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130573/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.47_PM_eilnvd.jpg')"})}if(1===e[0].colorId&&3==e[1].colorId){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130588/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.48_PM_hjjuqm.jpg')"})}if(2===e[0].colorId&&0==e[1].colorId){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130583/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.49_PM_t90ppd.jpg')"})}if(2===e[0].colorId&&1==e[1].colorId){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130572/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.51_PM_ka3ibt.jpg')"})}if(2===e[0].colorId&&3==e[1].colorId){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130574/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.50_PM_zravp8.jpg')"})}if(3===e[0].colorId&&0==e[1].colorId){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130578/media/ludo/WhatsApp_Image_2021-06-19_at_6.50.15_PM_r3tzwi.jpg')"})}if(3===e[0].colorId&&1==e[1].colorId){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130558/media/ludo/WhatsApp_Image_2021-06-19_at_6.50.16_PM_1_rxbt1z.jpg')"})}if(3===e[0].colorId&&2==e[1].colorId){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130558/media/ludo/WhatsApp_Image_2021-06-19_at_6.50.16_PM_i4syly.jpg')"})}return e[0].value}if(3===e.length){var l=[e[0].colorId,e[1].colorId,e[2].colorId];if(l.includes(0)&&l.includes(1)&&l.includes(2)){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130510/media/ludo/WhatsApp_Image_2021-06-19_at_7.22.16_PM_iyqzt7.jpg')"})}if(l.includes(1)&&l.includes(2)&&l.includes(3)){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130574/media/ludo/WhatsApp_Image_2021-06-19_at_6.52.50_PM_zravp8.jpg')"})}if(l.includes(2)&&l.includes(3)&&l.includes(0)){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130511/media/ludo/WhatsApp_Image_2021-06-19_at_7.22.16_PM_1_reawaa.jpg')"})}if(l.includes(3)&&l.includes(0)&&l.includes(1)){return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130516/media/ludo/WhatsApp_Image_2021-06-19_at_7.22.15_PM_1_tdthuy.jpg')"})}return e[0].value}return Object(d.jsx)(t,{image:"url('https://res.cloudinary.com/dnppl93qm/image/upload/v1624130653/media/ludo/WhatsApp_Image_2021-06-19_at_7.32.29_PM_ob1rqy.jpg')"})},L=function(e){var a=Object(c.a)(e.sidebar,2),r=a[0],l=a[1],n=e.token,s=Object(t.useState)(N),o=Object(c.a)(s,2),i=o[0],u=o[1],h=(b(),Object(t.useState)(e.initial)),p=Object(c.a)(h,2),v=p[0],j=p[1],m=function(){var e=i;e.forEach((function(e){e.forEach((function(e){e.value="",e.children=[]}))})),v.players.forEach((function(a){a.coordinates.forEach((function(r){e[r.y][r.x].children.push(y[a.colorId][r.number]),e[r.y][r.x].value=z(e[r.y][r.x].children,g)}))})),u(e)};Object(t.useEffect)((function(){var e=r;return e.type=1,l(e),m(),function(){var e=r;e.type=0,l(e)}}),[]);var g=function a(t,s){if(t===v.turn&&v.rolled){var o=v,d=o.players[k(o.players,t)].coordinates[s],h=[d.y,d.x],p=o.step(d,o.dice),b=Object(c.a)(p,2),g=b[0],y=b[1];if(g){var x=v.dice<2?"step":"steps";!function(e){var a=r;a.data.push({text:e,name:"log"}),l(a),console.log(a)}(f[t]+" played "+String(v.dice)+" "+x)}o.rolled=6!==o.dice&&!o.update_turn(g),o.old=[d.y,d.x],o.steps=y;var O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=!1,l=o.steps.length;if(l<=0&&(e&&clearInterval(e),r=!0),!r){var n=i,s=n[h[0]][h[1]].children,c=!1;s.forEach((function(e,a){e.colorId==t&&(c=a)}));var d=c>-1&&s[c];d&&(n[h[0]][h[1]].children.splice(c,1),n[h[0]][h[1]].value=z(n[h[0]][h[1]].children,a),n[o.steps[0][0]][o.steps[0][1]].children.push(d),n[o.steps[0][0]][o.steps[0][1]].value=z(n[o.steps[0][0]][o.steps[0][1]].children,a),u(n),h=o.steps[0],o.steps.splice(0,1))}};O();var _=setInterval((function(){O(_)}),300);setTimeout((function(){j(o),m()}),300*o.steps.length+30),P("/play/"+n+"/",o.data(),e.update)}},y=[[{colorId:0,number:0,value:Object(d.jsx)(T,{className:" redplayerobject",step:g,colorId:0,number:0})},{colorId:0,number:1,value:Object(d.jsx)(T,{className:" redplayerobject",step:g,colorId:0,number:1})},{colorId:0,number:2,value:Object(d.jsx)(T,{className:" redplayerobject",step:g,colorId:0,number:2})},{colorId:0,number:3,value:Object(d.jsx)(T,{className:" redplayerobject",step:g,colorId:0,number:3})}],[{colorId:1,number:0,value:Object(d.jsx)(T,{className:" yellowplayerobject",step:g,colorId:1,number:0})},{colorId:1,number:1,value:Object(d.jsx)(T,{className:" yellowplayerobject",step:g,colorId:1,number:1})},{colorId:1,number:2,value:Object(d.jsx)(T,{className:" yellowplayerobject",step:g,colorId:1,number:2})},{colorId:1,number:3,value:Object(d.jsx)(T,{className:" yellowplayerobject",step:g,colorId:1,number:3})}],[{colorId:2,number:0,value:Object(d.jsx)(T,{className:" blueplayerobject",step:g,colorId:2,number:0})},{colorId:2,number:1,value:Object(d.jsx)(T,{className:" blueplayerobject",step:g,colorId:2,number:1})},{colorId:2,number:2,value:Object(d.jsx)(T,{className:" blueplayerobject",step:g,colorId:2,number:2})},{colorId:2,number:3,value:Object(d.jsx)(T,{className:" blueplayerobject",step:g,colorId:2,number:3})}],[{colorId:3,number:0,value:Object(d.jsx)(T,{className:" greenplayerobject",step:g,colorId:3,number:0})},{colorId:3,number:1,value:Object(d.jsx)(T,{className:" greenplayerobject",step:g,colorId:3,number:1})},{colorId:3,number:2,value:Object(d.jsx)(T,{className:" greenplayerobject",step:g,colorId:3,number:2})},{colorId:3,number:3,value:Object(d.jsx)(T,{className:" greenplayerobject",step:g,colorId:3,number:3})}]];return Object(d.jsx)(W,{data:[v,i,function(e){for(var a=v,r=0;r<e.length;r++)a[e[r][0]]=e[r][1];j(a)},function(a){if(!v.players[k(v.players,v.turn)].onground()&&a<6){var r=v;r.get_next_turn(),r.rolled=!1,j(r),P("/play/"+n+"/",r.data(),e.update)}else v.players[k(v.players,v.turn)].singleturn().value&&a<6&&g(v.turn,v.players[k(v.players,v.turn)].singleturn().number)}]})},F=(r(70),function(){return Object(d.jsx)("div",{id:"starter-container",children:Object(d.jsx)("div",{className:"start-counter"})})}),J=function(e){var a=Object(t.useState)({}),r=Object(c.a)(a,2),l=r[0],n=r[1],s=e.update;return Object(t.useEffect)((function(){e.update([["loading",!0]]);var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})};fetch(j.url+"/getgame/"+e.match.params.token+"/",a).then((function(e){return e.json()})).then((function(e){if(1===e.status)setTimeout((function(){s([["alert","some error occured please refresh!"],["alertType","error"],["loading",!1]])}),5);else{var a=new w(e.players.length);a.initialize(e),n(a)}})).catch((function(e){s([["alert",""]]),setTimeout((function(){s([["alert","some error occured please refresh!"],["alertType","error"],["loading",!1]])}),5)}))}),[]),"players"in l&&e.storage.loading&&(s([["loading",!1],["gamestarted",1]]),setTimeout((function(){s([["gamestarted",2]])}),5e3)),"players"in l&&2===e.storage.gamestarted?Object(d.jsx)(L,{sidebar:e.sidebar,update:s,initial:l,token:e.match.params.token}):0===e.storage.gamestarted?Object(d.jsx)("div",{}):Object(d.jsx)(F,{})},B=(r(71),[{name:"ironman",color:"red",colorId:0,img:"https://res.cloudinary.com/dnppl93qm/image/upload/v1623961066/media/ludo/red2_kyxwjg.jpg",selected:!1},{name:"captain marvel",color:"yellow",colorId:1,img:"https://res.cloudinary.com/dnppl93qm/image/upload/v1623961306/media/ludo/captain_marvel_poster_1688.1537366019_gx4bdo.jpg",selected:!1},{name:"thor",color:"blue",colorId:2,img:"https://res.cloudinary.com/dnppl93qm/image/upload/v1623960505/media/ludo/blue_sq2xbx.jpg",selected:!1},{name:"hulk",color:"green",colorId:3,img:"https://res.cloudinary.com/dnppl93qm/image/upload/v1623960701/media/ludo/green_ysk5nr.jpg",selected:!1}]);var G=function(e){var a=Object(t.useState)(B),r=Object(c.a)(a,2),l=r[0],n=r[1],s=Object(t.useState)({status:1,token:""}),o=Object(c.a)(s,2),i=o[0],u=o[1];return 0===i.status&&i.token?Object(d.jsx)(v.a,{to:"/play/"+i.token}):Object(d.jsxs)("div",{className:"creator-container",children:[Object(d.jsx)("h1",{children:"New Game"}),Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"Select players"}),Object(d.jsx)("div",{className:"game-players",children:l.map((function(e,a){return Object(d.jsxs)("div",{style:{backgroundColor:e.color},id:e.selected?"selectedplayer":"",children:[Object(d.jsx)("div",{className:"player-select-obj",style:{backgroundImage:"url(".concat(e.img,")")},onClick:function(){return function(e){var a=l;a[e].selected=!l[e].selected,n(a)}(a)}}),Object(d.jsx)("input",{type:"text",value:e.name,onChange:function(e){return function(e,a){var r=l;r[a].name=e,n(r)}(e.target.value,a)},name:"name"})]})}))}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{id:"startgame",onClick:function(){var a=function(){var e=[[],[]];return l.forEach((function(a){a.selected&&(e[0].push(a.colorId),e[1].push(a.name))})),e}();a[0].length<2?e.update([["alert","please select atleast 2 players"],["alertType","error"]]):(e.update([["loading",!0]]),function(e,a,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";r([["loading",!0]]),a.token=localStorage.getItem("LudoToken");var l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};fetch(j.url+e,l).then(E).then((function(e){return e.json()})).then((function(e){console.log(e),t&&t(e),"message"in e?(r([["alert",""]]),setTimeout((function(){var a="message";e.status&&(a=0==e.status?"message":"error"),r([["alert",e.message],["alertType",a],["loading",!1]])}),5)):r([["loading",!1]])})).catch((function(e){r([["alert",""]]),setTimeout((function(){r([["alert","some error occured please refresh!"],["alertType","error"],["loading",!1]])}),5)}))}("/initialize/",{listPlayers:a[0],names:a[1]},e.update,u))},children:"START GAME"})," "]})]})},D=(r(76),function(){return Object(d.jsxs)("div",{className:"mode-container",children:[Object(d.jsx)("h1",{children:"PLAY"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)(o.b,{to:"/newgame",children:Object(d.jsx)("button",{className:"btn",children:"Local Game"})}),Object(d.jsx)("button",{className:"btn",children:"Online"})]})]})}),R=(r(77),function(e){var a=e.sidebar,r=b(),l=Object(t.useState)({alert:"",alertType:"error",loading:!1,gamestarted:0}),n=Object(c.a)(l,2),s=n[0],o=n[1];Object(t.useEffect)((function(){return setInterval(r,10)}),[]);var h=function(e){for(var a=s,r=0;r<e.length;r++)a[e[r][0]]=e[r][1];o(a)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:s.loading?"is_loading":"",children:Object(d.jsxs)(v.d,{children:[Object(d.jsx)(v.b,{exact:!0,path:"/play/:token/",render:function(e){return Object(d.jsx)(J,Object(i.a)(Object(i.a)({},e),{},{update:h,sidebar:a,storage:s}))}}),Object(d.jsxs)("div",{className:"game-grid",children:[Object(d.jsx)(v.b,{exact:!0,path:"/newgame/",render:function(e){return Object(d.jsx)(G,Object(i.a)(Object(i.a)({},e),{},{update:h,storage:s}))}}),Object(d.jsx)(v.b,{exact:!0,path:"/",component:D})]})]})}),Object(d.jsx)(p,{loading:s.loading}),Object(d.jsx)(u,{alert:s.alert,update:h,alertType:s.alertType})]})}),Y=(r(78),function(e){return Object(d.jsxs)("div",{className:"animation-area",children:[Object(d.jsxs)("ul",{className:"box-area",children:[Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{})]}),e.children]})}),H=(r(79),r(80),r(43)),K=r(44),Q=r(42),U=function(e,a){return 0===e?"hidden":a?"toggle active":"toggle"},V=function(e){var a=e.obj;return"log"===a.name?Object(d.jsx)("div",{id:"chat-log",children:a.text}):Object(d.jsxs)("div",{id:"chat-text",children:[Object(d.jsxs)("strong",{children:[a.name," "," : "," "]}),a.text," "]})},X=function(e){var a=Object(t.useState)(!1),r=Object(c.a)(a,2),l=r[0],n=r[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:U(e.data.type,l),onClick:function(){return n(!l)},children:[l?Object(d.jsx)(Q.a,{}):Object(d.jsx)(d.Fragment,{children:1===e.data.type?Object(d.jsx)(H.a,{}):Object(d.jsx)(K.a,{})})," "]}),Object(d.jsxs)("div",{className:l?"menu active":"menu",children:[Object(d.jsx)("h2",{children:2===e.data.type?"Chat Box":"Game Log"}),Object(d.jsx)("div",{children:e.data.data.map((function(e,a){return Object(d.jsx)(V,{obj:e},a)}))})]})]})},Z=function(e){return Object(d.jsxs)("div",{className:"header-container",children:[Object(d.jsx)("div",{className:"header-text",children:Object(d.jsx)("h1",{children:"Marvelous Ludo"})}),Object(d.jsx)(X,{data:e.sidebar})]})};var $=function(){var e=b(),a=Object(t.useState)({type:0,data:[]}),r=Object(c.a)(a,2),l=r[0],n=r[1];return Object(t.useEffect)((function(){return setInterval(e,10)}),[]),Object(d.jsx)(Y,{children:Object(d.jsx)(o.a,{basename:"/ludo",children:Object(d.jsxs)("div",{id:"grid",children:[Object(d.jsx)("div",{id:"navbar",children:Object(d.jsx)(Z,{sidebar:l})}),Object(d.jsx)("div",{id:"content",children:Object(d.jsx)(R,{sidebar:[l,n]})}),Object(d.jsx)("div",{id:"footer"})]})})})},ee=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,84)).then((function(a){var r=a.getCLS,t=a.getFID,l=a.getFCP,n=a.getLCP,s=a.getTTFB;r(e),t(e),l(e),n(e),s(e)}))};s.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)($,{})}),document.getElementById("root")),ee()}},[[81,1,2]]]);
//# sourceMappingURL=main.b26144d4.chunk.js.map