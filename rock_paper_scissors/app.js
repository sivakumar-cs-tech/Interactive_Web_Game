let user = document.getElementById("user")
let ai = document.getElementById("ai")
let res = document.getElementById("res")
let count = Number(document.getElementById("count").innerText)
let player_state;
let wcount = 0;
let lcount = 0;
let dcount = 0;
function rock()
{
   player_state=0
   count=count-1;
   document.getElementById("count").innerHTML = count
   user.style.background = "url('./rock_paper_scissors_image/rock_1.jpg') center/cover" 
   rand()
   check_gameover()
}
function paper()
{
    player_state=1;
    count=count-1;
    document.getElementById("count").innerHTML = count
    user.style.background ="url('./rock_paper_scissors_image/paper_1.jpg') center/cover" 
    rand()
    check_gameover()

}
function scissors()
{ 
    player_state=2;
    count=count-1;
    document.getElementById("count").innerHTML = count   
    user.style.background ="url('./rock_paper_scissors_image/scissors_1.jpg') center/cover" 
    ai.style.background ="url('./rock_paper_scissors_image/scissors_1.jpg') center/cover" 
    rand()
    check_gameover()

}


function rand()
{
    let ai_gen=Math.floor(Math.random()*3)
    if(ai_gen==0)
    {
        ai.style.background = "url('./rock_paper_scissors_image/rock_1.jpg') center/cover"  
    }
    else if(ai_gen==1)
    {
        ai.style.background ="url('./rock_paper_scissors_image/paper_1.jpg') center/cover" 
    }
    else
    {
        ai.style.background ="url('./rock_paper_scissors_image/scissors_1.jpg') center/cover" 
    }

    if((player_state==0 && ai_gen==0)||(player_state==1 && ai_gen==1)||(player_state==2 && ai_gen==2))
    {
        res.innerHTML="Match Draw"
        dcount = dcount+1;
    }
    else if((player_state==0 && ai_gen==2)||(player_state==1 && ai_gen==0)||(player_state==2 && ai_gen==1))
    {
        res.innerHTML="You Win"
        wcount = wcount+1;
    }
    else
    {
        res.innerHTML="You Lost"
        lcount = lcount+1;
    }
    

}

function check_gameover()
{
    if(count<=0)
    {
    count = 10;
    document.getElementById("count").innerHTML  = count
    alert(`game over total winning ${wcount}
         match lost ${lcount} 
          Draw points ${dcount}`)
          wcount = 0;
          lcount = 0;
          dcount = 0
          user.style.background = "transparent"
          ai.style.background = "transparent"
          res.innerHTML = "GAME_START"
    }
    ;
}

