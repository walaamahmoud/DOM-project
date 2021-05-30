var imgs = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");


var currentSlideIndex;
for (var i = 0; i < imgs.length; i++) {
   imgs[i].addEventListener("click", function(e)
   {
    currentSlideIndex = imgs.indexOf(e.target);
     var imgSrc = e.target.getAttribute("src");
     lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
     lightBoxContainer.classList.replace("d-none","d-flex");
    
   });
    
}

function nextSlide()
{
    currentSlideIndex++;
    if(currentSlideIndex == imgs.length)
    {
        currentSlideIndex = 0;
    }
    var imgSrc  = imgs[currentSlideIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function prevSlide()
{
    currentSlideIndex--;
    if(currentSlideIndex < 0)
    {
        currentSlideIndex = imgs.length -1;
    }
    var imgSrc  = imgs[currentSlideIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function close()
{
    lightBoxContainer.classList.replace("d-flex","d-none");
}



nextBtn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);
closeBtn.addEventListener("click",close);

document.addEventListener("keydown", function(e){
    console.log(e);
    if(e.key == "ArrowRight")
    {
        nextSlide();
    }
    else if (e.key == "ArrowLeft")
    {
        prevSlide();
    }
    else if (e.key == "Escape")
    {
        close();
    }
});