const arrow_btn=document.querySelector('.arrow')
const work_proc_block=document.querySelector('.work-proc')
const form=document.getElementById('form')
const hamburger=document.querySelector('.hamburger')
const closer=document.querySelector('.closer')
const menu=document.querySelector('.menu')






const toggleActive=()=>{
    menu.classList.toggle('active')
}

hamburger.addEventListener('click',()=>{
    toggleActive()
})

closer.addEventListener('click',()=>{
    toggleActive()
})




arrow_btn.addEventListener('click',()=>{
    work_proc_block.scrollIntoView({
        behavior:'smooth',
        block: 'end'
    })
})



form.addEventListener('submit',(e)=>{
    e.preventDefault()
})