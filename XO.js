
let role = 'x' ;
let one = document.querySelector(".one");
let squere = [] ;

function end (item1,item2,item3){
    one.innerHTML = `${squere[item1]} is winner`
    document.getElementById('num'+ item1).style.background ="black";
    document.getElementById( 'num'+ item2).style.background ="black";
    document.getElementById('num'+ item3).style.background ="black";
    setInterval(function(){ one.innerHTML +=`.` },1000)
    setTimeout(function(){location.reload()},4000 )


}
function winner(){
    for(let i = 1 ; i<10 ; i++){
     squere[i] =  document.getElementById("num"+i).innerHTML;
    }
    if(squere[1]==squere[2] && squere[2]==squere[3]&& squere[1] != ""){
       
        end(1,2,3)
    }else if (squere[4]==squere[5] && squere[5]==squere[6]&& squere[4] != ""){
        end(4,5,6)

    }else if (squere[7]==squere[8] && squere[8]==squere[9]&& squere[7] != ""){
        end(7,8,9)

    }else if (squere[1]==squere[4] && squere[4]==squere[7]&& squere[1] != ""){
        end(1,4,7)

    }else if (squere[2]==squere[5] && squere[5]==squere[8]&& squere[2] != ""){
        end(2,5,8)

    }else if (squere[3]==squere[6] && squere[6]==squere[9]&& squere[3] != ""){
        end(3,6,9)

    }else if (squere[1]==squere[5] && squere[5]==squere[9]&& squere[1] != ""){
        end(1,5,9)

    }else if (squere[3]==squere[5] && squere[5]==squere[7]&& squere[3] != ""){
        end(3,5,7)
    }
    else{
        
    }
    
}
function game(id){
    let element = document.getElementById(id)
    if(role=="x" && element.innerHTML == "" ){
        element.innerHTML = "x";
        role = "o";
        one.innerHTML = "o";
    }else if(role == "o" && element.innerHTML == ""){
        element.innerHTML = "o";
        role = "x";
        one.innerHTML = "x";

    }
    winner()
}
