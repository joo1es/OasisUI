import{S as D,i as h,s as k,w as m,x as f,y as o,q as p,o as l,B as u,k as q,m as B,g as i,d as _,t as d,h as I}from"../../../../../chunks/index-f9b2f9b6.js";import{D as C,S as b,a as S}from"../../../../../chunks/index-b02300a5.js";import"../../../../../chunks/index-d4e7790c.js";var j=`### \u57FA\u7840\u7528\u6CD5\r
\r
\`\`\`svelte\r
<Space>\r
    <SpaceItem>1</SpaceItem>\r
    <SpaceItem>2</SpaceItem>\r
    <SpaceItem>3</SpaceItem>\r
</Space>\r
\`\`\``;function z(c){let e;return{c(){e=d("1")},l(s){e=I(s,"1")},m(s,t){i(s,e,t)},d(s){s&&_(e)}}}function A(c){let e;return{c(){e=d("2")},l(s){e=I(s,"2")},m(s,t){i(s,e,t)},d(s){s&&_(e)}}}function E(c){let e;return{c(){e=d("3")},l(s){e=I(s,"3")},m(s,t){i(s,e,t)},d(s){s&&_(e)}}}function F(c){let e,s,t,n,$,g;return e=new S({props:{$$slots:{default:[z]},$$scope:{ctx:c}}}),t=new S({props:{$$slots:{default:[A]},$$scope:{ctx:c}}}),$=new S({props:{$$slots:{default:[E]},$$scope:{ctx:c}}}),{c(){m(e.$$.fragment),s=q(),m(t.$$.fragment),n=q(),m($.$$.fragment)},l(a){f(e.$$.fragment,a),s=B(a),f(t.$$.fragment,a),n=B(a),f($.$$.fragment,a)},m(a,r){o(e,a,r),i(a,s,r),o(t,a,r),i(a,n,r),o($,a,r),g=!0},p(a,r){const w={};r&1&&(w.$$scope={dirty:r,ctx:a}),e.$set(w);const x={};r&1&&(x.$$scope={dirty:r,ctx:a}),t.$set(x);const v={};r&1&&(v.$$scope={dirty:r,ctx:a}),$.$set(v)},i(a){g||(p(e.$$.fragment,a),p(t.$$.fragment,a),p($.$$.fragment,a),g=!0)},o(a){l(e.$$.fragment,a),l(t.$$.fragment,a),l($.$$.fragment,a),g=!1},d(a){u(e,a),a&&_(s),u(t,a),a&&_(n),u($,a)}}}function G(c){let e,s;return e=new b({props:{$$slots:{default:[F]},$$scope:{ctx:c}}}),{c(){m(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,n){o(e,t,n),s=!0},p(t,n){const $={};n&1&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){u(e,t)}}}function H(c){let e,s;return e=new C({props:{md:j,$$slots:{default:[G]},$$scope:{ctx:c}}}),{c(){m(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,n){o(e,t,n),s=!0},p(t,[n]){const $={};n&1&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){u(e,t)}}}class M extends D{constructor(e){super(),h(this,e,null,H,k,{})}}export{M as default};
