## kissy-do

原始地址：[Do.js](https://github.com/neekey/Do.js)

* 版本：1.0
* 教程：[http://gallery.kissyui.com/do/1.0/guide/index.html](http://gallery.kissyui.com/do/1.0/guide/index.html)
* demo：参考下方的 **使用**

"Yes, I do"。

Do是一个同步执行方法队列，可以让多个异步任务按顺序同步执行。

A queue written in JavaScript which runs asynchronous jobs in order as if they were synchronous.

## 使用

```javascript

var Do = require( 'dojs' );

var asyncData = undefined;

Do(function( done ){

    setTimeout(function(){
        asyncData = { name: 'Do.js' };
        done();
    }, 1000 );
});

Do(function( done ){

    alert( asyncData ); // => { name: 'Do.js' }
});

```

##Separated queue

If you want multiple queue to execute, you can use `newQueue` method:

```javascript

var Do = require( 'dojs' );

var myDo = Do.newQueue();
var yourDo = Do.newQueue();
var myAsyncData = undefined;
var yourAsyncData = undefined;

myDo(function( done ){

    setTimeout(function(){
        myAsyncData = { name: 'My Do' };
        done();
    }, 1000 );
});

yourDo(function( done ){

    setTimeout(function(){
        yourAsyncData = { name: 'Your Do' };
        done();
    }, 1000 );
});

myDo(function( done ){

    alert( myAsyncData ); // => { name: 'My Do' }
});

YourDo(function( done ){
    alert( yourAsyncData ); // => { name: 'Your Do' }
});

```

`myDo` and `yourDo` are independent of each other.


## changelog

### V1.0

    [!]


