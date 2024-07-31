const result = document.querySelector(".js-result");
const checkPalindrome = () =>{
    const inputElement = document.querySelector(".js-text-input");
    let inputValue = inputElement.value.trim();

    if(inputValue === ""){
        alert("Please enter a string");
        
    } 
    else{
       const reversedtext = inputValue.split("").reverse().join("")
       if (reversedtext === inputValue){
        result.textContent = "The string is a palindrome";
        result.classList.add("text-emerald-500")
        result.classList.remove("hidden","text-red-400");
       }
       else{
        result.textContent = "This string is not a palindrome";
        result.classList.add("text-red-400")
        result.classList.remove("hidden","text-emerald-500")
       }
       inputElement.value = ""
    }
}


