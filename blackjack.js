document.querySelector("#hitbtn").addEventListener('click',hit);
document.querySelector("#standbtn").addEventListener('click',stand);

var current_player = 'your';
hit_fun = true;
stand_fun = true;
var your_score = 0;
var bot_score = 0;
var score = 0;
function random_card() {
    lst_vals = {
        cards: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
        vals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
        
    };
    rand = Math.floor(Math.random() * 13);
    let cardimg = document.createElement('img');
    cardimg.setAttribute('id', 'imgs');
    var pic = lst_vals.cards[rand];
    score = score + lst_vals.vals[rand];
    if (score < 21) {
        document.getElementById(`${current_player}score`).innerHTML = score;
        cardimg.src = `./assets/${pic}.svg`;
        cardimg.height = '150';
        cardimg.width = '85';
        document.querySelector(`#${current_player}div`).appendChild(cardimg);
    }
    else {
        document.getElementById(`${current_player}score`).innerHTML = 'busted';
        document.getElementById(`${current_player}score`).style.color = 'red';
        cardimg.src = `./assets/${pic}.svg`;
        cardimg.height = '150';
        cardimg.width = '85';
        document.querySelector(`#${current_player}div`).appendChild(cardimg);
    }
    if (current_player == 'bot') {
        bot_score = score;
    }
    else {
        your_score = score;
    }
    if(your_score>21){
        your_score = 0;
    }
    if(bot_score>21){
        bot_score =0;
    }

}

function hit(){
    if(current_player = 'your'){
        document.getElementById('hitsound').play();
        if(score<21&&hit_fun){
            random_card();
        }
        
    }
}
function stand(){
    while(stand_fun){
        if (bot_score == 0) {
            current_player = 'bot'
            hit_fun = false;
            if (current_player == 'bot') {
                score = 0
            }
            var your_imgs = document.querySelector('#yourdiv').querySelectorAll('img');
            for (let i = 0; i < your_imgs.length; i++) {
                if (score < 21) {
                    document.getElementById('hitsound').play();
                    random_card();
                }


            }
    }
          stand_fun = false;
    }
    if(bot_score>your_score){
        var text = 'you lost!';
        document.getElementById('standsound').play();
        // document.getElementById('looses').innerHTML='1'
    }
    else if(your_score>bot_score){
        var text = 'you won!';  
        document.getElementById('wonsound').play();
    }
    else{
        var text = 'draw!';
    }
    console.log(text);
    document.getElementById('head').innerHTML = text;
    document.getElementById('head').style.color = 'blue';
    console.log(text);

}