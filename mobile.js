const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll("ul li");

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        contents.forEach((el)=>{
            el.classList.remove("show");
        })
        contents.forEach((el)=>{
            el.classList.remove("active");
        })
        item.classList.add('active');
        contents[idx].classList.add('show');
    })
    
})