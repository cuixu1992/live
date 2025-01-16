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
        if (Math.random() < 0.0001) { // ⭐ 流星生成概率
            meteors.push({
                x: Math.random() * canvas.width * 0.9 - 30,  
                y: Math.random() * canvas.height * 0.9,
                speed: Math.random() * 6 + 3, // 较快的流星速度
                angle: Math.random() * Math.PI / 96 + Math.PI / 48, // 控制倾斜角度
                length: Math.random() * 100 + 200, // 流星尾巴长度
                size: Math.random() * 5 + 4, // 流星宽度
                opacity: 1 // 初始透明度
            });
        }
    }

    function createMeteorAtRandomPosition() {
        meteors.push({
            x: Math.random() * canvas.width * 0.9 - 30, // 左侧随机位置稍靠左
            y: Math.random() * canvas.height * 0.9, // 随机在画布上半部分生成
            speed: Math.random() * 6 + 3, // 较快的流星速度
            angle: Math.random() * Math.PI / 96 + Math.PI / 48, // 控制倾斜角度
            length: Math.random() * 100 + 200, // 流星尾巴长度
            size: Math.random() * 5 + 4, // 流星宽度
            opacity: 1 // 初始透明度
        });
    }

    function drawMeteor(meteor) {
        ctx.beginPath();
        let gradient = ctx.createLinearGradient(
            meteor.x, meteor.y, 
            meteor.x - meteor.length * Math.cos(meteor.angle), 
            meteor.y - meteor.length * Math.sin(meteor.angle)
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`); // 明亮的流星头部
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`); // 尾部逐渐透明
        ctx.strokeStyle = gradient;
        ctx.lineWidth = meteor.size;
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
            meteor.x - meteor.length * Math.cos(meteor.angle), 
            meteor.y - meteor.length * Math.sin(meteor.angle)
        );
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
        canvas.addEventListener('mousedown', function (event) {
            if (event.button === 0) { // 检查是否为左键点击
                createMeteorAtRandomPosition();
            }
        });

        // ⭐ 流星逻辑
        meteors.forEach((meteor, index) => {
            meteor.x += meteor.speed * Math.cos(meteor.angle);
            meteor.y += meteor.speed * Math.sin(meteor.angle);
            meteor.opacity -= 0.01; // 渐渐透明
            meteor.size *= 0.98; // 尾部逐渐缩小
            
            drawMeteor(meteor);

            // 移除完全离开画布或不可见的流星
            if (meteor.x > canvas.width || meteor.y > canvas.height || meteor.opacity <= 0) {
                meteors.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
});
