const home = document.getElementById("home");
const chatPage = document.getElementById("chatPage");
const chat = document.getElementById("chat");

function addMessage(sender, text, className) {

    chat.innerHTML += `
        <div class="${className}">
            <b>${sender}:</b><br>
            ${text}
        </div>
    `;

    chat.scrollTop = chat.scrollHeight;
}

function openChat(firstMessage){

    home.style.display = "none";
    chatPage.style.display = "block";

    addMessage("You", firstMessage, "user");

    // Placeholder muna
    setTimeout(() => {
        addMessage(
            "TOFF",
            "Hello! I'm TOFF 0.1 (beta). TOFF integration coming soon.",
            "ai"
        );
    },500);

}

function sendMessage(){

    const input = document.getElementById("message");

    const message = input.value.trim();

    if(message=="") return;

    input.value="";

    openChat(message);

}

function sendMessage2(){

    const input = document.getElementById("message2");

    const message = input.value.trim();

    if(message=="") return;

    input.value="";

    addMessage("You",message,"user");

    setTimeout(()=>{

        addMessage(
            "TOFF",
            "This is still a placeholder response.",
            "ai"
        );

    },500);

}