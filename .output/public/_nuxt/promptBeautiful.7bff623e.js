import{_ as e}from"./AppAnimate.vue_vue_type_script_setup_true_lang.09dc1f9c.js";import a from"./AreaTitle.0d279a50.js";import{J as t,K as l,_ as s,I as n,a_ as o,r as u,x as r,a2 as c,a0 as i,u as m,Y as p,aC as v,C as d,$ as b,a4 as f,X as g,L as h,ap as _,aX as y,aY as C,b9 as k,aZ as w}from"./entry.4f221c1e.js";import{u as x,a as j}from"./shop.b77c0394.js";import{_ as I}from"./delete.252162ef.js";import{_ as z}from"./document-copy.7c03cd07.js";import{g as S,s as V,t as J,c as Y}from"./element-plus.20817160.js";/* empty css                                                                  */import"./lodash.ea4d81e6.js";const $={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},A=[s("path",{fill:"currentColor",d:"M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"},null,-1)];const N={name:"ep-check",render:function(e,a){return t(),l("svg",$,A)}},O={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},H=[s("path",{fill:"currentColor",d:"M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"},null,-1)];const M={name:"ep-opportunity",render:function(e,a){return t(),l("svg",O,H)}},B=e=>(y("data-v-86f7e8b1"),e=e(),C(),e),L={class:"tranfer-con"},D={key:0,class:"tags-con"},P=["onClose"],R={key:1,class:"tags-con"},T=[B((()=>s("p",{class:"no-data"},"暂无列表",-1)))],U={class:"title-side"},X={key:2,class:"history-con"},q={class:"history-item"},K={style:{"font-weight":"bold","margin-bottom":"4px"}},Z={class:"history-button"},E=["onClick"],F=["onClick"],G=["onClick"],Q={key:3,class:"tags-con"},W=[B((()=>s("p",{class:"no-data"},"暂无记录",-1)))],ee=w(n({__name:"promptBeautiful",setup(n){const y="prompt_history",{$store:C}=o(),w=u(""),$=u(""),A=u([]),O=u([]),H=u(0),{copy:B}=x(),{shop:ee,setShop:ae}=j();r((()=>{be()}));const te=()=>{$.value=w.value.replace(/\s*(，+|,+)\s*/g,", "),A.value=$.value.split(",").filter((e=>!!e)).map((e=>e.trim())),de(w.value)},le=()=>{$.value=w.value.replace(/\s+/g,", "),A.value=$.value.split(",").filter((e=>!!e)).map((e=>e.trim())),de(w.value)},se=()=>{$.value=w.value.replace(/[-_]+/g," "),A.value=$.value.split(",").filter((e=>!!e)).map((e=>e.trim())),de(w.value)},ne=()=>{$.value=w.value.replace(/\{/g,"(").replace(/\}/g,")"),A.value=$.value.split(/,/g).filter((e=>!!e)).map((e=>e.trim())),de(w.value)},oe=()=>{$.value=w.value.replace(/\(/g,"{").replace(/\)/g,"}"),A.value=$.value.split(/,/g).filter((e=>!!e)).map((e=>e.trim())),de(w.value)},ue=()=>{w.value=ee.value,$.value=w.value.replace(/\s*(，+|,+)\s*/g,","),A.value=$.value.split(",").filter((e=>!!e)).map((e=>e.trim())),de(w.value)},re=()=>{ae($.value)},ce=()=>{fe(),O.value=[]},ie=()=>{if(w.value.includes("masterpiece"))return Y({showClose:!0,message:"请不要重复添加",type:"warning"});w.value=`masterpiece, best quality, ${w.value}`,$.value=w.value.replace(/\s*(，+|,+)\s*/g,","),A.value=$.value.split(",").filter((e=>!!e)).map((e=>e.trim())),de(w.value)},me=()=>{w.value="",$.value="",A.value=[]},pe=()=>{w.value=A.value.join(", "),$.value=A.value.join(", ")},ve=()=>{B($.value)},de=e=>{var a;let t=[];if(!e)return Y({showClose:!0,message:"请输入prompt",type:"warning"});C.get(y)&&(t=null!=(a=JSON.parse(C.get(y)))?a:[]);if(!t.find((a=>a.prompt===e))){if(t&&t.length&&t.length>100)return Y({showClose:!0,message:"数据超过100条",type:"warning"});t.includes(e)||t.unshift({prompt:e,time:k().format("YYYY年MM月DD日 HH时mm分ss秒")}),O.value=[...t],H.value=O.value.length,C.set(y,JSON.stringify(O.value))}},be=()=>{C.get(y)&&(O.value=JSON.parse(C.get(y)),H.value=O.value.length)},fe=()=>{C.set(y,"")};return(n,o)=>{var u,r;const k=e,x=S,j=V,Y=J,ee=a,ae=M,de=N,be=z,fe=I;return t(),l("div",L,[c(k,{name:"fadeIn"},{default:i((()=>[s("div",{class:"button-con"},[s("button",{class:"btn btn-accent m-r-10 m-b-10",onClick:te},"格式化"),s("button",{class:"btn btn-accent m-r-10 m-b-10",onClick:me},"清空"),s("button",{class:"btn btn-accent m-r-10 m-b-10",onClick:ne}," 大括号转圆括号 "),s("button",{class:"btn btn-accent m-r-10 m-b-10",onClick:oe}," 圆括号转大括号 "),s("button",{class:"btn btn-accent m-r-10 m-b-10",onClick:ie}," 起手式 "),s("button",{class:"btn btn-accent m-r-10 m-b-10",onClick:ue},"购物车导入"),s("button",{class:"btn btn-accent m-r-10 m-b-10",onClick:re},"导出购物车"),s("button",{class:"btn btn-secondary m-r-10 m-b-10",onClick:le}," 空格加逗号(用于danbooru) "),s("button",{class:"btn btn-secondary m-b-10",onClick:se}," 去除下划线(用于danbooru) ")])])),_:1}),c(Y,{gutter:20},{default:i((()=>[c(j,{xs:24,sm:12,md:12,lg:12,xl:12},{default:i((()=>[c(k,{name:"fadeIn"},{default:i((()=>[c(x,{modelValue:m(w),"onUpdate:modelValue":o[0]||(o[0]=e=>d(w)?w.value=e:null),type:"textarea",placeholder:"请输入promit",rows:12,clearable:"",autosize:{minRows:12},"show-word-limit":"",maxlength:"3000"},null,8,["modelValue"])])),_:1})])),_:1}),c(j,{xs:24,sm:12,md:12,lg:12,xl:12},{default:i((()=>[c(k,{name:"fadeIn"},{default:i((()=>[c(x,{modelValue:m($),"onUpdate:modelValue":o[1]||(o[1]=e=>d($)?$.value=e:null),type:"textarea",placeholder:"输出prompt",rows:12,autosize:{minRows:12},readonly:"","show-word-limit":"",maxlength:"3000",onClick:ve},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(ee,{title:"Prompt列表"}),m(A)&&(null==(u=m(A))?void 0:u.length)?(t(),l("div",D,[s("div",{class:"m-b-10"},[s("button",{class:"btn btn-md btn-accent",onClick:pe}," 当前tags替换prompt ")]),(t(!0),l(p,null,v(m(A),((e,a)=>(t(),b(k,{key:a,name:"fadeIn"},{default:i((()=>[s("button",{class:"btn btn-sm btn-secondary m-r-10 m-b-10",onClose:e=>{return t=a,void A.value.splice(t,1);var t}},f(e),41,P)])),_:2},1024)))),128))])):(t(),l("div",R,T)),c(ee,{title:"Prompt记录"},{titleSide:i((()=>[s("span",U,"总数:"+f(m(H))+"条",1)])),_:1}),m(O)&&(null==(r=m(O))?void 0:r.length)?(t(),l("div",X,[c(k,{name:"fadeIn"},{default:i((()=>[s("div",{class:"button-con"},[s("button",{class:"btn btn-md btn-accent m-b-15",onClick:ce}," 清空历史 ")])])),_:1}),(t(!0),l(p,null,v(m(O),((e,a)=>(t(),b(k,{key:a,name:"fadeIn"},{default:i((()=>[s("div",q,[s("p",K,[0===a?(t(),b(ae,{key:0,style:{color:"#67c23a","font-size":"12px"}})):g("",!0),s("span",null,f(null==e?void 0:e.time),1)]),s("p",null,f(null==e?void 0:e.prompt),1),s("div",Z,[s("button",{class:"btn btn-sm btn-primary m-r-10",onClick:a=>{return t=null==e?void 0:e.prompt,void(w.value=t);var t}},[h(n.$slots,"icon",{},(()=>[c(de,{class:"m-r-4"})]),!0),_(" 选择 ")],8,E),s("button",{class:"btn btn-sm btn-accent m-r-10",onClick:a=>m(B)(null==e?void 0:e.prompt)},[h(n.$slots,"icon",{},(()=>[c(be,{class:"m-r-4"})]),!0),_(" 复制 ")],8,F),s("button",{class:"btn btn-sm btn-secondary",onClick:e=>(e=>{var a;const t=null!=(a=JSON.parse(C.get(y)))?a:[];t.splice(e,1),O.value=[...t],H.value=0,C.set(y,JSON.stringify(O.value))})(a)},[h(n.$slots,"icon",{},(()=>[c(fe,{class:"m-r-4"})]),!0),_(" 删除 ")],8,G)])])])),_:2},1024)))),128))])):(t(),l("div",Q,W))])}}}),[["__scopeId","data-v-86f7e8b1"]]);export{ee as default};
