## vue-cli
v2.9.3生成的webpack模板。配置我是一点都不懂，一点都没动。

## css、style loaders
css-loader style-loader 好像被包含在vue-loader 里面了

```
<style scoped>
  button{
    background-color: antiquewhite
  }
</style>
```
加上scoped后，style里面所有的代码只会影响到所在的组件，原理是CSS属性选择器

但是注意，如果给模板一个类名，则它有可能受到全局环境的CSS样式影响

### CSS reset
normalize.css 进行reset,同时有些样式我不是很满意，就添加了reset.css

### CSS scope
ID、Tag 选择器不能模块化，切记！！

## 图片链接
因为有一个编译的过程，所以并不能直接使用相对路径来链接
要使用 
``` html
  <img src='../assets/icons/1.png'>`
  <img :src='require(`../assets/icons/${1}.png")'>`
```
普通属性可以直接通过相对路径来使用，结果会打包到static目录下，v-bind绑定的属性则需要专门的require才能识别

## static目录
可以通过 /static... 来访问，一些大的图片文件会被打包到这个目录下
其他目录不能 /src /build 来访问

## mock
可以把模拟的数据放在 /static/mock 目录下，模拟ajax资源