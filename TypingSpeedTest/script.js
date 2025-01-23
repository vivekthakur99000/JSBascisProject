const time = document.getElementById("time");
const start = document.getElementById("start")
const para = document.getElementById("para")
const input = document.getElementById("input")

const paragraphs = [
    "The quick brown fox jumps over the lazy dog. This sentence contains every letter in the English alphabet.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    "In a galaxy far, far away, there was a young Jedi who dreamed of becoming a master of the Force.",
    "The rain in Spain stays mainly in the plain. This phrase is often used to practice pronunciation.",
    "To be or not to be, that is the question. This famous line is from Shakespeare's play Hamlet."
];

let startTime;
let interval

start.addEventListener("click", () => {
    // generate the random paragraph 

    const idx =  Math.floor(Math.random() * paragraphs.length)

    para.textContent = paragraphs[idx]

    input.value = ""
    input.focus()

    clearInterval(interval)

    startTime = new Date()

    interval = setInterval(() => {
        const elapsedTime = Math.floor((new Date() - startTime) /1000)
        time.textContent = `Time : ${elapsedTime} Seconds`
    }, 1000)

})

input.addEventListener("input", () => {
    if (input.value === para.textContent) {
        clearInterval(interval)
        const elapsedTime = Math.floor((new Date() - startTime)/ 1000)
        time.textContent = `Completed in : ${elapsedTime} Seconds`
    }
})