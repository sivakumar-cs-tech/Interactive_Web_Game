let gameboard = document.getElementById("game_board")
let context = gameboard.getContext("2d")
let width = gameboard.width;
let height = gameboard.height;
let unit = 25
let foodx
let foody
let snake = [
    {x:unit*3,y:0},
    {x:unit*2,y:0},
    {x:unit*1,y:0},
    {x:0,y:0}
]
let show = false
let x_vel = 25
let y_vel = 0
let score = 0
let active = false
startgame()
window.addEventListener('keydown',keypress)
function startgame()
{
    context.fillStyle = "#604CC3"
    context.fillRect(0,0,width,height)
    create_food()
    display_food()
    create_snake()
    
}
function clear_game_board()
{
    context.fillStyle = "#604CC3"
    context.fillRect(0,0,width,height)
}
function create_food()
{
    foodx = Math.floor(Math.random()*width/unit)*unit
    foody = Math.floor(Math.random()*height/unit)*unit
}
function display_food()
{
    context.fillStyle = "#8FD14F"
    context.fillRect(foodx,foody,unit,unit)
}
function create_snake()
{
    context.fillStyle = "#F5F5F5"
    context.strokeStyle = "26547C"
    snake.forEach((snake_path) => {
        context.fillRect(snake_path.x,snake_path.y,unit,unit)
        context.strokeRect(snake_path.x,snake_path.y,unit,unit)
    });
}
function move_snake() 
{
    let snake_head = {x:snake[0].x+x_vel , y:snake[0].y+y_vel}    
    snake.unshift(snake_head)
    if(snake[0].x == foodx && snake[0].y == foody)
        {
            score+=1
            document.getElementById("score").innerHTML = score 
            create_food()
        }
    else
    {
        snake.pop()

    }
}
function loop()
{
    if(active)
        {
            setTimeout(()=>{
                clear_game_board()
                display_food()
                create_snake()
                move_snake()
                game_over()
                loop()
            },250)
        } 
}
function keypress(event)
{
    const left = 37
    const up =38
    const right = 39
    const down = 40
    const space = 32
    switch(true)
    {
        case(event.keyCode == space):
                if(!active)
                    {
                        active= true
                        loop()
                        console.log(active);
                    }   
                else
                {
                    active= false
                    console.log(active);

                }
        break;
        case(event.keyCode == left && x_vel!=unit):
        {
            x_vel=-unit
            y_vel=0
            break
        }
        case(event.keyCode == right && x_vel!=-unit):
        {
            x_vel=unit
            y_vel=0
            break
        }
        case(event.keyCode == up &&  y_vel!=unit):
        {
            x_vel=0
            y_vel=-unit
            break
        }
        case(event.keyCode == down && y_vel!=-unit):
        {
            x_vel=0
            y_vel=unit
            break
        }
    }
}
function game_over() 
{
    switch(true)
    {
        case(snake[0].x<0):
        case(snake[0].x>width):
        case(snake[0].y<0):
        case(snake[0].y>height):
        {
            clear_game_board()
            context.font ="bold 60px Play";
            context.fillStyle = "black"
            context.textAlign = "center"    
            context.fillText("GAME OVER",width/2,height/2)
        }
     
    }    
}