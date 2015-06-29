# node-slb

an expressjs middleware for aliyun slb

## 缘起

http://bbs.aliyun.com/read/188736.html?page=1

2）请问健康检查发的什么请求？ head 还是 get？ 
head请求。 


## 安装

    npm install --save node-slb

## 用法

    var slb = require('node-slb');

    var app = express();
    app.user(slb);

## 测试


首先启动demo的服务

    ➜  node-slb git:(master) ✗ npm start

    > node-slb@1.0.0 start /Users/sang/workspace/github/node-slb
    > cd demo && npm install && npm start


    > url@0.0.0 start /Users/sang/workspace/github/node-slb/demo
    > node ./bin/www

执行test命令，测试请求

    ➜  node-slb git:(master) ✗ npm test

    > node-slb@1.0.0 test /Users/sang/workspace/github/node-slb
    > curl -i -X HEAD http://127.0.0.1:3000

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: text/plain; charset=utf-8
    Content-Length: 2
    ETag: W/"2-d736d92d"
    Date: Mon, 29 Jun 2015 03:46:49 GMT
    Connection: keep-alive

此时，观察服务器日志

    ➜  node-slb git:(master) ✗ npm start

    > node-slb@1.0.0 start /Users/sang/workspace/github/node-slb
    > cd demo && npm install && npm start


    > url@0.0.0 start /Users/sang/workspace/github/node-slb/demo
    > node ./bin/www

    [ALIYUN.COM LOG]: SLB health checking....OK...
  
如果出现`[ALIYUN.COM LOG]: SLB health checking....OK...`说明正常。



## 科普：HEAD请求官方定义


HTTP请求方法并不是只有GET和POST，只是最常用的。据RFC2616标准（现行的HTTP/1.1）得知，通常有以下8种方法：OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE和CONNECT。


HEAD方法跟GET方法相同，只不过服务器响应时不会返回消息体。一个HEAD请求的响应中，HTTP头中包含的元信息应该和一个GET请求的响应消息相同。这种方法可以用来获取请求中隐含的元信息，而不用传输实体本身。也经常用来测试超链接的有效性、可用性和最近的修改。

一个HEAD请求的响应可被缓存，也就是说，响应中的信息可能用来更新之前缓存的实体。如果当前实体跟缓存实体的阈值不同（可通过Content-Length、Content-MD5、ETag或Last-Modified的变化来表明），那么这个缓存就被视为过期了。

简而言之
HEAD请求常常被忽略，但是能提供很多有用的信息，特别是在有限的速度和带宽下。

主要有以下特点：

1. 只请求资源的首部；
2. 检查超链接的有效性；
3. 检查网页是否被修改；
4. 多用于自动搜索机器人获取网页的标志信息，获取rss种子信息，或者传递安全认证信息等

