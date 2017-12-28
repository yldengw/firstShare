背景:没有选择是痛苦的，有太多的选择却更加痛苦。而后者正是目前前端领域的真实写照。新的框架层出不穷。不管是1还是2，Angular最显著的特征就是其整合性。它是由单一项目组常年开发维护的一体化框架，涵盖了M、V、C/VM等各个层面，不需要组合、评估其它技术就能完成大部分前端开发任务。当然Angula2相比Angular的优势有很多，比如大幅提升的性能、改进的模块化和依赖注入、Web 组件友好以及支持 Android 和 iOS 的原生移动渲染等，它的主要目标是创建一个简单易用并且快速工作的 web 框架。下面为大家介绍使用vs code怎么开发Angular2的第一个应用。
一、搭建环境
首先需要安装node.js(就是运行在服务端的 JavaScript )，安装npm（随同nodejs一起安装的包管理工具，新版的nodejs已经集成了npm），然后安装TypeScript，使用它来创建 Angular2的应用，这也是官方推荐使用的（TypeScript是一种由微软开发的自由和开源的编程语言，它是JavaScript的一个超集，最大的特点就是类型化，因此才叫做TypeScript。比起弱类型的JavaScript，类型化的TypeScript显得更加容易维护）。
二、创建项目
1、创建项目文件夹，启动VS Code。
2、在根目录下，创建package.json、tsconfig.json、typings.json、systemjs.config.js(JavaScript脚本)文件。（文件内容上网百度一下，在这儿不做详细说明）
package.json：标记本项目所需的 npm 依赖包
tsconfig.json:定义了 TypeScript 编译器如何从项目源文件生成 JavaScript 代码
typings.json:为那些 TypeScript 编译器无法识别的库提供了额外的定义文件
systemjs.config.js:为模块加载器提供了该到哪里查找应用模块的信息，并注册了所有必备的依赖包。它还包括文档中后面的例子需要用到的包
三、安装依赖包
使用 npm 命令来安装 package.json 中列出的依赖包。在根目录下输入下列命令:
npm install
四、创建TypeScript应用程序
1、在VS Code中，在根文件夹下，创建app子文件夹。
2、在子app文件夹下，创建TypeScript文件app.module.ts：
import { NgModule }      from '@angular/core';import { BrowserModule } from '@angular/platform-browser';import { AppComponent }   from './app.component';@NgModule({  imports:      [ BrowserModule ],  declarations: [ AppComponent ],  bootstrap:    [ AppComponent ]})export class AppModule { }
3、在子app文件夹下，创建TypeScript文件app.component.ts：
import { Component } from '@angular/core';@Component({  selector: 'my-app',  template: '<h1>我的第一个 AngularJS 2 应用程序</h1>'})export class AppComponent { }
4、在子app文件夹下，创建TypeScript文件main.ts：
import{platformBrowserDynamic}from '@angular/platform-browser-dynamic';import { AppModule } from './app.module';const platform = platformBrowserDynamic();platform.bootstrapModule(AppModule);
5、在根文件夹下，创建html文件index.html：
<html><head>    <title>my first Angular2</title>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1">    <link rel="stylesheet" href="styles.css">    <!-- 1. Load libraries -->    <!-- Polyfill(s) for older browsers -->    <script src="node_modules/core-js/client/shim.min.js"></script>    <script src="node_modules/zone.js/dist/zone.js"></script>    <script src="node_modules/reflect-metadata/Reflect.js"></script>    <script src="node_modules/systemjs/dist/system.src.js"></script>    <!-- 2. Configure SystemJS -->    <script src="systemjs.config.js"></script>    <script>        System.import('app').catch(function(err) {            console.error(err);        });    </script></head><!-- 3. Display the application --><body>    <my-app>Loading...</my-app></body></html>
五、配置应用程序
1、在VS Code中，在根文件夹下，创建.vscode子文件夹。
2、在.vscode子文件夹下，创建settings.json文件：
// 将设置放入此文件中以覆盖默认值和用户设置。{    "typescript.tsdk": "node_modules/typescript/lib",    // ts 项目, 隐藏 .js 和 .js.map 文件    "files.exclude": {        "node_modules": true,        "**/*.js": { "when": "$(basename).ts" },        "**/*.js.map": true    }}
3、在.vscode子文件夹下，创建tasks.json文件：
{    // See https://go.microsoft.com/fwlink/?LinkId=733558    // for the documentation about the tasks.json format    "version": "0.1.0",    "command": "cmd",    "isShellCommand": true,    "showOutput": "always",    "args": ["/C npm start"]}
另：也可以使用控制台命令npm start启动应用
六、运行应用程序
按 Ctrl + Shift + B 编译，程序将会将Typescript编译成 Javascript 
显示：我的第一个 Angular 2 应用程序
在实践中遇到或发现了一下这些问题，仅供大家参考：
A、上网需要使用公司提供的代理服务器，所以用NPM安装JS时可能需要配置代理
npm config set proxy=http://172.17.18.80:8080
B、angularjs2若存在嵌入视图里没有找到路径，需要加入moduleId:module.id获取url的基地址，否则会报错。
C、在开发angular2之前，要足以掌握angular2的八个组成部分：模块、组件、模版、元数据、数据绑定、指令、服务依赖注入，不然在开发过程中很容易模糊调用关系，另外typescript的语法也很重要，包括基本数据类型、函数、类、接口、模块等。






