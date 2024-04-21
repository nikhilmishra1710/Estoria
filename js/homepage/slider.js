let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let index=0;

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
setInterval(function(){
    // let items = document.querySelectorAll('.item')
    // document.querySelector('.slide').appendChild(items[index++])
    // if(index>5){
    //     index=0;
    // }
    // let item2 = document.querySelectorAll('.item')
    // document.querySelector('.slide').prepend(item[item2.length - 1])
    document.querySelector(".next"). click();
},2500);