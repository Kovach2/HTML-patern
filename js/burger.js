let burger = document.querySelector('.burger__line')
let MenuLinks = document.querySelectorAll(".menu__item-link")
// Создание структуры бургера
let container = document.createElement("div")
let burgerLinks = []
container.setAttribute("class", "burger-menu")

burger.addEventListener("click", function(){
   // Удаление
   if (burger.classList.contains("active")){
      burger.classList.remove("active")
      container.remove()
      for (let i = 0; i < MenuLinks.length; i++) {
         container.removeChild(burgerLinks[i])
      }
   }else{
      // Создание
      burger.classList.add("active")
      document.body.append(container)
      for (let i = 0; i < MenuLinks.length; i++) {
         burgerLinks[i] = document.createElement("div")
         burgerLinks[i].setAttribute("class", "burger-menu__item")
         burgerLinks[i].innerHTML = MenuLinks[i].textContent
         container.append(burgerLinks[i])
      }
   }
})
