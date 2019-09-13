window.addEventListener("DOMContentLoaded",
function()
{
        const main = document.getElementById("main");
        for (let i = 0; i< 5; i++){
            const id = setTimeout(function(){
            const el = document.createElement("div");
            let mes = "this is";
            el.className = "number";
            el.innerHTML = `${mes}  ${i+1}`;
            main.appendChild(el);
            el.addEventListener("click", function(){
                el.textContent= `${mes} ${prompt("enter number ", i+1)} ` ;
                 
            })
            },200 * (i+1));
        }
});
