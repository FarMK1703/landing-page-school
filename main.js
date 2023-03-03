const arrow_btn = document.querySelector('.arrow')
const work_proc_block = document.querySelector('.work-proc')
const form = document.getElementById('form')
const hamburger = document.querySelector('.hamburger')
const closer = document.querySelector('.closer')
const menu = document.querySelector('.menu')

const work_buttons = document.querySelectorAll('#work-btn')
const scratch_btn = document.querySelectorAll('#scratch-btn')

const quiz = [
    [
        { question: 'Вадик пидор?' },
        {
            answers: [
                { text: 'Да', isRight: true, checked: false },
                { text: 'Пизда', isRight: false, checked: false },
                { text: 'Нет', isRight: false, checked: false },
                { text: 'Пидора ответ', isRight: false, checked: false },
            ]
        }
    ],
    [
        { question: 'Вадик сука?' },
        {
            answers: [
                { text: 'Да', isRight: true, checked: false },
                { text: 'Пизда', isRight: false, checked: false },
                { text: 'Нет', isRight: false, checked: false },
                { text: 'Пидора ответ', isRight: false, checked: false },
            ]
        }
    ],


]

let question_id = 0
let results = []

chat_ID = `-924847416`
const token = `6102998931:AAFwi6UXLX64EeRoPHtDFxCouJkF8CtKmq0`
const uriApi = `https://api.telegram.org/bot${token}/sendMessage`






const updateFrame = (i) => {


    document.querySelector('.quiz-game-question').innerHTML = `${quiz[i][0].question}`
    document.querySelector('.quiz-game-answers').innerHTML = ''
    quiz[i][1].answers.map((item) => {



        console.log(item.checked)
        let checked = ''
        if (item.checked === true) {
            checked = 'checked'
        }
        else {
            checked = ''
        }
        document.querySelector('.quiz-game-answers').innerHTML += `<div class='answers'>
         <input ${checked}  type='radio' id='answer'  name='answers' value=${item.isRight} />
         <label for='asnwer1'>${item.text}</label>
        
        </div>`



    })

    document.querySelectorAll('#answer').forEach((item, index) => {
        item.addEventListener('change', () => {

            quiz[i][1].answers[index].checked = true
            if (quiz[i][1].answers[index].isRight === true) {
                results.push(quiz[i][1].answers[index].isRight)
                console.log(results)
            }


        })
    })

    console.log(question_id)





}



const showResult = () => {
    let counter = results.length

    console.log(counter)
    document.querySelector('.quiz-game-answers').innerHTML = ''
    document.querySelector('.quiz-game-answers').innerHTML += `<div class='asnwer'>Ваш результат:${counter} </div>`
    document.querySelector('.nav_btns').style.display = 'none'
    document.getElementById('reload').style.display = 'block'
}


const reload = () => {
    for (let i = 0; i < quiz.length; i++) {
        quiz[i][1].answers.map(item => {
            item.checked = false
        })
    }
    results = []
    question_id = 0

    console.log(quiz)
    updateFrame(question_id)
    document.getElementById('reload').style.display = 'none'
    document.querySelector('.nav_btns').style.display = 'block'




}

document.getElementById('quiz-btn').addEventListener('click', function () {
    this.style.display = 'none'
    document.querySelector('.nav_btns').style.display = 'block'
    updateFrame(question_id)
})

document.getElementById('btn_next').addEventListener('click', function () {
    if (question_id < quiz.length - 1) {
        question_id++
        updateFrame(question_id)
    }
    else {
        showResult()
    }

})


document.getElementById('btn_prev').addEventListener('click', function () {
    if (question_id > 0) {
        question_id--
        updateFrame(question_id)
    }
})


document.getElementById('reload').addEventListener('click', () => {
    reload()
})




const toggleActive = () => {
    menu.classList.toggle('active')
}

hamburger.addEventListener('click', () => {
    toggleActive()
})

closer.addEventListener('click', () => {
    toggleActive()
})




arrow_btn.addEventListener('click', () => {
    work_proc_block.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    })
})



form.addEventListener('submit', async function (e) {
    e.preventDefault()
    try {
        let text = `<b>Сообщение от: </b>${this.name.value}\n`
        text += `<b>Номер телефона: </b>${this.phone.value}\n`
        text += `<b>Текст: </b>${this.text.value}`


        const postApi = await axios.post(uriApi, {
            chat_id: chat_ID,
            text: text,
            parse_mode: 'HTML'

        },)
        console.log(postApi)
    }

    catch (error) {
        console.log(error)
    }
})










work_buttons.forEach(item => {
    item.addEventListener('click', function () {
        for (let i = 0; i <= work_buttons.length; i++) {
            if (work_buttons[i] !== item) {
                work_buttons[i].parentNode.style.display = 'none'
            }
            else {
                work_buttons[i].parentNode.classList.add('chosen')
                document.querySelector('.work-proc').scrollIntoView({
                    behavior: "smooth",
                    block: 'start'
                })
            }
        }


    })
})



scratch_btn.forEach(item => {
    item.addEventListener('click', function () {
        this.parentNode.classList.remove('chosen')
        for (let i = 0; i < work_buttons.length; i++) {
            work_buttons[i].parentNode.style.display = 'flex'
        }
    })
})


let element = document.getElementById('phone');
let maskOptions = {
    mask: '+{998}(00)000-00-00'
};

let mask = IMask(element, maskOptions);



