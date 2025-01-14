document.addEventListener("DOMContentLoaded", function () {
    const repoOwner = 'cuixu1992';
    const repoName = 'live';
    
    // GitHub API URL（获取 README.md 内容）
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/readme`;

    fetch(apiUrl, {
        headers: { 
            Accept: 'application/vnd.github.v3.raw' // 让 API 返回纯文本
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`GitHub API 请求失败: ${response.status}`);
        }
        return response.text();
    })
    .then(md => {
        // 使用 Showdown.js 将 Markdown 转换为 HTML
        const converter = new showdown.Converter();
        document.getElementById('markdown-content').innerHTML = converter.makeHtml(md);
    })
    .catch(error => {
        console.error('无法加载 README.md:', error);
        document.getElementById('markdown-content').innerHTML = '<p>❌ 加载 README.md 失败，请检查 GitHub API 请求！</p>';
    });
});
