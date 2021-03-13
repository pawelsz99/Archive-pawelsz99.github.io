function submit() {
    if (validateName()) {
        if (validateQuestions()) {
            rightOrWrong()
        } else {
            alert("Give an answer to all questions")
        }
    } else {
        alert("Name must be filled out")
    }
}

function validateQuestions() {
    if (validateCheckbox1() &&
        validateRadioQuestion(document.forms.Quiz.elements.q2.value) &&
        validateRadioQuestion(document.forms.Quiz.elements.q3.value) &&
        validateCheckbox4() &&
        validateRadioQuestion(document.forms.Quiz.elements.q5.value) &&
        validateRadioQuestion(document.forms.Quiz.elements.q6.value) &&
        validateRadioQuestion(document.forms.Quiz.elements.q7.value) &&
        validateRadioQuestion(document.forms.Quiz.elements.q8.value) &&
        validateRadioQuestion(document.forms.Quiz.elements.q9.value) &&
        validateRadioQuestion(document.forms.Quiz.elements.q10.value)) {
        return true
    } else { return false }
}


function rightOrWrong() {
    var score = 0
    var max = 10
    if (checkQ1()) { score++ }
    if (checkRadioQuestion(document.forms.Quiz.elements.q2.value)) { score++ }
    if (checkRadioQuestion(document.forms.Quiz.elements.q3.value)) { score++ }
    if (checkQ4()) { score++ }
    if (checkRadioQuestion(document.forms.Quiz.elements.q5.value)) { score++ }
    if (checkQ6(document.forms.Quiz.elements.q6.value)) { score++ }
    if (checkRadioQuestion(document.forms.Quiz.elements.q7.value)) { score++ }
    if (checkRadioQuestion(document.forms.Quiz.elements.q8.value)) { score++ }
    if (checkRadioQuestion(document.forms.Quiz.elements.q9.value)) { score++ }
    if (checkQ10(document.forms.Quiz.elements.q10.value)) { score++ }

    document.getElementById("score").innerHTML = "Thank you for completing the quiz <br>" +
        "Your score:  " + score + " / " + max 
}


function checkQ1() {
    var a1 = document.getElementById("q1a1").checked
    var a2 = document.getElementById("q1a2").checked
    var a3 = document.getElementById("q1a3").checked
    var a4 = document.getElementById("q1a4").checked

    if (a1 == true && a2 == false && a3 == false && a4 == true) {
        return true
    } else { false }
}

function checkQ4() {
    var a1 = document.getElementById("q4a1").checked
    var a2 = document.getElementById("q4a2").checked
    var a3 = document.getElementById("q4a3").checked
    var a4 = document.getElementById("q4a4").checked
    var a5 = document.getElementById("q4a5").checked

    if (a1 == true && a2 == false && a3 == false && a4 == true && a5 == false) {
        return true
    } else { false }
}

function checkRadioQuestion(answer) {
    if (answer == "True") {
        return true
    } else { return false }
}


function checkQ6() {
    answer = document.forms.Quiz.elements.q6.value
    if (answer == 2) {
        return true
    } else { return false }
}


function checkQ10() {
    answer = document.forms.Quiz.elements.q10.value
    if (answer == 6) {
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


function validateCheckbox1() {
    var a1 = document.getElementById("q1a1").checked
    var a2 = document.getElementById("q1a2").checked
    var a3 = document.getElementById("q1a3").checked
    var a4 = document.getElementById("q1a4").checked

    if (a1 == false && a2 == false && a3 == false && a4 == false) {
        return false
    }
    else { return true }
}


function validateCheckbox4() {
    var a1 = document.getElementById("q4a1").checked
    var a2 = document.getElementById("q4a2").checked
    var a3 = document.getElementById("q4a3").checked
    var a4 = document.getElementById("q4a4").checked
    var a5 = document.getElementById("q4a5").checked

    if (a1 == false && a2 == false && a3 == false && a4 == false && a5 == false) {
        return false
    }
    else { return true }
}


