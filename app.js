 const form = document.getElementById("form");
  const btn = document.getElementById("btn");
  const addbtn = document.getElementById("addbtn")
  addbtn.addEventListener("click", (event)=>{
    event.preventDefault;
const book = document.getElementById("name").value;
 const bookimg = document.getElementById("image").value;
   const bookdescr = document.getElementById("descr").value;
  })
btn.addEventListener("click", ()=>{

    if(form.classList.contains("hidden")){
    form.classList.remove("hidden");
    from.classList.add("flex");
    }
    else{
          form.classList.remove("flex");
    from.classList.add("hidden");
    }
})



