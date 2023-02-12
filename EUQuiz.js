const EUquestions = [
    {question: "Which of the following is the nickname of Europe?",
    optionA: "The Great Continent",
    optionB: "The Old Continent",
    optionC: "The Holy Continent",
    optionD: "None of above",
    correct: "B"},
    {question: "What percentage of the world’s population lives in Europe?",
    optionA: "Around 15 per cent",
    optionB: "Around 25 per cent",
    optionC: "Around 35 per cent",
    optionD: "None of above",
    correct: "B"},
    {question: "Which of the following is the smallest country in Europe by area?",
    optionA: "San Marino",
    optionB: "Monaco",
    optionC: "Vatican City",
    optionD: "None of above",
    correct: "C"},
    {question: "Which peninsula in Europe includes Portugal, Andorra, and Spain?",
    optionA: "Balkan Peninsula",
    optionB: "Iberian Peninsula",
    optionC: "Jutland Peninsula",
    optionD: "None of above",
    correct: "B"},
    {question: "The 2020 EUFA European Football Championship was hosted in 11 cities, except which of the following?",
    optionA: "Berlin, Germany",
    optionB: "Budapest, Hungary",
    optionC: "Rome, Italy",
    optionD: "None of above",
    correct: "A"},
    {question: "Which two colours are on the flag of the European Union?",
    optionA: "Black and red",
    optionB: "Blue and yellow",
    optionC: "White and green",
    optionD: "None of above",
    correct: "B"},
    {question: "What is the most commonly spoken first language in Europe?",
    optionA: "Spanish",
    optionB: "English",
    optionC: "German",
    optionD: "None of above",
    correct: "C"},
    {question: "Which of the following wars did not take place in Europe?",
    optionA: "Ten Years’ War",
    optionB: "Hundred Years’ War",
    optionC: "Thirteen Years’ War",
    optionD: "None of above",
    correct: "A"},
    {question: "The Vikings originated from which part of Europe?",
    optionA: "Northern Europe",
    optionB: "Eastern Europe",
    optionC: "Southern Europe",
    optionD: "None of above",
    correct: "A"},
    {question: "Which city is considered to be the financial capital of Europe?",
    optionA: "London, England",
    optionB: "Paris, France",
    optionC: "Frankfurt am Main, Germany",
    optionD: "None of above",
    correct: "A"}
];

let EUqIndex = 0;
let EUpScore = 1;
let EUnScore = 1;


const showEUq = () => {
    document.getElementById("fstDiv").style.display = "none";
    document.getElementById("SndDiv").style.display = "none";
    document.getElementById("trdDiv").style.display = "block";
    let q = EUquestions[EUqIndex];
    document.getElementById("question").innerHTML = EUquestions[EUqIndex].question;
    document.getElementById("optionA").innerHTML = EUquestions[EUqIndex].optionA;
    document.getElementById("optionB").innerHTML = EUquestions[EUqIndex].optionB;
    document.getElementById("optionC").innerHTML = EUquestions[EUqIndex].optionC;
    document.getElementById("optionD").innerHTML = EUquestions[EUqIndex].optionD;
}

const EUcheckA = (answer) => {
    if(EUquestions[EUqIndex].correct == answer){
        document.getElementById("pScore").innerHTML = EUpScore++
        EUqIndex++
        showEUq();
    }else{
        document.getElementById("nScore").innerHTML = EUnScore++
        EUqIndex++
        showEUq();
    }
}