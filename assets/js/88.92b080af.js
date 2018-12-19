(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{232:function(t,r,i){"use strict";i.r(r);var e=i(0),a=Object(e.a)({},function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("p"),t._m(1),i("p"),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("Spring是J2EE(Java Enterprise Edition)的轻量级代替品。它通过IoC（控制反转）和AOP（面向切面编程），用简单的Java对象（POJO，Plain Old Java Object）实现EJB（Enterprise JavaBean）的功能。")]),t._v(" "),i("p",[t._v("Spring一开始用XML配置。\nSpring2.5引入基于注解的组件扫描，清除了大量针对应用程序自身的显式XML配置。\nSpring3.0引入基于Java的配置，这是一种类型安全的可重构配置方式，可以代替XML。")]),t._v(" "),t._m(3),t._v(" "),i("p",[t._v("一个Spring项目的基本需要：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),i("p",[t._v("从根本上来说，Spring Boot项目只是普通的Spring项目，只是用到了Spring Boot的自动配置和起步依赖。")]),t._v(" "),t._m(7),t._v(" "),i("p",[t._v("针对很多Spring应用程序常见的应用功能，Spring Boot能自动提供相关配置。比如JdbcTemplate、DataSource等。")]),t._v(" "),t._m(8),t._v(" "),i("p",[t._v("起步依赖就是特殊的Maven依赖或Gradle依赖，利用了传递依赖解析，把常用库聚合在一起，组成了几个为特定功能而定制的依赖。")]),t._v(" "),i("p",[t._v("假设你正在用Spring MVC构造一个REST API，并将JSON作为资源表述。此外，还运用JSR-303规范的声明式校验，并使用嵌入式的Tomcat服务器来提供服务。要实现以上目标，至少需要以下8个依赖：")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),i("p",[t._v("命令行界面Spring Boot CLI可用来快速搭建基于Spring的项目原型。")]),t._v(" "),t._m(12),t._v(" "),i("p",[t._v("Actuator提供了在运行时检视应用程序内部情况的能力，包括如下细节：")]),t._v(" "),t._m(13),t._v(" "),i("p",[t._v("Actuator通过Web和Shell向外界提供信息。")]),t._v(" "),t._m(14),t._v(" "),i("p",[t._v("Spring Boot CLI的安装方式有：")]),t._v(" "),t._m(15),t._v(" "),i("p",[t._v("通过MacOS Homebrew进行安装。")]),t._v(" "),t._m(16),t._m(17),t._v(" "),i("p",[t._v("Spring Initializer本质上是一个Web应用程序，它能为你生成一个基于Spring的项目原型（基本的项目结构以及一个用于构建代码的Maven或Gradle构建文件）。")]),t._v(" "),i("p",[t._v("Spring Initializer可通过以下几种方式来使用：Web界面、Spring Tool Suite、IntelliJ IDEA、Spring Boot CLI。")]),t._v(" "),t._m(18),t._v(" "),i("p",[t._v("通过"),i("a",{attrs:{href:"https://start.spring.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Initializer在线"),i("OutboundLink")],1),t._v("来一个基于Spring的项目原型。")]),t._v(" "),t._m(19),t._v(" "),i("p",[i("a",{attrs:{href:"https://spring.io/tools/sts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Tool Suite"),i("OutboundLink")],1),t._v("是Eclipse IDE的一个发行版。")]),t._v(" "),i("p",[t._v("Spring Tool Suite从3.4.0版本开始，集成了Spring Initializer。")]),t._v(" "),i("p",[t._v("其实Spring Tool Suite也是把项目生成的工作委托给"),i("a",{attrs:{href:"https://start.spring.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Initializer在线"),i("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(20),t._v(" "),i("p",[t._v("利用IntelliJ IDEA的项目创建引导来创建一个基于Spring的项目原型。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),i("p",[t._v("其实"),i("code",[t._v("spring init")]),t._v("也是把项目生成的工作委托给"),i("a",{attrs:{href:"https://start.spring.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Initializer在线"),i("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(23)])},[function(){var t=this.$createElement,r=this._self._c||t;return r("h1",{attrs:{id:"spring-boot入门"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot入门","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Boot入门")])},function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"table-of-contents"},[i("ul",[i("li",[i("a",{attrs:{href:"#spring概述"}},[t._v("Spring概述")])]),i("li",[i("a",{attrs:{href:"#spring项目"}},[t._v("Spring项目")])]),i("li",[i("a",{attrs:{href:"#spring-boot四大核心"}},[t._v("Spring Boot四大核心")]),i("ul",[i("li",[i("a",{attrs:{href:"#自动配置"}},[t._v("自动配置")])]),i("li",[i("a",{attrs:{href:"#起步依赖"}},[t._v("起步依赖")])]),i("li",[i("a",{attrs:{href:"#命令行界面"}},[t._v("命令行界面")])]),i("li",[i("a",{attrs:{href:"#actuator"}},[t._v("Actuator")])])])]),i("li",[i("a",{attrs:{href:"#spring-boot-cli"}},[t._v("Spring Boot CLI")])]),i("li",[i("a",{attrs:{href:"#spring-initializer"}},[t._v("Spring Initializer")]),i("ul",[i("li",[i("a",{attrs:{href:"#web界面"}},[t._v("Web界面")])]),i("li",[i("a",{attrs:{href:"#spring-tool-suite"}},[t._v("Spring Tool Suite")])]),i("li",[i("a",{attrs:{href:"#intellij-idea"}},[t._v("IntelliJ IDEA")])]),i("li",[i("a",{attrs:{href:"#spring-boot-cli"}},[t._v("Spring Boot CLI")])])])])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"spring概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring概述","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring概述")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"spring项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring项目","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring项目")])},function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("ul",[i("li",[i("p",[t._v("一个项目结构，其中有一个包含必要依赖的Maven或Gradle依赖文件。")])]),t._v(" "),i("li",[i("p",[t._v("一个web.xml文件（或一个WebApplicationInitializer实现）。")])]),t._v(" "),i("li",[i("p",[t._v("一个启用了Spring MVC的Spring配置。")])]),t._v(" "),i("li",[i("p",[t._v("一个控制器类。")])]),t._v(" "),i("li",[i("p",[t._v("一个用于部署应用程序的Web应用服务器，比如Tomcat。")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"spring-boot四大核心"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot四大核心","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Boot四大核心")])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[this._v("Spring Boot的四大核心："),r("strong",[this._v("自动配置、起步依赖、命令行界面、Actuator")]),this._v("。")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h3",{attrs:{id:"自动配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自动配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 自动配置")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h3",{attrs:{id:"起步依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#起步依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 起步依赖")])},function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("org.springframework:spring-core\norg.springframework:spring-web\norg.springframework:spring-webmvc\ncom.fasterxml.jackson.core:jackson-databind\norg.hibernate:hibernate-validator\norg.apache.tomcat.embed:tomcat-embed-core\norg.apache.tomcat.embed:tomcat-embed-el\norg.apache.tomcat.embed:tomcat-embed-logging-juli\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br"),i("span",{staticClass:"line-number"},[t._v("3")]),i("br"),i("span",{staticClass:"line-number"},[t._v("4")]),i("br"),i("span",{staticClass:"line-number"},[t._v("5")]),i("br"),i("span",{staticClass:"line-number"},[t._v("6")]),i("br"),i("span",{staticClass:"line-number"},[t._v("7")]),i("br"),i("span",{staticClass:"line-number"},[t._v("8")]),i("br")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[this._v("而利用Spring Boot的起步依赖"),r("code",[this._v("org.springframework.boot:spring-boot-starter-web")]),this._v("就能根据依赖传递把上面这些依赖都引入项目中。")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h3",{attrs:{id:"命令行界面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命令行界面","aria-hidden":"true"}},[this._v("#")]),this._v(" 命令行界面")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h3",{attrs:{id:"actuator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#actuator","aria-hidden":"true"}},[this._v("#")]),this._v(" Actuator")])},function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("ul",[i("li",[i("p",[t._v("Spring应用程序上下文里配置的Bean。")])]),t._v(" "),i("li",[i("p",[t._v("Spring Boot的自动配置做的决策。")])]),t._v(" "),i("li",[i("p",[t._v("应用程序里线程的当前状态。")])]),t._v(" "),i("li",[i("p",[t._v("应用程序取到的环境变量、系统属性、配置属性和命令行参数。")])]),t._v(" "),i("li",[i("p",[t._v("应用程序最近处理过的HTTP请求的追踪情况。")])]),t._v(" "),i("li",[i("p",[t._v("各种和内存用量、垃圾回收、Web请求以及数据源用量相关的指标。")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"spring-boot-cli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Boot CLI")])},function(){var t=this.$createElement,r=this._self._c||t;return r("ul",[r("li",[r("p",[this._v("用下载的分发包进行安装。")])]),this._v(" "),r("li",[r("p",[this._v("用Groovy Environment Manager进行安装。")])]),this._v(" "),r("li",[r("p",[this._v("通过MacOS Homebrew进行安装。")])]),this._v(" "),r("li",[r("p",[this._v("用MacPorts进行安装。")])])])},function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("# 引入Pivotal的tap\nbrew tap pivotal/tap\n# 安装Spring Boot CLI\nbrew install springboot\n# 查看Spring Boot版本号，判断是否已成功安装\nspring --version\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br"),i("span",{staticClass:"line-number"},[t._v("3")]),i("br"),i("span",{staticClass:"line-number"},[t._v("4")]),i("br"),i("span",{staticClass:"line-number"},[t._v("5")]),i("br"),i("span",{staticClass:"line-number"},[t._v("6")]),i("br")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"spring-initializer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-initializer","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Initializer")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h3",{attrs:{id:"web界面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#web界面","aria-hidden":"true"}},[this._v("#")]),this._v(" Web界面")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h3",{attrs:{id:"spring-tool-suite"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-tool-suite","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Tool Suite")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h3",{attrs:{id:"intellij-idea"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#intellij-idea","aria-hidden":"true"}},[this._v("#")]),this._v(" IntelliJ IDEA")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h3",{attrs:{id:"spring-boot-cli-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-cli-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Boot CLI")])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[this._v("Spring Boot CLI中的"),r("code",[this._v("spring init")]),this._v("命令可创建Spring项目。")])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[this._v("执行"),r("code",[this._v("spring help init")]),this._v("了解所有参数的情况。")])}],!1,null,null,null);a.options.__file="Spring Boot入门.md";r.default=a.exports}}]);