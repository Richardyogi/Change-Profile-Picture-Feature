const cameraInput = document.querySelector('#cameraFileInput');
const galleryImage = document.querySelector('#galleryFileInput');

cameraInput.addEventListener("change", function(){
    // this.document.getElementById("filePhoto").setAttribute("src",window.URL.createObjectURL(this.files[0]));
    const fileCamera = this.files[0];
    localStorage.setItem("image-camera",fileCamera);
    window.document.location = 'pages/cropImage.html';
});

galleryImage.addEventListener("change", function(){
    // this.document.getElementById("filePhoto").setAttribute("src",window.URL.createObjectURL(this.files[0]));
    const fileGallery = this.files[0];
    localStorage.setItem("image-gallery",fileGallery);
    window.document.location = 'pages/cropImage.html';
})

