const HBquestions = [
    {question: "What is the heaviest organ in the human body?",
    optionA: "Skin",
    optionB: "Kidney",
    optionC: "Liver",
    optionD: "Brain",
    correct: "A"},
    {question: "Where in the body does most of digestion take place?",
    optionA: "Small intestine",
    optionB: "Large intestine",
    optionC: "Stomach",
    optionD: "Mouth",
    correct: "A"},
    {question: "What is the longest bone in the human body?",
    optionA: "Thighbone (Femur)",
    optionB: "Shinbone (Tibia)",
    optionC: "Spine",
    optionD: "Collarbone (Clavicle)",
    correct: "A"},
    {question: "How many teeth does an adult normallu have?",
    optionA: "24",
    optionB: "48",
    optionC: "16",
    optionD: "32",
    correct: "D"},
    {question: "Where in the body are new blood cells made?",
    optionA: "The liver",
    optionB: "Bones",
    optionC: "The heart",
    optionD: "The brain",
    correct: "B"},
    {question: "Which of these muscles is the strongest?",
    optionA: "Hamstrings (Back of the thigh)",
    optionB: "Upper arm (Biceps)",
    optionC: "Jaw (Masseter)",
    optionD: "Buttocks (Gluteus maximus)",
    correct: "C"},
    {question: "How many bones are there in an adult human body?",
    optionA: "78",
    optionB: "152",
    optionC: "188",
    optionD: "206",
    correct: "D"},
    {question: "Where in the body is the smallest bone found?",
    optionA: "Foot",
    optionB: "Ear",
    optionC: "Hand",
    optionD: "Mouth",
    correct: "B"},
    {question: "What connects your muscles to your bones?",
    optionA: "Tendons",
    optionB: "Ligaments",
    optionC: "Cartilage",
    optionD: "Skin",
    correct: "A"},
    {question: "Which type of joint is your thumb joint?",
    optionA: "Hinge",
    optionB: "Ball and socket",
    optionC: "Saddle",
    optionD: "Glide",
    correct: "C"}
];

let HBqIndex = 0;
let HBpScore = 1;
let HBnScore = 1;


const showHBq = () => {
    document.getElementById("fstDiv").style.display = "none";
    document.getElementById("SndDiv").style.display = "none";
    document.getElementById("trdDiv").style.display = "block";
    let q = HBquestions[HBqIndex];
    document.getElementById("question").innerHTML = HBquestions[HBqIndex].question;
    document.getElementById("optionA").innerHTML = HBquestions[HBqIndex].optionA;
    document.getElementById("optionB").innerHTML = HBquestions[HBqIndex].optionB;
    document.getElementById("optionC").innerHTML = HBquestions[HBqIndex].optionC;
    document.getElementById("optionD").innerHTML = HBquestions[HBqIndex].optionD;
}

const HBcheckA = (answer) => {
    if(HBquestions[HBqIndex].correct == answer){
        document.getElementById("pScore").innerHTML = HBpScore++
        HBqIndex++
        showHBq();
    }else{
        document.getElementById("nScore").innerHTML = HBnScore++
        HBqIndex++
        showHBq();
    }
}