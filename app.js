function countDown(number) {
    timer = setInterval(function() {
        if(number === 0){
            console.log("DONE!");
            clearInterval(timer);
        }
        if(number !== 0){
            console.log(number);
        }
        number--;
    },1000);
}

function randomGame(){
    let counter = 0;
    generator = setInterval(function() {
        let rand = Math.random() * 1;
        counter++;
        console.log(rand);
        if(rand > 0.75){
            console.log(`It took ${counter} tries!`);
            clearInterval(generator);
        }
    },1000);
}
