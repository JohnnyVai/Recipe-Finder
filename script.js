const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function LoginPage() {
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

   

    if (!pattern.test(email)) {
        document.getElementById("message").textContent = "Error Email!";

        
    }   
}
function HomePage(){
    console.log("Welcome to Home Page");
    
}