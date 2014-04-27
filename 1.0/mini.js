/**
 * @fileoverview 
 * @author 隐若<yinruo.nyj@taobao.com>
 * @module do
 **/
KISSY.add(function (S, Node, Lang) {
    var $ = Node.all,
        EventTarget = S.Event.Target;
    /**
     *
     * @class Do
     * @constructor
     */
    function Do(config) {

    }

    S.augment(Do, EventTarget, /** @lends Do.prototype*/{

    });

    return Do;

}, {requires:['node', 'lang']});



