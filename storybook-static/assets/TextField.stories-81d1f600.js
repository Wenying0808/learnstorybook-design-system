import{a as v,j as d}from"./emotion-react-jsx-runtime.browser.esm-9da0828f.js";import"./index-76fb7be0.js";import"./jsx-runtime-9dc53467.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4926cc1b.js";import"./_commonjsHelpers-de833af9.js";const D=({label:x,id:l,onChange:R,value:F,isDisabled:o=!1,isRequired:P=!1,placeholder:T,error:V})=>v("div",{children:[d("label",{htmlFor:l,children:x}),d("input",{id:l,type:"text",value:F,onChange:R,disabled:o,required:P,placeholder:T,className:`${o?"disabled":""} ${V?"errored":""}`})]}),_=D;D.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isRequired:{defaultValue:{value:"false",computed:!1},required:!1}}};const B={title:"Text Field",component:_},e={args:{placeholder:"Placeholder",isRequired:!1,isDisabled:!1,error:!1}},r={args:{placeholder:"Placeholder",isRequired:!1,isDisabled:!0,error:!1}},s={args:{value:"Value",isRequired:!1,isDisabled:!0,error:!1}},a={args:{placeholder:"Placeholder",isRequired:!0,isDisabled:!1,error:!0}};var i,t,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    isRequired: false,
    isDisabled: false,
    error: false
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var n,u,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    isRequired: false,
    isDisabled: true,
    error: false
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,f,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 'Value',
    isRequired: false,
    isDisabled: true,
    error: false
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,g,q;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    isRequired: true,
    isDisabled: false,
    error: true
  }
}`,...(q=(g=a.parameters)==null?void 0:g.docs)==null?void 0:q.source}}};const N=["Basic","Disabled","DisabledWithValue","Errored"];export{e as Basic,r as Disabled,s as DisabledWithValue,a as Errored,N as __namedExportsOrder,B as default};
