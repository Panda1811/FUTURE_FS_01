// typing effect
const text=["MCA Student","Web Developer","AI Enthusiast"];
let i=0,j=0,del=false;

function type(){
let el=document.getElementById("typing");
if(!el) return;

let current=text[i];

if(!del){
el.textContent=current.substring(0,j++);
if(j>current.length){
del=true;
setTimeout(type,1000);
return;
}
}else{
el.textContent=current.substring(0,j--);
if(j===0){
del=false;
i=(i+1)%text.length;
}
}

setTimeout(type,100);
}

type();

// back button
function goBack(){
window.history.back();
}
const typingForm = document.querySelector(".typing-form");
const typingInput = document.querySelector(".typing-input");
const outputBox = document.querySelector(".output-box");

let userMessage = null;

const handleOutgoingChat = (e) => {
    e.preventDefault(); // stop page reload

    userMessage = typingInput.value.trim();

    if (!userMessage) return;

    console.log(userMessage);

    // show message on screen
    const messageElement = document.createElement("p");
    messageElement.textContent = userMessage;
    outputBox.appendChild(messageElement);

    // clear input
    typingInput.value = "";
};

// event listener
typingForm.addEventListener("submit", handleOutgoingChat);

// NAV MENU
const navLinks = document.getElementById("navlinks");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

// OPEN MENU
menuBtn.addEventListener("click", () => {
    navLinks.style.right = "0";
});

// CLOSE MENU
closeBtn.addEventListener("click", () => {
    navLinks.style.right = "-200px";
});


// HIRE ME BUTTON → scroll to contact
const hireBtn = document.getElementById("hireBtn");
hireBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});


// CONTACT BUTTON → scroll
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});


// WHATSAPP BUTTON
const whatsappBtn = document.getElementById("whatsappBtn");
whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/91XXXXXXXXXX", "_blank"); // replace number
});


// INSTAGRAM BUTTON
const instagramBtn = document.getElementById("instagramBtn");
instagramBtn.addEventListener("click", () => {
    window.open("https://instagram.com/yourusername", "_blank");
});


// EMAIL BUTTON
const emailBtn = document.getElementById("emailBtn");
emailBtn.addEventListener("click", () => {
    window.location.href = "mailto:youremail@gmail.com";
});


// NAV LINKS SMOOTH SCROLL
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if(targetSection){
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

          // close mobile menu after clicking a link
        if(window.innerWidth <= 700){
            navLinks.style.right = "-200px";
        }
    });
});


function type(){
let el=document.getElementById("typing");
if(!el) return;

let current=text[i];

if(!del){
el.textContent=current.substring(0,j++);
if(j>current.length){
del=true;
setTimeout(type,1000);
return;
}
}else{
el.textContent=current.substring(0,j--);
if(j===0){
del=false;
i=(i+1)%text.length;
}
}
setTimeout(type,100);
}
type();