import{j as l,r as a,R as u,a as p}from"./vendor.6b6fdebb.js";const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};f();var m="/assets/logo.ecc203fb.svg";const o=l.exports.jsx,d=l.exports.jsxs;function g(){const[c,r]=a.exports.useState(0);return o("div",{className:"App",children:d("header",{className:"App-header",children:[o("img",{src:m,className:"App-logo",alt:"logo"}),o("p",{children:"Hello, Inspirecloud"}),o("p",{children:d("button",{type:"button",onClick:()=>r(s=>s+1),children:["count is: ",c]})})]})})}u.render(o(p.StrictMode,{children:o(g,{})}),document.getElementById("root"));
