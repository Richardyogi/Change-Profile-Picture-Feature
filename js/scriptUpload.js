const cameraInput = document.querySelector('#cameraFileInput');
const galleryImage = document.querySelector('#galleryFileInput');

cameraInput.addEventListener("change", function(){
    // this.document.getElementById("filePhoto").setAttribute("src",window.URL.createObjectURL(this.files[0]));
    console.log(this.files[0]);
    const fileCamera = URL.createObjectURL(this.files[0]);
    localStorage.setItem("image-camera",fileCamera);
    window.document.location = 'cropImage.html';
});

galleryImage.addEventListener("change", function(){
    // this.document.getElementById("filePhoto").setAttribute("src",window.URL.createObjectURL(this.files[0]));
    const fileGallery = URL.createObjectURL(this.files[0]);
    console.log(fileGallery);
    localStorage.setItem("image-gallery",fileGallery);
    window.document.location = 'cropImage.html';
})

