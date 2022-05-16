let myKeys = document.querySelectorAll('.key');


for (let x = 0; x < myKeys.length; x++) {
    myKeys[x].addEventListener('click', function() {
        playNote(myKeys[x].innerHTML);
    });
};

document.addEventListener('keydown', function(btn) {
    playNote(btn.key.toUpperCase());

    let pressedKey = btn.key.toUpperCase();

    for (let x = 0; x < myKeys.length; x++) {
        myKeys[x].classList.remove('activated');
    };

    for (let x = 0; x < myKeys.length; x++) {
        if (pressedKey == myKeys[x].innerHTML.toUpperCase()) {
            myKeys[x].classList.add('activated');
        };
    };

});

function playNote(key) {
    switch(key) {
        case 'C':
            var note = new Audio('doremi/do.mp3');
            note.play();
            break;
        case 'D':
            var note = new Audio('doremi/re.mp3');
            note.play();
            break;
        case 'E':
            var note = new Audio('doremi/mi.mp3');
            note.play();
            break;
        case 'F':
            var note = new Audio('doremi/fa.mp3');
            note.play();
            break;
        case 'G':
            var note = new Audio('doremi/sol.mp3');
            note.play();
            break;
        case 'A':
            var note = new Audio('doremi/la.mp3');
            note.play();
            break;
        case 'B':
            var note = new Audio('doremi/ti.mp3');
            note.play();
            break;
        case 'K':
            var note = new Audio('doremi/doh.mp3');
            note.play();
    };
};

