> **Warning**
> ZAP is currently under construction. Expect bugs. Expect things to break. Expect haphazardly written READMEs. Enjoy!

### Some gotchas I came across

- Dynamic URL bar in mobile broswers fucks with `100vh` height
- Anchor tags in Safari for MacOS are not focusable via keyboard
  - https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox
- Don't pass non-ISO date strings to `new Date()`
  - https://stackoverflow.com/questions/3257460/new-date-is-working-in-chrome-but-not-firefox
- Apollo cache / Commercetools / Product variant ID
- Keep DPR in mind when implementing `next/image`
  - https://web.dev/codelab-density-descriptors/#size-images-based-on-device-pixel-ratios
  - https://stackoverflow.com/questions/53253749/what-the-visual-difference-between-dpr-1-0-dpr-2-0-dpr-3-0-for-human-eyes
