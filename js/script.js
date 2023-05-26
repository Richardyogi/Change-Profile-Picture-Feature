const cameraInput = document.querySelector('#cameraFileInput');
const galleryImage = document.querySelector('#galleryFileInput');

cameraInput.addEventListener("change", function(){
    this.document.getElementById("filePhoto").setAttribute("src",window.URL.createObjectURL(this.files[0]));
});

galleryImage.addEventListener("change", function(){
    this.document.getElementById("filePhoto").setAttribute("src",window.URL.createObjectURL(this.files[0]));
})

