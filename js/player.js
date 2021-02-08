class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
        playerCount = data.val();
        })
    }

    updateCount(countnum){
        database.ref('/').update({
            playerCount:countnum
        });
    }
    
    update(playerName){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name:playerName
        })  
    }
}