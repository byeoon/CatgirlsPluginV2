function F(e){window.enmity.plugins.registerPlugin(e)}var c;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(c||(c={}));var l;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(l||(l={}));var u;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(u||(u={}));var g;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(g||(g={}));var d;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(d||(d={}));var h;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(h||(h={})),window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token;const B=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const x=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl,o.ScrollView,o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio,o.FormRow,o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function I(e){return window.enmity.patcher.create(e)}var M="Catgirls",R="2.0.0",N="Sends images from nekos.life API. \u0E05\u2022\u03C9\u2022\u0E05",L=[{name:"beerpsi, maintained by byron"}],P="#00007d",D={name:M,version:R,description:N,authors:L,color:P};function f(e,n,t,m){window.enmity.clyde.sendReply(e,n,t,m)}const U=["tickle","slap","poke","pat","neko","meow","lizard","kiss","hug","fox_girl","feed","cuddle","ngif","kemonomimi","holo","smug","baka","woof","wallpaper","goose","gecg","avatar","waifu","lewd"];async function V(e){return new Promise((n,t)=>{x.getSize(e,(m,r)=>{n({width:m,height:r})},m=>{t(m)})})}const G=I("CatgirlsPlugin"),z={...D,name:"Catgirls",commands:[],onStart(){const e={id:"catgirls-command",name:"nekos",displayName:"nekos",description:"Sends an image from the nekos.life API.",displayDescription:"Sends an image from the nekos.life API.",type:l.Chat,inputType:u.BuiltInText,options:[{name:"type",displayName:"type",description:"Image type",displayDescription:"Image type",type:d.String,required:!0,choices:U.map(n=>({name:n,displayName:n,value:n}))}],execute:async function(n,t){var m,r,w,a;const i=n[0].value,v=(r=(m=n[1])==null?void 0:m.value)!=null?r:!0,s=await B.get(`https://nekos.life/api/v2/img/${i}`);if(s.ok)if(v){const{width:b,height:y}=await V(s.body.url),S={type:"rich",title:`random ${i} image`,image:{proxy_url:`https://external-content.duckduckgo.com/iu/?u=${s.body.url}`,url:s.body.url,width:b,height:y},footer:{text:"nekos.life"},color:"0x45f5f5"},k={type:1,components:[{type:2,style:5,label:"View image",url:s.body.url}]};f((w=t==null?void 0:t.channel.id)!=null?w:"0",{embeds:[S],components:[k]},"nekos.life","https://github.com/Nekos-life.png")}else return{content:s.body.url};else f((a=t==null?void 0:t.channel.id)!=null?a:"0",`An error happened making a request to https://nekos.life/api/v2/img/${i}`)}};this.commands.push(e)},onStop(){G.unpatchAll(),this.commands=[]}};F(z);