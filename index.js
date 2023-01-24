var getBtnLeft = document.getElementById('but_left')
var getBtnRight = document.getElementById('but_right')
var getImg = document.getElementsByClassName('img')
var getDots = document.querySelectorAll('.dots div')

var imgLength = getImg.length
console.log(getDots)
var index = 0
getBtnRight.addEventListener('click', function() {
    index = index + 1
    console.log(index)
    for(var i = 0; i < imgLength; i++) {
        getImg[i].classList.add('hidden')
    }

    for(var i = 0; i < getDots.length; i++) {
        getDots[i].classList.remove('dotscolor')
    }

    if(index > imgLength - 1) {
        index = 0
    }

    if(index < 0) {
        //reset index(vị trí) ảnh 
        index = imgLength - 1
    }

    getImg[index].classList.remove('hidden')
    getDots[index].classList.add('dotscolor')
})

getBtnLeft.addEventListener('click', function() {
        index = index + -1
        console.log(index)
        for(var i = 0; i < imgLength; i++) {
            getImg[i].classList.add('hidden')
        }
    
        for(var i = 0; i < getDots.length; i++) {
            getDots[i].classList.remove('dotscolor')
        }
    
        if(index > imgLength - 1) {
            index = 0
        }
    
        if(index < 0) {
            //reset index(vị trí) ảnh 
            index = imgLength - 1
        }
    
        getImg[index].classList.remove('hidden')
        getDots[index].classList.add('dotscolor')
        
})
 
function clickDots(indexDots) {
    getDots[indexDots].addEventListener('click', function() {
        for(var i = 0; i < imgLength; i++) {
            getImg[i].classList.add('hidden')
            getDots[i].classList.remove('dotscolor')
        }
        // đổi màu dots
        getDots[indexDots].classList.add('dotscolor')
        //đổi ảnh
        getImg[indexDots].classList.remove('hidden')
    })
}

for(var i = 0; i < getDots.length; i++) {
    clickDots(i) 
}

