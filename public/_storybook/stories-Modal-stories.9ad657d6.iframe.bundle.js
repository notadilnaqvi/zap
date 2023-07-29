"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[290],{"./src/stories/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithCustomWidth:()=>WithCustomWidth,WithMultipleActions:()=>WithMultipleActions,WithOneAction:()=>WithOneAction,WithOneAction2:()=>WithOneAction2,WithOverflowingContent:()=>WithOverflowingContent,WithoutActions:()=>WithoutActions,WithoutTitle:()=>WithoutTitle,WithoutTitleAndActions:()=>WithoutTitleAndActions,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_WithOverflowingConte,_WithOverflowingConte2,_WithoutActions$param,_WithoutActions$param2,_WithoutTitle$paramet,_WithoutTitle$paramet2,_WithoutTitleAndActio,_WithoutTitleAndActio2,_WithOneAction$parame,_WithOneAction$parame2,_WithOneAction2$param,_WithOneAction2$param2,_WithMultipleActions$,_WithMultipleActions$2,_WithCustomWidth$para,_WithCustomWidth$para2,_Users_adil_naqvi_code_temp_zap_frontend_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_adil_naqvi_code_temp_zap_frontend_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Modal",argTypes:{isOpen:{table:{disable:!0}},onClose:{table:{disable:!0}},className:{table:{disable:!0}}},component:_components_ui__WEBPACK_IMPORTED_MODULE_2__.u_,tags:["autodocs"]};var Default=function Default(_args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.r6,{onClose},"Modal Title"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.hz,null,__jsx("p",null,"Modal Content")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.nK,{className:"gap-4"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{variant:"outlined",onClick:onClose},"Secondary Action"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:onClose},"Primary Action"))))};Default.displayName="Default";var WithOverflowingContent=function WithOverflowingContent(_args){var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState2[0],setIsOpen=_useState2[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.r6,{onClose},"With Overflowing Content"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.hz,null,__jsx("ul",{className:"rounded border border-dashed py-10 text-center"},__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"))),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.nK,{className:"gap-4"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{variant:"outlined",onClick:onClose},"Secondary Action"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:onClose},"Primary Action"))))};WithOverflowingContent.displayName="WithOverflowingContent";var WithoutActions=function WithoutActions(_args){var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState3[0],setIsOpen=_useState3[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.r6,{onClose},"Without Actions"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.hz,null,__jsx("p",null,"This modal does not have any actions."))))};WithoutActions.displayName="WithoutActions";var WithoutTitle=function WithoutTitle(_args){var _useState4=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState4[0],setIsOpen=_useState4[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.hz,null,__jsx("p",null,"This modal does not have any title.")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.nK,{className:"gap-4"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{variant:"outlined",onClick:onClose},"Secondary Action"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:onClose},"Primary Action"))))};WithoutTitle.displayName="WithoutTitle";var WithoutTitleAndActions=function WithoutTitleAndActions(_args){var _useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState5[0],setIsOpen=_useState5[1];return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u_,{isOpen,onClose:function onClose(){setIsOpen(!1)}},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.hz,null,__jsx("p",null,"This modal does not have any title or actions."))))};WithoutTitleAndActions.displayName="WithoutTitleAndActions";var WithOneAction=function WithOneAction(_args){var _useState6=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState6[0],setIsOpen=_useState6[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.r6,{onClose},"With One Action"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.hz,null,__jsx("p",null,"This modal has one (full-width) action")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.nK,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:onClose},"Some Action"))))};WithOneAction.displayName="WithOneAction";var WithOneAction2=function WithOneAction2(_args){var _useState7=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState7[0],setIsOpen=_useState7[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.r6,{onClose},"With One Action 2"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.hz,null,__jsx("p",null,"This modal has one (min-width) action")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.nK,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:onClose,className:"ml-auto w-min"},"Primary Action"))))};WithOneAction2.displayName="WithOneAction2";var WithMultipleActions=function WithMultipleActions(_args){var _useState8=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState8[0],setIsOpen=_useState8[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.r6,{onClose},"With Multiple Actions"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.hz,null,__jsx("p",null,"This modal has multiple actions. All actions have custom position and styling")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.nK,{className:"flex justify-between"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:onClose,className:"w-min",variant:"outlined"},"Cancel"),__jsx("div",{className:"flex gap-4"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:onClose,className:"w-min",color:"error"},"Delete"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:onClose,className:"w-min"},"Save")))))};WithMultipleActions.displayName="WithMultipleActions";var WithCustomWidth=function WithCustomWidth(_args){var _useState9=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState9[0],setIsOpen=_useState9[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u_,{isOpen,onClose,className:"max-w-5xl"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.r6,{onClose},"Modal With Custom Width"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.hz,null,__jsx("p",null,"This modal has a custom max width. Modals have a max width (on desktops) by default which you can override with Tailwind classes")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.nK,{className:"gap-4"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{variant:"outlined",onClick:onClose},"Secondary Action"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:onClose},"Primary Action"))))};WithCustomWidth.displayName="WithCustomWidth",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"_args => {\n  const [isOpen, setIsOpen] = useState(false);\n  function onClose() {\n    setIsOpen(false);\n  }\n  return <div>\n            <Button onClick={() => setIsOpen(true)} className='w-min'>\n                Open Modal\n            </Button>\n            <Modal isOpen={isOpen} onClose={onClose}>\n                <ModalTitle onClose={onClose}>Modal Title</ModalTitle>\n                <ModalContent>\n                    <p>Modal Content</p>\n                </ModalContent>\n                <ModalActions className='gap-4'>\n                    <Button variant='outlined' onClick={onClose}>\n                        Secondary Action\n                    </Button>\n                    <Button onClick={onClose}>Primary Action</Button>\n                </ModalActions>\n            </Modal>\n        </div>;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),WithOverflowingContent.parameters=_objectSpread(_objectSpread({},WithOverflowingContent.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithOverflowingConte=WithOverflowingContent.parameters)||void 0===_WithOverflowingConte?void 0:_WithOverflowingConte.docs),{},{source:_objectSpread({originalSource:"_args => {\n  const [isOpen, setIsOpen] = useState(false);\n  function onClose() {\n    setIsOpen(false);\n  }\n  return <div>\n            <Button onClick={() => setIsOpen(true)} className='w-min'>\n                Open Modal\n            </Button>\n            <Modal isOpen={isOpen} onClose={onClose}>\n                <ModalTitle onClose={onClose}>With Overflowing Content</ModalTitle>\n                <ModalContent>\n                    <ul className='rounded border border-dashed py-10 text-center'>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                        <li className='py-2'>\n                            This modal has overflowing content. Try scrolling\n                        </li>\n                    </ul>\n                </ModalContent>\n                <ModalActions className='gap-4'>\n                    <Button variant='outlined' onClick={onClose}>\n                        Secondary Action\n                    </Button>\n                    <Button onClick={onClose}>Primary Action</Button>\n                </ModalActions>\n            </Modal>\n        </div>;\n}"},null===(_WithOverflowingConte2=WithOverflowingContent.parameters)||void 0===_WithOverflowingConte2||null===(_WithOverflowingConte2=_WithOverflowingConte2.docs)||void 0===_WithOverflowingConte2?void 0:_WithOverflowingConte2.source)})}),WithoutActions.parameters=_objectSpread(_objectSpread({},WithoutActions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithoutActions$param=WithoutActions.parameters)||void 0===_WithoutActions$param?void 0:_WithoutActions$param.docs),{},{source:_objectSpread({originalSource:"_args => {\n  const [isOpen, setIsOpen] = useState(false);\n  function onClose() {\n    setIsOpen(false);\n  }\n  return <div>\n            <Button onClick={() => setIsOpen(true)} className='w-min'>\n                Open Modal\n            </Button>\n            <Modal isOpen={isOpen} onClose={onClose}>\n                <ModalTitle onClose={onClose}>Without Actions</ModalTitle>\n                <ModalContent>\n                    <p>This modal does not have any actions.</p>\n                </ModalContent>\n            </Modal>\n        </div>;\n}"},null===(_WithoutActions$param2=WithoutActions.parameters)||void 0===_WithoutActions$param2||null===(_WithoutActions$param2=_WithoutActions$param2.docs)||void 0===_WithoutActions$param2?void 0:_WithoutActions$param2.source)})}),WithoutTitle.parameters=_objectSpread(_objectSpread({},WithoutTitle.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithoutTitle$paramet=WithoutTitle.parameters)||void 0===_WithoutTitle$paramet?void 0:_WithoutTitle$paramet.docs),{},{source:_objectSpread({originalSource:"_args => {\n  const [isOpen, setIsOpen] = useState(false);\n  function onClose() {\n    setIsOpen(false);\n  }\n  return <div>\n            <Button onClick={() => setIsOpen(true)} className='w-min'>\n                Open Modal\n            </Button>\n            <Modal isOpen={isOpen} onClose={onClose}>\n                <ModalContent>\n                    <p>This modal does not have any title.</p>\n                </ModalContent>\n                <ModalActions className='gap-4'>\n                    <Button variant='outlined' onClick={onClose}>\n                        Secondary Action\n                    </Button>\n                    <Button onClick={onClose}>Primary Action</Button>\n                </ModalActions>\n            </Modal>\n        </div>;\n}"},null===(_WithoutTitle$paramet2=WithoutTitle.parameters)||void 0===_WithoutTitle$paramet2||null===(_WithoutTitle$paramet2=_WithoutTitle$paramet2.docs)||void 0===_WithoutTitle$paramet2?void 0:_WithoutTitle$paramet2.source)})}),WithoutTitleAndActions.parameters=_objectSpread(_objectSpread({},WithoutTitleAndActions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithoutTitleAndActio=WithoutTitleAndActions.parameters)||void 0===_WithoutTitleAndActio?void 0:_WithoutTitleAndActio.docs),{},{source:_objectSpread({originalSource:"_args => {\n  const [isOpen, setIsOpen] = useState(false);\n  function onClose() {\n    setIsOpen(false);\n  }\n  return <div>\n            <Button onClick={() => setIsOpen(true)} className='w-min'>\n                Open Modal\n            </Button>\n            <Modal isOpen={isOpen} onClose={onClose}>\n                <ModalContent>\n                    <p>This modal does not have any title or actions.</p>\n                </ModalContent>\n            </Modal>\n        </div>;\n}"},null===(_WithoutTitleAndActio2=WithoutTitleAndActions.parameters)||void 0===_WithoutTitleAndActio2||null===(_WithoutTitleAndActio2=_WithoutTitleAndActio2.docs)||void 0===_WithoutTitleAndActio2?void 0:_WithoutTitleAndActio2.source)})}),WithOneAction.parameters=_objectSpread(_objectSpread({},WithOneAction.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithOneAction$parame=WithOneAction.parameters)||void 0===_WithOneAction$parame?void 0:_WithOneAction$parame.docs),{},{source:_objectSpread({originalSource:"_args => {\n  const [isOpen, setIsOpen] = useState(false);\n  function onClose() {\n    setIsOpen(false);\n  }\n  return <div>\n            <Button onClick={() => setIsOpen(true)} className='w-min'>\n                Open Modal\n            </Button>\n            <Modal isOpen={isOpen} onClose={onClose}>\n                <ModalTitle onClose={onClose}>With One Action</ModalTitle>\n                <ModalContent>\n                    <p>This modal has one (full-width) action</p>\n                </ModalContent>\n                <ModalActions>\n                    <Button onClick={onClose}>Some Action</Button>\n                </ModalActions>\n            </Modal>\n        </div>;\n}"},null===(_WithOneAction$parame2=WithOneAction.parameters)||void 0===_WithOneAction$parame2||null===(_WithOneAction$parame2=_WithOneAction$parame2.docs)||void 0===_WithOneAction$parame2?void 0:_WithOneAction$parame2.source)})}),WithOneAction2.parameters=_objectSpread(_objectSpread({},WithOneAction2.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithOneAction2$param=WithOneAction2.parameters)||void 0===_WithOneAction2$param?void 0:_WithOneAction2$param.docs),{},{source:_objectSpread({originalSource:"_args => {\n  const [isOpen, setIsOpen] = useState(false);\n  function onClose() {\n    setIsOpen(false);\n  }\n  return <div>\n            <Button onClick={() => setIsOpen(true)} className='w-min'>\n                Open Modal\n            </Button>\n            <Modal isOpen={isOpen} onClose={onClose}>\n                <ModalTitle onClose={onClose}>With One Action 2</ModalTitle>\n                <ModalContent>\n                    <p>This modal has one (min-width) action</p>\n                </ModalContent>\n                <ModalActions>\n                    <Button onClick={onClose} className='ml-auto w-min'>\n                        Primary Action\n                    </Button>\n                </ModalActions>\n            </Modal>\n        </div>;\n}"},null===(_WithOneAction2$param2=WithOneAction2.parameters)||void 0===_WithOneAction2$param2||null===(_WithOneAction2$param2=_WithOneAction2$param2.docs)||void 0===_WithOneAction2$param2?void 0:_WithOneAction2$param2.source)})}),WithMultipleActions.parameters=_objectSpread(_objectSpread({},WithMultipleActions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithMultipleActions$=WithMultipleActions.parameters)||void 0===_WithMultipleActions$?void 0:_WithMultipleActions$.docs),{},{source:_objectSpread({originalSource:"_args => {\n  const [isOpen, setIsOpen] = useState(false);\n  function onClose() {\n    setIsOpen(false);\n  }\n  return <div>\n            <Button onClick={() => setIsOpen(true)} className='w-min'>\n                Open Modal\n            </Button>\n            <Modal isOpen={isOpen} onClose={onClose}>\n                <ModalTitle onClose={onClose}>With Multiple Actions</ModalTitle>\n                <ModalContent>\n                    <p>\n                        This modal has multiple actions. All actions have custom position\n                        and styling\n                    </p>\n                </ModalContent>\n                <ModalActions className='flex justify-between'>\n                    <Button onClick={onClose} className='w-min' variant='outlined'>\n                        Cancel\n                    </Button>\n                    <div className='flex gap-4'>\n                        <Button onClick={onClose} className='w-min' color='error'>\n                            Delete\n                        </Button>\n                        <Button onClick={onClose} className='w-min'>\n                            Save\n                        </Button>\n                    </div>\n                </ModalActions>\n            </Modal>\n        </div>;\n}"},null===(_WithMultipleActions$2=WithMultipleActions.parameters)||void 0===_WithMultipleActions$2||null===(_WithMultipleActions$2=_WithMultipleActions$2.docs)||void 0===_WithMultipleActions$2?void 0:_WithMultipleActions$2.source)})}),WithCustomWidth.parameters=_objectSpread(_objectSpread({},WithCustomWidth.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithCustomWidth$para=WithCustomWidth.parameters)||void 0===_WithCustomWidth$para?void 0:_WithCustomWidth$para.docs),{},{source:_objectSpread({originalSource:"_args => {\n  const [isOpen, setIsOpen] = useState(false);\n  function onClose() {\n    setIsOpen(false);\n  }\n  return <div>\n            <Button onClick={() => setIsOpen(true)} className='w-min'>\n                Open Modal\n            </Button>\n            <Modal isOpen={isOpen} onClose={onClose} className='max-w-5xl'>\n                <ModalTitle onClose={onClose}>Modal With Custom Width</ModalTitle>\n                <ModalContent>\n                    <p>\n                        This modal has a custom max width. Modals have a max width (on\n                        desktops) by default which you can override with Tailwind classes\n                    </p>\n                </ModalContent>\n                <ModalActions className='gap-4'>\n                    <Button variant='outlined' onClick={onClose}>\n                        Secondary Action\n                    </Button>\n                    <Button onClick={onClose}>Primary Action</Button>\n                </ModalActions>\n            </Modal>\n        </div>;\n}"},null===(_WithCustomWidth$para2=WithCustomWidth.parameters)||void 0===_WithCustomWidth$para2||null===(_WithCustomWidth$para2=_WithCustomWidth$para2.docs)||void 0===_WithCustomWidth$para2?void 0:_WithCustomWidth$para2.source)})}),Default.__docgenInfo={description:"",methods:[],displayName:"Default"},WithOverflowingContent.__docgenInfo={description:"",methods:[],displayName:"WithOverflowingContent"},WithoutActions.__docgenInfo={description:"",methods:[],displayName:"WithoutActions"},WithoutTitle.__docgenInfo={description:"",methods:[],displayName:"WithoutTitle"},WithoutTitleAndActions.__docgenInfo={description:"",methods:[],displayName:"WithoutTitleAndActions"},WithOneAction.__docgenInfo={description:"",methods:[],displayName:"WithOneAction"},WithOneAction2.__docgenInfo={description:"",methods:[],displayName:"WithOneAction2"},WithMultipleActions.__docgenInfo={description:"",methods:[],displayName:"WithMultipleActions"},WithCustomWidth.__docgenInfo={description:"",methods:[],displayName:"WithCustomWidth"}}}]);