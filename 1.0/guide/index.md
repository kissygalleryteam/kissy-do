## 综述

"Yes, I do"。

Do是一个同步执行方法队列，可以让多个异步任务按顺序同步执行。

* 版本：1.0
* 作者：隐若

## 初始化组件
		
    S.use('gallery/kissy-do/1.0/index', function (S, Do) {

         Do(function( done ){
            setTimeout(function(){
                console.log( '5s past' );
                done();
            }, 5000 );
         });

         Do(function( done ){
             setTimeout(function(){
                 console.log( '2s past' );
                 done();
             }, 2000 );
         });
    });

    // console log:
    //      > 5s past
    //      > 2s past

## API说明

### Do( func )

向队列中添加任务，

- {Function} func 需要执行的任务方法，将会获得 done 作为第一个参数，执行done说明当前任务完成

### Do.newQueue()

创建一个新的队列，不同队列中的任务执行互不干扰。

