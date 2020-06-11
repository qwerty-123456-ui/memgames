document.addEventListener('DOMContentLoaded',()=>{

    //card optins
    const cardArray=[
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'icecream',
            img:'images/icecream.png'
        },
        {
            name:'icecream',
            img:'images/icecream.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        }
    ]

    cardArray.sort(()=> 0.5-Math.random())

    const grid=document.querySelector('.grid')
    var cardsChosen=[]
    var cardsChosenid = []
    var cardswon=[]
    var resultdisplay=document.querySelector('#result')

    //create ur board
    function createBoard()
    {
        for(let i=0;i<cardArray.length;i++)
        {
            var card=document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkformatch(){
        var cards=document.querySelectorAll('img')
        const optiononeid=cardsChosenid[0]
        const optiontwoid = cardsChosenid[1]
        if (cardsChosen[0]===cardsChosen[1]){
            // alert('you found a match')
            cards[optiononeid].setAttribute('src','images/white.png')
            cards[optiontwoid].setAttribute('src','images/white.png')
            cardswon.push(cardsChosen)
        }
        else{
            cards[optiononeid].setAttribute('src','images/blank.png')
            cards[optiontwoid].setAttribute('src','images/blank.png')
            // alert('sorry u lose')
        }
        cardsChosen=[]
        cardsChosenid=[]
        resultdisplay.textContent=cardswon.length
        if (cardswon.length===cardArray.length/2){
            resultdisplay.textContent = 'congratulations!!'
        }


    }

    // flipcard
    function flipcard(){
        var cardid=this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardid].name)
        cardsChosenid.push(cardid)
        this.setAttribute('src',cardArray[cardid].img)
        if (cardsChosen.length=== 2){
            setTimeout(checkformatch,500)
        }
    }


    createBoard()


})