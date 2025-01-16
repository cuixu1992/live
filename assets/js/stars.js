document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');
    let stars = [];
    let meteors = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        stars = [];
        for (let i = 0; i < 100; i++) { // 星星数量
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.5, // 透明度范围
                angle: Math.random() * Math.PI * 2,
                flickerSpeed: Math.random() * 0.01 + 0.001, // ⭐闪烁速度
                flickerDirection: Math.random() > 0.5 ? 1 : -1
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

    function createMeteor() {
        if (Math.random() < 0.009) { // ⭐ 流星生成概率
            meteors.push({
                x: -50, // 从画布左侧外生成
                y: Math.random() * canvas.height, // 随机生成在画布任意高度
                speed: Math.random() * 4 + 2, // 流星水平移动速度
                length: Math.random() * 160 + 80, // 流星尾巴长度
                size: Math.random() * 8 + 4, // 流星的宽度
                curve: (Math.random() - 0.5) * 0.1, // 非常轻微的上下曲线
                opacity: 1 // 初始透明度
            });
        }
    }

    function drawMeteor(meteor) {
        ctx.beginPath();
        let gradient = ctx.createLinearGradient(meteor.x, meteor.y, meteor.x + meteor.length, meteor.y + meteor.length);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`); 
        ctx.strokeStyle = gradient;
        ctx.lineWidth = meteor.size;
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(meteor.x + meteor.length, meteor.y + meteor.length);
        ctx.stroke();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // ⭐ 让星星的闪烁更慢
        stars.forEach(star => {
            star.opacity += star.flickerSpeed * star.flickerDirection;

            // 让星星的透明度在 0.05 - 1 之间波动
            if (star.opacity >= 1) {
                star.opacity = 1;
                star.flickerDirection = -1; // 开始变暗
            } else if (star.opacity <= 0.05) {
                star.opacity = 0.05;
                star.flickerDirection = 1; // 开始变亮
            }

            drawStar(star.x, star.y, 5, star.size * 2, star.size * 0.8, star.angle, star.opacity);
        });

        createMeteor();

        // ⭐ 修复流星消失的问题
        meteors.forEach((meteor, index) => {
            meteor.x += meteor.speed; // 水平移动
            meteor.y += meteor.curve; // 垂直方向微调，保持轻微波动
            meteor.opacity -= 0.01; // 逐渐消失
            meteor.size *= 0.95; // 大小逐渐减小
        
            drawMeteor(meteor);
        
            // 移除完全不可见或移出画布右侧的流星
            if (meteor.opacity <= 0 || meteor.size < 0.5 || meteor.x > canvas.width) {
                meteors.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
});
