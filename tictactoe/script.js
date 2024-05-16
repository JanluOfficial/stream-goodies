var streamer = false;

var chatpill = document.getElementById("chatpill");
var streamerpill = document.getElementById("streamerpill");

var clearX = 1;
var clearY = 1;
function clearBoard() {
    clearX = 1;
    clearY = 1;
    while (true) {
        console.log("Clearing: " + "x" + clearX + "y" + clearY);
        console.log(document.getElementById("x" + clearX + "y" + clearY))
        document.getElementById("x" + clearX + "y" + clearY).className = "field";
        if (clearX === 3) {
            clearX = 1;
            if (clearY === 3) {
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

function onClick(obj) {
    if (document.getElementById(obj) || true) {
        if (document.getElementById(obj).className === "field") {
            if (streamer) {
                document.getElementById(obj).className = "field streamer";
                setChat()
            } else {
                document.getElementById(obj).className = "field chat";
                setStreamer()
            }
            checkWin();
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

function setChat() {
    streamer = false;
    streamerpill.className = "pill";
    chatpill.className = "pill chat";
}

function setStreamer() {
    streamer = true;
    streamerpill.className = "pill streamer";
    chatpill.className = "pill";
}

var winConditions = [["x1y1", "x2y1", "x3y1"], 
                    ["x1y2", "x2y2", "x3y2"], 
                    ["x1y3", "x2y3", "x3y3"],
                    ["x1y1", "x1y2", "x1y3"], 
                    ["x2y1", "x2y2", "x2y3"], 
                    ["x3y1", "x3y2", "x3y3"],
                    ["x1y1", "x2y2", "x3y3"], 
                    ["x3y1", "x2y2", "x1y3"] ];
function checkWin() {
    for (const condition of winConditions) {
        if (document.getElementById(condition[0]).className != "field" && document.getElementById(condition[0]).className === document.getElementById(condition[1]).className && document.getElementById(condition[0]).className === document.getElementById(condition[2]).className) {
            if (document.getElementById(condition[0]).className === "field chat") {
                addScore("chat");
            } else if (document.getElementById(condition[0]).className === "field streamer") {
                addScore("streamer");
            } else {
                addScore("invalid");
            };
            clearBoard();
        }
    }
    
}