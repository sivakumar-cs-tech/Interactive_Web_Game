let card_arrays = [
    {name:"mouse",icon:'<i class="fa-solid fa-computer-mouse"></i>'},
    {name:"desktop",icon:'<i class="fa-solid fa-desktop"></i>'},
    {name:"laptop",icon:'<i class="fa-solid fa-laptop"></i>'},
    {name:"server",icon:'<i class="fa-solid fa-server"></i>'},
    {name:"idcard",icon:'<i class="fa-regular fa-id-card"></i>'},
    {name:"mobile",icon:'<i class="fa-solid fa-mobile"></i>'},
    {name:"mouse",icon:'<i class="fa-solid fa-computer-mouse"></i>'},
    {name:"desktop",icon:'<i class="fa-solid fa-desktop"></i>'},
    {name:"laptop",icon:'<i class="fa-solid fa-laptop"></i>'},
    {name:"server",icon:'<i class="fa-solid fa-server"></i>'},
    {name:"idcard",icon:'<i class="fa-regular fa-id-card"></i>'},
    {name:"mobile",icon:'<i class="fa-solid fa-mobile"></i>'}
];
let gameboard = document.querySelector(".game_container")
let flippedcard = []
let chances = 10;
let wincount = 0;
shuffle()
displaycard()
function shuffle()
{
    for (let i= card_arrays.length-1; i>=0; i--) 
        {
            let rand_array = Math.floor(Math.random()*i+1);
            [card_arrays[i],card_arrays[rand_array]]=[card_arrays[rand_array],card_arrays[i]]
        }
        console.log(card_arrays);
}
function displaycard()
{
    card_arrays.forEach(
        (curr,index)=>
        {
            const card = document.createElement('div')
            card.classList.add("card_back")
            card.classList.add("active")
            card.setAttribute("id",index)
            gameboard.appendChild(card)
            card.addEventListener("click",flipcard)
        }
        
    )
}
function flipcard()
{
    if(flippedcard.length<2 && this.classList.contains("active"))
        {
            this.style.animation = "flip 0.5s ease"                   
                    let cardindex = this.getAttribute("id")
                    flippedcard.push(this)
                    this.classList.remove("card_back")
                    this.classList.remove("active")
                    this.style.border = "1px solid black"
                    this.innerHTML = card_arrays[cardindex].icon
                    console.log(flippedcard);
            if(flippedcard.length == 2)
                {
                    setTimeout(checkmatch,1000)
                }
        }  
    }   
    function checkmatch()
    {
    let card1index = flippedcard[0].getAttribute("id")
    let card2index = flippedcard[1].getAttribute("id")
    console.log(card1index,card2index);
    if(card_arrays[card1index].name ===  card_arrays[card2index].name)
        {
            flippedcard[0].innerHTML = ""
            flippedcard[1].innerHTML = ""
            flippedcard[0].style.backgroundColor = "transparent"
            flippedcard[1].style.backgroundColor = "transparent"
            flippedcard[0].style.border = "none"
            flippedcard[1].style.border = "none "
            flippedcard[0].style.cursor = "auto"
            flippedcard[1].style.cursor = "auto " 
            wincount++;
            console.log(wincount);
            if(wincount==6)
                {
                    alert("you win")
                    gameboard.innerHTML = ''
                    shuffle()
                    displaycard()
                    chances = 5;
                    document.getElementById("chances").innerHTML = chances
                }
        }
        else{
            flippedcard[0].classList.add("card_back")
            flippedcard[1].classList.add("card_back")
            flippedcard[0].classList.add("active")
            flippedcard[1].classList.add("active")
            flippedcard[0].innerHTML = ""
            flippedcard[1].innerHTML = ""
            flippedcard[0].style.border = "none"
            flippedcard[1].style.border = "none "
            flippedcard[0].style.animation = "none"
            flippedcard[1].style.animation = "none "            
            chances--;
            document.getElementById("chances").innerHTML = chances
            if(chances<=0)
                {
                    alert("you lose")
                    gameboard.innerHTML = ''
                    shuffle()
                    displaycard()
                    chances = 10;
                    document.getElementById("chances").innerHTML = 10
                    wincount = 0
                }
        }
        flippedcard= []

}




