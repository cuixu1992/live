# 新手入门，利用github pages创建自己的直播源与点播源订阅链接

本人也是小白刚入门，在白嫖的路上打怪升级！所有资源均来自于各路大神无私分享，如有侵权，请联系删除！

优质的白嫖资源基本都在墙外，所以第一步就是翻墙（链接里有一堆注册临时赠送几天的梯子，随便选一个https://9.234456.xyz/abc.html?t=638712795645227885 ），想长期翻墙推荐github开源项目v2rayN（https://github.com/2dust/v2rayN/releases/tag/7.4.2 ，这个软件只是客户端，还是需要买个稳定的VPN用）

## 1.开启GitHub Pages

正式开始动工！在github建立自己的仓库，并开启pages。仓库存放自己用的文件，pages提供访问链接。先注册github账号，然后参照官方帮助文档建立仓库，并开启pages，https://docs.github.com/zh/enterprise-cloud@latest/pages/quickstart ，成功开启pages后相当于有了一个自己的小型服务器，通过github pages链接能访问自己仓库内的直播源或点播源文件。

## 2.创建直播源

直播源文件获取方式，①简单粗暴，去大佬的仓库下载，放到自己的仓库，提供几个大佬仓库的链接（一般在tv文件夹下），文件格式为.m3u或.txt。放到自己的仓库后调用链接就是自己的pages链接加上文件路径和名称，例如我仓库内的调用链接为https://cuixu1992.github.io/live/tv/tv.m3u ，或https://cuixu1992.github.io/live/tv/tv_ipv6.txt

饭明明：https://github.com/fanmingming/live  
ngo5：https://github.com/ngo5/IPTV  
vbskycn ：https://github.com/vbskycn/iptv 
zhumeng11：https://github.com/zhumeng11/IPTV  

②自动获取，Guovin ：https://github.com/Guovin/iptv-api ，里面有自动更新的教程，我没爱折腾，下载了GUI软件，等自己仓库的链接挂了以后手动获取直播源。软件支持自定义设置，ipv4和ipv6都可以，有ipv6是最好的，怎么开通ipv6可以看老网编的教程https://zhuanlan.zhihu.com/p/6282754340 ，很详细哈。

m3u文件与txt文件简单介绍，m3u内容丰富，但是不支持多源（同一频道放多个链接并不会显示为切换源，而是同时显示为多个相同的频道）
![2](https://github.com/user-attachments/assets/9026a76a-2707-4212-b294-96b92bd982d0)

txt内容简单，但支持多源，
![3](https://github.com/user-attachments/assets/0f726aad-fb88-4ed0-aa49-6e3aea6eb68a)

推荐几个电视直播壳，aptv（苹果全平台，商店下载）、天光云影（安卓系统）、影视仓（安卓系统）。

天光云影，推荐下载地址https://wmdz.com/tv.html ，官方发布在小飞机，需翻墙https://t.me/mytv_android_release  
（天光云影基于mytv继续开发，原作者李宗英https://github.com/lizongying/my-tv ）  
影视仓，推荐下载地址https://wmdz.com/tvboxC1.html ，官方发布在微信公众号，派大星开发。

上面提到的GUI软件，软件运行一次会自动生成两个文件夹，
![4](https://github.com/user-attachments/assets/d6c024d5-f38d-40c1-8235-ca5a34c2db7c)

Config内有demo.txt可以按照喜欢的分组与顺序更改，名称最好按照默认，不然有的软件内置台标容易识别不出来，
![5](https://github.com/user-attachments/assets/6a307a04-27cc-48c8-8294-fd52e4491321)

比如我用该软件按照自定义demo模板每个台选10个ipv6的源，然后放到github仓库内的tv\_ipv6.txt，正常调用就可以了。

## 3.创建点播源

下面讲的点播源适用于影视仓，关于影视仓，tvbox，ok影视，猫影视等之间的关系，下面这张图交代的很清楚 ，
![image](https://github.com/user-attachments/assets/984161dc-a4f1-406a-8704-bf9b1f585f83)

模仿高天流云的仓库https://github.com/gaotianliuyun/gao ，我只是自建了仓库和多线，单线内容懒得搞了，直接用各路大神的，某个大神的线路挂了就先用其他大神的，等大神线路恢复了再用新的线路链接替换就好了。（其实有两三个常用的出名大神的线路足够了，多了都是放在后面吃灰的~）参考高天流云0707.json文件创建了我仓库内的source.json文件，调用方式和直播源一样https://cuixu1992.github.io/live/tv/source.json ，
![image](https://github.com/user-attachments/assets/51b3aeb2-7ef3-4e9e-94da-0d0973df4562)

但是这样调用完仓库没有名字，需要手动输入~于是新建了个storehouse.json文件，在里面自定义仓库名并调用source.json文件，这样再调用storehouse.json文件时，就直接有仓库名了，调用方式https://cuixu1992.github.io/live/tv/storehouse.json 

对于点播源一个仓库包含多条线路，而每条线路又包含多个站点的资源。所以搜索视频时，某个站点不可用先切换站点，整条线路的站点都不可用再尝试切换线路。  
（推荐站点玩偶哥哥，画质清晰，速度稳定，网盘资源需要自己注册对应网盘账号扫码登录使用）

到这里基本功能就已经实现了，嫌麻烦后面可以略过，也能使用。

## 4.CDN加速访问

为了追求稳定还可以使用CDN加速GitHub Pages的访问，因为GitHub是国外网站，加载速度和稳定性都不是很可靠。

什么是CDN？

想象一下你在网上购物，找到了一件很喜欢的商品，但卖家在世界的另一端。商品需要经过漫长的运输，才能到达你的手中。这个过程可能需要几天甚至几周。可如果这个商品在你附近的仓库里有存货，那么你就可以很快地拿到它。这就是 CDN 的工作原理。（这不就是京东的库存管理模式嘛。。。）CDN，全称 Content Delivery Network（内容分发网络），就像是一个全球化的仓库网络，它会把你网站的内容（比如图片、视频、网页文件）存放在离用户最近的服务器上。这样，当有人访问你的网站时，内容就会从最近的服务器发送到他们的设备上，而不是从一个遥远的服务器那里传输过来。

CDN的好处。

加速访问速度： 无论用户在哪个国家或地区，CDN都会让他们从最近的服务器获取内容，减少等待时间；  
提升网站稳定性： 如果某个服务器出现故障，CDN会自动从其他服务器提供内容，不会影响用户的访问体验；  
减少带宽消耗： 因为CDN服务器会缓存内容，减少了对源服务器的请求次数，从而降低了服务器的负担和带宽使用；  
提高安全性：CDN可以帮助抵御恶意攻击，比如DDoS攻击，因为它能把流量分散到多个服务器，防止某个服务器因流量过大而崩溃。
                        
CDN加速GitHub Pages访问教程原文链接：https://blog.csdn.net/qq_39432978/article/details/141203664 

简述流程，先注册一个域名（我花15元买的一年期域名，购买网站https://www.godaddy.com/zh-sg ），然后注册cloudflare账号https://www.cloudflare.com/zh-cn/ ，之后按照cloudflare的提示一步一步操作，在域名注册商的DNS管理台添加cloudflare提示的域名服务器，添加成功后如图所示
![image](https://github.com/user-attachments/assets/bc74c9c8-9a8c-4545-a268-df7c4b8427bb)

然后回到cloudflare中管理DNS，添加一条CNAME记录，将自定义域名指向 GitHub Pages 提供的地址（例如 cuixu1992.github.io）
![image](https://github.com/user-attachments/assets/6be21535-1847-4bca-9671-f50de06499ec)

回到github pages设置中，添加自定义域，例如我的gitpages.cuixu1992.xyz，
![image](https://github.com/user-attachments/assets/3693cb77-818a-41b8-b232-e714743c6249)

现在就可以用自定义域来加载点播源或直播源了，例如，

直播源https://gitpages.cuixu1992.xyz/tv/tv.m3u ，  
点播仓库源https://gitpages.cuixu1992.xyz/tv/storehouse.json ，

因为我维护这一个源同时给多个设备在用，比如家里的电视和投影仪，父母的电视，朋友的电视、手机等！这样调用链接不变，源挂了只要我在仓库内更新源，设备上不需要任何操作就可以继续用。

声明：

所有以任何方式查看本仓库内容的人、或直接或间接使用本仓库内容的使用者都应仔细阅读此声明。本仓库管理者保留随时更改或补充此免责声明的权利。一旦使用、复制、修改了本仓库内容，则视为您已接受此免责声明。

本仓库管理者不能保证本仓库内容的合法性、准确性、完整性和有效性，请根据情况自行判断。本仓库内容，仅用于测试和学习研究，禁止用于商业用途，不得将其用于违反国家、地区、组织等的法律法规或相关规定的其他用途，禁止任何公众号、自媒体进行任何形式的转载、发布，请不要在中华人民共和国境内使用本仓库内容，否则后果自负。

本仓库内容中涉及的第三方硬件、软件等，与本仓库内容没有任何直接或间接的关系。本仓库内容仅对部署和使用过程进行客观描述，不代表支持使用任何第三方硬件、软件。使用任何第三方硬件、软件，所造成的一切后果由使用的个人或组织承担，与本仓库内容无关。

所有直接或间接使用本仓库内容的个人和组织，应 24 小时内完成学习和研究，并及时删除本仓库内容。如对本仓库内容的功能有需求，应自行开发相关功能。所有基于本仓库内容的源代码，进行的任何修改，为其他个人或组织的自发行为，与本仓库内容没有任何直接或间接的关系，所造成的一切后果亦与本仓库内容和本仓库管理者无关。
