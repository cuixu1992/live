document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas(); // 页面加载时调整大小
    window.addEventListener('resize', resizeCanvas); // 监听窗口变化

    const stars = Array(300).fill().map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,  // 星星大小 1-3px
        speed: Math.random() * 0.5 + 0.2, // 星星移动速度
    }));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.y += star.speed;
            if (star.y > canvas.height) star.y = 0; // 让星星循环回到顶部

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff'; // 让星星更亮
            ctx.shadowBlur = 8;  // 添加发光效果
            ctx.shadowColor = '#ffffff';
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
});
