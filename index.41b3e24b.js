function e(e){return e.length>8?{id:parseInt(e[0],10),status:e[1]||e[7]||null,style:e[2],japanese:e[3],chineseHans:e[4],chineseHant:e[5],english:e[6],comment:e[9]}:{id:parseInt(e[0],10),status:e[1]||e[5]||null,style:e[2],japanese:e[3],english:e[4],comment:e[7]}}const t=(e,t)=>void 0===t?t=>[...t].fill(e.join()):t=>t.map(t=>`${e[0]}${t}${e[1]}`),n=(e,n,l,a)=>{let u=new Map([["H1",e=>(l("title",e),null)],["hImg",e=>(l("titleImage",[...e].fill(a.comment.replace("\n"," "))),null)],["H2",t`
## ${0}`],["H3",t`
### ${0}`],["H4",t`
#### ${0}`],["P",t`${0}`],["UL",t`- ${0}`],["OL",t`1. ${0}`],["Img",t`![image](${0})`],["Nt!",e=>e.map((t,n)=>{let l=t.match(/^(Note: |※)/);return(null!==l&&(t=t.slice(l[0].length)),n===e.length-1)?`**Note: ${t}**`:`**\u{203B}${t}**`})],["Pct!",e=>e.map((t,n)=>{let l=t.match(/^(Note: |※)/);return(null!==l&&(t=t.slice(l[0].length)),n===e.length-1)?`**Note: ${t}**`:`**\u{203B}${t}**`})],["Nt",e=>e.map((t,n)=>{let l=t.match(/^(Note: |※)/);return(null!==l&&(t=t.slice(l[0].length)),n===e.length-1)?`*Note: ${t}*`:`*\u{203B}${t}*`})],["Ct",e=>e.map((t,n)=>{let l=t.match(/^(Note: |※)/);return(null!==l&&(t=t.slice(l[0].length)),n===e.length-1)?`*Note: ${t}*`:`*\u{203B}${t}*`})],["Pct",e=>e.map((t,n)=>{let l=t.match(/^(Note: |※)/);return(null!==l&&(t=t.slice(l[0].length)),n===e.length-1)?`Note: ${t}`:`\u{203B}${t}`})],["Btn-",e=>e.map(e=>{let t=e.match(/\[(.+)\]\((.+)\)/);return null===t?`<Button name="${e}" disabled />`:`<Button name="${t[1]}" to="${t[2]}" disabled />`})],["Btn+",e=>e.map(e=>{let t=e.match(/\[(.+)\]\((.+)\)/);return null===t?`<Button name="${e}" />`:`<Button name="${t[1]}" to="${t[2]}" />`})],["wTbs",t`\n<ContentTabs>`],["wTbe",t`</ContentTabs>\n`],["tTb1",t`  <ContentTab
    name="${0}"
    tabId="__FIXME_TABID_GOES_HERE__"
    defaultChekcedPath={["/__FIXME__/PATH/NAME/HERE"]}
  >
`],["tTb2",t`
  </ContentTab>
  <ContentTab
    name="${0}"
    tabId="__FIXME_TABID_GOES_HERE__"
    defaultChekcedPath={["/__FIXME__/PATH/NAME/HERE"]}
  >
`],["tTb3",t`
  </ContentTab>
  <ContentTab
    name="${0}"
    tabId="__FIXME_TABID_GOES_HERE__"
    defaultChekcedPath={["/__FIXME__/PATH/NAME/HERE"]}
  >
`],["tTb4",t`  </ContentTab>
  <ContentTab
    name="${0}"
    tabId="__FIXME_TABID_GOES_HERE__"
    defaultChekcedPath={["/__FIXME__/PATH/NAME/HERE"]}
  >`]]).get(n);return u?u(e)??e:(console.warn(`style not found: ${n}`),e)},l=(e,t)=>n("chineseHans"in e?[e.japanese,e.chineseHans,e.chineseHant,e.english]:[e.japanese,e.english],e.style,t,e),a=(e,t)=>t.map(t=>`${e}: "${t}"`),u=(e,t)=>0===t.length?null:t[0].map((n,l)=>`${e}:
${t.map(e=>`  - "${e[l].replace('"','\\"')}"`).join("\n")}`),s=()=>{let e={slug:null,title:null,slugs:[],titleImage:null},t=t=>null!=e[t]&&e[t]instanceof Array&&0!==e[t].length,n=t=>e[t]instanceof Array&&e[t].length>0;return[()=>{let l=Object.keys(e).filter(e=>!["slug","title","slugs","titleImage"].includes(e)),s=[...["slug","title"].filter(t).map(t=>a(t,e[t])),...["slugs"].filter(n).map(t=>u(t,e[t])),...["titleImage"].filter(t).map(t=>a(t,e[t])),...l.map(t=>e[t]instanceof Array?0===e[t].length?null:e[t]instanceof Array?0===e[t][0].length?null:u(t,e[t]):a(t,e[t]):null).filter(Boolean)],r=s.reduce((e,t)=>e.map((e,n)=>[...e,t[n]]),[...s?.[0]].map(()=>[])).map(e=>e.join("\n"));return r.map(e=>`---
${e}
---`)},(t,n)=>{if("slugs"===t){e[t].push(n);return}e[t]=n}]},r=e=>{let[t,n]=s(),a=e.filter(e=>"削除"!==e.status&&"非表示"!==e.status).map(e=>l(e,n)),u=a.reduce((e,t)=>(t.map((t,n)=>e[n].push(t)),e),[...a[0]].map(()=>[])).map(e=>e.filter(Boolean).join("\n")),r=t(),i=u.map((e,t)=>void 0===r[t]?`${r[r.length-1]}
${e}`:`${r[t]}
${e}`);return i},i=t=>{let n=t.slice(5)// ヘッダー行以降を取得
.filter(e=>!function(e){let t=e.length>8?e.slice(1,6):e.slice(1,4);return t.every(e=>""===e)}(e))// 空行消す
.map(e),l=r(n);return l};(()=>{let e=document.getElementById("run"),t=document.getElementById("inputtext"),n=document.getElementById("result");e.addEventListener("click",()=>{let e=t.value;n.value=i(/**
 * @see https://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm
 */function(e,t=","){// Create a regular expression to parse the CSV values.
let n=RegExp("(\\"+t+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+t+"\\r\\n]*))","gi"),l=[[]],a=null;for(;a=n.exec(e);){var u=a[1];if(u.length&&u!=t&&l.push([]),a[2])var s=a[2].replace(RegExp('""',"g"),'"');else var s=a[3];l[l.length-1].push(s)}return l}(e)).join("\n\n\n----------------------------\n\n\n")})})();//# sourceMappingURL=index.41b3e24b.js.map

//# sourceMappingURL=index.41b3e24b.js.map
