const btnleft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const img = document.querySelector('.img');

(
    function imgSlide(){
        let counter = 1;
        btnRight.addEventListener('click',function(){
            counter++
            if (counter > 5){
                counter = 1
            }
            img.style.background = `url(${counter}.jpg) center/cover fixed no-repeat`
        })
        btnleft.addEventListener('click',function(){
            counter = counter - 1;
            if(counter <= 0){
                counter = 5
            }
            img.style.background = `url(${counter}.jpg) center/cover fixed no-repeat`
        })
    }
)()


