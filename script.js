// 🎬 Scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));


// 🖱 Cursor follow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});


// 💫 Floating shapes
for(let i=0;i<5;i++){
    let shape = document.createElement("div");
    shape.classList.add("shape");
    shape.style.left = Math.random()*100 + "%";
    shape.style.top = Math.random()*100 + "%";
    document.body.appendChild(shape);
}