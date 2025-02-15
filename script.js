//your JS code here. If required.
let output = document.querySelector("#output");
let btn = document.querySelector("#btn");

async function delayMessage() {
  let text = document.querySelector("#text").value;
  let num = parseInt(document.querySelector("#delay").value, 10);

  if(isNaN(num) || num < 0){
    output.textContent = "Please enter the valid delay time.";
    return;
  }
	
  await new Promise((resolve)=>{
    setTimeout(resolve, num);
  })

  output.textContent = text;
}


btn.addEventListener("click", ()=>{
  delayMessage();
})
