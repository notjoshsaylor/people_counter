let count = 0
let countEl = document.getElementById("count-el")
let incrementEl = document.getElementById("increment-el")
let saveEl = document.getElementById("save-el")
let entriesEl = document.getElementById("entries-el")

function increment(){
    count += 1
    countEl.textContent = count 
}

function save(){
    entriesEl.textContent += count + " - " 
    count = 0 
    countEl.textContent = count
    
}