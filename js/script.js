function upDate(previewPic){
    document.getElementById("previewImage").innerHTML = previewPic.alt;       
    document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")"
     }
 
function unDo(){
     document.getElementById("previewImage").innerHTML = "Hover over an image below to display it above.";  
     document.getElementById("image").style.backgroundImage = "none";
     document.getElementById("image").style.backgroundColor = ("#cabcf5");
     }

let addIndex = document.querySelectorAll(".preview")
for (let i = 0; i < addIndex.length; i++) {
    addIndex[i].setAttribute("tabindex","0");
    addIndex[i].setAttribute("onfocus","upDate(this)");
    addIndex[i].setAttribute("onblur", "unDo()");
    console.log(`working${i}`)
}

function pickImage(){
     options = ["black_eyed_susan.jpg", "magic_mushroom.jpg", "purple_thistle.jpg", "red_leaves.jpg", "strange_pod_plant.jpg", "white_blossom.jpg"]
     randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
     img = document.querySelector("#header_img")
     img.setAttribute("src",randomImg)
     img.setAttribute("alt","")
 
 }
/*
let mainImage = document.getElementById("image");
mainImage.addEventListener("mouseover", function changeStyle() {
     document.getElementById("image").style.backgroundColor = ("#b3b3b3");
})
mainImage.addEventListener("mouseout", function unDo(){
     document.getElementById("image").style.backgroundColor = ("#8e68ff");
     })
*/