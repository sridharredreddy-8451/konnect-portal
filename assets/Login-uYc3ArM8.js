import{a as D,u as H,e as v,s as K,f as M,_ as B}from"./index-r-pUqtUt.js";import{A as R}from"./AuthCard-e5J1fNeE.js";import{d as I,a as E,c as $,af as x,o as N,f as r,i as S,j as y,y as j,k as _,t as w,l as T,x as C,n as b,v as k,q}from"./vue-blgNmdmJ.js";import{u as z,c as G}from"./useMachine-9WzNrxbV.js";import"./kongponents-T_dz3z7y.js";const J=I({name:"Login",components:{AuthCard:R},setup(){const e=E(""),{portalApiV2:u}=D(),d=H().state.helpText,A=v(),{developerSession:s,authClientConfig:p}=K(A),g=$(()=>p.value.basicAuthEnabled),{initialize:m}=M(),i=x(),c=E(""),h=()=>{i.push({path:"/forgot-password"})},U=(t={})=>{const{email:n,resetToken:o}=t;i.push({path:"/reset-password",query:{email:n,token:o}})},{state:L,send:f}=z(G({id:"loginMachine",predictableActionArguments:!0,initial:"idle",states:{idle:{on:{KAUTH_SUCCESS:"user_fetch"}},success_login:{type:"final"},user_fetch:{on:{USER_FETCH_SUCCESS:"success_login",USER_FETCH_FAIL:"error"}},error:{on:{KAUTH_SUCCESS:"user_fetch"}}}})),F=(t,n)=>{var a;const o=t.message&&t.message[0]&&((a=t.message[0])==null?void 0:a.constraints)||t.message||n.message;return Array.isArray(o)?o.join(". "):o},P=async()=>{f("KAUTH_SUCCESS");let t,n;try{[t,n]=await Promise.all([u.value.service.developerApi.getDeveloperMe(),u.value.service.portalApi.getPortalContext()])}catch(l){f("USER_FETCH_FAIL");const{data:V}=l.response;if(l.response.status===401){e.value=d.login.unauthenticated;return}e.value=F(V,l)}f("USER_FETCH_SUCCESS");const{setPortalData:o}=v();o({featureSet:n.data.feature_set}),s.value.saveData({...s.value.data,developer:t.data});let a="/";s.value.data.to&&(a=s.value.data.to);try{await m()}catch{console.error("Unable to update LD context")}window.location.href=a};return N(()=>{c.value=window.location.origin+"/login"}),{isBasicAuthEnabled:g,currentState:L,errorMessage:e,onUserClickForgotPassword:h,onLoginSuccess:P,onVerifyEmailSuccess:U,session:s,authClientConfig:p,redirectTo:c,helpText:d}}}),O={key:1,id:"kong-auth-login-wrapper"},Q={id:"sign-up-encouragement-message","data-testid":"sign-up-encouragement-message",class:"mt-6 text-center"},W={class:"color-text_colors-primary"};function X(e,u,d,A,s,p){const g=r("KAlert"),m=r("kong-auth-login"),i=r("KIcon"),c=r("router-link"),h=r("AuthCard");return["success_login","user_fetch"].includes(e.currentState.value)?k("",!0):(S(),y(h,{key:0},j({default:_(()=>[e.currentState.matches("error")?(S(),y(g,{key:0,"alert-message":e.errorMessage,appearance:"danger",class:"justify-content-center my-3","data-testid":"unauthenticated-message"},null,8,["alert-message"])):k("",!0),["idle","error"].includes(e.currentState.value)&&e.redirectTo?(S(),q("div",O,[C(m,{"wrapper-id":"kong-auth-login-wrapper","show-forgot-password-link":"","register-success-text":e.helpText.registration.successText,"idp-login-return-to":e.redirectTo,"basic-auth-login-enabled":e.authClientConfig.basicAuthEnabled,"idp-login-enabled":e.authClientConfig.oidcAuthEnabled,onLoginSuccess:e.onLoginSuccess,onClickForgotPasswordLink:e.onUserClickForgotPassword,onVerifyEmailSuccess:e.onVerifyEmailSuccess},null,8,["register-success-text","idp-login-return-to","basic-auth-login-enabled","idp-login-enabled","onLoginSuccess","onClickForgotPasswordLink","onVerifyEmailSuccess"])])):k("",!0)]),_:2},[e.isBasicAuthEnabled&&["idle","error"].includes(e.currentState.value)?{name:"below-card",fn:_(()=>[b("span",Q,[b("p",W,[T(w(e.helpText.login.missingAccount)+" ",1),C(c,{to:{name:"registration"}},{default:_(()=>[T(w(e.helpText.login.signUp)+" ",1),C(i,{color:"var(--text_colors-link)",icon:"forward"})]),_:1})])])]),key:"0"}:void 0]),1024))}const se=B(J,[["render",X]]);export{se as default};
