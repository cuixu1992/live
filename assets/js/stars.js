document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        // 重新生成 stars 数组
        stars = [];
        for (let i = 0; i < 300; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speed: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.5 + 0.5, // 让星星有不同的透明度
                angle: Math.random() * 360 // 让星星有不同的旋转角度
            });
        }
    }

    function drawStar(cx, cy, spikes, outerRadius, innerRadius, angle, opacity) {
        let rot = (Math.PI / 2) * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'white';
        ctx.fill();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }

            // 让星星闪烁
            star.opacity += (Math.random() - 0.5) * 0.05;
            if (star.opacity < 0.3) star.opacity = 0.3;
            if (star.opacity > 1) star.opacity = 1;

            // 画星星
            drawStar(star.x, star.y, 5, star.size * 1.5, star.size * 0.5, star.angle, star.opacity);
        });

        requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
});
