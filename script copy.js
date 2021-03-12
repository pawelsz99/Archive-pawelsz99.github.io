function submit() {
    // alert("Thank you for completing the quiz")
    if (validateName()) {
        if (validateCheckbox() &&
            validateRadioQuestion(document.forms.Quiz.elements.q2.value) &&
            validateRadioQuestion(document.forms.Quiz.elements.q3.value)) {
            // we are now sure that every question has an answer
            // the next step is to check if they are right or wrong
            rightOrWrong()
        } else {
            alert("Give an answer to all questions")
        }
    } else {
        alert("Name must be filled out")
    }
}


function rightOrWrong() {
    var score = 0
    var max = 3
    if (checkQ1()) {
        score++
    }
    if (checkQ2()) {
        score++
    }
    if (checkQ3()) {
        score++
    }
    // alert("Your score:  " + score + " / " + max)
    document.getElementById("score").innerHTML = "Thank you for completing the quiz <br>" +
        "Your score:  " + score + " / " + max
}


function checkQ1() {
    var a1 = document.getElementById("q1a1").checked
    var a2 = document.getElementById("q1a2").checked
    var a3 = document.getElementById("q1a3").checked
    var a4 = document.getElementById("q1a4").checked
    if (a1 == true && a3 == true && a2 == false && a4 == false) {
        return true
    } else { false }
}

function checkQ2() {
    answer = document.forms.Quiz.elements.q2.value
    if (answer == "Automation Testing") {
        return true
    } else { return false }
}


function checkQ3() {
    answer = document.forms.Quiz.elements.q3.value
    if (answer == "2009") {
        return true
    } else { return false }
}


function validateName() {
    var name = document.forms.Quiz.fname.value
    if (name == "") {
        return false
    } else {
        return true
    }
}


function validateRadioQuestion(x) {
    if (x === "") {
        return false
    }
    else { return true }
}


function validateCheckbox() {
    var a1 = document.getElementById("q1a1").checked
    var a2 = document.getElementById("q1a2").checked
    var a3 = document.getElementById("q1a3").checked
    var a4 = document.getElementById("q1a4").checked

    if (a1 == false && a2 == false && a3 == false && a4 == false) {
        return false
    }
    else { return true }
}


