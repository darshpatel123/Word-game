player_1_name = localStorage.getItem("Player_1");
player_2_name = localStorage.getItem("Player_2");
player_1_score = 0;
player_2_score= 0;
document.getElementById("player_1").innerHTML=player_1_name;
document.getElementById("player_2").innerHTML=player_2_name;

document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;


document.getElementById("player_question").innerHTML="Question turn:"+player_1_name;
document.getElementById("player_answer").innerHTML="Answer:"+player_2_name;


function send(){
    word_var = document.getElementById("word").value;
    word_tolower= word_var.toLowerCase();
    console.log("Lowercase:"+word_tolower);

    CharAt1 = word_tolower.charAt(1);
    console.log(CharAt1);

    length_divde2 = Math.floor(word_tolower.length/2);
    CharAt2 = word_tolower.charAt(length_divde2);
    console.log(CharAt2);

    word_charat3_minus= word_var.length-1;
    CharAt3=word_tolower.charAt(word_charat3_minus);
    console.log(CharAt3);


    remove_chartat_1 = word_tolower.replace(CharAt1,"_");
    remove_chartat_2 = remove_chartat_1.replace(CharAt2,"_");
    remove_chartat_3 = remove_chartat_2.replace(CharAt3,"_");
    console.log(remove_chartat_3);


    question_word = "<h4 id='word_display'>Q."+remove_chartat_3+"</h4>";
    input_box="<br>Answer:<input type='text' id='input_check_box'>";
    button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row=question_word+input_box+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").innerHTML="";

}
question_turn="player_1";
answer_turn="player_2";
function check(){
    get_answer=document.getElementById("input_check_box").value;
    get_answer_lower=get_answer.toLowerCase();
    console.log("to lower case check-"+get_answer_lower);
    if(get_answer_lower==word_tolower){
        if(answer_turn=="player_2"){
            player_2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML=player_2_score;

        }
        else{
            player_1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML=player_1_score;  
        }
    }
    if(question_turn="player_1"){
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="Question turn:"+player_2_name;
    }
    else{
        question_turn="player_1";
        document.getElementById("player_question").innerHTML="Question turn:"+player_1_name;
    }

    if(answer_turn="player_2"){
        answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer turn:"+player_1_name;
        
    }
    else{
        answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="Answer turn:"+player_2_name;
    }

    document.getElementById("output").innerHTML="";
}
function back(){
    window.location="index.html";
}
