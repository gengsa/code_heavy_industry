(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1093:function(t,_,a){t.exports=a.p+"assets/img/img002.6e874877.png"},1094:function(t,_,a){t.exports=a.p+"assets/img/img003.6f9c041c.png"},1095:function(t,_,a){t.exports=a.p+"assets/img/img004.f6680aef.png"},2189:function(t,_,a){"use strict";a.r(_);var v=a(54),r=Object(v.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#_1、普通容器"}},[t._v("1、普通容器")]),v("ul",[v("li",[v("a",{attrs:{href:"#_1生活中的普通容器"}},[t._v("①生活中的普通容器")])]),v("li",[v("a",{attrs:{href:"#_2程序中的普通容器"}},[t._v("②程序中的普通容器")])])])]),v("li",[v("a",{attrs:{href:"#_2、复杂容器"}},[t._v("2、复杂容器")]),v("ul",[v("li",[v("a",{attrs:{href:"#_1生活中的复杂容器"}},[t._v("①生活中的复杂容器")])]),v("li",[v("a",{attrs:{href:"#_2程序中的复杂容器"}},[t._v("②程序中的复杂容器")])])])]),v("li",[v("a",{attrs:{href:"#_3、ioc思想"}},[t._v("3、IOC思想")]),v("ul",[v("li",[v("a",{attrs:{href:"#_1获取资源的传统方式"}},[t._v("①获取资源的传统方式")])]),v("li",[v("a",{attrs:{href:"#_2反转控制方式获取资源"}},[t._v("②反转控制方式获取资源")])]),v("li",[v("a",{attrs:{href:"#_3di"}},[t._v("③DI")])])])]),v("li",[v("a",{attrs:{href:"#_4、-ioc容器在spring中的实现"}},[t._v("4、 IOC容器在Spring中的实现")]),v("ul",[v("li",[v("a",{attrs:{href:"#_1beanfactory"}},[t._v("①BeanFactory")])]),v("li",[v("a",{attrs:{href:"#_2applicationcontext"}},[t._v("②ApplicationContext")])]),v("li",[v("a",{attrs:{href:"#_3applicationcontext的主要实现类"}},[t._v("③ApplicationContext的主要实现类")])])])])])]),v("p"),t._v(" "),v("h1",{attrs:{id:"第二节-ioc容器概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第二节-ioc容器概念"}},[t._v("#")]),t._v(" 第二节 IOC容器概念")]),t._v(" "),v("h2",{attrs:{id:"_1、普通容器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、普通容器"}},[t._v("#")]),t._v(" 1、普通容器")]),t._v(" "),v("h3",{attrs:{id:"_1生活中的普通容器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1生活中的普通容器"}},[t._v("#")]),t._v(" ①生活中的普通容器")]),t._v(" "),v("p",[v("img",{attrs:{src:a(1093),alt:"./images"}})]),t._v(" "),v("p",[t._v("普通容器只能用来存储，没有更多功能。")]),t._v(" "),v("h3",{attrs:{id:"_2程序中的普通容器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2程序中的普通容器"}},[t._v("#")]),t._v(" ②程序中的普通容器")]),t._v(" "),v("ul",[v("li",[t._v("数组")]),t._v(" "),v("li",[t._v("集合：List")]),t._v(" "),v("li",[t._v("集合：Set")])]),t._v(" "),v("h2",{attrs:{id:"_2、复杂容器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、复杂容器"}},[t._v("#")]),t._v(" 2、复杂容器")]),t._v(" "),v("h3",{attrs:{id:"_1生活中的复杂容器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1生活中的复杂容器"}},[t._v("#")]),t._v(" ①生活中的复杂容器")]),t._v(" "),v("p",[v("img",{attrs:{src:a(1094),alt:"./images"}})]),t._v(" "),v("p",[t._v("政府管理我们的一生，生老病死都和政府有关。")]),t._v(" "),v("h3",{attrs:{id:"_2程序中的复杂容器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2程序中的复杂容器"}},[t._v("#")]),t._v(" ②程序中的复杂容器")]),t._v(" "),v("p",[t._v("Servlet 容器能够管理 Servlet、Filter、Listener 这样的组件的一生，所以它是一个复杂容器。我们即将要学习的 IOC 容器也是一个复杂容器。它们不仅要负责"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("创建")]),t._v("组件的对象、"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("存储")]),t._v("组件的对象，还要负责"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("调用")]),t._v("组件的方法让它们工作，最终在特定情况下"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("销毁")]),t._v("组件。")]),t._v(" "),v("h4",{attrs:{id:"_1-servlet生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-servlet生命周期"}},[t._v("#")]),t._v(" [1]Servlet生命周期")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("时机")]),t._v(" "),v("th",[t._v("次数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("创建对象")]),t._v(" "),v("td",[t._v("默认情况：接收到第一次请求"),v("br"),t._v("修改启动顺序后：Web应用启动过程中")]),t._v(" "),v("td",[t._v("一次")])]),t._v(" "),v("tr",[v("td",[t._v("初始化操作")]),t._v(" "),v("td",[t._v("创建对象之后")]),t._v(" "),v("td",[t._v("一次")])]),t._v(" "),v("tr",[v("td",[t._v("处理请求")]),t._v(" "),v("td",[t._v("接收到请求")]),t._v(" "),v("td",[t._v("多次")])]),t._v(" "),v("tr",[v("td",[t._v("销毁操作")]),t._v(" "),v("td",[t._v("Web应用卸载之前")]),t._v(" "),v("td",[t._v("一次")])])])]),t._v(" "),v("h4",{attrs:{id:"_2-filter生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-filter生命周期"}},[t._v("#")]),t._v(" [2]Filter生命周期")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("生命周期阶段")]),t._v(" "),v("th",[t._v("执行时机")]),t._v(" "),v("th",[t._v("执行次数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("创建对象")]),t._v(" "),v("td",[t._v("Web应用启动时")]),t._v(" "),v("td",[t._v("一次")])]),t._v(" "),v("tr",[v("td",[t._v("初始化")]),t._v(" "),v("td",[t._v("创建对象后")]),t._v(" "),v("td",[t._v("一次")])]),t._v(" "),v("tr",[v("td",[t._v("拦截请求")]),t._v(" "),v("td",[t._v("接收到匹配的请求")]),t._v(" "),v("td",[t._v("多次")])]),t._v(" "),v("tr",[v("td",[t._v("销毁")]),t._v(" "),v("td",[t._v("Web应用卸载前")]),t._v(" "),v("td",[t._v("一次")])])])]),t._v(" "),v("h2",{attrs:{id:"_3、ioc思想"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、ioc思想"}},[t._v("#")]),t._v(" 3、IOC思想")]),t._v(" "),v("p",[t._v("IOC：Inversion of Control，翻译过来是"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("反转控制")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"_1获取资源的传统方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1获取资源的传统方式"}},[t._v("#")]),t._v(" ①获取资源的传统方式")]),t._v(" "),v("p",[t._v("自己做饭：买菜、洗菜、择菜、改刀、炒菜，全过程参与，费时费力，必须清楚了解资源创建整个过程中的全部细节且熟练掌握。")]),t._v(" "),v("p",[t._v("在应用程序中的组件需要获取资源时，传统的方式是组件"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("主动")]),t._v("的从容器中获取所需要的资源，在这样的模式下开发人员往往需要知道在具体容器中特定资源的获取方式，增加了学习成本，同时降低了开发效率。")]),t._v(" "),v("h3",{attrs:{id:"_2反转控制方式获取资源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2反转控制方式获取资源"}},[t._v("#")]),t._v(" ②反转控制方式获取资源")]),t._v(" "),v("p",[t._v("点外卖：下单、等、吃，省时省力，不必关心资源创建过程的所有细节。")]),t._v(" "),v("p",[t._v("反转控制的思想完全颠覆了应用程序组件获取资源的传统方式：反转了资源的获取方向——改由容器主动的将资源推送给需要的组件，开发人员不需要知道容器是如何创建资源对象的，只需要提供接收资源的方式即可，极大的降低了学习成本，提高了开发的效率。这种行为也称为查找的"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("被动")]),t._v("形式。")]),t._v(" "),v("h3",{attrs:{id:"_3di"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3di"}},[t._v("#")]),t._v(" ③DI")]),t._v(" "),v("p",[t._v("DI：Dependency Injection，翻译过来是"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("依赖注入")]),t._v("。")]),t._v(" "),v("p",[t._v("DI 是 IOC 的另一种表述方式：即组件以一些预先定义好的方式（例如：setter 方法）接受来自于容器的资源注入。相对于IOC而言，这种表述更直接。")]),t._v(" "),v("p",[t._v("所以结论是：IOC 就是一种反转控制的思想， 而 DI 是对 IOC 的一种具体实现。")]),t._v(" "),v("h2",{attrs:{id:"_4、-ioc容器在spring中的实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、-ioc容器在spring中的实现"}},[t._v("#")]),t._v(" 4、 IOC容器在Spring中的实现")]),t._v(" "),v("p",[t._v("Spring 的 IOC 容器就是 IOC 思想的一个落地的产品实现。IOC 容器中管理的组件也叫做 bean。在创建 bean 之前，首先需要创建 IOC 容器。Spring 提供了 IOC 容器的两种实现方式：")]),t._v(" "),v("h3",{attrs:{id:"_1beanfactory"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1beanfactory"}},[t._v("#")]),t._v(" ①BeanFactory")]),t._v(" "),v("p",[t._v("这是 IOC 容器的基本实现，是 Spring 内部使用的接口。面向 Spring 本身，不提供给开发人员使用。")]),t._v(" "),v("h3",{attrs:{id:"_2applicationcontext"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2applicationcontext"}},[t._v("#")]),t._v(" ②ApplicationContext")]),t._v(" "),v("p",[t._v("BeanFactory 的子接口，提供了更多高级特性。面向 Spring 的使用者，几乎所有场合都使用 ApplicationContext 而不是底层的 BeanFactory。")]),t._v(" "),v("blockquote",[v("p",[t._v("以后在 Spring 环境下看到一个类或接口的名称中包含 ApplicationContext，那基本就可以断定，这个类或接口与 IOC 容器有关。")])]),t._v(" "),v("h3",{attrs:{id:"_3applicationcontext的主要实现类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3applicationcontext的主要实现类"}},[t._v("#")]),t._v(" ③ApplicationContext的主要实现类")]),t._v(" "),v("p",[v("img",{attrs:{src:a(1095),alt:"iamges"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("类型名")]),t._v(" "),v("th",[t._v("简介")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ClassPathXmlApplicationContext")]),t._v(" "),v("td",[t._v("通过读取类路径下的 XML 格式的配置文件创建 IOC 容器对象")])]),t._v(" "),v("tr",[v("td",[t._v("FileSystemXmlApplicationContext")]),t._v(" "),v("td",[t._v("通过文件系统路径读取 XML 格式的配置文件创建 IOC 容器对象")])]),t._v(" "),v("tr",[v("td",[t._v("ConfigurableApplicationContext")]),t._v(" "),v("td",[t._v("ApplicationContext 的子接口，包含一些扩展方法 refresh() 和 close() ，让 ApplicationContext 具有启动、关闭和刷新上下文的能力。")])]),t._v(" "),v("tr",[v("td",[t._v("WebApplicationContext")]),t._v(" "),v("td",[t._v("专门为 Web 应用准备，基于 Web 环境创建 IOC 容器对象，并将对象引入存入 ServletContext 域中。")])])])]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/pro004-Spring/lecture/chapter01/verse01.html"}},[t._v("上一节")]),t._v(" "),v("RouterLink",{attrs:{to:"/pro004-Spring/lecture/chapter01/index.html"}},[t._v("回目录")]),t._v(" "),v("RouterLink",{attrs:{to:"/pro004-Spring/lecture/chapter01/verse03.html"}},[t._v("下一节")])],1)])}),[],!1,null,null,null);_.default=r.exports}}]);