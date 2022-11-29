const declineBtn = document.getElementById("btn2")
const modal = document.getElementById("modal")
const container1 = document.getElementById("container1")
const toggle1 = document.getElementById("modalBtn")
const closed = document.getElementById("close")

setTimeout(waited,3000)
function waited(){
    container1.style.display = "block"
}

declineBtn.addEventListener("mouseenter", changeBtn)
function changeBtn(){
    toggle1.classList.toggle("reverse")
}

modal.addEventListener("submit",submitBtn)
function submitBtn(e){
    e.preventDefault()
    modal.innerHTML = `
    <div class="form1">
       <h3 class="heading">We ❤️ Your Data</h3>
       <p>Wait While we are Taking Care of Your Data 😉 </p>
       <img src="./images/loading.svg"/>
    </div>
    `
    setTimeout(showUp,3000)
    function showUp(){
       
        modal.innerHTML=`
        
        <div class="clsBtn" id="close">X</div>
        <div class="form1">
        <p>You are Doomed Now 🤣🤣</p>
        
        <img class="image" src="./images/pirate.gif"/>
        <p>Thank You for Trusting 😉</p>
        </div>
        `
    const closeBtn = document.getElementById("close")
    closeBtn.addEventListener("click",closeModal)
    function closeModal(){
        console.log("closed")
        container1.style.display="none"
    }
}
    
     

}