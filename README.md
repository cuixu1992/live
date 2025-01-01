# https://gitpages.cuixu1992.xyz/
# 新手入门教程，利用github pages创建自己的直播源与点播源订阅链接

本人也是小白刚入门！纯网络搜集教程的搬运工！所有资源均来自于各路大神无私分享（最后的声明也是copy的~），如有侵权，请联系删除！（写完发现在pages浏览效果不佳，不想研究~~可以点击左边的View the Project on GitHub回到github观看）

因为我入门看的教程基本都在github，众所周知不用梯子访问非常不稳定，所以第一步就是爬梯子（本着能用就行的原则，链接里有一堆注册临时赠送几天的梯子，选一个能用的先爬梯子https://9.234456.xyz/abc.html?t=638712795645227885 ，我目前在用里面推荐的西部世界VPN，因为经常用，每次都直接买3年套餐，目前用了4年还没跑路，感觉价格还行，新注册好像也是有赠送的），想长期爬梯子推荐github开源项目v2rayN（https://github.com/2dust/v2rayN/releases/tag/7.4.2 ），这个软件只是客户端，还是需要买个稳定的VPN用。

正式开始动工！在github建立自己的仓库，并开启pages。仓库存放自己用的文件，pages提供访问链接。这里我是在大佬饭明明那里找到的教程https://github.com/fanmingming/live 。我简单转述一下。先注册github账号，注册链接如下https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home ，然后参照官方帮助文档建立仓库，并开启pages，https://docs.github.com/zh/enterprise-cloud@latest/pages/quickstart ，成功开启pages后相当于有了一个自己的小型服务器，通过github pages链接能访问自己仓库内的直播源或点播源文件。

直播源文件获取方式，①简单粗暴，去大佬的仓库下载，放到自己的仓库，提供几个大佬仓库的链接（一般在tv文件夹下），文件格式为.m3u或.txt。放到自己的仓库后调用链接就是自己的pages链接加上文件路径和名称，例如我仓库内的调用链接为https://cuixu1992.github.io/live/tv.m3u ，或https://cuixu1992.github.io/live/tv_test.txt

饭明明：https://github.com/fanmingming/live 

zhumeng11：https://github.com/zhumeng11/IPTV 

ngo5：https://github.com/ngo5/IPTV ，该仓库提供了很多相关链接

vbskycn ：https://github.com/vbskycn/iptv 

最后一个仓库vbskycn为自动更新直播源，我好奇他是怎么自动更新的，发现了下面要讲的大佬，Guovin ：https://github.com/Guovin/iptv-api ，里面有自动更新的教程，没爱折腾，下载了GUI软件，等自己仓库的链接挂了以后手动获取直播源。（下载位置如下图，我怕有人找不到~~）软件支持自定义设置，ipv4和ipv6都可以，有ipv6是最好的，怎么开通ipv6可以看老网编的教程https://zhuanlan.zhihu.com/p/6282754340，很详细哈。
![1](https://github.com/user-attachments/assets/dc7a3edc-9110-49b5-bba0-fe05f8fa6ad5)

m3u文件与txt文件简单介绍，先是m3u，m3u内容丰富，但是不支持多源，主要用于aptv（苹果商店下载）、我的电视（mytv）等直播壳。（我的电视下载链接https://wmdz.com/tv.html ，最新版本2.2.7,找半天没找到github仓库,最后发现作者把github仓库关了，由于mytv原作者李宗英不再继续开发https://github.com/lizongying/my-tv ，我的电视是在原mytv基础上继续开发的https://github.com/yaoxieyoulei ，mytv原作者李宗英最近又继续开发了我的电视·〇https://github.com/lizongying/my-tv-0?tab=readme-ov-file#%E6%88%91%E7%9A%84%E9%9B%BB%E8%A6%96%E3%80%87 ），
![2](https://github.com/user-attachments/assets/9026a76a-2707-4212-b294-96b92bd982d0)

然后是txt，内容简单，但支持多源，比较适合用于影视仓（wx搜派大星开发，推荐个下载地址，更新很快，https://wmdz.com/tvboxC1.html，个人感觉5.0.44相对稳定），
![3](https://github.com/user-attachments/assets/0f726aad-fb88-4ed0-aa49-6e3aea6eb68a)

关于影视仓，tvbox，ok影视，猫影视等之间的关系，有张图交代的很清楚，来源https://github.com/ngo5/IPTV ，
![image](https://github.com/user-attachments/assets/984161dc-a4f1-406a-8704-bf9b1f585f83)


上面提到的GUI软件，软件运行一次会自动生成两个文件夹，
![4](https://github.com/user-attachments/assets/d6c024d5-f38d-40c1-8235-ca5a34c2db7c)

Config内有demo.txt可以按照喜欢的分组与顺序更改，名称最好按照默认，不然有的软件内置台标容易识别不出来，
![5](https://github.com/user-attachments/assets/6a307a04-27cc-48c8-8294-fd52e4491321)

比如我用该软件按照自定义demo模板每个台选5个ipv6的源，然后放到github仓库内的tv_test.txt，用软件调用tv_test.txt测试，然后每个台选出1个好用的链接放入tv.m3u，这样就保证了最简洁的直播源获取。为什么我搞的这么麻烦呢，因为我维护这一个源同时给多个设备在用，比如我家里的电视和投影仪，父母老人的电视，朋友家的电视，尤其是老人对电子产品的适应能力还是差一些的，对他们来说最简单的就是最好的！！我的tv源里面只有18个央视和除去港澳台的31个省级卫视，而且把老人常看的地方卫视放到了前面！这样调用链接不变，电视台的源挂了只要我在仓库内更新源，其他人不需要任何操作就可以继续看电视

.

下面的点播源适用于影视仓，下载链接在上文。

.

直播源搞定开始折腾点播源，开始只自己搞了直播源，因为是刚需嘛~~后来看到高天流云的仓库意识到好像自己搞点播源也很容易https://github.com/gaotianliuyun/gao ，我只是搞到了自定义仓库和多线，单线内容懒得搞了，直接用各路大神的，某个大神的线路挂了就先用其他大神的，等大神线路恢复了再用新的线路链接替换就好了。（其实有10个常用的出名大神的线路足够了，多了都是放在后面吃灰的~）参考高天流云0707.json文件创建了我仓库内的source.json文件，调用方式和直播源一样https://cuixu1992.github.io/live/source.json ，
![image](https://github.com/user-attachments/assets/51b3aeb2-7ef3-4e9e-94da-0d0973df4562)

但是这样调用完仓库没有名字~开始想研究内容格式看看怎么加上仓库名字来着，后来发现无邪多仓的形式（https://gitee.com/wxej/wxrj/raw/master/wx.json ）
![image](https://github.com/user-attachments/assets/2ef54ea7-7429-494d-9cff-fa6d9c61b5b9)

就模仿这种形式，新建了个storehouse.json文件，在里面自定义仓库名并调用source.json文件，这样再调用storehouse.json文件时，就直接有仓库名了，调用方式https://cuixu1992.github.io/live/storehouse.json ，到这里基本功能就已经实现了。

。

嫌麻烦后面可以略过，到这里也能使用了。

。

为了追求稳定还可以使用CDN加速GitHub Pages的访问，因为GitHub Pages是国外网站，加载速度和稳定性都不是很可靠。我参考的教程https://blog.csdn.net/qq_39432978/article/details/141203664?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-2-141203664-blog-129872749.235^v43^pc_blog_bottom_relevance_base5&spm=1001.2101.3001.4242.2&utm_relevant_index=5，

简单转述教程，先注册一个域名（我15买的一年期域名，购买网站https://www.godaddy.com/zh-sg ），然后注册cloudflare账号https://www.cloudflare.com/zh-cn/ ，之后按照cloudflare的提示一步一步操作，在域名注册商的DNS管理台添加cloudflare提示的域名服务器，添加成功后如图所示
![image](https://github.com/user-attachments/assets/bc74c9c8-9a8c-4545-a268-df7c4b8427bb)

然后回到cloudflare中管理DNS，添加一条CNAME记录，将自定义域名指向 GitHub Pages 提供的地址（例如 cuixu1992.github.io）
![image](https://github.com/user-attachments/assets/6be21535-1847-4bca-9671-f50de06499ec)

回到github pages设置中，添加自定义域，例如我的gitpages.cuixu1992.xyz，
![image](https://github.com/user-attachments/assets/3693cb77-818a-41b8-b232-e714743c6249)

现在就可以用自定义域来加载点播源或直播源了，例如，

直播源https://gitpages.cuixu1992.xyz/tv.m3u ，

点播仓库源https://gitpages.cuixu1992.xyz/storehouse.json ，

声明：

所有以任何方式查看本仓库内容的人、或直接或间接使用本仓库内容的使用者都应仔细阅读此声明。本仓库管理者保留随时更改或补充此免责声明的权利。一旦使用、复制、修改了本仓库内容，则视为您已接受此免责声明。

本仓库管理者不能保证本仓库内容的合法性、准确性、完整性和有效性，请根据情况自行判断。本仓库内容，仅用于测试和学习研究，禁止用于商业用途，不得将其用于违反国家、地区、组织等的法律法规或相关规定的其他用途，禁止任何公众号、自媒体进行任何形式的转载、发布，请不要在中华人民共和国境内使用本仓库内容，否则后果自负。

本仓库内容中涉及的第三方硬件、软件等，与本仓库内容没有任何直接或间接的关系。本仓库内容仅对部署和使用过程进行客观描述，不代表支持使用任何第三方硬件、软件。使用任何第三方硬件、软件，所造成的一切后果由使用的个人或组织承担，与本仓库内容无关。

所有直接或间接使用本仓库内容的个人和组织，应 24 小时内完成学习和研究，并及时删除本仓库内容。如对本仓库内容的功能有需求，应自行开发相关功能。所有基于本仓库内容的源代码，进行的任何修改，为其他个人或组织的自发行为，与本仓库内容没有任何直接或间接的关系，所造成的一切后果亦与本仓库内容和本仓库管理者无关。
