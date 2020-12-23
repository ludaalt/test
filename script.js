'use strict';

const descriptionArr = document.querySelectorAll('.description-wrap'),
      toLeftButton = document.getElementById('left-button'),
      toRightButton = document.getElementById('right-button');



toLeftButton.addEventListener('click', (event) => {       
    for (let i = 0; i < descriptionArr.length; i += 1) {        
        if (descriptionArr[i].classList.contains('description-wrap-active')) {
            descriptionArr[i].classList.remove('description-wrap-active');
            descriptionArr[i].classList.add('description-wrap-noactive');
            if(i == 0) {                
                descriptionArr[descriptionArr.length - 1].classList.remove('description-wrap-noactive');
                descriptionArr[descriptionArr.length - 1].classList.add('description-wrap-active', 'fade');
                break;
            } else if (i > 0) {
                descriptionArr[i - 1].classList.remove('description-wrap-noactive');
                descriptionArr[i - 1].classList.add('description-wrap-active', 'fade');
            }            
        }
    }    
});


toRightButton.addEventListener('click', (event) => {       
    for (let i = 0; i < descriptionArr.length; i += 1) {        
        if (descriptionArr[i].classList.contains('description-wrap-active')) {
            descriptionArr[i].classList.remove('description-wrap-active');
            descriptionArr[i].classList.add('description-wrap-noactive');
            if(i == descriptionArr.length - 1) {                
                descriptionArr[0].classList.remove('description-wrap-noactive');
                descriptionArr[0].classList.add('description-wrap-active', 'fade');
                break;
            } else if(i < descriptionArr.length - 1)  {
                descriptionArr[i + 1].classList.remove('description-wrap-noactive');
                descriptionArr[i + 1].classList.add('description-wrap-active', 'fade');
                break;
            }            
        }
    }    
});