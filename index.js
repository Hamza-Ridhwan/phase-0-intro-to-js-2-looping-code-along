function writeCards(name = ['Hamza', 'Ali', 'Musa'], event = 'amazing'){
    const messages =[];
    for(let x = 0; x < name.length; x++){
        messages.push(`Thank you, ${name[x]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

function countDown(count){
    while(count >= 0){
        console.log(count);
        count--;
    }
    return count;
}
countDown(10);