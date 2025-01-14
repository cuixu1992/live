
document.addEventListener("DOMContentLoaded", function () {
    const repoOwner = 'cuixu1992';
    const repoName = 'live';

    fetch(`https://api.github.com/repos/cuixu1992/live/readme`, {
        headers: { Accept: 'application/vnd.github.v3.raw' }
    })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP 错误: ${response.status}`);
            return response.text();
        })
        .then(md => {
            const converter = new showdown.Converter();
            document.getElementById('markdown-content').innerHTML = converter.makeHtml(md);
        })
        .catch(error => {
            console.error('无法加载 README.md:', error);
            document.getElementById('markdown-content').innerHTML = '<p>无法加载 README.md 内容。</p>';
        });
});
