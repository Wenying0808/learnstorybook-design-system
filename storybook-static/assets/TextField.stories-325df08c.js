import{j as R,a as o}from"./emotion-react-jsx-runtime.browser.esm-62f61c29.js";import"./index-8db94870.js";import"./jsx-runtime-91a467a5.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./_commonjsHelpers-042e6b4d.js";const h=({label:b,id:a,onChange:x,value:g,isDisabled:l=!1,isRequired:q=!1,placeholder:D,error:F})=>R("div",{children:[o("label",{htmlFor:a,children:b}),o("input",{id:a,type:"text",value:g,onChange:x,disabled:l,required:q,placeholder:D,className:`${l?"disabled":""} ${F?"errored":""}`})]}),T=h;h.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isRequired:{defaultValue:{value:"false",computed:!1},required:!1}}};const j={title:"Text Field",component:T},e={args:{placeholder:"Placeholder",isRequired:!1,isDisabled:!1,error:!1}},r={args:{placeholder:"Placeholder",isRequired:!1,isDisabled:!0,error:!1}},s={args:{value:"Value",isRequired:!0,isDisabled:!1,error:!0}};var d,i,t;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    isRequired: false,
    isDisabled: false,
    error: false
  }
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var c,n,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    isRequired: false,
    isDisabled: true,
    error: false
  }
}`,...(u=(n=r.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var p,m,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 'Value',
    isRequired: true,
    isDisabled: false,
    error: true
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const E=["Basic","Disabled","Errored"];export{e as Basic,r as Disabled,s as Errored,E as __namedExportsOrder,j as default};
