import{_ as e,b as a}from"./AppHeader.41b86523.js";import{_ as l}from"./FixMenu.vue_vue_type_style_index_0_scoped_8a5ecf18_lang.9c1025d6.js";import t from"./AppBanner.700ba76e.js";import s from"./TemplateDetail.90bd7f26.js";import{u as n}from"./pinia.7ac5f2a7.js";import{e as o,ac as u,a as c,d as i,f as r,F as d,G as p,H as v,I as m,W as b,u as _,Y as f,Z as y,_ as g,X as j,U as k,ae as x,i as h,a9 as C,a4 as w,L as A,$ as I}from"./element-plus.3e7898c2.js";import{u as M}from"./index.4fe012d4.js";import{_ as T}from"./entry.fcefc495.js";import"./plus.bb77e419.js";import"./shop.8f25176c.js";import"./vuedraggable.5801950c.js";import"./dayjs.3bf4ac2a.js";import"./sortablejs.c8011fea.js";import"./uuid.d56aad75.js";import"./lodash.93025024.js";/* empty css                                                                  *//* empty css                                                                  */import"./Icon.f96b4a01.js";import"./store.e5acb8cd.js";import"./sYw7uX71Xe.38399cea.js";const U={class:"template-page page"},F={class:"content"},S={class:"banner-con"},V={class:"control-blur-btns"},X={key:0,class:"shadow-xl card card-compact bg-base-100"},z={class:"card-body"},E={class:"card-title"},H={class:"justify-end card-actions"},K=["onClick"],Y={class:"demo-pagination-block"},B={key:0,class:"btn-group"},D=["onClick"],G={key:0,class:"btn"},L=["value","onKeyup"],N=T(o({__name:"sfw",setup(o){n().vueApp.provide(u,{prefix:Math.floor(1e3*Math.random()),current:0});const T=c(!0),N=c(!1),R=c(1),W=c(36),Z=c(0),$=c(0),q=c(!1),J=c([]),O=c(null),P=i((()=>Array.from({length:Z.value},((e,a)=>a)).slice(R.value>3?R.value-3:R.value,R.value+3))),Q=async()=>{if(N.value)return;N.value=!0;const{TemplateApi:e}=M(),a=await e.getTemplates({pageIndex:R.value,pageSize:W.value});N.value=!1,J.value=null==a?void 0:a.templates,$.value=a.total,Z.value=Math.ceil($.value/W.value)};r((()=>{Q()}));const ee=e=>{R.value=e,Q()},ae=()=>{R.value<=1||(R.value=R.value-1,Q())},le=()=>{R.value=1,Q()},te=()=>{R.value=Z.value,Q()},se=e=>{ee(Number(e.target.value))},ne=()=>{R.value>=Z.value||(R.value=R.value+1,Q())};return(n,o)=>{const u=e,c=l,i=t,r=a,M=I.ElCol,N=I.ElRow,W=s,$=C("animate-css");return d(),p("div",U,[v(c,null,{default:m((()=>[v(u)])),_:1}),b("div",F,[b("div",S,[v(i,{placeholder:"请输入关键标签"})]),v(c,null,{default:m((()=>[w((d(),p("div",V,[b("button",{class:j(["btn btn-sm m-r-10",[_(T)?"btn-accent":"btn-secondary-30"]]),onClick:o[0]||(o[0]=()=>T.value=!0)}," 模糊 ",2),b("button",{class:j(["btn btn-sm",[_(T)?"btn-secondary-30":"btn-accent"]]),onClick:o[1]||(o[1]=()=>T.value=!1)}," 原图 ",2)])),[[$,{direction:"modifySlideInUp"}]])])),_:1}),v(c,null,{default:m((()=>[_(J)&&_(J).length?(d(),A(N,{key:0,class:"list-con",gutter:20},{default:m((()=>[(d(!0),p(f,null,y(_(J),((e,a)=>w((d(),A(M,{key:a,xs:24,sm:12,md:6,lg:4,xl:4},{default:m((()=>[e?(d(),p("div",X,[b("figure",null,[v(r,{class:j(["image",{"image-blur":!!_(T)}]),src:null==e?void 0:e.minify_preview,loading:"lazy"},null,8,["src","class"])]),b("div",z,[b("h2",E,k(null==e?void 0:e.name),1),b("p",null,k(null==e?void 0:e.author),1),b("div",H,[b("button",{class:"btn btn-accent btn-sm",onClick:a=>(e=>{O.value={...e},q.value=!0})(e)}," 模板详情 ",8,K)])])])):g("",!0)])),_:2},1024)),[[$,{direction:"modifySlideInUp",delay:30*a}]]))),128))])),_:1})):g("",!0)])),_:1}),b("div",Y,[_(Z)&&_(Z)>0?(d(),p("div",B,[b("button",{class:"btn btn-outline",onClick:le},"首页"),b("button",{class:"btn btn-outline",onClick:ae},"上一页"),(d(!0),p(f,null,y(_(P),((e,a)=>(d(),p("button",{key:a,class:j(["btn",{"btn-active":e===_(R)}]),onClick:a=>ee(e)},k(e),11,D)))),128)),_(R)<_(Z)-3?(d(),p("button",G,"...")):g("",!0),b("button",{class:j(["btn",{"btn-active":_(Z)===_(R)}]),onClick:o[2]||(o[2]=e=>ee(_(Z)))},k(_(Z)),3),b("button",{class:"btn btn-outline",onClick:ne},"下一页"),b("button",{class:"btn btn-outline",onClick:te},"尾页"),b("input",{value:_(R),type:"text",placeholder:"go",class:"w-24 max-w-xs input input-bordered",onKeyup:x(se,["enter"])},null,40,L)])):g("",!0)])]),v(W,{modelValue:_(q),"onUpdate:modelValue":o[3]||(o[3]=e=>h(q)?q.value=e:null),"current-template":_(O)},null,8,["modelValue","current-template"])])}}}),[["__scopeId","data-v-9611a298"]]);export{N as default};
