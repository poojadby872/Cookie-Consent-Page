const declineBtn = document.getElementById("btn2")
const modal = document.getElementById("modal")
const container1 = document.getElementById("container1")
const toggle1 = document.getElementById("modalBtn")
const closed = document.getElementById("close")
const footer = document.getElementById("footer")
const prev = document.getElementById("pre")
const next = document.getElementById("next")
const Main = document.getElementById("Main")


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
    const HTML =   `
    <div class="form1">
       <h3 class="heading">We ❤️ Your Data</h3>
       <p margin-bottom="20px">Wait While we are Taking Care of Your Data 😉 </p>
       <img class="load" src="./images/loading.svg"/>
    </div>
    `
    modal.innerHTML = HTML
    setTimeout(showUp,3000)
    function showUp(){
        const HTML2 =   `
        <div class="clsBtn" id="close">X</div>
          <div class="form1">
            <p>You are Doomed Now 🤣🤣</p>
        
             <img class="image" src="./images/pirate.gif"/>
             <p>Thank You for Trusting 😉</p>
           </div>
        `
        modal.innerHTML = HTML2

    const closeBtn = document.getElementById("close")
    closeBtn.addEventListener("click",closeModal)
    function closeModal(){
        console.log("closed")
        container1.style.display="none"
    }
}
    
     

}

next.addEventListener("click",nextSlide)
prev.addEventListener("click",originalSlide)

function nextSlide(){
    const bodyText = `
    <main class="Main">
       <div class="section">
            <h1><em>The Next Slide</em></h1>
             <img width="400px" height="400px" object-fit="cover" src="./images/bugatti.jpg"/>
        </div>
        <div class="subSection">
            <div class="section">
                <h2><em>The Dummy Text</em></h2>
            <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>
               <p class="para">ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <p class="para">laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
                 <p class="para">voluptate velit esse cillum dolore eu fugiat. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui.</p>
            </div>
            <div class="section">
                <article>
                <h2><em>The funny consent cookies form</em></h2>
    
                hdchdc bcdhdh difdh djfcjk fdbkj jnfjdnk jcnfdjc bfbif fhfiuefh bfjdb cfbfc <br>
                dchcdhc ijdsnjdn bdchdbc fdvjc dhbcd bcidb jbfjfjv hdbchs dbcdsjvc dcbcdb cjnndkj<br>
                dbsch dsbhcbd shcbd bcdsbc bdjbcj cjdsck jdsbjcdsj dbhcbdh vcbfd dscnjkd
            </article></div>
        </div>
        

         <div class="section">
            <h2><em>The Paragraph</em></h2>
            <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>
           <p class="para">ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            <p class="para">laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
             <p class="para">voluptate velit esse cillum dolore eu fugiat. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui.</p>
         </div>  
        </main
    `

    Main.innerHTML= bodyText
   

}
function originalSlide(){
    const Text1 = `
    
    <main id="Main" class="Main">
       <div class="section">
            <h1><em>Employees Laid off</em></h1>
             <img width="400px" height="400px" object-fit="cover" src="./images/bugatti.jpg"/>
        </div>
        <div class="subSection">
            <div class="section">
                <h2><em>The Dummy Text</em></h2>
            <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>
               <p class="para">ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <p class="para">laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
                 <p class="para">voluptate velit esse cillum dolore eu fugiat. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui.</p>
            </div>
            <div class="section">
                <article>
                <h2><em>The funny consent cookies form</em></h2>
    
                hdchdc bcdhdh difdh jkfdbkj  jcnfdjc bfbif hfiuef hfiuefh bfjdbcfbfc <br>
                dchcdhc ijdsnjdn bdchdbc fdvjc dhbcdbc idbjbf jvbfjv hdbchs dbcdsjvc dcbcdb cjnn dkj<br>
                dbschds bhcbdshc bdbc dsbc bdbcjdsc kjdsbj cdsj dbhcb dhvcbfd djcdbj cjds cnjkd
            </article></div>
        </div>
        
    
         <div class="section">
            <h2><em>The Paragraph</em></h2>
            <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>
           <p class="para">ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            <p class="para">laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
             <p class="para">voluptate velit esse cillum dolore eu fugiat. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui.</p>
         </div>  
          
         <!-- next dummy news -->
    
         <div class="subSection">
            <div class="section">
                <h2><em>The Dummy Text</em></h2>
                <img width="380px" height="300px" padding="3px"  src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>
               <p class="para">ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <p class="para">laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
                 <p class="para">voluptate velit esse cillum dolore eu fugiat. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui.</p>
            </div>
            <div class="section">
                <article>
                <h2><em>The funny consent cookies form</em></h2>
                <img width="200px" height="180px" class="monkey" src="https://tse4.mm.bing.net/th?id=OIP.AWX__NfoS2ngboe2ClIUTgHaHY&pid=Api&P=0"/>
    
                hdchdc bcdhdh difdh djfcjk fdbkj jnfjdnk jcndjc bfbif huef hfiuefh bfjdbc fbfc <br>
                dchcd hcijd snjdn bdchdb cfdvjc dhbcd bcidb jbfjvbfjv hdbchs dbcdsjvc dcbcd bcjnnj<br>
                dbschd shcbd bcdsbc bdjbcj sdbcjds ckjds bjcdsj dbhcb dhvcbfd djcdbjc jdscn jkd
            </article>
        </div>
        </div>
        
    
         <div class="section">
            <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>
           <p class="para">ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            <p class="para">laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
             <p class="para">voluptate velit esse cillum dolore eu fugiat. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui.</p>
         </div> 
        
    </main>
     
    <div  id="container1"  class="container" >
        <form id="modal" class="form">
          <div class="clsBtn" id="close">X</div>
    
        
                <h3>Please Login and Accept our Policies</h3>
                <input type="text" name="full name" placeholder="full name" required>
                <input type="email" name="email" placeholder="your email" required >
                <input type="password" name="password" placeholder="your password" required>
            <div id="modalBtn">
                <button type="submit" id="btn1" class="btn">Accept</button>
                <button id="btn2" class="btn">Decline</button>
            </div>
        </form>
        
       
    </div>
    
        `


    Main.innerHTML= Text1
}