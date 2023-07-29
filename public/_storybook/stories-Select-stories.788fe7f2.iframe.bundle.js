"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[128],{"./src/stories/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultSelect:()=>DefaultSelect,DisabledSelectWithLabel:()=>DisabledSelectWithLabel,DisabledSelectWithPlaceholder:()=>DisabledSelectWithPlaceholder,SelectWithDefaultValue:()=>SelectWithDefaultValue,SelectWithDisabledOptions:()=>SelectWithDisabledOptions,SelectWithFixedWidth:()=>SelectWithFixedWidth,SelectWithLabel:()=>SelectWithLabel,SelectWithOptionSeperators:()=>SelectWithOptionSeperators,SelectWithOverflowingOptions:()=>SelectWithOverflowingOptions,SelectWithOverflowingPlaceholder:()=>SelectWithOverflowingPlaceholder,SelectWithPlaceholder:()=>SelectWithPlaceholder,SelectWithScrollableOptions:()=>SelectWithScrollableOptions,default:()=>Select_stories});var _DefaultSelect$parame,_DefaultSelect$parame2,_SelectWithFixedWidth,_SelectWithFixedWidth2,_SelectWithPlaceholde,_SelectWithPlaceholde2,_SelectWithDisabledOp,_SelectWithDisabledOp2,_DisabledSelectWithPl,_DisabledSelectWithPl2,_SelectWithLabel$para,_SelectWithLabel$para2,_DisabledSelectWithLa,_DisabledSelectWithLa2,_SelectWithDefaultVal,_SelectWithDefaultVal2,_SelectWithScrollable,_SelectWithScrollable2,_SelectWithOverflowin,_SelectWithOverflowin2,_SelectWithOverflowin3,_SelectWithOverflowin4,_SelectWithOptionSepe,_SelectWithOptionSepe2,defineProperty=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-select/dist/index.module.js"),icons=__webpack_require__("./src/components/icons/index.ts"),ui=__webpack_require__("./src/components/ui/index.ts"),utils=__webpack_require__("./src/utils/index.ts"),_excluded=["children","placeholder","error","label","onChange","className"],_excluded2=["className","children"],_excluded3=["className"],__jsx=react.createElement,Select=react.forwardRef((function(props,ref){var children=props.children,placeholder=props.placeholder,error=props.error,label=props.label,onChange=props.onChange,className=props.className,rest=(0,objectWithoutProperties.Z)(props,_excluded),id=(0,react.useId)();return __jsx("div",{className:"flex flex-col-reverse items-start justify-end"},__jsx("div",{role:"alert",className:"mt-1.5"},error?__jsx("p",{className:"text-sm text-error"},error):null),__jsx(index_module.fC,(0,esm_extends.Z)({},rest,{onValueChange:onChange}),__jsx(index_module.xz,{id,ref,className:(0,utils.cx)("group peer flex w-full items-center justify-between rounded border border-gray-400 bg-white px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 data-[placeholder]:text-gray-400",error&&"border-error text-error focus:border-error focus:ring-error disabled:border-error disabled:text-error/40",className)},__jsx("div",{className:(0,utils.cx)("my-auto\th-6 truncate whitespace-nowrap text-inherit",error&&"text-error")},__jsx(index_module.B4,{placeholder})),__jsx(index_module.JO,{asChild:!0,className:(0,utils.cx)("text-gray-600 transition-transform group-data-[disabled]:text-gray-400 motion-safe:group-data-[state=open]:rotate-180",error&&"text-error")},__jsx("div",null,__jsx(icons.v4,{className:"h-4.5 w-4.5"})))),__jsx(index_module.h_,null,__jsx(index_module.VY,{className:(0,utils.cx)("relative z-50 max-h-64 overflow-hidden rounded border border-gray-200 bg-white text-gray-900 data-[side=bottom]:translate-y-2 data-[side=top]:-translate-y-2 data-[side=bottom]:shadow-[0px_8px_30px_rgba(0,0,0,0.12)] data-[side=top]:shadow-[0px_-8px_30px_rgba(0,0,0,0.12)] motion-safe:data-[side=bottom]:animate-fade-down motion-safe:data-[side=top]:animate-fade-up motion-reduce:animate-fade",className),position:"popper"},__jsx(index_module.u_,{className:"absolute inset-x-0 top-0 z-10 flex h-8 items-start justify-center bg-gradient-to-b from-white via-white/95 to-transparent pt-1"},__jsx("div",null,__jsx(icons.g8,{className:"h-4.5 w-4.5 text-gray-600"}))),__jsx(index_module.l_,{className:"h-full max-h-full w-full min-w-[calc(var(--radix-select-trigger-width)-2px)] max-w-[calc(var(--radix-select-trigger-width)-2px)] p-3"},children),__jsx(index_module.$G,{className:"absolute inset-x-0 bottom-0 z-10 flex h-8 items-end justify-center bg-gradient-to-t from-white via-white/95 to-transparent pb-1"},__jsx("div",null,__jsx(icons.v4,{className:"h-4.5 w-4.5 text-gray-600"})))))),label?__jsx(ui.__,{error:!!error,htmlFor:id,className:"mb-1.5"},label):null)})),SelectOption=react.forwardRef((function(_ref,ref){var className=_ref.className,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded2);return __jsx(index_module.ck,(0,esm_extends.Z)({ref,className:(0,utils.cx)("flex w-full cursor-pointer select-none items-center break-all rounded px-3 py-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[disabled]:text-gray-400 sm:py-3",className)},props),__jsx(index_module.eT,null,children))})),SelectOptionSeparator=react.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,objectWithoutProperties.Z)(_ref2,_excluded3);return __jsx(index_module.Z0,(0,esm_extends.Z)({ref,className:(0,utils.cx)("mx-1.5 my-1 h-px bg-gray-300",className)},props))}));Select.__docgenInfo={description:"",methods:[],displayName:"Select"},SelectOption.__docgenInfo={description:"",methods:[],displayName:"SelectOption"},SelectOptionSeparator.__docgenInfo={description:"",methods:[],displayName:"SelectOptionSeparator"};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((...args: any) => any)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/ui/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}try{SelectOption.displayName="SelectOption",SelectOption.__docgenInfo={description:"",displayName:"SelectOption",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Select.tsx#SelectOption"]={docgenInfo:SelectOption.__docgenInfo,name:"SelectOption",path:"src/components/ui/Select.tsx#SelectOption"})}catch(__react_docgen_typescript_loader_error){}try{SelectOptionSeparator.displayName="SelectOptionSeparator",SelectOptionSeparator.__docgenInfo={description:"",displayName:"SelectOptionSeparator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Select.tsx#SelectOptionSeparator"]={docgenInfo:SelectOptionSeparator.__docgenInfo,name:"SelectOptionSeparator",path:"src/components/ui/Select.tsx#SelectOptionSeparator"})}catch(__react_docgen_typescript_loader_error){}var Select_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Select_stories={title:"UI/Select",component:Select,argTypes:{onValueChange:{action:"Value changed",table:{defaultValue:{summary:"undefined"}}},label:{table:{defaultValue:{summary:"undefined"}}},disabled:{table:{defaultValue:{summary:"false"}},control:{type:"boolean"}},placeholder:{table:{defaultValue:{summary:"undefined"}}},defaultValue:{table:{defaultValue:{summary:"undefined"}},control:{type:"text"}},className:{table:{disable:!0}}},tags:["autodocs"]};var DefaultSelect=function DefaultSelect(args){return Select_stories_jsx(Select,args,Select_stories_jsx(SelectOption,{value:"value-1"},"Value 1"),Select_stories_jsx(SelectOption,{value:"value-2"},"Value 2"),Select_stories_jsx(SelectOption,{value:"value-3"},"Value 3"),Select_stories_jsx(SelectOption,{value:"value-4"},"Value 4"))};DefaultSelect.displayName="DefaultSelect";var SelectWithFixedWidth=function SelectWithFixedWidth(args){return Select_stories_jsx(Select,(0,esm_extends.Z)({className:"w-48"},args),Select_stories_jsx(SelectOption,{value:"value-1"},"Value 1"),Select_stories_jsx(SelectOption,{value:"value-2"},"Value 2"),Select_stories_jsx(SelectOption,{value:"value-3"},"Value 3"),Select_stories_jsx(SelectOption,{value:"value-4"},"Value 4"))};SelectWithFixedWidth.displayName="SelectWithFixedWidth";var SelectWithPlaceholder=function SelectWithPlaceholder(args){return Select_stories_jsx(Select,(0,esm_extends.Z)({placeholder:"Placeholder"},args),Select_stories_jsx(SelectOption,{value:"value-1"},"Value 1"),Select_stories_jsx(SelectOption,{value:"value-2"},"Value 2"),Select_stories_jsx(SelectOption,{value:"value-3"},"Value 3"),Select_stories_jsx(SelectOption,{value:"value-4"},"Value 4"))};SelectWithPlaceholder.displayName="SelectWithPlaceholder";var SelectWithDisabledOptions=function SelectWithDisabledOptions(args){return Select_stories_jsx(Select,(0,esm_extends.Z)({placeholder:"Placeholder"},args),Select_stories_jsx(SelectOption,{value:"value-1"},"Value 1"),Select_stories_jsx(SelectOption,{value:"value-2",disabled:!0},"Value 2"),Select_stories_jsx(SelectOption,{value:"value-3"},"Value 3"),Select_stories_jsx(SelectOption,{value:"value-4"},"Value 4"),Select_stories_jsx(SelectOption,{value:"value-5",disabled:!0},"Value 5"),Select_stories_jsx(SelectOption,{value:"value-6"},"Value 6"))};SelectWithDisabledOptions.displayName="SelectWithDisabledOptions";var DisabledSelectWithPlaceholder=function DisabledSelectWithPlaceholder(args){return Select_stories_jsx(Select,(0,esm_extends.Z)({placeholder:"Placeholder",disabled:!0},args),Select_stories_jsx(SelectOption,{value:"value-1"},"Value 1"),Select_stories_jsx(SelectOption,{value:"value-2"},"Value 2"),Select_stories_jsx(SelectOption,{value:"value-3"},"Value 3"),Select_stories_jsx(SelectOption,{value:"value-4"},"Value 4"))};DisabledSelectWithPlaceholder.displayName="DisabledSelectWithPlaceholder";var SelectWithLabel=function SelectWithLabel(args){return Select_stories_jsx(Select,(0,esm_extends.Z)({label:"Label"},args),Select_stories_jsx(SelectOption,{value:"value-1"},"Value 1"),Select_stories_jsx(SelectOption,{value:"value-2"},"Value 2"),Select_stories_jsx(SelectOption,{value:"value-3"},"Value 3"),Select_stories_jsx(SelectOption,{value:"value-4"},"Value 4"))};SelectWithLabel.displayName="SelectWithLabel";var DisabledSelectWithLabel=function DisabledSelectWithLabel(args){return Select_stories_jsx(Select,(0,esm_extends.Z)({label:"Label",disabled:!0},args),Select_stories_jsx(SelectOption,{value:"value-1"},"Value 1"),Select_stories_jsx(SelectOption,{value:"value-2"},"Value 2"),Select_stories_jsx(SelectOption,{value:"value-3"},"Value 3"),Select_stories_jsx(SelectOption,{value:"value-4"},"Value 4"))};DisabledSelectWithLabel.displayName="DisabledSelectWithLabel";var SelectWithDefaultValue=function SelectWithDefaultValue(args){return Select_stories_jsx(Select,(0,esm_extends.Z)({placeholder:"Placeholder",defaultValue:"value-2"},args),Select_stories_jsx(SelectOption,{value:"value-1"},"Value 1"),Select_stories_jsx(SelectOption,{value:"value-2"},"Value 2"),Select_stories_jsx(SelectOption,{value:"value-3"},"Value 3"),Select_stories_jsx(SelectOption,{value:"value-4"},"Value 4"))};SelectWithDefaultValue.displayName="SelectWithDefaultValue";var SelectWithScrollableOptions=function SelectWithScrollableOptions(args){return Select_stories_jsx(Select,(0,esm_extends.Z)({placeholder:"Placeholder",className:"w-64"},args),Select_stories_jsx(SelectOption,{value:"value-1"},"Value 1. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-2"},"Value 2. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-3"},"Value 3. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-4"},"Value 4. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-5"},"Value 5. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-6"},"Value 6. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-7"},"Value 7. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-8"},"Value 8. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-9"},"Value 9. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-10"},"Value 10. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-11"},"Value 11. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-12"},"Value 12. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-13"},"Value 13. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-14"},"Value 14. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-15"},"Value 15. Try scrolling"),Select_stories_jsx(SelectOption,{value:"value-16"},"Value 16. Try scrolling"))};SelectWithScrollableOptions.displayName="SelectWithScrollableOptions";var SelectWithOverflowingOptions=function SelectWithOverflowingOptions(args){return Select_stories_jsx(Select,(0,esm_extends.Z)({placeholder:"Placeholder",className:"w-48"},args),Select_stories_jsx(SelectOption,{value:"value-1"},"Value 1"),Select_stories_jsx(SelectOption,{value:"value-2"},"Value 2"),Select_stories_jsx(SelectOption,{value:"value-3"},"Value 6 with very long text that should wrap to the next line."),Select_stories_jsx(SelectOption,{value:"value-4"},"Value 4"))};SelectWithOverflowingOptions.displayName="SelectWithOverflowingOptions";var SelectWithOverflowingPlaceholder=function SelectWithOverflowingPlaceholder(args){return Select_stories_jsx(Select,(0,esm_extends.Z)({placeholder:"Placeholder that is very long",className:"w-48"},args),Select_stories_jsx(SelectOption,{value:"value-1"},"Value 1"),Select_stories_jsx(SelectOption,{value:"value-2"},"Value 2"),Select_stories_jsx(SelectOption,{value:"value-3"},"Value 3"),Select_stories_jsx(SelectOption,{value:"value-4"},"Value 4"))};SelectWithOverflowingPlaceholder.displayName="SelectWithOverflowingPlaceholder";var SelectWithOptionSeperators=function SelectWithOptionSeperators(args){return Select_stories_jsx(Select,(0,esm_extends.Z)({placeholder:"Placeholder",className:"w-48"},args),Select_stories_jsx(SelectOption,{value:"value-1"},"Value 1"),Select_stories_jsx(SelectOption,{value:"value-2"},"Value 2"),Select_stories_jsx(SelectOption,{value:"value-3"},"Value 3"),Select_stories_jsx(SelectOptionSeparator,null),Select_stories_jsx(SelectOption,{value:"value-4"},"Value 4"),Select_stories_jsx(SelectOption,{value:"value-5"},"Value 5"),Select_stories_jsx(SelectOption,{value:"value-6"},"Value 6"),Select_stories_jsx(SelectOptionSeparator,null),Select_stories_jsx(SelectOption,{value:"value-7"},"Value 7"),Select_stories_jsx(SelectOption,{value:"value-8"},"Value 8"),Select_stories_jsx(SelectOption,{value:"value-9"},"Value 9"))};SelectWithOptionSeperators.displayName="SelectWithOptionSeperators",DefaultSelect.parameters=_objectSpread(_objectSpread({},DefaultSelect.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DefaultSelect$parame=DefaultSelect.parameters)||void 0===_DefaultSelect$parame?void 0:_DefaultSelect$parame.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Select {...args}>\n            <SelectOption value='value-1'>Value 1</SelectOption>\n            <SelectOption value='value-2'>Value 2</SelectOption>\n            <SelectOption value='value-3'>Value 3</SelectOption>\n            <SelectOption value='value-4'>Value 4</SelectOption>\n        </Select>;\n}"},null===(_DefaultSelect$parame2=DefaultSelect.parameters)||void 0===_DefaultSelect$parame2||null===(_DefaultSelect$parame2=_DefaultSelect$parame2.docs)||void 0===_DefaultSelect$parame2?void 0:_DefaultSelect$parame2.source)})}),SelectWithFixedWidth.parameters=_objectSpread(_objectSpread({},SelectWithFixedWidth.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SelectWithFixedWidth=SelectWithFixedWidth.parameters)||void 0===_SelectWithFixedWidth?void 0:_SelectWithFixedWidth.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Select className='w-48' {...args}>\n            <SelectOption value='value-1'>Value 1</SelectOption>\n            <SelectOption value='value-2'>Value 2</SelectOption>\n            <SelectOption value='value-3'>Value 3</SelectOption>\n            <SelectOption value='value-4'>Value 4</SelectOption>\n        </Select>;\n}"},null===(_SelectWithFixedWidth2=SelectWithFixedWidth.parameters)||void 0===_SelectWithFixedWidth2||null===(_SelectWithFixedWidth2=_SelectWithFixedWidth2.docs)||void 0===_SelectWithFixedWidth2?void 0:_SelectWithFixedWidth2.source)})}),SelectWithPlaceholder.parameters=_objectSpread(_objectSpread({},SelectWithPlaceholder.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SelectWithPlaceholde=SelectWithPlaceholder.parameters)||void 0===_SelectWithPlaceholde?void 0:_SelectWithPlaceholde.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Select placeholder='Placeholder' {...args}>\n            <SelectOption value='value-1'>Value 1</SelectOption>\n            <SelectOption value='value-2'>Value 2</SelectOption>\n            <SelectOption value='value-3'>Value 3</SelectOption>\n            <SelectOption value='value-4'>Value 4</SelectOption>\n        </Select>;\n}"},null===(_SelectWithPlaceholde2=SelectWithPlaceholder.parameters)||void 0===_SelectWithPlaceholde2||null===(_SelectWithPlaceholde2=_SelectWithPlaceholde2.docs)||void 0===_SelectWithPlaceholde2?void 0:_SelectWithPlaceholde2.source)})}),SelectWithDisabledOptions.parameters=_objectSpread(_objectSpread({},SelectWithDisabledOptions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SelectWithDisabledOp=SelectWithDisabledOptions.parameters)||void 0===_SelectWithDisabledOp?void 0:_SelectWithDisabledOp.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Select placeholder='Placeholder' {...args}>\n            <SelectOption value='value-1'>Value 1</SelectOption>\n            <SelectOption value='value-2' disabled>\n                Value 2\n            </SelectOption>\n            <SelectOption value='value-3'>Value 3</SelectOption>\n            <SelectOption value='value-4'>Value 4</SelectOption>\n            <SelectOption value='value-5' disabled>\n                Value 5\n            </SelectOption>\n            <SelectOption value='value-6'>Value 6</SelectOption>\n        </Select>;\n}"},null===(_SelectWithDisabledOp2=SelectWithDisabledOptions.parameters)||void 0===_SelectWithDisabledOp2||null===(_SelectWithDisabledOp2=_SelectWithDisabledOp2.docs)||void 0===_SelectWithDisabledOp2?void 0:_SelectWithDisabledOp2.source)})}),DisabledSelectWithPlaceholder.parameters=_objectSpread(_objectSpread({},DisabledSelectWithPlaceholder.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DisabledSelectWithPl=DisabledSelectWithPlaceholder.parameters)||void 0===_DisabledSelectWithPl?void 0:_DisabledSelectWithPl.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Select placeholder='Placeholder' disabled {...args}>\n            <SelectOption value='value-1'>Value 1</SelectOption>\n            <SelectOption value='value-2'>Value 2</SelectOption>\n            <SelectOption value='value-3'>Value 3</SelectOption>\n            <SelectOption value='value-4'>Value 4</SelectOption>\n        </Select>;\n}"},null===(_DisabledSelectWithPl2=DisabledSelectWithPlaceholder.parameters)||void 0===_DisabledSelectWithPl2||null===(_DisabledSelectWithPl2=_DisabledSelectWithPl2.docs)||void 0===_DisabledSelectWithPl2?void 0:_DisabledSelectWithPl2.source)})}),SelectWithLabel.parameters=_objectSpread(_objectSpread({},SelectWithLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SelectWithLabel$para=SelectWithLabel.parameters)||void 0===_SelectWithLabel$para?void 0:_SelectWithLabel$para.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Select label='Label' {...args}>\n            <SelectOption value='value-1'>Value 1</SelectOption>\n            <SelectOption value='value-2'>Value 2</SelectOption>\n            <SelectOption value='value-3'>Value 3</SelectOption>\n            <SelectOption value='value-4'>Value 4</SelectOption>\n        </Select>;\n}"},null===(_SelectWithLabel$para2=SelectWithLabel.parameters)||void 0===_SelectWithLabel$para2||null===(_SelectWithLabel$para2=_SelectWithLabel$para2.docs)||void 0===_SelectWithLabel$para2?void 0:_SelectWithLabel$para2.source)})}),DisabledSelectWithLabel.parameters=_objectSpread(_objectSpread({},DisabledSelectWithLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DisabledSelectWithLa=DisabledSelectWithLabel.parameters)||void 0===_DisabledSelectWithLa?void 0:_DisabledSelectWithLa.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Select label='Label' disabled {...args}>\n            <SelectOption value='value-1'>Value 1</SelectOption>\n            <SelectOption value='value-2'>Value 2</SelectOption>\n            <SelectOption value='value-3'>Value 3</SelectOption>\n            <SelectOption value='value-4'>Value 4</SelectOption>\n        </Select>;\n}"},null===(_DisabledSelectWithLa2=DisabledSelectWithLabel.parameters)||void 0===_DisabledSelectWithLa2||null===(_DisabledSelectWithLa2=_DisabledSelectWithLa2.docs)||void 0===_DisabledSelectWithLa2?void 0:_DisabledSelectWithLa2.source)})}),SelectWithDefaultValue.parameters=_objectSpread(_objectSpread({},SelectWithDefaultValue.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SelectWithDefaultVal=SelectWithDefaultValue.parameters)||void 0===_SelectWithDefaultVal?void 0:_SelectWithDefaultVal.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Select placeholder='Placeholder' defaultValue='value-2' {...args}>\n            <SelectOption value='value-1'>Value 1</SelectOption>\n            <SelectOption value='value-2'>Value 2</SelectOption>\n            <SelectOption value='value-3'>Value 3</SelectOption>\n            <SelectOption value='value-4'>Value 4</SelectOption>\n        </Select>;\n}"},null===(_SelectWithDefaultVal2=SelectWithDefaultValue.parameters)||void 0===_SelectWithDefaultVal2||null===(_SelectWithDefaultVal2=_SelectWithDefaultVal2.docs)||void 0===_SelectWithDefaultVal2?void 0:_SelectWithDefaultVal2.source)})}),SelectWithScrollableOptions.parameters=_objectSpread(_objectSpread({},SelectWithScrollableOptions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SelectWithScrollable=SelectWithScrollableOptions.parameters)||void 0===_SelectWithScrollable?void 0:_SelectWithScrollable.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Select placeholder='Placeholder' className='w-64' {...args}>\n            <SelectOption value='value-1'>Value 1. Try scrolling</SelectOption>\n            <SelectOption value='value-2'>Value 2. Try scrolling</SelectOption>\n            <SelectOption value='value-3'>Value 3. Try scrolling</SelectOption>\n            <SelectOption value='value-4'>Value 4. Try scrolling</SelectOption>\n            <SelectOption value='value-5'>Value 5. Try scrolling</SelectOption>\n            <SelectOption value='value-6'>Value 6. Try scrolling</SelectOption>\n            <SelectOption value='value-7'>Value 7. Try scrolling</SelectOption>\n            <SelectOption value='value-8'>Value 8. Try scrolling</SelectOption>\n            <SelectOption value='value-9'>Value 9. Try scrolling</SelectOption>\n            <SelectOption value='value-10'>Value 10. Try scrolling</SelectOption>\n            <SelectOption value='value-11'>Value 11. Try scrolling</SelectOption>\n            <SelectOption value='value-12'>Value 12. Try scrolling</SelectOption>\n            <SelectOption value='value-13'>Value 13. Try scrolling</SelectOption>\n            <SelectOption value='value-14'>Value 14. Try scrolling</SelectOption>\n            <SelectOption value='value-15'>Value 15. Try scrolling</SelectOption>\n            <SelectOption value='value-16'>Value 16. Try scrolling</SelectOption>\n        </Select>;\n}"},null===(_SelectWithScrollable2=SelectWithScrollableOptions.parameters)||void 0===_SelectWithScrollable2||null===(_SelectWithScrollable2=_SelectWithScrollable2.docs)||void 0===_SelectWithScrollable2?void 0:_SelectWithScrollable2.source)})}),SelectWithOverflowingOptions.parameters=_objectSpread(_objectSpread({},SelectWithOverflowingOptions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SelectWithOverflowin=SelectWithOverflowingOptions.parameters)||void 0===_SelectWithOverflowin?void 0:_SelectWithOverflowin.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Select placeholder='Placeholder' className='w-48' {...args}>\n            <SelectOption value='value-1'>Value 1</SelectOption>\n            <SelectOption value='value-2'>Value 2</SelectOption>\n            <SelectOption value='value-3'>\n                Value 6 with very long text that should wrap to the next line.\n            </SelectOption>\n            <SelectOption value='value-4'>Value 4</SelectOption>\n        </Select>;\n}"},null===(_SelectWithOverflowin2=SelectWithOverflowingOptions.parameters)||void 0===_SelectWithOverflowin2||null===(_SelectWithOverflowin2=_SelectWithOverflowin2.docs)||void 0===_SelectWithOverflowin2?void 0:_SelectWithOverflowin2.source)})}),SelectWithOverflowingPlaceholder.parameters=_objectSpread(_objectSpread({},SelectWithOverflowingPlaceholder.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SelectWithOverflowin3=SelectWithOverflowingPlaceholder.parameters)||void 0===_SelectWithOverflowin3?void 0:_SelectWithOverflowin3.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Select placeholder='Placeholder that is very long' className='w-48' {...args}>\n            <SelectOption value='value-1'>Value 1</SelectOption>\n            <SelectOption value='value-2'>Value 2</SelectOption>\n            <SelectOption value='value-3'>Value 3</SelectOption>\n            <SelectOption value='value-4'>Value 4</SelectOption>\n        </Select>;\n}"},null===(_SelectWithOverflowin4=SelectWithOverflowingPlaceholder.parameters)||void 0===_SelectWithOverflowin4||null===(_SelectWithOverflowin4=_SelectWithOverflowin4.docs)||void 0===_SelectWithOverflowin4?void 0:_SelectWithOverflowin4.source)})}),SelectWithOptionSeperators.parameters=_objectSpread(_objectSpread({},SelectWithOptionSeperators.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SelectWithOptionSepe=SelectWithOptionSeperators.parameters)||void 0===_SelectWithOptionSepe?void 0:_SelectWithOptionSepe.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Select placeholder='Placeholder' className='w-48' {...args}>\n            <SelectOption value='value-1'>Value 1</SelectOption>\n            <SelectOption value='value-2'>Value 2</SelectOption>\n            <SelectOption value='value-3'>Value 3</SelectOption>\n            <SelectOptionSeparator />\n            <SelectOption value='value-4'>Value 4</SelectOption>\n            <SelectOption value='value-5'>Value 5</SelectOption>\n            <SelectOption value='value-6'>Value 6</SelectOption>\n            <SelectOptionSeparator />\n            <SelectOption value='value-7'>Value 7</SelectOption>\n            <SelectOption value='value-8'>Value 8</SelectOption>\n            <SelectOption value='value-9'>Value 9</SelectOption>\n        </Select>;\n}"},null===(_SelectWithOptionSepe2=SelectWithOptionSeperators.parameters)||void 0===_SelectWithOptionSepe2||null===(_SelectWithOptionSepe2=_SelectWithOptionSepe2.docs)||void 0===_SelectWithOptionSepe2?void 0:_SelectWithOptionSepe2.source)})}),DefaultSelect.__docgenInfo={description:"",methods:[],displayName:"DefaultSelect"},SelectWithFixedWidth.__docgenInfo={description:"",methods:[],displayName:"SelectWithFixedWidth"},SelectWithPlaceholder.__docgenInfo={description:"",methods:[],displayName:"SelectWithPlaceholder"},SelectWithDisabledOptions.__docgenInfo={description:"",methods:[],displayName:"SelectWithDisabledOptions"},DisabledSelectWithPlaceholder.__docgenInfo={description:"",methods:[],displayName:"DisabledSelectWithPlaceholder"},SelectWithLabel.__docgenInfo={description:"",methods:[],displayName:"SelectWithLabel"},DisabledSelectWithLabel.__docgenInfo={description:"",methods:[],displayName:"DisabledSelectWithLabel"},SelectWithDefaultValue.__docgenInfo={description:"",methods:[],displayName:"SelectWithDefaultValue"},SelectWithScrollableOptions.__docgenInfo={description:"",methods:[],displayName:"SelectWithScrollableOptions"},SelectWithOverflowingOptions.__docgenInfo={description:"",methods:[],displayName:"SelectWithOverflowingOptions"},SelectWithOverflowingPlaceholder.__docgenInfo={description:"",methods:[],displayName:"SelectWithOverflowingPlaceholder"},SelectWithOptionSeperators.__docgenInfo={description:"",methods:[],displayName:"SelectWithOptionSeperators"}}}]);