import{S as D,i as h,s as k,w as m,x as o,y as f,q as p,o as l,B as u,k as H,m as q,g as i,d as _,t as d,h as I}from"../../../../../chunks/index-f9b2f9b6.js";import{D as B,S as C,a as S}from"../../../../../chunks/index-b02300a5.js";import"../../../../../chunks/index-d4e7790c.js";var V=`### \u5782\u76F4\r
\r
\`\`\`svelte\r
<Space vertical>\r
    <SpaceItem>Hello</SpaceItem>\r
    <SpaceItem>Hello</SpaceItem>\r
    <SpaceItem>Hello</SpaceItem>\r
</Space>\r
\`\`\``;function b(c){let e;return{c(){e=d("1")},l(s){e=I(s,"1")},m(s,t){i(s,e,t)},d(s){s&&_(e)}}}function j(c){let e;return{c(){e=d("2")},l(s){e=I(s,"2")},m(s,t){i(s,e,t)},d(s){s&&_(e)}}}function z(c){let e;return{c(){e=d("3")},l(s){e=I(s,"3")},m(s,t){i(s,e,t)},d(s){s&&_(e)}}}function A(c){let e,s,t,n,$,g;return e=new S({props:{$$slots:{default:[b]},$$scope:{ctx:c}}}),t=new S({props:{$$slots:{default:[j]},$$scope:{ctx:c}}}),$=new S({props:{$$slots:{default:[z]},$$scope:{ctx:c}}}),{c(){m(e.$$.fragment),s=H(),m(t.$$.fragment),n=H(),m($.$$.fragment)},l(a){o(e.$$.fragment,a),s=q(a),o(t.$$.fragment,a),n=q(a),o($.$$.fragment,a)},m(a,r){f(e,a,r),i(a,s,r),f(t,a,r),i(a,n,r),f($,a,r),g=!0},p(a,r){const w={};r&1&&(w.$$scope={dirty:r,ctx:a}),e.$set(w);const v={};r&1&&(v.$$scope={dirty:r,ctx:a}),t.$set(v);const x={};r&1&&(x.$$scope={dirty:r,ctx:a}),$.$set(x)},i(a){g||(p(e.$$.fragment,a),p(t.$$.fragment,a),p($.$$.fragment,a),g=!0)},o(a){l(e.$$.fragment,a),l(t.$$.fragment,a),l($.$$.fragment,a),g=!1},d(a){u(e,a),a&&_(s),u(t,a),a&&_(n),u($,a)}}}function E(c){let e,s;return e=new C({props:{$$slots:{default:[A]},$$scope:{ctx:c}}}),{c(){m(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){f(e,t,n),s=!0},p(t,n){const $={};n&1&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){u(e,t)}}}function F(c){let e,s;return e=new B({props:{md:V,$$slots:{default:[E]},$$scope:{ctx:c}}}),{c(){m(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){f(e,t,n),s=!0},p(t,[n]){const $={};n&1&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){u(e,t)}}}class L extends D{constructor(e){super(),h(this,e,null,F,k,{})}}export{L as default};
