const rock = document.querySelector('#rock');
rock.onclick=()=> {
    var userPick = "Rock";
    playRound(getComputerChoice(),userPick);
};

const paper = document.querySelector('#paper');
paper.onclick=()=> {
    var userPick = "Paper";
    playRound(getComputerChoice(),userPick);
};

const scissors = document.querySelector('#scissors');
scissors.onclick=()=> {
    var userPick = "Scissors";
    playRound(getComputerChoice(),userPick);
};



/*var userPick;
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.onclick=()=>{
        if(button.value == 'Rock'){
            userPick = 'Rock';
        }else if(button.value == 'Paper'){
            userPick = 'Paper';
        }else if (button.value == 'Scissors'){
            userPick = 'Scissors';
        }else{
            console.log('UNLUCKY');
        }
        playRound(getComputerChoice(),userPick);
    }
});
*/
/*button.addEventListener('click',function(e){
var x = document.getElementById('id').value;
    if(e.target.id == 'Rock'){
        userPick = 'Rock';
    }else if(e.target.id == 'Paper'){
        userPick = 'Paper';
    }else if (e.target.id == 'Scissors'){
        userPick = 'Scissors';
    }else{
        console.log('UNLUCKY');
    }
    playRound(getComputerChoice(),userPick);
});
});*/





var result;

    function getComputerChoice(){
    let pick = Math.floor(Math.random()*2+2);
    switch (pick){
        case 1: return('Rock'); break;
        case 2:return('Paper'); break;
        case 3:return('Scissors');break;
        default: return('Computer is doing something very bad:/');    
    }
    }


    /*function playerSelection(){
        let userPick=window.prompt('Your weapon of choice?');
        userPick=userPick.toLowerCase();
        let firstLetter=userPick.charAt(0);
        let newLetter=firstLetter.toUpperCase();
        const newUserPick=userPick.replace(firstLetter, newLetter);
        return newUserPick;

    }*/


    function playRound(weapon1,weapon2){
        switch(true){
            case(weapon1=='Rock' && weapon2=='Paper'):
            case(weapon1=='Paper' && weapon2=='Scissors'):
            case(weapon1=='Scissors'&&weapon2=='Rock'):
                console.log(`Yay!You actually won!${weapon2} beats ${weapon1}`);
                result=1;
                break;
            case(weapon1==weapon2):
                console.log('Oh,it`s a draw!');
                result=2;
                break;
            default:
                console.log(`Oh no, you,ve lost!${weapon1} beats ${weapon2}`);
                result=3;
        }
    }


    /*function game(){
        let sum1=0;
        let sum2=0;
        for(let i =0; i<5; i++){
            playRound(getComputerChoice(),playerSelection())
            if(result==1){
                sum2+=1;          
            }
            else if(result==2){
                sum1+=1;
                sum2+=1;
            }
            else if(result==3){
                sum1+=1;
            }

        }

        if(sum2>sum1) {
            console.log('You won');
        }else if(sum2<sum1) {
            console.log('You died');
        }else if(sum1==sum2) {
            console.log('Wow,it`s a draw!');          
        }
    }


    game();
    */