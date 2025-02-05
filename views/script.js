let latest = document.querySelector("#Latest");
let showLatest = document.querySelector("#showLatest");
let latestClass = document.querySelector("#latest-id")

latest.addEventListener("mouseenter", function() {
    showLatest.classList.add("open");
    
    latestClass.classList.remove("fa-angle-down")
    latestClass.classList.add("fa-angle-up")

});

latest.addEventListener("mouseleave", function() {
    showLatest.classList.remove("open");
    latestClass.classList.add("fa-angle-down")
    latestClass.classList.remove("fa-angle-up")

});
let latest1 = document.querySelector("#Latest1");
let showLatest1 = document.querySelector("#showLatest1");
let latestClass1 = document.querySelector("#latest-id1")

latest1.addEventListener("mouseenter", function() {
    showLatest1.classList.add("open");
    
    latestClass1.classList.remove("fa-angle-down")
    latestClass1.classList.add("fa-angle-up")

});

latest1.addEventListener("mouseleave", function() {
    showLatest1.classList.remove("open");
    latestClass1.classList.add("fa-angle-down")
    latestClass1.classList.remove("fa-angle-up")

});

let latest2 = document.querySelector("#Latest2");
let showLatest2 = document.querySelector("#showLatest2");
let latestClass2 = document.querySelector("#latest-id2")

latest2.addEventListener("mouseenter", function() {
    showLatest2.classList.add("open");
    
    latestClass2.classList.remove("fa-angle-down")
    latestClass2.classList.add("fa-angle-up")

});

latest2.addEventListener("mouseleave", function() {
    showLatest2.classList.remove("open");
    latestClass2.classList.add("fa-angle-down")
    latestClass2.classList.remove("fa-angle-up")

});

let latest3 = document.querySelector("#Latest3");
let showLatest3 = document.querySelector("#showLatest3");
let latestClass3 = document.querySelector("#latest-id3")

latest3.addEventListener("mouseenter", function() {
    showLatest3.classList.add("open");
    
    latestClass3.classList.remove("fa-angle-down")
    latestClass3.classList.add("fa-angle-up")

});

latest3.addEventListener("mouseleave", function() {
    showLatest3.classList.remove("open");
    latestClass3.classList.add("fa-angle-down")
    latestClass3.classList.remove("fa-angle-up")

});



let imgContainer = [ {
    "image": "images/a5sWW4BpVa.webp",
    "news": "Ranji Trophy 2024-25: Tanush Kotian picks up career-best match-haul in Mumbai’s opener against Baroda"
},
{
    "image": "images/N6yzhExtQs.webp",
    "news": "‘Expect him to do wonders’ - Rohit Sharma tips Yashasvi Jaiswal for greatness"
},
{
    "image": "images/WvvwvrWwBy.webp",
    "news": "Sanju Samson underlines ‘desire is to play Test cricket for India’"
},{
    "image":"images/JnTKKgkcS8.webp",
    "news":"Ranji Trophy 2024-25: Rajasthan’s opener against Puducherry ends in draw after Deepak Hooda century",

},

]

let currentIndex =0;
let imgeslidebtnLeft = document.querySelector("#leftSlidebtn")
let imgeslidebtnRight = document.querySelector("#rightSlidebtn")
let slideImg = document.querySelector("#slideImg")
let slideNews = document.querySelector("#slideNews")

function newIndex() {
    slideImg.src = imgContainer[currentIndex].image;
    slideNews.textContent = imgContainer[currentIndex].news;
  }
imgeslidebtnLeft.addEventListener("click",function(){
    if(currentIndex > 0){
        currentIndex = currentIndex-1;
    }else{
        currentIndex = imgContainer.length - 1;
    }
    newIndex()
})
imgeslidebtnRight.addEventListener("click",function(){
    if (currentIndex < imgContainer.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    newIndex()
})


let darMode =document.querySelector("#darMOde")
darMode.addEventListener("click",function(){
    if(darMode.classList.contains("fa-toggle-off")){
        darMode.classList.add("fa-toggle-on")
        darMode.classList.remove("fa-toggle-off")
    }
})
