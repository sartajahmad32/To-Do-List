let form = document.getElementById("addForm")
let itemlist = document.getElementById("items")
let filter = document.getElementById("filter")

form.addEventListener("submit",function(e){
  e.preventDefault()
 let item = document.querySelector("#Item").value
 //console.log(item)

 let li = document.createElement("li")
 li.className = "list-group-item"
 let btn = document.createElement("button")
 btn.className = "btn btn-danger btn-sm float-right delete"
 btn.appendChild(document.createTextNode("X"))
 

 li.appendChild(document.createTextNode(item))
 li.appendChild(btn)
 //console.log(li)
 itemlist.appendChild(li)
 document.querySelector("#Item").value = ''
})

itemlist.addEventListener("click",function(x){
  if(x.target.classList.contains("delete")){   
        if(confirm("Are you sure")){
        itemlist.removeChild(x.target.parentElement)
        } else{
          alert("koi kaam nahi hai kya")
        }
  }
})
filter.addEventListener("keyup",function(y){
  let text = y.target.value.toLowerCase()

 let items = document.getElementsByTagName("li")
 Array.from(items).forEach(function(content){
   let itemName = content.firstChild.textContent
   if(itemName.toLowerCase().indexOf(text) !=-1){
    content.style.display = "block"
   }else{
     content.style.display = "none"
   }
 })
})
