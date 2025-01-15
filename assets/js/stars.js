document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');
    let stars = [];
    let meteors = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        stars = [];
        for (let i = 0; i < 150; i++) { // 降低星星数量到 150
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.5, // 初始透明度
                angle: Math.random() * Math.PI * 2,
                flickerSpeed: Math.random() * 0.05 + 0.02, // 每颗星星的闪烁速度不同
                flickerDirection: Math.random() > 0.5 ? 1 : -1 // 让部分星星先变亮，部分先变暗
            });
        }
    }

    function drawStar(cx, cy, spikes, outerRadius, innerRadius, rotation, opacity) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rotation);
        ctx.beginPath();
        let step = Math.PI / spikes;
        let angle = -Math.PI / 2;
        ctx.moveTo(Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius);
        
        for (let i = 0; i < spikes; i++) {
            angle += step;
            ctx.lineTo(Math.cos(angle) * innerRadius, Math.sin(angle) * innerRadius);
            angle += step;
            ctx.lineTo(Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius);
        }
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        ctx.restore();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // ⭐ 背景星星固定不动，但明暗变化更明显
        stars.forEach(star => {
            star.opacity += star.flickerSpeed * star.flickerDirection;

            // 让星星的透明度在 0.2 - 1 之间波动
            if (star.opacity >= 1) {
                star.opacity = 1;
                star.flickerDirection = -1; // 开始变暗
            } else if (star.opacity <= 0.2) {
                star.opacity = 0.2;
                star.flickerDirection = 1; // 开始变亮
            }

            drawStar(star.x, star.y, 5, star.size * 2, star.size * 0.8, star.angle, star.opacity);
        });

        requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
});
