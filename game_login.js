function cu(){
    player_1=document.getElementById("player1_name_input").value;
    player_2=document.getElementById("player2_name_input").value;
    localStorage.setItem("Player_1",player_1);
    localStorage.setItem("Player_2",player_2);
    window.location="game_page.html";
}