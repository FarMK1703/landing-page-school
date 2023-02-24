const arrow_btn=document.querySelector('.arrow')
const work_proc_block=document.querySelector('.work-proc')
const form=document.getElementById('form')
const hamburger=document.querySelector('.hamburger')
const closer=document.querySelector('.closer')
const menu=document.querySelector('.menu')

const work_buttons=document.querySelectorAll('#work-btn')
const scratch_btn=document.querySelectorAll('#scratch-btn')






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




work_buttons.forEach(item=>{
    item.addEventListener('click',function(){
       for(let i=0;i<=work_buttons.length;i++){
        if(work_buttons[i]!==item){
            work_buttons[i].parentNode.style.display='none'
        }
        else{
            work_buttons[i].parentNode.classList.add('chosen')
        }
       }
       
       
    })
})



scratch_btn.forEach(item=>{
    item.addEventListener('click',function(){
        this.parentNode.classList.remove('chosen')
        for(let i=0;i<work_buttons.length;i++){
           work_buttons[i].parentNode.style.display='flex'
        }
    })
})


let element = document.getElementById('phone');
let maskOptions = {
  mask: '+{998}(00)000-00-00'
};

let mask = IMask(element, maskOptions);



