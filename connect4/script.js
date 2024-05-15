var wrapper = document.getElementById("wrapper");
var nowplaying = document.getElementById("playingoverwrite");
var colors = document.getElementById("coloroverwrite");

var chatpill = document.getElementById("chatpill");
var streamerpill = document.getElementById("streamerpill");

var streamer = false;

function updatePlaying() {
    if (streamer) {
        document.getElementById("playingoverwrite").innerHTML = ":root { --nowplaying: var(--streamer); --nptext: black; }";
    } else {
        document.getElementById("playingoverwrite").innerHTML = ":root { --nowplaying: var(--chat); --nptext: white; }";
    }
}

var circleY = 6;
function circle(x) {
    circleY = 6;
    while (true) {
        if (document.getElementById("x"+x+"y"+circleY).className === "circle") {
            if (streamer) {
                // document.getElementById(circleid).classList.remove('empty');
                document.getElementById("x"+x+"y"+circleY).classList.add('streamer');
                streamer = false;
    
                wrapper.className = "wrapper chat";
                streamerpill.className = "pill";
                chatpill.className = "pill chat";
            } else if (!streamer) {
                // document.getElementById(circleid).classList.remove('empty');
                document.getElementById("x"+x+"y"+circleY).classList.add('chat');
                streamer = true;
    
                wrapper.className = "wrapper streamer";
                streamerpill.className = "pill streamer";
                chatpill.className = "pill";
            }
            break;
        } else if (circleY === 1) {
            break;
        } else {
            circleY -= 1;
        }
    }
}

function circleOld(circleid) {
    if (document.getElementById(circleid).className === "circle") {
        if (streamer) {
            // document.getElementById(circleid).classList.remove('empty');
            document.getElementById(circleid).classList.add('streamer');
            streamer = false;

            wrapper.className = "wrapper chat";
            streamerpill.className = "pill";
            chatpill.className = "pill chat";
        } else if (!streamer) {
            // document.getElementById(circleid).classList.remove('empty');
            document.getElementById(circleid).classList.add('chat');
            streamer = true;

            wrapper.className = "wrapper streamer";
            streamerpill.className = "pill streamer";
            chatpill.className = "pill";
        }
        updatePlaying();
    }
}

function setChat() {
    streamer = false;

    wrapper.className = "wrapper chat";
    streamerpill.className = "pill";
    chatpill.className = "pill chat";
}

function setStreamer() {
    streamer = true;

    wrapper.className = "wrapper streamer";
    streamerpill.className = "pill streamer";
    chatpill.className = "pill";
}
var clearX = 1;
var clearY = 1;
function clearBoard() {
    clearX = 1;
    clearY = 1;
    while (true) {
        console.log("Clearing: " + "x" + clearX + "y" + clearY);
        console.log(document.getElementById("x" + clearX + "y" + clearY))
        document.getElementById("x" + clearX + "y" + clearY).className = "circle";
        if (clearX === 7) {
            clearX = 1;
            if (clearY === 6) {
                console.log("Clearing finished!")
                break;
            } else {
                clearY += 1;
            }
        } else {
            clearX += 1;
        }
    }
}

var scoreChat = 0;
var scoreStreamer = 0;
function addScore(player) {
    if (player === "chat") {
        scoreChat += 1;
        document.getElementById("scoreChat").innerHTML = scoreChat;
    } else if (player === "streamer") {
        scoreStreamer += 1;
        document.getElementById("scoreStreamer").innerHTML = scoreStreamer;
    } else {
        console.error("Invalid Score Target. Maybe the developer should get some sleep, huh?")
    }
}