(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{231:function(t,s,o){"use strict";o.r(s);var e=o(0),n=o(212),a=o(195);e.a.use(n.a);var i={components:{WButton:a.a},methods:{showMessage:function(){this.$toast("默认3s后自动关闭")},showMessageWithDuration:function(){this.$toast("将在10s后自动关闭",{duration:10})},showMessageWithCloseBtn:function(){this.$toast("只能手动关闭",{closable:!1})},showMessageWithVNode:function(){this.$toast("<strong>我被加粗了，<i>我是倾斜的</i></strong>",{enableHtml:!0,closable:!1})}}},c=o(1),h=Object(c.a)(i,function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",[o("h3",[t._v("基础功能")]),t._v(" "),o("w-button",{on:{click:t.showMessage}},[t._v("显示Toast")]),t._v(" "),o("w-button",{on:{click:t.showMessageWithDuration}},[t._v("自定义显示10s后关闭")]),t._v(" "),o("w-button",{on:{click:t.showMessageWithCloseBtn}},[t._v("手动关闭")]),t._v(" "),o("w-button",{on:{click:t.showMessageWithVNode}},[t._v("支持VNode")])],1)},[],!1,null,null,null);s.default=h.exports}}]);