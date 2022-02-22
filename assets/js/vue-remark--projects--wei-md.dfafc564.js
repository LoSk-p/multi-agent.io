(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},cFmr:function(t,e,o){"use strict";o.r(e);var a=o("KHd+"),i=o("UQSp"),n=o("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.a.config.optionMergeStrategies;var r={VueRemarkRoot:i.a},l=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===s(r[t])&&"function"==typeof r[t].render||"function"==typeof r[t]&&"function"==typeof r[t].options.render?e[t]=r[t]:o[t]=function(){return r[t]}}))},c=n.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",u={excerpt:null,title:"WEI",subtitle:"Water Environmental Inspector",cover:"./images/wei/cover.jpg",video:"https://youtu.be/4iCkdF2UJmo",description:"WEI - unmanned catamaran-type surface vehicle for environmental monitoring, equipped with compact sensors, on-board navigation and network connection and powered by secure registration of its missions and collected data on water samples. The vessel provides automatic certified measurements and can be used for environmental services and businesses that need water quality control.",published:!0,locale:"en"};var p=function(t){t.options[d]&&(t.options[d]=u),n.a.util.defineReactive(t.options,d,u),t.options.computed=c.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},h=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("h2",{attrs:{id:"features"}},[o("a",{attrs:{href:"#features","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Features")]),o("ma-section",{attrs:{title:"High level of automation"}},[t._v("\nAll you need is to set a mission for the USV with a GPS route and the desired parameters for measurement. The vessel will collect the necessary data and provide online access to it as soon as it is within range of the network connection. \n")]),o("ma-section",{attrs:{title:"Blockchain based security"}},[t._v("\nEnvironmental data can be very valuable and therefore attractive to fraud. In order to ensure trust, USV has the ability to use the blockchain to publish data, thereby making it immutable and verifiable. Moreover, the vessel and sensors can be endowed with unique blockchain based IDs in order to unambiguously link the data and the source of their receipt.\n")]),o("ma-section",{attrs:{title:"Wide range of water params"}},[t._v("\nThe USV has support for Libelium sensor kits, which allow the collection of many different water parameters in the field, from acidity levels to specific ions. \n")]),o("ma-section",{attrs:{title:"Easy to deploy"}},[t._v("\nThe USV is designed in such a way as to be as convenient as possible in transportation to the launch location by an average car. Thanks to the removable weights, the vessel can be easily carried over by hand.\n")]),o("ma-section",{attrs:{title:"Flexibility and scalability"}},[t._v("\nThanks to the control software used, it is easy to build a scalable fleet of such USVs, in which each device will perform its specific task.\n")]),o("h2",{attrs:{id:"tech-details"}},[o("a",{attrs:{href:"#tech-details","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Tech details")]),o("h3",{attrs:{id:"design--hardware"}},[o("a",{attrs:{href:"#design--hardware","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Design & Hardware")]),o("table",[o("tbody",[o("tr",[o("td",[o("strong",[t._v("Hull and components")])]),o("td",[t._v("Catamaran hull made of biodegradable PLA plastic, equipped with a waterproof electronics box and removable XX kg weights to ensure swimming performance. A winch for immersion of sensors is installed on the hull.")])]),o("tr",[o("td",[o("strong",[t._v("Thrusters")])]),o("td",[t._v("2x Blue Robotics T200, max full throttle FWD - 6.7 kg f")])]),o("tr",[o("td",[o("strong",[t._v("On-board computer")])]),o("td",[t._v("Raspberry Pi 4B 8 Gb")])]),o("tr",[o("td",[o("strong",[t._v("Flight controller")])]),o("td",[t._v("Pixhawk PX4 Autopilot 2.4.8 + power module Holybro PM06 v2 micro")])]),o("tr",[o("td",[o("strong",[t._v("Telemetry")])]),o("td",[t._v("3DR radio Dual TTL, 915Mhz 500mW")])]),o("tr",[o("td",[o("strong",[t._v("GPS")])]),o("td",[t._v("RadioLink M8N SE100")])]),o("tr",[o("td",[o("strong",[t._v("Sensor sets")])]),o("td",[t._v("Libelium Smart Water and Smart Water Ions boards support plus various sensors: pH, oxidation-reduction potential, dissolved oxygen, conductivity, temperature, turbidity, ions: NH4+, Br-, Ca2+, Cl-, Cu2+, F-, I-, Li+, Mg2+, NO3-, NO2-, CIO4-, K+, Ag+, Na+")])])])]),o("h3",{attrs:{id:"software"}},[o("a",{attrs:{href:"#software","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Software")]),o("table",[o("tbody",[o("tr",[o("td",[o("strong",[t._v("Main software connector")])]),o("td",[t._v("Robot Operating System: all components are implemented as ROS packages and nodes")])]),o("tr",[o("td",[o("strong",[t._v("Navigation and motion control")])]),o("td",[t._v("PX4 Drone Autopilot software with ROS integration")])]),o("tr",[o("td",[o("strong",[t._v("Secure mission control")])]),o("td",[t._v("Robonomics Network with AIRA client: provides the ability to send transactions to the Ethereum blockchain for creation and finalization USV missions")])]),o("tr",[o("td",[o("strong",[t._v("Data storage")])]),o("td",[t._v("InterPlanetary File System for content-addressable access to data")])])])]),o("h2",{attrs:{id:"media"}},[o("a",{attrs:{href:"#media","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Media")]),o("div",{staticClass:"youtube-embed"},[o("div",{staticStyle:{width:"100%",margin:"0 auto"}},[o("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/4iCkdF2UJmo",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])]),o("div",{staticClass:"youtube-embed"},[o("div",{staticStyle:{width:"100%",margin:"0 auto"}},[o("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/-B7WX4pGtRM",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])])],1)}),[],!1,null,null,null);"function"==typeof l&&l(h),"function"==typeof p&&p(h);e.default=h.exports}}]);