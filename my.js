let button = document.querySelector(".no")
button.addEventListener("mouseover", function(){
    let rights = Math.floor(Math.random()*100)
    let tops = Math.floor(Math.random()*100)
    this.style.top=`${tops}px`
    this.style.right=`${rights}px`
 
})
button.addEventListener("click", function(){
    let rights = Math.floor(Math.random()*100)
    let tops = Math.floor(Math.random()*100)
    this.style.top=`${tops}px`
    this.style.right=`${rights}px`
 
})