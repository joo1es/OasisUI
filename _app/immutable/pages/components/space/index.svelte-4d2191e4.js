import{S as j,i as C,s as q,F as A,w as _,k as d,x as p,m as w,y as g,g as S,G as B,H as E,I as h,q as u,o as c,B as $,d as b}from"../../../chunks/index-f9b2f9b6.js";import{E as I,g as y,h as P}from"../../../chunks/index-b02300a5.js";import z from"./demo/basic/index.svelte-1841c734.js";import F from"./demo/vertical/index.svelte-92b9e242.js";import"../../../chunks/index-d4e7790c.js";function G(m){let t,s,r,a,n;t=new I({props:{md:m[1],plugins:[y,P]}});const l=m[6].default,i=A(l,m,m[5],null);return a=new I({props:{md:m[0],plugins:[y,P]}}),{c(){_(t.$$.fragment),s=d(),i&&i.c(),r=d(),_(a.$$.fragment)},l(e){p(t.$$.fragment,e),s=w(e),i&&i.l(e),r=w(e),p(a.$$.fragment,e)},m(e,f){g(t,e,f),S(e,s,f),i&&i.m(e,f),S(e,r,f),g(a,e,f),n=!0},p(e,[f]){const o={};f&2&&(o.md=e[1]),t.$set(o),i&&i.p&&(!n||f&32)&&B(i,l,e,e[5],n?h(l,e[5],f,null):E(e[5]),null);const k={};f&1&&(k.md=e[0]),a.$set(k)},i(e){n||(u(t.$$.fragment,e),u(i,e),u(a.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),c(i,e),c(a.$$.fragment,e),n=!1},d(e){$(t,e),e&&b(s),i&&i.d(e),e&&b(r),$(a,e)}}}function H(m,t,s){let r,{$$slots:a={},$$scope:n}=t,{name:l}=t,{description:i}=t,{imports:e}=t,{api:f=""}=t;return m.$$set=o=>{"name"in o&&s(2,l=o.name),"description"in o&&s(3,i=o.description),"imports"in o&&s(4,e=o.imports),"api"in o&&s(0,f=o.api),"$$scope"in o&&s(5,n=o.$$scope)},m.$$.update=()=>{m.$$.dirty&28&&s(1,r=`
# ${l}

### \u4ECB\u7ECD

${i}

### \u5F15\u5165

\`\`\`js
import { ${e.join(", ")} } from '@oasis-end/ui'
\`\`\`
    `)},[f,r,l,i,e,n,a]}class M extends j{constructor(t){super(),C(this,t,H,G,q,{name:2,description:3,imports:4,api:0})}}var V=`## API\r
\r
### Props\r
\r
| \u53C2\u6570      | \u8BF4\u660E           | \u7C7B\u578B                                                                | \u9ED8\u8BA4\u503C |\r
| --------- | -------------- | ------------------------------------------------------------------- | ------ |\r
| size      | \u95F4\u8DDD\u5927\u5C0F       | _string \\| number \\| [string \\| number, string \\| number]_          | 10     |\r
| align     | \u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F   | _'start' \\| 'end' \\| 'center' \\| 'baseline' \\| 'stretch'_           | -      |\r
| justify   | \u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F | _'start' \\| 'end' \\| 'center' \\| 'space-around' \\| 'space-between'_ | -      |\r
| vertical  | \u662F\u5426\u5782\u76F4       | _boolean_                                                           | false  |\r
| wrap      | \u662F\u5426\u6362\u884C       | _boolean_                                                           | true   |\r
| itemStyle | \u6BCF\u9879\u7684\u6837\u5F0F     | _SpaceItemStyle_                                                    | {}     |\r
| itemClass | \u6BCF\u9879\u7684\u7C7B       | _SpaceItemClass_                                                    | {}     |`;function v(m){let t,s,r,a;return t=new z({}),r=new F({}),{c(){_(t.$$.fragment),s=d(),_(r.$$.fragment)},l(n){p(t.$$.fragment,n),s=w(n),p(r.$$.fragment,n)},m(n,l){g(t,n,l),S(n,s,l),g(r,n,l),a=!0},i(n){a||(u(t.$$.fragment,n),u(r.$$.fragment,n),a=!0)},o(n){c(t.$$.fragment,n),c(r.$$.fragment,n),a=!1},d(n){$(t,n),n&&b(s),$(r,n)}}}function D(m){let t,s;return t=new M({props:{name:"Space \u7A7A\u95F4",description:"\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u9700\u8981\u4E00\u4E2A\u79C1\u4EBA\u7A7A\u95F4",imports:["Space","SpaceItem"],api:V,$$slots:{default:[v]},$$scope:{ctx:m}}}),{c(){_(t.$$.fragment)},l(r){p(t.$$.fragment,r)},m(r,a){g(t,r,a),s=!0},p(r,[a]){const n={};a&1&&(n.$$scope={dirty:a,ctx:r}),t.$set(n)},i(r){s||(u(t.$$.fragment,r),s=!0)},o(r){c(t.$$.fragment,r),s=!1},d(r){$(t,r)}}}class Q extends j{constructor(t){super(),C(this,t,null,D,q,{})}}export{Q as default};
