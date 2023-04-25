1. pages要开启下拉刷新前必须要在全局的app.json中开启全局下拉刷新，然后再在单个页面中控制是否启用下拉刷新。
"enablePullDownRefresh": true or false。不能加引号
2. 要想在微信开发者工具中使用scss格式的样式文件，可以用以下方式开启：
在 project.config.json 文件中，修改 setting 下的 useCompilerPlugins 字段为 ["sass"]，即可开启工具内置的 scss 编译插件。 如需同时开启 less 编译插件，可将该字段修改为 ["sass", "less"]。 目前支持三个编译插件：typescript、less、sass。
具体可看：https://developers.weixin.qq.com/miniprogram/dev/devtools/compilets.html
扩展：sass和scss其实是一样的css预处理语言（也是对应的文件后缀名），它们的语法功能比css更加强大
预处理语言是指：开发时用预处理语言，在打包上线时，用webpack再配合loader工具给转成css给浏览器使用。
scss是sass3引入的新语法，其后缀名是分别为.sass和.scss两种。sass版本3之后的后缀名为.sass,而版本3.0之后的后缀名为.scss。
两者是有不同的，继sass之后scss的编写规范基本和css一致，sass时代是有严格的缩进规范并且没有'{}'和';'。
我们实际开发过程中，scss是常用写法，scss和css规范基本一致。
3. onLoad: function (options) {
    // 挂载函数中高端options包含上一个页面传给该页面的参数
  },
4.