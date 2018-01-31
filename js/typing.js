// Flashing Carrot
setInterval(function () {
    var carrot = document.getElementById("carrot");
    
    if (carrot.style.opacity == "1") {
        carrot.style.opacity = "0";
    } else {
        carrot.style.opacity = "1";
    }
}, 500)

// Typing functionality
var words = ["nerd", "developer", "film maker", "student", "coder", "full stack web developer", "web developer", "designer", "web designer"];

function getWord() {
    return words[Math.floor(Math.random() * Math.floor(words.length))];
}

function typeWord (word) {
    word = word.split("");
    i = 0;

    var intervalTyper = setInterval(function () {
        typeLetter(word[i]);
        
        if (i >= word.length - 1) {
            clearInterval(intervalTyper);
            setTimeout(function () {
                deleteWord();
            }, 2500)
        } else {
            i++;
        }
    }, 170);
}

function typeLetter(letter) {
    var content =  document.getElementById("content");
    content.innerHTML += letter;
}

function deleteWord() {
    var content = document.getElementById("content");
    var contentArr = content.innerHTML.split("");
    var i = contentArr.length - 1;

    var intervalDeleter = setInterval(function () {
        contentArr.pop();
        content.innerHTML = contentArr.join("");
        
        if (i < contentArr.length) {
            clearInterval(intervalDeleter);
            setTimeout(function() {
                typeWord(getWord());
            }, 500)
        } else {
            i--;
        }

    }, 100);
}

setTimeout(function () {
    typeWord(getWord());
}, 2500);