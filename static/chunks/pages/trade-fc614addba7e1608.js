(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{6335:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trade",function(){return c(376)}])},376:function(a,b,c){"use strict";c.r(b);var d=c(7568),e=c(1799),f=c(9396),g=c(4051),h=c.n(g),i=c(5893),j=c(8019),k=c(3678),l=c(3609),m=c(7294),n=new Headers;n.append("content-type","application/json");var o=JSON.stringify({query:"{\n  tokens(first: 5) {\n    id\n    tokenId\n    owner \n    fractionContract\n    originalContract \n    fractionCount\n    tokenURI\n  }\n}",variables:{}}),p=function(a){var b,c=a.nftData,g=(0,m.useState)(void 0===c?{}:c),j=g[0],k=g[1];return(b=(0,d.Z)(h().mark(function a(){var b,c;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(j.nftImage.replace("ipfs://","https://ipfs.io/ipfs/"));case 2:return b=a.sent,a.next=5,b.json();case 5:c=a.sent,k((0,f.Z)((0,e.Z)({},j),{nftImage:c.image.replace("ipfs://","https://ipfs.io/ipfs/")}));case 7:case"end":return a.stop()}},a)})),function(){return b.apply(this,arguments)})(),(0,i.jsxs)("div",{className:"rounded-lg shadow-lg bg-white max-w-sm",children:[(0,i.jsx)("a",{href:"#!",children:(0,i.jsx)("img",{className:"rounded-t-lg",src:j.nftImage,alt:""})}),(0,i.jsxs)("div",{className:"p-6",children:[(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)("p",{className:"text-emerald-700 text-sm font-semibold mb-2",children:"Original Address: "}),(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsxs)("a",{className:"text-sm text-emerald-900 hover:text-emerald-700",href:"https://etherscan.io/address/".concat(j.originalAddress),rel:"noreferrer",target:"_blank",children:[j.originalAddress.substring(0,6)+"..."+j.originalAddress.substring(j.originalAddress.length-6,j.originalAddress.length)," "]})]}),(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)("p",{className:"text-emerald-700 text-sm font-semibold mb-2",children:"Fraction Address: "}),(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsxs)("a",{className:"text-sm text-emerald-900 hover:text-emerald-700",href:"https://rinkeby.etherscan.io//address/".concat(j.fractionAddress),rel:"noreferrer",target:"_blank",children:[j.fractionAddress.substring(0,6)+"..."+j.fractionAddress.substring(j.fractionAddress.length-6,j.fractionAddress.length),"  "]})]}),(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)("p",{className:"text-emerald-700 text-sm font-semibold mb-2",children:"Token Id:"}),(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsx)("p",{className:"text-sm text-emerald-900",children:j.tokenID})]}),(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)("p",{className:"text-emerald-700 text-sm font-semibold mb-2",children:"Fraction Count:"}),(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsx)("p",{className:"text-sm text-emerald-900",children:j.fractionCount})]}),(0,i.jsx)("div",{className:"relative grid place-items-center h-full mb-12 mt-16",children:(0,i.jsx)("button",{onClick:function(){return window.open(j.openSeaLink,"_blank","noopener,noreferrer")},type:"button",className:"absolute font-sans px-12 py-4 bg-stiletto-500 text-white font-semibold text-l uppercase rounded",children:"Trade On Opensea"})})]})]},j.originalAddress+"-"+j.tokenID)},q=function(){var a,b=(0,m.useState)([]),c=b[0],e=b[1],f=(a=(0,d.Z)(h().mark(function a(){var b,c,f;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:var g;return b=[],a.next=3,fetch("https://api.thegraph.com/subgraphs/name/cpp-phoenix/scatter",{method:"POST",headers:n,body:g=o,redirect:"follow"});case 3:if(200!==(c=a.sent).status){a.next=10;break}return a.next=7,c.json();case 7:return f=a.sent,a.next=10,f.data.tokens.map(function(){var a=(0,d.Z)(h().mark(function a(c){return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:"0"!==c.fractionCount&&b.push({nftImage:c.tokenURI,originalAddress:c.originalContract,fractionAddress:c.fractionContract,tokenID:c.tokenId,fractionCount:c.fractionCount,openSeaLink:l.i9+c.fractionContract+"/"+c.tokenId,id:c.id});case 1:case"end":return a.stop()}},a)}));return function(b){return a.apply(this,arguments)}}());case 10:e(b);case 11:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)});return(0,m.useEffect)(function(){f()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.Z,{pageLoad:"Trade"}),(0,i.jsxs)("div",{className:"bg-gin-50",children:[(0,i.jsx)("div",{className:"fixed w-full h-fit pt-32 bg-gin-50 z-10",children:(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)("div",{className:"mb-3 w-6/12",children:(0,i.jsxs)("div",{className:"input-group relative flex items-stretch w-full mb-4 ",children:[(0,i.jsx)("input",{type:"search",className:"form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-900 focus:outline-none",placeholder:"Search","aria-label":"Search","aria-describedby":"button-addon3"}),(0,i.jsx)("button",{className:"btn text-white inline-block px-6 py-2 bg-emerald-900 text-white font-medium text-xs uppercase rounded hover:bg-emerald-700",type:"button",id:"button-addon3",children:"Search"})]})})})}),(0,i.jsx)("div",{className:"pt-36 min-h-screen z-0",children:(0,i.jsx)("div",{className:"p-20 z-0",children:(0,i.jsxs)("div",{className:"flex flex-rows",children:[(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsx)("div",{className:"grid grid-cols-3 gap-12",children:c.map(function(a){return(0,i.jsx)(p,{nftData:a},a.id)})}),(0,i.jsx)("div",{className:"flex-1"})]})})}),(0,i.jsx)(k.FooterData,{})]})]})};b.default=q}},function(a){a.O(0,[651,325,774,888,179],function(){var b;return a(a.s=6335)}),_N_E=a.O()}])