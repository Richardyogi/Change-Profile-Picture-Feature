const choosenPhoto = document.querySelector("#filePhoto");

const init = function(e){
    for(let x=0;x<localStorage.length;x++){
        if(localStorage.key(x)=="image-camera"){
            choosenPhoto.setAttribute('src',localStorage.getItem("image-camera"));
        }
        else if(localStorage.key(x)=="image-gallery"){
            choosenPhoto.setAttribute('src',localStorage.getItem("image-gallery"));
        }
    }
}

document.addEventListener('DOMContentLoaded', function(){
    init();
});