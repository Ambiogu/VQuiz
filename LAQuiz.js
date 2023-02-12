const LAquestions = [
    {question: "Which is the biggest country in Latin America?",
    optionA: "Argentina",
    optionB: "Chile",
    optionC: "Mexico",
    optionD: "Brasil",
    correct: "D"},
    {question: "What is the most populated city in Latin America?",
    optionA: "Ciudad de Mexico, Mexico",
    optionB: "Sao Paulo, Brasil",
    optionC: "Bogota, Colombia",
    optionD: "Santiago de los caballeros, Dominican Republic",
    correct: "B"},
    {question: "What are the colors of the Costa Rican flag?",
    optionA: "Green, Azul, Yellow",
    optionB: "Yellow, Black, White",
    optionC: "Green, White, Red",
    optionD: "Blue, White, Red",
    correct: "D"},
    {question: "Where is Shakira from?",
    optionA: "Mexico",
    optionB: "Costa Rica",
    optionC: "Colombia",
    optionD: "Dominican Republic",
    correct: "C"},
    {question: "Where is Romeo Santos from?",
    optionA: "Mexico",
    optionB: "Costa Rica",
    optionC: "Colombia",
    optionD: "Dominican Republic",
    correct: "D"},
    {question: "What country is rich in emeralds?",
    optionA: "Colombia",
    optionB: "Mexico",
    optionC: "Costa Rica",
    optionD: "Brasil",
    correct: "A"},
    {question: "What are the 3 predominant languages in Latin America?",
    optionA: "Spanish, English, Portuguese",
    optionB: "Spanish, English, French",
    optionC: "Spanish, Portuguese, French",
    optionD: "Spanish, English",
    correct: "C"},
    {question: "What countries does the Amazon River cross?",
    optionA: "Brasil, Panama, Chile",
    optionB: "Peru, Colombia, Brasil",
    optionC: "Brasil, Panama, Venezuela",
    optionD: "Belice, Guatemala",
    correct: "B"},
    {question: "What is the capital of Argentina?",
    optionA: "Cordoba",
    optionB: "Buenos Aires",
    optionC: "La Plata",
    optionD: "Rosario",
    correct: "B"},
    {question: "Where is Messi from?",
    optionA: "Chile",
    optionB: "Colombia",
    optionC: "Brasil",
    optionD: "Argentina",
    correct: "D"}
];

let LAqIndex = 0;
let LApScore = 1;
let LAnScore = 1;


const showLAq = () => {
    document.getElementById("fstDiv").style.display = "none";
    document.getElementById("SndDiv").style.display = "none";
    document.getElementById("trdDiv").style.display = "block";
    let q = LAquestions[LAqIndex];
    document.getElementById("question").innerHTML = LAquestions[LAqIndex].question;
    document.getElementById("optionA").innerHTML = LAquestions[LAqIndex].optionA;
    document.getElementById("optionB").innerHTML = LAquestions[LAqIndex].optionB;
    document.getElementById("optionC").innerHTML = LAquestions[LAqIndex].optionC;
    document.getElementById("optionD").innerHTML = LAquestions[LAqIndex].optionD;
}

const LAcheckA = (answer) => {
    if(LAquestions[LAqIndex].correct == answer){
        document.getElementById("pScore").innerHTML = LApScore++
        LAqIndex++
        showLAq();
    }else{
        document.getElementById("nScore").innerHTML = LAnScore++
        LAqIndex++
        showLAq();
    }
}
