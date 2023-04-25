"use strict"

const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const res = document.querySelector(".res")
const display = document.querySelector(".display")
const tlimpar = document.querySelector("#tlimpar")
const tigual = document.querySelector("#tigual")
const tcpy = document.querySelector("#tcpy")

let sinal = false
let decimal = false

teclasNum.forEach(el => {
    el.addEventListener("click",(evt) => {
        sinal = false

        if(evt.target.innerHTML == ",") {
            if(!decimal) {
                decimal = true
                
                if(display.innerHTML == 0) {
                    display.innerHTML = ",0"
                } else {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            if(display.innerHTML == 0) {
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.forEach(el => {
    el.addEventListener("click",(evt) => {
        if(!sinal) {
            sinal = true

            if(display.innerHTML == 0) {
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x") {
                display.innerHTML += "*"
            } else {
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener("click",() => {
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

tigual.addEventListener("click",() => {
    sinal = false
    decimal = false
    let res = eval(display.innerHTML)
    display.innerHTML = res
})

tcpy.addEventListener("click",() => {
    navigator.clipboard.writeText(display.innerHTML)
})