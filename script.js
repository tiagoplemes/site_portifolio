const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

const hamburguer = document.querySelector(".menu-hamburguer");
const navMenu = document.querySelector(".nav-menu");

if (hamburguer && navMenu) {
    hamburguer.addEventListener("click", () => {
        hamburguer.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if (target) { lenis.scrollTo(target); }
        if (navMenu && navMenu.classList.contains('active')) {
            hamburguer.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});


const canvas = document.getElementById('digital-rain');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const gridSize = 40;
    let frame = 0;

    function drawGrid(opacity) {
        ctx.strokeStyle = `rgba(35, 53, 84, ${opacity})`;
        ctx.lineWidth = 1;
        for (let x = 0; x <= width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        for (let y = 0; y <= height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
    }

    function animate() {
        frame++;
        const opacity = 0.2 + (Math.sin(frame * 0.01) + 1) * 0.3; 
        
        ctx.clearRect(0, 0, width, height);
        drawGrid(opacity);
        
        requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });
    
    animate();
}