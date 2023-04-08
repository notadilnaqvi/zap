"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[353],{"./src/components/ui/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithCustomWidth:()=>WithCustomWidth,WithMultipleActions:()=>WithMultipleActions,WithOneAction:()=>WithOneAction,WithOneAction2:()=>WithOneAction2,WithOverflowingContent:()=>WithOverflowingContent,WithoutActions:()=>WithoutActions,WithoutTitle:()=>WithoutTitle,WithoutTitleAndActions:()=>WithoutTitleAndActions,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Modal",argTypes:{isOpen:{table:{disable:!0}},onClose:{table:{disable:!0}},className:{table:{disable:!0}}},component:_components_ui__WEBPACK_IMPORTED_MODULE_1__.u_,tags:["autodocs"]};var Default=function Default(_args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.r6,{onClose},"Modal Title"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.hz,null,__jsx("p",null,"Modal Content")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.nK,{className:"gap-4"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{variant:"outlined",onClick:onClose},"Secondary Action"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:onClose},"Primary Action"))))};Default.displayName="Default";var WithOverflowingContent=function WithOverflowingContent(_args){var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState2[0],setIsOpen=_useState2[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.r6,{onClose},"With Overflowing Content"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.hz,null,__jsx("ul",{className:"rounded border border-dashed py-10 text-center"},__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"),__jsx("li",{className:"py-2"},"This modal has overflowing content. Try scrolling"))),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.nK,{className:"gap-4"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{variant:"outlined",onClick:onClose},"Secondary Action"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:onClose},"Primary Action"))))};WithOverflowingContent.displayName="WithOverflowingContent";var WithoutActions=function WithoutActions(_args){var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState3[0],setIsOpen=_useState3[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.r6,{onClose},"Without Actions"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.hz,null,__jsx("p",null,"This modal does not have any actions."))))};WithoutActions.displayName="WithoutActions";var WithoutTitle=function WithoutTitle(_args){var _useState4=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState4[0],setIsOpen=_useState4[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.hz,null,__jsx("p",null,"This modal does not have any title.")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.nK,{className:"gap-4"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{variant:"outlined",onClick:onClose},"Secondary Action"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:onClose},"Primary Action"))))};WithoutTitle.displayName="WithoutTitle";var WithoutTitleAndActions=function WithoutTitleAndActions(_args){var _useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState5[0],setIsOpen=_useState5[1];return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.u_,{isOpen,onClose:function onClose(){setIsOpen(!1)}},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.hz,null,__jsx("p",null,"This modal does not have any title or actions."))))};WithoutTitleAndActions.displayName="WithoutTitleAndActions";var WithOneAction=function WithOneAction(_args){var _useState6=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState6[0],setIsOpen=_useState6[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.r6,{onClose},"With One Action"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.hz,null,__jsx("p",null,"This modal has one (full-width) action")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.nK,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:onClose},"Some Action"))))};WithOneAction.displayName="WithOneAction";var WithOneAction2=function WithOneAction2(_args){var _useState7=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState7[0],setIsOpen=_useState7[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.r6,{onClose},"With One Action 2"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.hz,null,__jsx("p",null,"This modal has one (min-width) action")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.nK,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:onClose,className:"ml-auto w-min"},"Primary Action"))))};WithOneAction2.displayName="WithOneAction2";var WithMultipleActions=function WithMultipleActions(_args){var _useState8=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState8[0],setIsOpen=_useState8[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.u_,{isOpen,onClose},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.r6,{onClose},"With Multiple Actions"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.hz,null,__jsx("p",null,"This modal has multiple actions. All actions have custom position and styling")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.nK,{className:"flex justify-between"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:onClose,className:"w-min",variant:"outlined"},"Cancel"),__jsx("div",{className:"flex gap-4"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:onClose,className:"w-min",color:"error"},"Delete"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:onClose,className:"w-min"},"Save")))))};WithMultipleActions.displayName="WithMultipleActions";var WithCustomWidth=function WithCustomWidth(_args){var _useState9=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState9[0],setIsOpen=_useState9[1];function onClose(){setIsOpen(!1)}return __jsx("div",null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:function onClick(){return setIsOpen(!0)},className:"w-min"},"Open Modal"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.u_,{isOpen,onClose,className:"max-w-5xl"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.r6,{onClose},"Modal With Custom Width"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.hz,null,__jsx("p",null,"This modal has a custom max width. Modals have a max width (on desktops) by default which you can override with Tailwind classes")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.nK,{className:"gap-4"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{variant:"outlined",onClick:onClose},"Secondary Action"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:onClose},"Primary Action"))))};WithCustomWidth.displayName="WithCustomWidth",Default.__docgenInfo={description:"",methods:[],displayName:"Default"},WithOverflowingContent.__docgenInfo={description:"",methods:[],displayName:"WithOverflowingContent"},WithoutActions.__docgenInfo={description:"",methods:[],displayName:"WithoutActions"},WithoutTitle.__docgenInfo={description:"",methods:[],displayName:"WithoutTitle"},WithoutTitleAndActions.__docgenInfo={description:"",methods:[],displayName:"WithoutTitleAndActions"},WithOneAction.__docgenInfo={description:"",methods:[],displayName:"WithOneAction"},WithOneAction2.__docgenInfo={description:"",methods:[],displayName:"WithOneAction2"},WithMultipleActions.__docgenInfo={description:"",methods:[],displayName:"WithMultipleActions"},WithCustomWidth.__docgenInfo={description:"",methods:[],displayName:"WithCustomWidth"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default(_args) {\n  var _useState = useState(false),\n    isOpen = _useState[0],\n    setIsOpen = _useState[1];\n  function onClose() {\n    setIsOpen(false);\n  }\n  return __jsx("div", null, __jsx(Button, {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    className: "w-min"\n  }, "Open Modal"), __jsx(Modal, {\n    isOpen: isOpen,\n    onClose: onClose\n  }, __jsx(ModalTitle, {\n    onClose: onClose\n  }, "Modal Title"), __jsx(ModalContent, null, __jsx("p", null, "Modal Content")), __jsx(ModalActions, {\n    className: "gap-4"\n  }, __jsx(Button, {\n    variant: "outlined",\n    onClick: onClose\n  }, "Secondary Action"), __jsx(Button, {\n    onClick: onClose\n  }, "Primary Action"))));\n}',...Default.parameters?.docs?.source}}},WithOverflowingContent.parameters={...WithOverflowingContent.parameters,docs:{...WithOverflowingContent.parameters?.docs,source:{originalSource:'function WithOverflowingContent(_args) {\n  var _useState2 = useState(false),\n    isOpen = _useState2[0],\n    setIsOpen = _useState2[1];\n  function onClose() {\n    setIsOpen(false);\n  }\n  return __jsx("div", null, __jsx(Button, {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    className: "w-min"\n  }, "Open Modal"), __jsx(Modal, {\n    isOpen: isOpen,\n    onClose: onClose\n  }, __jsx(ModalTitle, {\n    onClose: onClose\n  }, "With Overflowing Content"), __jsx(ModalContent, null, __jsx("ul", {\n    className: "rounded border border-dashed py-10 text-center"\n  }, __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"), __jsx("li", {\n    className: "py-2"\n  }, "This modal has overflowing content. Try scrolling"))), __jsx(ModalActions, {\n    className: "gap-4"\n  }, __jsx(Button, {\n    variant: "outlined",\n    onClick: onClose\n  }, "Secondary Action"), __jsx(Button, {\n    onClick: onClose\n  }, "Primary Action"))));\n}',...WithOverflowingContent.parameters?.docs?.source}}},WithoutActions.parameters={...WithoutActions.parameters,docs:{...WithoutActions.parameters?.docs,source:{originalSource:'function WithoutActions(_args) {\n  var _useState3 = useState(false),\n    isOpen = _useState3[0],\n    setIsOpen = _useState3[1];\n  function onClose() {\n    setIsOpen(false);\n  }\n  return __jsx("div", null, __jsx(Button, {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    className: "w-min"\n  }, "Open Modal"), __jsx(Modal, {\n    isOpen: isOpen,\n    onClose: onClose\n  }, __jsx(ModalTitle, {\n    onClose: onClose\n  }, "Without Actions"), __jsx(ModalContent, null, __jsx("p", null, "This modal does not have any actions."))));\n}',...WithoutActions.parameters?.docs?.source}}},WithoutTitle.parameters={...WithoutTitle.parameters,docs:{...WithoutTitle.parameters?.docs,source:{originalSource:'function WithoutTitle(_args) {\n  var _useState4 = useState(false),\n    isOpen = _useState4[0],\n    setIsOpen = _useState4[1];\n  function onClose() {\n    setIsOpen(false);\n  }\n  return __jsx("div", null, __jsx(Button, {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    className: "w-min"\n  }, "Open Modal"), __jsx(Modal, {\n    isOpen: isOpen,\n    onClose: onClose\n  }, __jsx(ModalContent, null, __jsx("p", null, "This modal does not have any title.")), __jsx(ModalActions, {\n    className: "gap-4"\n  }, __jsx(Button, {\n    variant: "outlined",\n    onClick: onClose\n  }, "Secondary Action"), __jsx(Button, {\n    onClick: onClose\n  }, "Primary Action"))));\n}',...WithoutTitle.parameters?.docs?.source}}},WithoutTitleAndActions.parameters={...WithoutTitleAndActions.parameters,docs:{...WithoutTitleAndActions.parameters?.docs,source:{originalSource:'function WithoutTitleAndActions(_args) {\n  var _useState5 = useState(false),\n    isOpen = _useState5[0],\n    setIsOpen = _useState5[1];\n  function onClose() {\n    setIsOpen(false);\n  }\n  return __jsx("div", null, __jsx(Button, {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    className: "w-min"\n  }, "Open Modal"), __jsx(Modal, {\n    isOpen: isOpen,\n    onClose: onClose\n  }, __jsx(ModalContent, null, __jsx("p", null, "This modal does not have any title or actions."))));\n}',...WithoutTitleAndActions.parameters?.docs?.source}}},WithOneAction.parameters={...WithOneAction.parameters,docs:{...WithOneAction.parameters?.docs,source:{originalSource:'function WithOneAction(_args) {\n  var _useState6 = useState(false),\n    isOpen = _useState6[0],\n    setIsOpen = _useState6[1];\n  function onClose() {\n    setIsOpen(false);\n  }\n  return __jsx("div", null, __jsx(Button, {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    className: "w-min"\n  }, "Open Modal"), __jsx(Modal, {\n    isOpen: isOpen,\n    onClose: onClose\n  }, __jsx(ModalTitle, {\n    onClose: onClose\n  }, "With One Action"), __jsx(ModalContent, null, __jsx("p", null, "This modal has one (full-width) action")), __jsx(ModalActions, null, __jsx(Button, {\n    onClick: onClose\n  }, "Some Action"))));\n}',...WithOneAction.parameters?.docs?.source}}},WithOneAction2.parameters={...WithOneAction2.parameters,docs:{...WithOneAction2.parameters?.docs,source:{originalSource:'function WithOneAction2(_args) {\n  var _useState7 = useState(false),\n    isOpen = _useState7[0],\n    setIsOpen = _useState7[1];\n  function onClose() {\n    setIsOpen(false);\n  }\n  return __jsx("div", null, __jsx(Button, {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    className: "w-min"\n  }, "Open Modal"), __jsx(Modal, {\n    isOpen: isOpen,\n    onClose: onClose\n  }, __jsx(ModalTitle, {\n    onClose: onClose\n  }, "With One Action 2"), __jsx(ModalContent, null, __jsx("p", null, "This modal has one (min-width) action")), __jsx(ModalActions, null, __jsx(Button, {\n    onClick: onClose,\n    className: "ml-auto w-min"\n  }, "Primary Action"))));\n}',...WithOneAction2.parameters?.docs?.source}}},WithMultipleActions.parameters={...WithMultipleActions.parameters,docs:{...WithMultipleActions.parameters?.docs,source:{originalSource:'function WithMultipleActions(_args) {\n  var _useState8 = useState(false),\n    isOpen = _useState8[0],\n    setIsOpen = _useState8[1];\n  function onClose() {\n    setIsOpen(false);\n  }\n  return __jsx("div", null, __jsx(Button, {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    className: "w-min"\n  }, "Open Modal"), __jsx(Modal, {\n    isOpen: isOpen,\n    onClose: onClose\n  }, __jsx(ModalTitle, {\n    onClose: onClose\n  }, "With Multiple Actions"), __jsx(ModalContent, null, __jsx("p", null, "This modal has multiple actions. All actions have custom position and styling")), __jsx(ModalActions, {\n    className: "flex justify-between"\n  }, __jsx(Button, {\n    onClick: onClose,\n    className: "w-min",\n    variant: "outlined"\n  }, "Cancel"), __jsx("div", {\n    className: "flex gap-4"\n  }, __jsx(Button, {\n    onClick: onClose,\n    className: "w-min",\n    color: "error"\n  }, "Delete"), __jsx(Button, {\n    onClick: onClose,\n    className: "w-min"\n  }, "Save")))));\n}',...WithMultipleActions.parameters?.docs?.source}}},WithCustomWidth.parameters={...WithCustomWidth.parameters,docs:{...WithCustomWidth.parameters?.docs,source:{originalSource:'function WithCustomWidth(_args) {\n  var _useState9 = useState(false),\n    isOpen = _useState9[0],\n    setIsOpen = _useState9[1];\n  function onClose() {\n    setIsOpen(false);\n  }\n  return __jsx("div", null, __jsx(Button, {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    className: "w-min"\n  }, "Open Modal"), __jsx(Modal, {\n    isOpen: isOpen,\n    onClose: onClose,\n    className: "max-w-5xl"\n  }, __jsx(ModalTitle, {\n    onClose: onClose\n  }, "Modal With Custom Width"), __jsx(ModalContent, null, __jsx("p", null, "This modal has a custom max width. Modals have a max width (on desktops) by default which you can override with Tailwind classes")), __jsx(ModalActions, {\n    className: "gap-4"\n  }, __jsx(Button, {\n    variant: "outlined",\n    onClick: onClose\n  }, "Secondary Action"), __jsx(Button, {\n    onClick: onClose\n  }, "Primary Action"))));\n}',...WithCustomWidth.parameters?.docs?.source}}}}}]);