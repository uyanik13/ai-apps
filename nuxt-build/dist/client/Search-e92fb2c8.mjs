import{_ as p,m as x,c as h,a as l,v as y,D as v,p as a,q as d,f as u,h as w,w as f,T as _,s as b,u as I,o,F as k,r as R,y as V,A as g,t as n,n as q}from"./bootstrap-24f82753.mjs";const S={components:{},data(){return{query:"",searchResultsVisible:!1,searchResults:[],highlightedIndex:0}},computed:{},watch:{},created(){},methods:{reset(){this.query="",this.highlightedIndex=0},softReset(){this.searchResultsVisible=!0,this.highlightedIndex=0},focusSearch(r){r.key==="/"&&this.$refs.search.focus()},performSearch(){if(this.query.length<2)return!1;this.$axios.get(`/api/search-name/${this.query.toLowerCase()}`).then(r=>{this.searchResults=r.data.filter(e=>e.name.toLowerCase().includes(this.query.toLowerCase()))})},highlightPrevious(){this.highlightedIndex>0&&(this.highlightedIndex=this.highlightedIndex-1,this.scrollIntoView())},highlightNext(){this.highlightedIndex<this.searchResults.length-1&&(this.highlightedIndex=this.highlightedIndex+1,this.scrollIntoView())},scrollIntoView(){this.$refs.results.children[this.highlightedIndex].scrollIntoView({block:"nearest"})},gotoLink(){this.searchResults[this.highlightedIndex]&&(window.location=this.searchResults[this.highlightedIndex].item.slug)}}},C=r=>(b("data-v-2edafc0c"),r=r(),I(),r),N={class:"relative"},L={class:"relative w-full"},B=["placeholder"],z=C(()=>l("div",{class:"absolute top-0 ml-3"},[l("svg",{fill:"currentColor",class:"w-5 h-5 text-gray-500 mt-4",viewBox:"0 0 24 24",width:"24",height:"24"},[l("path",{class:"heroicon-ui",d:"M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})])],-1)),M={key:0,class:"absolute left-0 right-0 z-10 mt-2 mb-4 overflow-hidden overflow-y-auto text-left normal-case bg-white border rounded-lg shadow w-108",style:{"max-height":"32rem"}},P={ref:"results",class:"flex flex-col"},T={class:"flex"},D=["src"],F=["src"],K={class:"grid"},j={class:"mx-1 my-1 text-sm font-normal"},A={class:"flex mx-2"},E={class:"mx-1 text-sm text-gray-800"},U={key:0,class:"w-full p-4 font-normal border-b shadow-lg cursor-pointer"},G={class:"my-0"},H=g("' ");function J(r,e,O,Q,t,i){const m=x("nuxt-link");return o(),h("div",N,[l("div",L,[y(l("input",{ref:"search","onUpdate:modelValue":e[0]||(e[0]=s=>t.query=s),type:"text",placeholder:r.$t("Search a name"),class:"z-30 w-full lg:px-10 py-3 lg:py-4 pl-10 text-sm border-gray-400 rounded-lg border-1 focus:outline-none focus:ring-1 focus:indigo-500",onBlur:e[1]||(e[1]=s=>t.searchResultsVisible=!1),onFocus:e[2]||(e[2]=s=>t.searchResultsVisible=!0),onKeydown:[e[3]||(e[3]=a(s=>t.searchResultsVisible=!1,["esc"])),e[6]||(e[6]=a(d((...s)=>i.highlightPrevious&&i.highlightPrevious(...s),["prevent"]),["up"])),e[7]||(e[7]=a(d((...s)=>i.highlightNext&&i.highlightNext(...s),["prevent"]),["down"])),e[8]||(e[8]=a((...s)=>i.gotoLink&&i.gotoLink(...s),["enter"]))],onInput:e[4]||(e[4]=(...s)=>i.softReset&&i.softReset(...s)),onKeyup:e[5]||(e[5]=(...s)=>i.performSearch&&i.performSearch(...s))},null,40,B),[[v,t.query]]),z,t.query.length>0?(o(),h("div",{key:0,class:"absolute top-0 right-0 mr-5 text-gray-600 cursor-pointer text-5 hover:text-gray-800",style:{top:"2px"},onClick:e[9]||(e[9]=(...s)=>i.reset&&i.reset(...s))}," \xD7 ")):u("",!0)]),w(_,{name:"fade"},{default:f(()=>[t.query.length>0&&t.searchResultsVisible?(o(),h("div",M,[l("div",P,[(o(!0),h(k,null,R(t.searchResults,(s,c)=>(o(),V(m,{key:c,to:r.localePath({name:"name-slug",params:{slug:s.slug}}),class:q(["p-4 text-xl border-b border-gray-400 cursor-pointer hover:bg-blue-100",{"bg-blue-100":c===t.highlightedIndex}]),onMousedown:e[10]||(e[10]=d(W=>t.searchResultsVisible=!0,["prevent"]))},{default:f(()=>[g(n(s.title)+" ",1),l("div",T,[s.image?(o(),h("img",{key:0,class:"w-16 lg:w-16 h-16 mx-1 rounded-full",src:s.image},null,8,D)):(o(),h("img",{key:1,class:"w-24 h-16 mx-1 rounded-full",src:"~/assets/images/baby-images/boy/e-11.jpg"},null,8,F)),l("div",K,[l("span",j,n(s.name),1),l("span",A,[l("p",E,n(s.mean[r.$i18n.locale]),1)])])])]),_:2},1032,["to","class"]))),128)),t.searchResults.length===0?(o(),h("div",U,[l("p",G,[g(n(r.$t("No results for "))+"'",1),l("strong",null,n(t.query),1),H])])):u("",!0)],512)])):u("",!0)]),_:1})])}var Y=p(S,[["render",J],["__scopeId","data-v-2edafc0c"]]);export{Y as default};
