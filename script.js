function openMenu(){
    document.getElementById('menu').style.right=0;
    document.getElementById("open-bar").style.opacity=0;
}
function closeMenu(){
    document.getElementById('menu').style.right="-300px";
    document.getElementById("open-bar").style.opacity=1;
}
function submitForm(){
    setTimeout(()=>{
        document.querySelectorAll('.inputs').forEach((element)=>{
            element.value = ""
        })
    }, 1000)
}

const scrollContainer = document.getElementById('skills-container');
scrollContainer.addEventListener('wheel', (e)=>{
    e.preventDefault(); //dont scroll up and down
    scrollContainer.scrollLeft += e.deltaY;
})