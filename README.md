# Alin Theme

![](https://ws1.sinaimg.cn/large/005Lno3ugy1g2ksig0w5zj31hc0u0b29.jpg)


![](https://ws1.sinaimg.cn/large/005Lno3ugy1g2ksivfs2dj30u01hcdvv.jpg)




**主题介绍**

Alin是一个专用来记录笔记的一个主题。简约且美观。

**下载地址**

[https://github.com/taoya7/gridea-theme-Alin](https://github.com/taoya7/gridea-theme-Alin)

**主题使用**

下载之后解压到源文件下的themes目录下重启Gridea就可以再主题里选择了。

- 如果需要添加icon信息，你需要进入gridea-theme-Alin-master\templates\_blocks下的`scripts.ejs`

```html
var app = new Vue({
  el: '#app',
  data: {
    menuVisible:false,
    alin:{
      like:[
          {
            "alt":"我的博客",
            "aim":"http://www.itaolaity.com/index.php",
            "src":"http://itaolaity.com/20190429220545.png"
          },
          {
            "alt":"GitHub",
            "aim":"https://github.com/taoya7",
            "src":"http://itaolaity.com/20190429220612.png"
          },
          {
            "alt":"Email",
            "aim":"mailto:569781231@qq.com",
            "src":"http://itaolaity.com/20190429220636.png"
          }
      ]
    }
  }
});
```

like对象里的alt,aim,src 分别代表了提示信息，目标地址，图片地址。


- 如果需要添加随机文章图片

`https://source.unsplash.com/1600x900/?like`

后面的参数就是图片的种类



**还能更好吗？**

当然。需要大家宝贵的体验与意见。

[我的博客](http://www.itaolaity.com)



