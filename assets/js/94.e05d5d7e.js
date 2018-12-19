(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{238:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"content"},[s._m(0),s._v(" "),t("p"),s._m(1),t("p"),s._v(" "),s._m(2),s._v(" "),t("p",[s._v("创建一个满足如下要求的Spring Boot项目。")]),s._v(" "),s._m(3),s._v(" "),t("p",[s._v("通常使用"),t("a",{attrs:{href:"https://start.spring.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Spring Initializer在线"),t("OutboundLink")],1),s._v("来创建。")]),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._m(7),s._v(" "),t("p",[s._v("Spring Boot项目遵循传统Maven或Gradle项目的布局。")]),s._v(" "),s._m(8),s._v(" "),s._m(9),s._m(10),s._v(" "),s._m(11),s._m(12),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._m(16),s._v(" "),s._m(17)])},[function(){var s=this.$createElement,n=this._self._c||s;return n("h1",{attrs:{id:"第一个spring-boot项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一个spring-boot项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一个Spring Boot项目")])},function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#创建spring-boot项目"}},[this._v("创建Spring Boot项目")])]),n("li",[n("a",{attrs:{href:"#spring-boot项目结构"}},[this._v("Spring Boot项目结构")]),n("ul",[n("li",[n("a",{attrs:{href:"#启动引导spring"}},[this._v("启动引导Spring")])]),n("li",[n("a",{attrs:{href:"#spring-boot测试"}},[this._v("Spring Boot测试")])]),n("li",[n("a",{attrs:{href:"#项目构建脚本"}},[this._v("项目构建脚本")])])])])])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"创建spring-boot项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建spring-boot项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建Spring Boot项目")])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ul",[t("li",[t("p",[s._v("依赖Web、H2、JPA、Thymeleaf")])]),s._v(" "),t("li",[t("p",[s._v("Kotlin语言")])]),s._v(" "),t("li",[t("p",[s._v("Gradle构建")])]),s._v(" "),t("li",[t("p",[s._v("Spring版本为1.5.10.RELEASE")])]),s._v(" "),t("li",[t("p",[s._v("Group为tech.daking")])]),s._v(" "),t("li",[t("p",[s._v("Artifact为readinglist")])]),s._v(" "),t("li",[t("p",[s._v("Name为Reading List")])]),s._v(" "),t("li",[t("p",[s._v("描述为Reading List Demo")])]),s._v(" "),t("li",[t("p",[s._v("包名为tech.daking.readinglist")])])])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[n("img",{attrs:{src:"/15224582684337/15224588178943.jpg",alt:"Spring Initializer在线创建-w576"}})])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[this._v("也可以使用Spring Boot CLI中的"),n("code",[this._v("spring init")]),this._v("命令来创建。")])},function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('spring init -d=web,data-jpa,h2,thymeleaf --build=gradle -l=kotlin -b="1.5.10.RELEASE" -p=jar -g="tech.daking" -a=readinglist -n="Reading List" --description="Reading List Demo" --package-name="tech.daking.readinglist" readlinglist.zip\n')])]),this._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[this._v("1")]),n("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"spring-boot项目结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot项目结构","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Boot项目结构")])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ul",[t("li",[t("p",[s._v("主要代码位于"),t("code",[s._v("src/main/kotlin")]),s._v("目录中。")])]),s._v(" "),t("li",[t("p",[s._v("资源位于"),t("code",[s._v("src/main/resources")]),s._v("目录中。")])]),s._v(" "),t("li",[t("p",[s._v("测试代码在"),t("code",[s._v("src/test/kotlin")]),s._v("目录中。")])]),s._v(" "),t("li",[t("p",[s._v("测试资源在"),t("code",[s._v("src/test/resources")]),s._v("目录中。")])])])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("readinglist\n├── build.gradle // Gradle构建说明文件\n└── src\n    ├── main\n    │   ├── kotlin\n    │   │   └── tech\n    │   │       └── daking\n    │   │           └── readinglist\n    │   │               └── ReadingListApplication.kt // 应用程序的启动引导类，也是主要的Spring配置类\n    │   └── resources\n    │       ├── application.properties // 用于配置应用程序和Spring Boot的属性\n    │       ├── static\n    │       └── templates\n    └── test\n        └── kotlin\n            └── tech\n                └── daking\n                    └── readinglist\n                        └── ReadingListApplicationTests.kt // 基本的集成测试类\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"启动引导spring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动引导spring","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动引导Spring")])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"language-kotlin line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-kotlin"}},[t("code",[t("span",{attrs:{class:"token comment"}},[s._v("/* ReadingListApplication.kt */")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("package")]),s._v(" tech"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("daking"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("readinglist\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" org"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("boot"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SpringApplication\n"),t("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" org"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("boot"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("autoconfigure"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SpringBootApplication\n\n"),t("span",{attrs:{class:"token annotation builtin"}},[s._v("@SpringBootApplication")]),s._v(" "),t("span",{attrs:{class:"token comment"}},[s._v("// 开启组件扫描和自动配置")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" ReadingListApplication\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("fun")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("main")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),t("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" Array"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("String"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    SpringApplication"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{attrs:{class:"token function"}},[s._v("run")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ReadingListApplication"),t("span",{attrs:{class:"token operator"}},[s._v("::")]),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("java"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token comment"}},[s._v("// 启动引导应用程序")]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[n("code",[this._v("@SpringBootApplication")]),this._v("是将以下几个注解组合在一起。")])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ul",[t("li",[t("p",[t("code",[s._v("@Configuration")]),s._v("，表明该类使用Spring基于Java的配置。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("@ComponentScan")]),s._v("，启用组件扫描。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("@EnableAutoConfiguration")]),s._v("，开启Spring Boot的自动配置。")])])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"spring-boot测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot测试","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Boot测试")])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"language-kotlin line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-kotlin"}},[t("code",[t("span",{attrs:{class:"token comment"}},[s._v("/* ReadingListApplicationTests.kt */")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("package")]),s._v(" tech"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("daking"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("readinglist\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" org"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("junit"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Test\n"),t("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" org"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("junit"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("runner"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RunWith\n"),t("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" org"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("boot"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("context"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SpringBootTest\n"),t("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" org"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("context"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("junit4"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SpringRunner\n\n"),t("span",{attrs:{class:"token annotation builtin"}},[s._v("@RunWith")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SpringRunner"),t("span",{attrs:{class:"token operator"}},[s._v("::")]),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{attrs:{class:"token annotation builtin"}},[s._v("@SpringBootTest")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" ReadingListApplicationTests "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{attrs:{class:"token annotation builtin"}},[s._v("@Test")]),s._v("\n    "),t("span",{attrs:{class:"token keyword"}},[s._v("fun")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("contextLoads")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"项目构建脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目构建脚本","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目构建脚本")])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"language-gradle line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/* build.gradle */\nbuildscript {\n    ext {\n        kotlinVersion = '1.2.20'\n        springBootVersion = '1.5.10.RELEASE'\n    }\n    repositories {\n        mavenCentral()\n    }\n    dependencies {\n        classpath(\"org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}\")\n        classpath(\"org.jetbrains.kotlin:kotlin-gradle-plugin:${kotlinVersion}\")\n        classpath(\"org.jetbrains.kotlin:kotlin-allopen:${kotlinVersion}\")\n    }\n}\n\napply plugin: 'kotlin'\napply plugin: 'kotlin-spring'\napply plugin: 'eclipse'\napply plugin: 'org.springframework.boot'\n\ngroup = 'tech.daking'\nversion = '0.0.1-SNAPSHOT'\nsourceCompatibility = 1.8\ncompileKotlin {\n    kotlinOptions {\n        freeCompilerArgs = [\"-Xjsr305=strict\"]\n        jvmTarget = \"1.8\"\n    }\n}\ncompileTestKotlin {\n    kotlinOptions {\n        freeCompilerArgs = [\"-Xjsr305=strict\"]\n        jvmTarget = \"1.8\"\n    }\n}\n\nrepositories {\n    mavenCentral()\n}\n\n\ndependencies {\n    compile('org.springframework.boot:spring-boot-starter-data-jpa')\n    compile('org.springframework.boot:spring-boot-starter-thymeleaf')\n    compile('org.springframework.boot:spring-boot-starter-web')\n    compile(\"org.jetbrains.kotlin:kotlin-stdlib-jdk8:${kotlinVersion}\")\n    compile(\"org.jetbrains.kotlin:kotlin-reflect:${kotlinVersion}\")\n    runtime('com.h2database:h2')\n    testCompile('org.springframework.boot:spring-boot-starter-test')\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br")])])}],!1,null,null,null);e.options.__file="第一个Spring Boot项目.md";n.default=e.exports}}]);