"use strict";(self.webpackChunk_alex_ui_component_library=self.webpackChunk_alex_ui_component_library||[]).push([[852],{"./src/components/ArticleCard/ArticleCard.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DqjCard:()=>DqjCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ArticleCard_stories,epCard:()=>epCard});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),articleCard=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/components/ArticleCard/articleCard.css"),options={};function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(articleCard.c,options),articleCard.c&&articleCard.c.locals&&articleCard.c.locals;var ArticleCard=function(_param){var _param_matchType=_param.matchType,matchType=void 0===_param_matchType||_param_matchType,teamAName=(_param.match_date,_param.size,_param.teamAName),teamBName=(_param.teamALogoPath,_param.teamBName),league_name=(_param.teamBLogoPath,_param.backgroundColor,_param.label,_param.title,_param.league_name),description=_param.description,date=_param.date,_param_imgPath=_param.imgPath,_param_authorName=_param.authorName,_param_authorAvatarPath=_param.authorAvatarPath;return _object_without_properties(_param,["matchType","match_date","size","teamAName","teamALogoPath","teamBName","teamBLogoPath","backgroundColor","label","title","league_name","description","date","imgPath","authorName","authorAvatarPath"]),react.createElement("div",{className:"articles_content"},react.createElement("div",{className:"image_small"},react.createElement("img",{src:void 0===_param_imgPath?"":_param_imgPath})),react.createElement("div",{className:"details"},react.createElement("p",{className:"league",style:{fontSize:matchType?"":"0.8rem",overflow:matchType?"":"hidden",display:matchType?"":"-webkit-box",WebkitLineClamp:matchType?"":"3"}},matchType?league_name:description),matchType?react.createElement("div",{className:"teams"},react.createElement("span",{className:"team"}," ",teamAName," "),react.createElement("span",null," ","VS"," "),react.createElement("span",{className:"team"}," ",teamBName," ")):null,react.createElement("div",{className:"author"},react.createElement("div",{className:"details"},react.createElement("img",{src:void 0===_param_authorAvatarPath?"":_param_authorAvatarPath}),react.createElement("span",null,void 0===_param_authorName?"":_param_authorName," "),react.createElement("span",null," ",date)))))};try{ArticleCard.displayName="ArticleCard",ArticleCard.__docgenInfo={description:"Primary UI component for user interaction",displayName:"ArticleCard",props:{matchType:{defaultValue:{value:"true"},description:"Is this the principal call to action on the page?",name:"matchType",required:!1,type:{name:"boolean"}},match_date:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"match_date",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},teamAName:{defaultValue:null,description:"Button contents",name:"teamAName",required:!0,type:{name:"string"}},teamALogoPath:{defaultValue:{value:""},description:"Button contents",name:"teamALogoPath",required:!1,type:{name:"string"}},teamBName:{defaultValue:null,description:"Button contents",name:"teamBName",required:!0,type:{name:"string"}},teamBLogoPath:{defaultValue:{value:""},description:"Button contents",name:"teamBLogoPath",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"title contents",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"description contents",name:"description",required:!0,type:{name:"string"}},league_name:{defaultValue:null,description:"league_name contents",name:"league_name",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"date contents",name:"date",required:!0,type:{name:"string"}},imgPath:{defaultValue:{value:""},description:"img contents",name:"imgPath",required:!1,type:{name:"string"}},authorName:{defaultValue:{value:""},description:"authorName contents",name:"authorName",required:!1,type:{name:"string"}},authorAvatarPath:{defaultValue:{value:""},description:"authorAvatarPath contents",name:"authorAvatarPath",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ArticleCard/ArticleCard.tsx#ArticleCard"]={docgenInfo:ArticleCard.__docgenInfo,name:"ArticleCard",path:"src/components/ArticleCard/ArticleCard.tsx#ArticleCard"})}catch(__react_docgen_typescript_loader_error){}let ArticleCard_stories={title:"Example/ArticleCard",component:ArticleCard,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}};var DqjCard={args:{matchType:!0,match_date:!1,title:"Mbemba faces online abuse following Congo-Morocco tie",description:"In a dominant French Cup performance, Paris Saint-Germain, led by Kylian Mbappé's hat trick, crushed sixth-tier Revel 9-0. The win propelled PSG into the round of 32, with Marco Asensio, Goncalo Ramos, Randal Kolo Muani, and Cher Ndour also contributing to the scoresheet. Despite Revel's initial enthusiasm, they were clearly outmatched, and their sporting director conceded the impending defeat. PSG now gears up for a Ligue 1 clash against Lens on January 14.",league_name:"National Basketball Association",teamAName:"Boston Celtics",teamALogoPath:"Button",teamBName:"Utah Jazz",teamBLogoPath:"Utah Jazz",authorName:"大球街",authorAvatarPath:"Button",date:"Monday , 2024-01-22"}},epCard={args:{matchType:!1,match_date:!1,title:"Mbappe scores three goals as PSG easily defeats 6th-tier Revel in the Cup.",description:"In a dominant French Cup performance, Paris Saint-Germain, led by Kylian Mbappé's hat trick, crushed sixth-tier Revel 9-0. The win propelled PSG into the round of 32, with Marco Asensio, Goncalo Ramos, Randal Kolo Muani, and Cher Ndour also contributing to the scoresheet. Despite Revel's initial enthusiasm, they were clearly outmatched, and their sporting director conceded the impending defeat. PSG now gears up for a Ligue 1 clash against Lens on January 14.",league_name:"National Basketball Association",teamAName:"Boston Celtics",teamALogoPath:"Button",teamBName:"Utah Jazz",teamBLogoPath:"Utah Jazz",authorName:"大球街",authorAvatarPath:"Button",date:"Monday , 2024-01-22"}};DqjCard.parameters={...DqjCard.parameters,docs:{...DqjCard.parameters?.docs,source:{originalSource:"{\n  args: {\n    matchType: true,\n    match_date: false,\n    title: 'Mbemba faces online abuse following Congo-Morocco tie',\n    description: `In a dominant French Cup performance, Paris Saint-Germain, led by Kylian Mbappé's hat trick, crushed sixth-tier Revel 9-0. The win propelled PSG into the round of 32, with Marco Asensio, Goncalo Ramos, Randal Kolo Muani, and Cher Ndour also contributing to the scoresheet. Despite Revel's initial enthusiasm, they were clearly outmatched, and their sporting director conceded the impending defeat. PSG now gears up for a Ligue 1 clash against Lens on January 14.`,\n    league_name: 'National Basketball Association',\n    teamAName: 'Boston Celtics',\n    teamALogoPath: 'Button',\n    teamBName: 'Utah Jazz',\n    teamBLogoPath: 'Utah Jazz',\n    authorName: '大球街',\n    authorAvatarPath: 'Button',\n    date: 'Monday , 2024-01-22'\n  }\n}",...DqjCard.parameters?.docs?.source}}},epCard.parameters={...epCard.parameters,docs:{...epCard.parameters?.docs,source:{originalSource:"{\n  args: {\n    matchType: false,\n    match_date: false,\n    title: 'Mbappe scores three goals as PSG easily defeats 6th-tier Revel in the Cup.',\n    description: `In a dominant French Cup performance, Paris Saint-Germain, led by Kylian Mbappé's hat trick, crushed sixth-tier Revel 9-0. The win propelled PSG into the round of 32, with Marco Asensio, Goncalo Ramos, Randal Kolo Muani, and Cher Ndour also contributing to the scoresheet. Despite Revel's initial enthusiasm, they were clearly outmatched, and their sporting director conceded the impending defeat. PSG now gears up for a Ligue 1 clash against Lens on January 14.`,\n    league_name: 'National Basketball Association',\n    teamAName: 'Boston Celtics',\n    teamALogoPath: 'Button',\n    teamBName: 'Utah Jazz',\n    teamBLogoPath: 'Utah Jazz',\n    authorName: '大球街',\n    authorAvatarPath: 'Button',\n    date: 'Monday , 2024-01-22'\n  }\n}",...epCard.parameters?.docs?.source}}};let __namedExportsOrder=["DqjCard","epCard"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/components/ArticleCard/articleCard.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.articles_content {
    padding: 16px;
    border-radius: 16px;
    /* background: var(--articleCard-color, #ffffff); */
    background: #141C27;
    height: 355px;
}

.articles_content .image_small {
    display: flex;
    justify-content: center;
}

.articles_content .image_small img {
    height: 180px;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s;
}

.articles_content:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0 4px 6px var(--magicBox2-color, #ffffff4d);
}

.articles_content .title {
    font-size: 14px;
    color: var(--articleCardFont-color, #ffffff);
    font-weight: 700;
    margin-bottom: 10px;
    height: 2.4rem;
}

.articles_content .league {
    color: var(--articleCardFont2-color, #ffffff);
    font-size: 10px;
    font-weight: 700;
}

.articles_content .teams {
    color: var(--articleCardFont-color, #ffffff);
    min-height: 3rem;
}

.articles_content .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--articleCardFont-color, #ffffff);
    font-weight: 300;
    font-size: 0.6rem;
}

.articles_content .prediction {
    height: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
}

.articles_content .prediction .predict {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    width: 170px;
    height: 80px;
    padding: 10px;
    margin: 0 auto;
}

.articles_content .prediction .predict .title {
    color: #F6626E;
}

.articles_content .prediction .predict .content {
    color: #FFF;
}

.articles_content .prediction .author {
    display: flex;
    flex-direction: column;
}

.articles_content .prediction .author .details {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.articles_content .prediction .author .details img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
}

.articles_content .prediction .author .details span {
    color: #c8c8c8;
    font-size: 14px;
}

.articles_content .prediction .author .winlose {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10px;
}

.articles_content .prediction .author .winlose .item {
    color: #FFF;
    font-size: 15px;
    font-weight: bold;
    border-radius: 5px;
    padding: 6px;
    line-height: 1;
}

.articles_content .prediction .author .winlose .win {
    background: #15BFBB;  
}

.articles_content .prediction .author .winlose .lose {
    background: #E21C34;  
}
`,"",{version:3,sources:["webpack://./src/components/ArticleCard/articleCard.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,mDAAmD;IACnD,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,uDAAuD;AAC3D;;AAEA;IACI,eAAe;IACf,4CAA4C;IAC5C,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,6CAA6C;IAC7C,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,4CAA4C;IAC5C,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,4CAA4C;IAC5C,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;IACxB,4BAA4B;IAC5B,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB",sourcesContent:[".articles_content {\n    padding: 16px;\n    border-radius: 16px;\n    /* background: var(--articleCard-color, #ffffff); */\n    background: #141C27;\n    height: 355px;\n}\n\n.articles_content .image_small {\n    display: flex;\n    justify-content: center;\n}\n\n.articles_content .image_small img {\n    height: 180px;\n    width: 100%;\n    object-fit: cover;\n    border-radius: 8px;\n    transition: transform 0.3s;\n}\n\n.articles_content:hover {\n    cursor: pointer;\n    transform: scale(1.01);\n    box-shadow: 0 4px 6px var(--magicBox2-color, #ffffff4d);\n}\n\n.articles_content .title {\n    font-size: 14px;\n    color: var(--articleCardFont-color, #ffffff);\n    font-weight: 700;\n    margin-bottom: 10px;\n    height: 2.4rem;\n}\n\n.articles_content .league {\n    color: var(--articleCardFont2-color, #ffffff);\n    font-size: 10px;\n    font-weight: 700;\n}\n\n.articles_content .teams {\n    color: var(--articleCardFont-color, #ffffff);\n    min-height: 3rem;\n}\n\n.articles_content .author {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: var(--articleCardFont-color, #ffffff);\n    font-weight: 300;\n    font-size: 0.6rem;\n}\n\n.articles_content .prediction {\n    height: 100%;\n    justify-content: space-between;\n    display: flex;\n    flex-direction: column;\n}\n\n.articles_content .prediction .predict {\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    display: flex;\n    flex-direction: column;\n    width: 170px;\n    height: 80px;\n    padding: 10px;\n    margin: 0 auto;\n}\n\n.articles_content .prediction .predict .title {\n    color: #F6626E;\n}\n\n.articles_content .prediction .predict .content {\n    color: #FFF;\n}\n\n.articles_content .prediction .author {\n    display: flex;\n    flex-direction: column;\n}\n\n.articles_content .prediction .author .details {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.articles_content .prediction .author .details img {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    margin-right: 20px;\n}\n\n.articles_content .prediction .author .details span {\n    color: #c8c8c8;\n    font-size: 14px;\n}\n\n.articles_content .prediction .author .winlose {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n    margin-top: 10px;\n}\n\n.articles_content .prediction .author .winlose .item {\n    color: #FFF;\n    font-size: 15px;\n    font-weight: bold;\n    border-radius: 5px;\n    padding: 6px;\n    line-height: 1;\n}\n\n.articles_content .prediction .author .winlose .win {\n    background: #15BFBB;  \n}\n\n.articles_content .prediction .author .winlose .lose {\n    background: #E21C34;  \n}\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map(function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content}).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]&&(item[1]="@media ".concat(item[2]," {").concat(item[1],"}")),item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));return[content].concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64)," */")]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier:identifier,updater:updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);return api.update(obj),function(newObj){newObj?(newObj.css!==obj.css||newObj.media!==obj.media||newObj.sourceMap!==obj.sourceMap||newObj.supports!==obj.supports||newObj.layer!==obj.layer)&&api.update(obj=newObj):api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}function insertBySelector(insert,style){var target=getTarget(insert);if(!target)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}module.exports=insertBySelector},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}module.exports=insertStyleElement},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}module.exports=setAttributesWithoutAttributes},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){apply(styleElement,options,obj)},remove:function remove(){removeStyleElement(styleElement)}}}module.exports=domAPI},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}module.exports=styleTagTransform}}]);
//# sourceMappingURL=components-ArticleCard-ArticleCard-stories.58762911.iframe.bundle.js.map