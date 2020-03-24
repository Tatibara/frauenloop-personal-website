## Report / Steps we did in a class

* Use VSCode [live-share](https://code.visualstudio.com/blogs/2017/11/15/live-share)
    * install VSCode extension [Live Share Extension Pack](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
* Add [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) support
    * `npm install eslint --save-dev`
    * `npx eslint --init`. We are using airbnb javascript style [guide](https://github.com/airbnb/javascript)
    * Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 
    plugin into VSCode
    * Add new script `"lint": "eslint \"src/**/*.{js,jsx}\""` into package.json file
    * Disable eslint rule if you need with `/* eslint-disable */` for the whole file or with `// eslint-disable-line` for particular line
    * Install [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin for VSCode
    * Install [JS/TS Import Sorter](https://marketplace.visualstudio.com/items?itemName=dozerg.tsimportsorter) plugin for VSCode
    * Config workspace settings for auto format like:
```
{
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    }
}
```
    
* Setup Firebase
  * Go to [firebase.google.com](https://firebase.google.com/)
  * Sign in with your google account
  * Go to console
  * Create project. We are using realtime NoSQL DB and maybe later Authentication system.
  * Add Firebase to your web app, see [documentation](https://www.npmjs.com/package/firebase).
    * Update security rules
    * Test your connection
    * Read [documentation](https://firebase.google.com/docs/reference)
    * create `AddBlogPage` and `BlogForm` components


* Create `AddBlogPage` and `BlogForm` components
* Introduction into Hooks
