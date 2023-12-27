let minRangeValueGap = 6;

const range = document.getElementById("range__track")
const minValue = document.querySelector(".min__value")
const maxValue = document.querySelector(".max__value")
const rangeInput = document.querySelector(".input")

let minRange, maxRange, minPercentage, maxPercentage;

const minRangeFill = () => {
    range.style.left = (rangeInput[0].value / rangeInput[0].max) * 100 + "%"
}

const maxRangeFill = () => {
    range.style.right = 100 - (rangeInput[1].value / rangeInput[1].max) * 100 + "%"
}

const minValueBubble = () => {
    minPercentage = (minRange / rangeInput[0].max) * 100
    minValue.style.left = minPercentage + "%"
    minValue.style.transform = `translate(-${minPercentage /2}%, -100)`
}

const maxValueBubble = () => {
    maxPercentage = 100 - (maxRange / rangeInput[1].max) * 100
    maxValue.style.right = maxPercentage + "%"
    maxValue.style.transform = `translate(${maxPercentage /2}%, 100%)`
}

const setMinValueOutput = () => {
    minRange = parseInt(rangeInput[0].value)
    minValue.innerHTML = rangeInput[0].value
}

const setMaxValueOutput = () => {
    maxRange = parseInt(rangeInput[1].value)
    maxValue.innerHTML = rangeInput[1].value
}

setMinValueOutput()
setMaxValueOutput()
minRangeFill()
maxRangeFill()
minValueBubble()
maxValueBubble()

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        setMinValueOutput()
        setMaxValueOutput()

        minRangeFill()
        maxRangeFill()

        minValueBubble()
        maxValueBubble()

        if (maxRange - minRange < minRangeValueGap) {
            if (e.target.className === "min") {
                rangeInput[0].value = maxRange - minRangeValueGap
                setMinValueOutput()
                minRangeFill()
                minValueBubble()
                e.target.style.zIndex = "2"
            }
            else {
                rangeInput[1].value = minRange + minRangeValueGap
                e.target.style.zIndex = "2"
                setMaxValueOutput()
                maxRangeFill()
                minValueBubble()
            }
        }
    })
})
