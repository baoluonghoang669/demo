(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32252928"],{"6cca":function(e,t,r){"use strict";r("ebae")},dd3f:function(e,t,r){"use strict";r.r(t);r("b0c0"),r("a4d3"),r("e01a");var n=r("7a23"),c=Object(n["ib"])("data-v-561f4f82");Object(n["I"])("data-v-561f4f82");var a={class:"content"},o={class:"row"},i={class:"col-md-12"},s={class:"card"},l=Object(n["o"])("div",{class:"card-header"},[Object(n["o"])("h4",{class:"card-title"},"All Projects")],-1),u=Object(n["n"])(" Add Project "),b={class:"related-btn"},p={class:"fix-quantity"},j={class:"fix-flex"},d=Object(n["n"])("Excel File: "),f={class:"card-body"},h={key:0},O={key:1,class:"table-responsive"},m={class:"table table-bordered"},v=Object(n["o"])("thead",{class:" text-primary"},[Object(n["o"])("th",{class:"th-name"}," Name "),Object(n["o"])("th",null," Image "),Object(n["o"])("th",null," Description "),Object(n["o"])("th",null," Categories "),Object(n["o"])("th",null," Architecture "),Object(n["o"])("th",null," Client "),Object(n["o"])("th",null," Cost "),Object(n["o"])("th",null," Area "),Object(n["o"])("th",null," Actions ")],-1),x={key:0},g={key:1},w={key:2},k={key:3},y={key:4},R=Object(n["o"])("sup",null,"2",-1),C={style:{width:"80px"}},F=Object(n["o"])("i",{class:"far fa-edit"},null,-1),E=Object(n["o"])("i",{class:"far fa-trash-alt"},null,-1),S={key:2};Object(n["G"])();var $=c((function(e,t,r,$,P,A){var _=Object(n["O"])("router-link"),D=Object(n["O"])("search-form"),I=Object(n["O"])("card-search-form"),L=Object(n["O"])("architect-loading"),T=Object(n["O"])("architect-button"),N=Object(n["O"])("el-popconfirm");return Object(n["F"])(),Object(n["j"])("div",a,[Object(n["o"])("div",o,[Object(n["o"])("div",i,[Object(n["o"])("div",s,[l,Object(n["o"])(_,{to:{name:"ProjectAdd"},type:"button",class:"btn btn-primary"},{default:c((function(){return[u]})),_:1}),Object(n["o"])(I,null,{default:c((function(){return[Object(n["o"])(D,{inputs:A.searchFormData.inputs,handleSearch:A.handleSearch,handleClear:A.handleClear},null,8,["inputs","handleSearch","handleClear"])]})),_:1}),Object(n["o"])("div",b,[Object(n["o"])("b",p,"Quantity: "+Object(n["S"])(A.projects.length),1),Object(n["o"])("label",j,[d,Object(n["o"])("input",{type:"file",id:"file",ref:"file",onChange:t[1]||(t[1]=function(e){return A.handleFileUpload()})},null,544)]),Object(n["o"])("button",{type:"button",class:"btn btn-info",onClick:t[2]||(t[2]=function(){return A.onImportExcels&&A.onImportExcels.apply(A,arguments)})}," Import Excel "),Object(n["o"])("button",{type:"button",class:"btn btn-success",onClick:t[3]||(t[3]=function(){return A.onExportExcels&&A.onExportExcels.apply(A,arguments)})}," Export Excel ")]),Object(n["o"])("div",f,[P.loading?(Object(n["F"])(),Object(n["j"])("div",h,[Object(n["o"])(L)])):A.projects&&A.projects.length>0?(Object(n["F"])(),Object(n["j"])("div",O,[Object(n["o"])("table",m,[v,(Object(n["F"])(!0),Object(n["j"])(n["b"],null,Object(n["M"])(A.projects,(function(e){return Object(n["F"])(),Object(n["j"])("tbody",{key:e.id},[Object(n["o"])("tr",null,[e?(Object(n["F"])(),Object(n["j"])("td",x,Object(n["S"])(e.name),1)):Object(n["k"])("",!0),e?(Object(n["F"])(),Object(n["j"])("td",g,[Object(n["o"])("img",{class:"fix-size-img",src:e.photo,alt:"img"},null,8,["src"])])):Object(n["k"])("",!0),e?(Object(n["F"])(),Object(n["j"])("td",w,Object(n["S"])(e.description),1)):Object(n["k"])("",!0),e.categories?(Object(n["F"])(),Object(n["j"])("td",k,Object(n["S"])(e.categories.name),1)):(Object(n["F"])(),Object(n["j"])("td",y," No category ")),Object(n["o"])("td",null,Object(n["S"])(e.architecture),1),Object(n["o"])("td",null,Object(n["S"])(e.client),1),Object(n["o"])("td",null,Object(n["S"])(e.cost)+" vnd",1),Object(n["o"])("td",null,[Object(n["n"])(Object(n["S"])(e.area)+" m",1),R]),Object(n["o"])("td",C,[Object(n["o"])(T,{link:"",path:"/dashboard/projects/editProject/"+e._id,class:"edit-btn"},{default:c((function(){return[F]})),_:2},1032,["path"]),Object(n["o"])(N,{title:"Are you sure to delete this project?",onConfirm:function(t){return A.onConfirm(e._id)}},{reference:c((function(){return[E]})),_:2},1032,["onConfirm"]),Object(n["o"])("i",{class:"fas fa-file-export",onClick:function(t){return A.onExport(e._id)}},null,8,["onClick"])])])])})),128))])])):(Object(n["F"])(),Object(n["j"])("div",S,"There is no projects !"))])])])])])})),P=r("5530"),A=r("1da1"),_=(r("d81d"),r("96cf"),r("bf52")),D={components:{ArchitectButton:_["a"]},data:function(){return{loading:!1,error:null,file:"",formSearch:{},total:0,categories:null}},created:function(){this.fetchListProjects()},computed:{searchFormData:function(){return{inputs:[{inputType:"input",label:"Name",name:"name",attributes:{clearable:!0},trim:!0},{inputType:"input",label:"Description",name:"description",attributes:{clearable:!0},trim:!0},{inputType:"input",label:"Cost",name:"cost",attributes:{clearable:!0,filterable:!0},trim:!0},{inputType:"select",label:"Categories",name:"categoriesName",attributes:{clearable:!0},trim:!0,optionValueField:"value",optionLabelField:"label",optionList:this.categories},{inputType:"input",label:"Area",name:"area",attributes:{clearable:!0},trim:!0}]}},projects:function(){return this.$store.getters["projects/getProjects"]}},mounted:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.eventRefresh();case 2:return t.next=4,e.fetchCategories();case 4:case"end":return t.stop()}}),t)})))()},methods:{onConfirm:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.onDelete(e);case 2:case"end":return r.stop()}}),r)})))()},eventRefresh:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.loading=!0,r.next=3,t.$store.dispatch("projects/index",Object(P["a"])({page:e||1},t.formSearch));case 3:t.total=t.projects.totalCount,t.loading=!1;case 5:case"end":return r.stop()}}),r)})))()},fetchCategories:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("categories/fetchListCategories");case 2:r=t.sent,e.categories=r.map((function(e){return{label:e.name,value:e.name}}));case 4:case"end":return t.stop()}}),t)})))()},handleSearch:function(e,t){var r=this;return Object(A["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r.formSearch=e,n.next=3,r.eventRefresh();case 3:t.validate((function(e){console.log(e)}));case 4:case"end":return n.stop()}}),n)})))()},handleClear:function(e,t){var r=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.$store.dispatch("projects/index",{page:1});case 2:t.resetFields(),r.total=r.projects.totalCount;case 4:case"end":return e.stop()}}),e)})))()},onDelete:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("projects/onDeleteProject",e);case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),t.err=r.t0;case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()},fetchListProjects:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$store.dispatch("projects/fetchListProjects");case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),e.error=t.t0;case 9:e.loading=!1;case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()},onExport:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("projects/getExcelFileById",e);case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),t.err=r.t0||t.$t("fail");case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()},onExportExcels:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("projects/getExcelFiles");case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),e.err=t.t0||e.$t("fail");case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},onImportExcels:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.file){t.next=3;break}return alert("Please import a excel file"),t.abrupt("return");case 3:return window.location.reload(),r=new FormData,r.append("file",e.file),t.prev=6,t.next=9,e.$store.dispatch("projects/importExcels",r);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](6),e.err=t.t0||e.$t("fail");case 14:case"end":return t.stop()}}),t,null,[[6,11]])})))()},handleFileUpload:function(){this.file=this.$refs.file.files[0]}}};r("6cca");D.render=$,D.__scopeId="data-v-561f4f82";t["default"]=D},ebae:function(e,t,r){}}]);
//# sourceMappingURL=chunk-32252928.1507c18b.js.map