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
        { question: 'We __ friends, and it __ forever.' },
        {
            answers: [
                { text: 'Are, are', isRight: false, checked: false },
                { text: 'Are, is', isRight: true, checked: false, uniqueAnswer:true },
                { text: 'Is, are', isRight: false, checked: false },
                { text: 'Is, is', isRight: false, checked: false },
            ]
        }
    ],
    [
        { question: 'What__you__?  I __ TV' },
        {
            answers: [
                { text: 'Are doing, am watching', isRight: true, uniqueAnswer:true, checked: false },
                { text: 'Is doing, am watching', isRight: false, checked: false },
                { text: 'Are do, am watch', isRight: false, checked: false },
                { text: 'are doing, watch', isRight: false, checked: false },
            ]
        }
    ],
    [
        { question: 'I __ here yesterday. I __ it myself.' },
        {
            answers: [
                { text: 'Was, seed', isRight: false, checked: false },
                { text: 'Was, seen', isRight: false, checked: false },
                { text: 'Were, seen', isRight: false, checked: false },
                { text: 'Was, saw', isRight: true, uniqueAnswer:true , checked: false },
            ]
        }
    ],
    
    [
        { question: 'Sorry, I _ not __you, please say it again' },
        {
            answers: [
                { text: 'Do, heard', isRight: false, checked: false },
                { text: 'Did, heard', isRight: false, checked: false },
                { text: 'Do, hear', isRight: false, checked: false },
                { text: 'Did, hear', isRight: true, uniqueAnswer:true,  checked: false },
            ]
        }
    ],
    [
        { question: '__ just one orange left! – But ___ many of them an hour ago!' },
        {
            answers: [
                { text: 'There’s, there was', isRight: false, checked: false },
                { text: 'There was, there was', isRight: false, checked: false },
                { text: 'There’s, there were', isRight: true, uniqueAnswer:true,  checked: false },
                { text: 'There were, there were', isRight: false, checked: false },
                
            ]
        }
    ],
    [
        { question: 'Who is __ in this room? – I am. – No, not you. I am ___ than you.' },
        {
            answers: [
                { text: 'The oldest, older', isRight: true, uniqueAnswer:true, checked: false },
                { text: 'There was, there was', isRight: false, checked: false },
                { text: 'There’s, there were', isRight: false,   checked: false },
                { text: 'There were, there were', isRight: false, checked: false },
                
            ]
        }
    ],
    [
        { question: ' Don’t be late, the play starts __ 7 PM. – Don’t worry, I will be just __ time' },
        {
            answers: [
                { text: 'At, in', isRight: true, uniqueAnswer:true, checked: false },
                { text: 'On, in', isRight: false, checked: false },
                { text: 'In, in', isRight: false,   checked: false },
                { text: 'At, at', isRight: false, checked: false },
                
            ]
        }
    ],
    [
        { question: 'What do you do in the evenings as a rule? - __ I watch TV.' },
        {
            answers: [
                
                { text: 'Now', isRight: false, checked: false },
                { text: 'Yesterday', isRight: false,   checked: false },
                { text: 'Usually', isRight: true, uniqueAnswer:true, checked: false },
                { text: 'Rarely', isRight: false, checked: false },
                
            ]
        }
    ],
    [
        { question: ' __ you like to go? – I __ visiting our museum' },
        {
            answers: [
                
                { text: 'What do, want', isRight: false, checked: false },
                { text: 'When do, like', isRight: false,   checked: false },
                { text: 'Where do, prefer', isRight: true, uniqueAnswer:true, checked: false },
                { text: 'Who, want', isRight: false, checked: false },
                
            ]
        }
    ],
    [
        { question: ' They were sitting __ the sofa' },
        {
            answers: [
                
                { text: 'In', isRight: false, checked: false },
                { text: 'On', isRight: true, uniqueAnswer:true, checked: false },
                { text: 'At', isRight: false,   checked: false },
                { text: 'Under', isRight: false, checked: false },
                
                
            ]
        }
    ],
    [
        { question: 'It is so dusty here. __ open the window and let some air in here?' },
        {
            answers: [
                
                { text: 'Are you going to', isRight: false, checked: false },
                { text: 'Are you going', isRight: false,   checked: false },
                { text: 'Will you open', isRight: true, uniqueAnswer:true, checked: false },
                { text: 'Do you open', isRight: false, checked: false },
                
                
            ]
        }
    ],
    [
        { question: 'You __ him with this – No, it’s time __ start doing things on his own. I don’t think I __ interfere.' },
        {
            answers: [
                
                { text: '‘d better to help, for him to, should', isRight: false, checked: false },
                { text: '‘d better helping, for him to, should', isRight: false,   checked: false },
                { text: '‘d better to help, for him, should', isRight: false, checked: false },
                { text: '‘d better help, for him to, should*', isRight: true, uniqueAnswer:true, checked: false },
                
                
            ]
        }
    ],
    [
        { question: 'I have been living here for about a month and I ___ saying “hello” to any stranger, passing by' },
        {
            answers: [
                
                { text: 'Used to', isRight: false, checked: false },
                { text: '‘m getting used to', isRight: true, uniqueAnswer:true, checked: false },
                { text: 'Usually', isRight: false,   checked: false },
                { text: '‘m used to', isRight: false, checked: false },
                
                
                
            ]
        }
    ],
    [
        { question: 'Your learning would be more productive if you ___ regularly' },
        {
            answers: [
                { text: 'Studied', isRight: true, uniqueAnswer:true, checked: false },
                { text: 'Would study', isRight: false, checked: false },  
                { text: 'Had studied', isRight: false,   checked: false },
                { text: 'Was studying', isRight: false, checked: false },
                
                
                
            ]
        }
    ],
    [
        { question: 'You can’t do it, thousands of people  here and if you do, their lives __.' },
        {
            answers: [
                
                { text: 'Live, destroyed', isRight: false, checked: false },  
                { text: 'Are living, will be destroyedd', isRight: false,   checked: false },
                { text: 'Live, will be destroyed', isRight: true, uniqueAnswer:true, checked: false },
                { text: 'Lived, will be destroyed', isRight: false, checked: false },
                
                
                
            ]
        }
    ],
    [
        { question: 'Are you going to help me today with dinner? => He asked ___' },
        {
            answers: [
                
                { text: 'Whether we are going to help him today', isRight: false, checked: false },  
                { text: 'if we were going to help him today', isRight: false,   checked: false },
                
                { text: 'if we are going to help him that day', isRight: false, checked: false },
                { text: 'if we were going to help him that day', isRight: true, uniqueAnswer:true, checked: false },
                
                
                
            ]
        }
    ],
    [
        { question: 'In case you open this kind of visa you can ___ study, nor work' },
        {
            answers: [
                
                { text: 'Either', isRight: false, checked: false },  
                { text: 'Both', isRight: false,   checked: false },
                { text: '-', isRight: false, checked: false },
                { text: 'Neither', isRight: true, uniqueAnswer:true, checked: false },
                
                
                
            ]
        }
    ],
    [
        { question: ' I was worried, you know. We have news from you, however _ of your friends told me anything. Could you give me _ sign that everything is OK?' },
        {
            answers: [
                
                { text: 'None, none, some', isRight: false, checked: false },  
                { text: 'No, none, anything', isRight: false,   checked: false },
                { text: '-', isRight: false, checked: false },
                { text: 'No, none, any', isRight: true, uniqueAnswer:true, checked: false },
                
                
                
            ]
        }
    ],
    [
        { question: 'This is the girl ___ I was talking about.' },
        {
            answers: [
                
                { text: 'Who', isRight: false, checked: false },  
                { text: 'Whom', isRight: false,   checked: false },
                { text: '–', isRight: true, uniqueAnswer:true, checked: false },
                { text: 'Whose', isRight: false, checked: false },
               
                
                
            ]
        }
    ],
    [
        { question: 'She is amazing, ___?' },
        {
            answers: [
                
                { text: 'Is her?', isRight: false, checked: false },  
                { text: 'Is she?', isRight: false,   checked: false },
                { text: 'Isn’t she', isRight: true, uniqueAnswer:true, checked: false },
                { text: 'Isn’t her?', isRight: false, checked: false },
               
                
                
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

    document.querySelector('.quizIndexCounter').innerHTML=`${i+1}/${quiz.length}`

    document.querySelectorAll('#answer').forEach((item, index) => {
        item.addEventListener('change', () => {

            quiz[i][1].answers[index].checked = true
            quiz[i][1].answers[index].isClicked = true
            console.log(quiz[i][1].answers[index])
            if (quiz[i][1].answers[index].isRight === true&&quiz[i][1].answers[index].uniqueAnswer===true) {
                quiz[i][1].answers[index].uniqueAnswer=false
                results.push(quiz[i][1].answers[index].isRight)
                console.log(results)
            }


        })
    })

    console.log(question_id)





}



const showResult = () => {
    let counter = results.length
    let suggestion=''
    if(counter<=17){
        suggestion='У Вас хороший результат. Мы рекомендуем Вам курс - <span>General English</span>'
    }
    else if(counter>17){
        suggestion='У Вас великолепный результат. Мы рекомендуем Вам курс - <span>PRE-IELTS English</span>'
    }

    console.log(counter)
    document.querySelector('.quiz-game-answers').innerHTML = ''
    document.querySelector('.quiz-game-question').innerHTML = ''
    document.querySelector('.quiz-game-answers').innerHTML += `<div class='result'><p>Ваш результат:<span> ${counter}</span></p> <p>${suggestion}</p> </div>`
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

        if(postApi){
            this.name.value=this.phone.value=this.text.value=''
           document.querySelector('.form-sended-wrapper').style.display='flex'
           document.querySelector('.form-sended-icon').style.backgroundImage='url("./assets/done.svg")'
           setTimeout(()=>{
            document.querySelector('.form-sended-wrapper').style.display='none'
           },2000)
        }
    }

    catch (error) {
        console.log(error)
        document.querySelector('.form-sended-wrapper').style.display='flex'
        document.querySelector('.form-sended-icon').style.backgroundImage='url("./assets/error.svg")'
        document.querySelector('.form-sended').innerHTML='Упс..Возникла ошибка при отправке формы'
        setTimeout(()=>{
         document.querySelector('.form-sended-wrapper').style.display='none'
        },2000)
       
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



