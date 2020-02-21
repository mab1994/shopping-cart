var plus = document.querySelectorAll(".plus")
var minus = document.querySelectorAll(".minus")
var cart = document.querySelector(".cart")
var remove = document.querySelectorAll(".remove-button")
var like = document.querySelectorAll(".fa-heart")



    Array.from(plus).map(el => {
        el.addEventListener('click', () => {
            el.nextElementSibling.innerHTML ++
            let p = parseInt(el.parentElement.nextElementSibling.firstElementChild.innerHTML)
            cart.innerHTML = parseInt(cart.innerHTML) + p
        })
    })

    Array.from(minus).map(el => {
        el.addEventListener('click', () => {
            if (el.previousElementSibling.innerHTML == 0) {
                
            }
            else {el.previousElementSibling.innerHTML -- 
                let p = parseInt(el.parentElement.nextElementSibling.firstElementChild.innerHTML)
                cart.innerHTML = parseInt(cart.innerHTML) - p
            }
            
        })
    })

    Array.from(remove).map(el => {
        el.addEventListener('click', () => {
            el.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.remove();
        })
    })

    Array.from(like).map(el => {
        el.addEventListener('click', () => {
            el.classList.toggle("red");
        })
    })


