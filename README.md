# https://gitpages.cuixu1992.xyz/
纯小白教程！本人也是小白刚入门！纯网络搜集教程的搬运工！所有资源均来自于各路大神无私分享，如有侵权，请联系删除！（最后的声明也是copy的~），写完发现在pages浏览效果不佳，不想研究~可以点击左边的View the Project on GitHub回到github观看。

因为我入门看的教程基本都在github，众所周知的原因，不用梯子访问非常不稳定，所以第一步就是爬梯子（本着能用就行的原则，链接里有一堆注册临时赠送几天的梯子，选一个能用的先爬梯子https://9.234456.xyz/abc.html?t=638712795645227885 ，我目前在用里面推荐的西部世界VPN，因为经常用，每次都直接买3年套餐，目前用了4年还没跑路，感觉价格还行），想长期爬梯子推荐github开源项目v2rayN（https://github.com/2dust/v2rayN/releases/tag/7.4.2 ），这个软件只是客户端，需要买个稳定的VPN用。

然后是在github建立自己的仓库，并开启pages。仓库存放自己用的文件，pages提供访问链接。这里我是在大佬饭明明那里找到的教程https://github.com/fanmingming/live 。我简单转述一下。先注册github账号，注册链接如下https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home ，然后参照官方帮助文档建立仓库，并开启pages，https://docs.github.com/zh/enterprise-cloud@latest/pages/quickstart ，成功开启pages后相当于有了一个自己的小型服务器，通过github pages链接访问自己仓库内的直播源或点播源文件。

直播源文件获取方式，①简单粗暴，去大佬的仓库下载，放到自己的仓库，提供几个大佬仓库的链接（一般在tv文件夹下），文件格式为.m3u或.txt。

饭明明：https://github.com/fanmingming/live 

zhumeng11：https://github.com/zhumeng11/IPTV 

ngo5：https://github.com/ngo5/IPTV ，该仓库提供了很多链接

vbskycn ：https://github.com/vbskycn/iptv 

最后一个仓库vbskycn为自动更新直播源，我好奇他是怎么自动更新的，发现了下面要讲的大佬，Guovin ：https://github.com/Guovin/iptv-api ，里面有自动更新的教程，没爱折腾，下载了GUI软件，等自己仓库的链接挂了以后手动获取直播源。（下载位置如下如，我怕有人找不到~~）软件支持自定义设置，ipv4和ipv6都可以，有ipv6是最好的，怎么开通可以看老网编的教程https://zhuanlan.zhihu.com/p/6282754340，很详细哈。
![1](https://github.com/user-attachments/assets/dc7a3edc-9110-49b5-bba0-fe05f8fa6ad5)

m3u文件与txt文件简单介绍，先是m3u，m3u内容丰富，但是不支持多源，主要用于aptv（苹果商店下载）、我的电视（mytv）等直播壳，我的电视（https://wmdz.com/tv.html ，最新版本2.2.7,找半天没找到github仓库,原来作者把github仓库关了，由于mytv作者不再继续开发https://github.com/lizongying/my-tv ，我的电视是在原来mytv基础上继续开发的，mytv原作者李宗英最近又继续开发了我的電視〇https://github.com/lizongying/my-tv-0?tab=readme-ov-file#%E6%88%91%E7%9A%84%E9%9B%BB%E8%A6%96%E3%80%87 ），
![2](https://github.com/user-attachments/assets/9026a76a-2707-4212-b294-96b92bd982d0)

然后是txt，内容简单，支持多源，对比较适合用于影视仓（wx搜派大星开发，推荐下载地址，更新很快，https://wmdz.com/tvboxC1.html，个人感觉5.0.44相对稳定）
![3](https://github.com/user-attachments/assets/0f726aad-fb88-4ed0-aa49-6e3aea6eb68a)

上面提到的GUI软件简单说一嘴，软件运行一次会自动生成两个文件夹，
![4](https://github.com/user-attachments/assets/d6c024d5-f38d-40c1-8235-ca5a34c2db7c)

Config内有demo.txt可以按照喜欢的分组与顺序更改，名称最好按照默认，不然有的软件内置台标容易识别不出来，
![5](https://github.com/user-attachments/assets/6a307a04-27cc-48c8-8294-fd52e4491321)

##############################华丽的分割线#####################################

然后是点播源，

为了追求稳定还可以使用CDN加速GitHub Pages的访问（可以略过）。我参考的教程https://blog.csdn.net/qq_39432978/article/details/141203664?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-2-141203664-blog-129872749.235^v43^pc_blog_bottom_relevance_base5&spm=1001.2101.3001.4242.2&utm_relevant_index=5，




所有以任何方式查看本仓库内容的人、或直接或间接使用本仓库内容的使用者都应仔细阅读此声明。本仓库管理者保留随时更改或补充此免责声明的权利。一旦使用、复制、修改了本仓库内容，则视为您已接受此免责声明。

本仓库管理者不能保证本仓库内容的合法性、准确性、完整性和有效性，请根据情况自行判断。本仓库内容，仅用于测试和学习研究，禁止用于商业用途，不得将其用于违反国家、地区、组织等的法律法规或相关规定的其他用途，禁止任何公众号、自媒体进行任何形式的转载、发布，请不要在中华人民共和国境内使用本仓库内容，否则后果自负。

本仓库内容中涉及的第三方硬件、软件等，与本仓库内容没有任何直接或间接的关系。本仓库内容仅对部署和使用过程进行客观描述，不代表支持使用任何第三方硬件、软件。使用任何第三方硬件、软件，所造成的一切后果由使用的个人或组织承担，与本仓库内容无关。

所有直接或间接使用本仓库内容的个人和组织，应 24 小时内完成学习和研究，并及时删除本仓库内容。如对本仓库内容的功能有需求，应自行开发相关功能。所有基于本仓库内容的源代码，进行的任何修改，为其他个人或组织的自发行为，与本仓库内容没有任何直接或间接的关系，所造成的一切后果亦与本仓库内容和本仓库管理者无关。
