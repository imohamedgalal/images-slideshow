// هنجيبب الصور
let sliderImages =  Array.from(document.querySelectorAll('.slider-container img'));

// هنجيب عدد الصور
let slidesCount = sliderImages.length;

// هنبدا من اول صوره
let currentSlide = 1;

// هنجيب المكان الي بنكتب فيه رقم الصوره الحالية
let slideNumberElement = document.getElementById('slide-number');

// زرار التالي والسابق
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

// تفعيل الكليك لزرار التالي والسابق
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

// انشاء قائمه لوضع ليسته بارقام الصور بها
let ulElment = document.createElement('ul');
ulElment.setAttribute('id','ulElement');

// انشاء ليسته بعدد الصور 
for(let i = 1; i <= slidesCount; i++){
    // انشاء عنصر
    let liItems = document.createElement('li');
    // هنضيف للعنصر خاصيه لتمييزه
    liItems.setAttribute('data-index',i);
    // هنضيف للعنصر رقمه  
    liItems.appendChild(document.createTextNode(i));
    // هنضيف العنصر للقائمه الاب
    ulElment.appendChild(liItems);
}

//اضافه القايمه في الصفحه 
document.getElementById('indicators').appendChild(ulElment);

let allLiItems =  Array.from(document.querySelectorAll('#ulElement li'));

for (let i = 0; i < allLiItems.length; i++){
    allLiItems[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }

}


function checker(){
    removeActive();
    // كتابه رقم الصوره الحاليه من التوتال
    slideNumberElement.textContent = `${currentSlide} of ${slidesCount}`;

    // بنضيف كلاس للصوره الحاليه علشان تظهر
    sliderImages[currentSlide -1].classList.add('active');

    //
    ulElment.children[currentSlide -1].classList.add('active');

    if(currentSlide == 1){
        //
        prevButton.classList.add('disabled');
    }else{
        prevButton.classList.remove('disabled');
    }
    if(currentSlide == slidesCount){
        nextButton.classList.add('disabled');
    }else{
        nextButton.classList.remove('disabled');
    }
}

// فانكشن لازاله كل الاكتيف من العناصر
function removeActive(){
    sliderImages.forEach(image => {
        image.classList.remove('active');
    });
    allLiItems.forEach(li => {
        li.classList.remove('active');
    });
    
}

// فانكشن لعرض التاليه
function nextSlide(){
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        checker();     
    }
}
// فانكشن لعرض السابقه
function prevSlide(){
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        checker();     
    }
}
checker();

setInterval(() => {
    if(nextButton.classList.contains('disabled')){
        currentSlide = 1;
        checker();
    }else{
        currentSlide++;
        checker(); 
    }
},5000);

