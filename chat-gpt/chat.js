const randomAnswer = ['hello', 'hi', 'hello, sir', 'hello, how are you?'];

const input = document.querySelector('#input');
const text = document.querySelector('#answer');
const btn = document.querySelector('#btn');
const div = document.querySelector('#div');
const content = document.querySelector('.content');

const d = new Date();


function extractColor(e) {
    const regex = /#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})|rgba?\s*\(\s*(\d{1,3}\s*,\s*){2}\d{1,3}\s*(,\s*(0|1|0?\.\d+))?\s*\)|rgb\s*\(\s*(\d{1,3}\s*,\s*){2}\d{1,3}\s*\)/g;
    const matches = e.match(regex);
    return matches ? matches[0] : null;
}


btn.addEventListener('click', () => {
    let quiz = input.value.trim();
    const colorValue = extractColor(quiz); 
    if (colorValue) { 
        div.style.backgroundColor = colorValue;
        text.innerText = "This is Color: ";
        content.style.visibility = "visible";
    } 
    switch (quiz) {
        case 'hello':
            const random = Math.floor(Math.random() * randomAnswer.length);
            text.innerText = randomAnswer[random];
            text.style.visibility = 'visible';
            content.style.visibility = "visible";
            break;
        case 'ساعت چنده؟':
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const TextHours = `${hours}:${minutes}:${seconds}`;
            text.innerText = TextHours;
            text.style.visibility = 'visible';
            content.style.visibility = "visible";
            break;
        case 'امروز چندمه؟':
            var today = moment().locale('fa').format('jYYYY/jM/jD');
            var dayOfWeek = moment().locale('fa').format('dddd');
            var output = "تاریخ امروز: " + today + "<br>روز هفته: " + dayOfWeek;
            text.innerHTML = output;
            text.style.visibility = 'visible';
            content.style.visibility = "visible";
            break;
    }
});



input.addEventListener('input', () => {
    if (input.value.trim() === '') {
        div.style.backgroundColor = '';
        text.innerText = '';
        content.style.visibility = "hidden";
    }
});
