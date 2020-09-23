// Creating array to hold questions and answers.
var Qs = [
    Q1 = {
        Q: "Javascript is one of HOW MANY fundamental programming languages of the web?",
        As: [2, 300, 55, 3]
    },
    Q2 = {
        Q: "Javascript objects are made up of properties and _______.",
        As: ["processes", "elements", "arrays", "methods"]
    },
    Q3 = {
        Q: "What method is used to attach a function to the occurrence of an event?",
        As: ["onclick", "buttonpress", "keypress", "addeventlistener"]
    },
    Q4 = {
        Q: "What is the acronym used to refer to the object representing a webpage?",
        As: ["DOME", "DIM", "DUMB", "DOM"]
    },
    Q5 = {
        Q: "Using the querySelector method of the DOM, which element will it select after specifying the ID or class?",
        As: ["All elements", "the last element", "the middle element", "the first element"]
    },
    Q6 = {
        Q: "What is the extension for a Javascript file?",
        As: [".css", ".html", ".javascript", ".js"]
    },
    Q7 = {
        Q: "Javascript placed inside an HTML document must be contained inside what kind of tag?",
        As: ["div", "head", "p", "script"]
    },
    Q8 = {
        Q: "Array elements in javascript are separated with what kind of character?",
        As: ["period", "question mark", "semicolon", "comma"]
    },
    Q9 = {
        Q: "How many equal signs are required to check a condition that two variables must be of the same type AND the same value?",
        As: ["1", "2", "4", "3"]
    },
    Q10 = {
        Q: "Do you like Javascript?",
        As: ["No", "eh, maybe", "no way!", "I love JAVASCRIPT!"]
    },
]

// Initializing variables and setting classes.
var description = document.getElementById("description")
description.innerHTML = "You will have two minutes (120 seconds) to complete the quiz. Every incorrect answer will subtract 10 seconds from your remaining time. You will get 10 points for each correct question answered, and a bonus point for every second left on the clock!"
var begin = document.getElementById("start");
begin.setAttribute("class", "button");
var time = 121;
var qNumber = 0;
var score = 0;
var newQ = document.createElement("div");
newQ.setAttribute("id", "question");
var notify = document.createElement("h1");
var display = document.createElement("span");
var endGame = document.createElement("form")
var initials = document.createElement("input");
var record = document.createElement("button");
var qButton1 = document.createElement("button");
qButton1.setAttribute("class", "button");
var qButton2 = document.createElement("button");
qButton2.setAttribute("class", "button");
var qButton3 = document.createElement("button");
qButton3.setAttribute("class", "button");
var qButton4 = document.createElement("button");
qButton4.setAttribute("class", "button");
var list = document.createElement("ul");
var entries = ["Names"];

// Creating an array for randomization of questions upon retake.
var arrayShuffler = [0, 1, 2, 3];
var a = Math.floor(Math.random() * 4);
a = arrayShuffler.splice(a, 1);
var b = Math.floor(Math.random() * 3);
b = arrayShuffler.splice(b, 1);
var c = Math.floor(Math.random() * 2);
c = arrayShuffler.splice(c, 1);
d = arrayShuffler[0];

// Specifying primary function with setInterval on inside to run quiz.
function quizTimer() {
    description.remove();
    var timer = setInterval(function () {
        time--;

        // Specifying exit condition, and generating HTML to display score.
        if (time <= 0 || qNumber > 9) {
            newQ.appendChild(notify);
            notify.innerHTML = "Your score: "
            notify.appendChild(display);
            display.innerHTML = score + time;
            newQ.appendChild(endGame);
            newQ.appendChild(initials);
            initials.setAttribute("placeholder", "Your name");
            newQ.appendChild(record);
            record.innerHTML = "Submit";
            clearInterval(timer);
        }

        // Assigning new buttons and values, generated from "button" addEventListeners below.
        document.body.appendChild(newQ);
        newQ.innerHTML = Qs[qNumber].Q;
        newQ.appendChild(qButton1);
        qButton1.innerHTML = Qs[qNumber].As[a];
        newQ.appendChild(qButton2);
        qButton2.innerHTML = Qs[qNumber].As[b];
        newQ.appendChild(qButton3);
        qButton3.innerHTML = Qs[qNumber].As[c];
        newQ.appendChild(qButton4);
        qButton4.innerHTML = Qs[qNumber].As[d];
        begin.innerHTML = time;

    }, 1000);
}

// Each time a button is chosen, it is checked with the original array to see if the answer is correct.
// The correct answer is always in the fourth position, index of 3, in the original array of questions and answers.
qButton1.addEventListener("click", function () {
    if (qButton1.innerHTML == Qs[qNumber].As[3]) {
        score = score + 10; qNumber++;
        arrayShuffler = [0, 1, 2, 3];
        a = Math.floor(Math.random() * 4);
        a = arrayShuffler.splice(a, 1);

        b = Math.floor(Math.random() * 3);
        b = arrayShuffler.splice(b, 1);

        c = Math.floor(Math.random() * 2);
        c = arrayShuffler.splice(c, 1);

        d = arrayShuffler[0];
    }
    else {
        time = time - 10; qNumber++;
        arrayShuffler = [0, 1, 2, 3];
        a = Math.floor(Math.random() * 4);
        a = arrayShuffler.splice(a, 1);

        b = Math.floor(Math.random() * 3);
        b = arrayShuffler.splice(b, 1);

        c = Math.floor(Math.random() * 2);
        c = arrayShuffler.splice(c, 1);

        d = arrayShuffler[0];
    }
})

qButton2.addEventListener("click", function () {
    if (qButton2.innerHTML == Qs[qNumber].As[3]) {
        score = score + 10; qNumber++;
        arrayShuffler = [0, 1, 2, 3];
        a = Math.floor(Math.random() * 4);
        a = arrayShuffler.splice(a, 1);

        b = Math.floor(Math.random() * 3);
        b = arrayShuffler.splice(b, 1);

        c = Math.floor(Math.random() * 2);
        c = arrayShuffler.splice(c, 1);

        d = arrayShuffler[0];
    }
    else {
        time = time - 10; qNumber++;
        arrayShuffler = [0, 1, 2, 3];
        a = Math.floor(Math.random() * 4);
        a = arrayShuffler.splice(a, 1);

        b = Math.floor(Math.random() * 3);
        b = arrayShuffler.splice(b, 1);

        c = Math.floor(Math.random() * 2);
        c = arrayShuffler.splice(c, 1);

        d = arrayShuffler[0];
    }
})

qButton3.addEventListener("click", function () {
    if (qButton3.innerHTML == Qs[qNumber].As[3]) {
        score = score + 10; qNumber++;
        arrayShuffler = [0, 1, 2, 3];
        a = Math.floor(Math.random() * 4);
        a = arrayShuffler.splice(a, 1);

        b = Math.floor(Math.random() * 3);
        b = arrayShuffler.splice(b, 1);

        c = Math.floor(Math.random() * 2);
        c = arrayShuffler.splice(c, 1);

        d = arrayShuffler[0];
    }
    else {
        time = time - 10; qNumber++;
        arrayShuffler = [0, 1, 2, 3];
        a = Math.floor(Math.random() * 4);
        a = arrayShuffler.splice(a, 1);

        b = Math.floor(Math.random() * 3);
        b = arrayShuffler.splice(b, 1);

        c = Math.floor(Math.random() * 2);
        c = arrayShuffler.splice(c, 1);

        d = arrayShuffler[0];
    }
})

qButton4.addEventListener("click", function () {
    if (qButton4.innerHTML == Qs[qNumber].As[3]) {
        score = score + 10; qNumber++;
        arrayShuffler = [0, 1, 2, 3];
        a = Math.floor(Math.random() * 4);
        a = arrayShuffler.splice(a, 1);

        b = Math.floor(Math.random() * 3);
        b = arrayShuffler.splice(b, 1);

        c = Math.floor(Math.random() * 2);
        c = arrayShuffler.splice(c, 1);

        d = arrayShuffler[0];
    }
    else {
        time = time - 10; qNumber++;
        arrayShuffler = [0, 1, 2, 3];
        a = Math.floor(Math.random() * 4);
        a = arrayShuffler.splice(a, 1);

        b = Math.floor(Math.random() * 3);
        b = arrayShuffler.splice(b, 1);

        c = Math.floor(Math.random() * 2);
        c = arrayShuffler.splice(c, 1);

        d = arrayShuffler[0];
    }
})

begin.addEventListener("click", quizTimer);

record.addEventListener("click", function () {
    newQ.remove();
    begin.remove();
    var retrievedString = localStorage.getItem("stringifyEntries");
    entries = JSON.parse(retrievedString);

    if (entries.length == 1) {
        localStorage.setItem("stringifyEntries", JSON.stringify(entries));
    }

    retrievedString = localStorage.getItem("stringifyEntries");
    entries = JSON.parse(retrievedString);
    var entry = initials.value + ": " + score;
    entries.push(entry);
    localStorage.setItem("stringifyEntries", JSON.stringify(entries));
    document.body.appendChild(notify);
    notify.innerHTML = "Previous scores! Refresh the page to try again! :)";
    document.body.appendChild(list);

    for (i = 0; i < entries.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(entries[i]));
        list.appendChild(item);
    }
})