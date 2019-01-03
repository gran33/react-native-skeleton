# React Native Skeleton 💀

Because boilerplates are bummer.
It's a bummer to connect everything until it works and do the same work over and over again.

### Installation

```
git clone https://github.com/gran33/react-native-skeleton.git
cd react-native-skeleton
npm install
react-native run-ios

```

### What's inside?

* [`react-native-navigation`](https://github.com/wix/react-native-navigation) - A complete native navigation solution for React Native
* [`react-native-ui-lib`](https://github.com/wix/react-native-ui-lib) - UI Components Library for React Native
* [`remx`](https://github.com/wix/remx) - Opinionated mobx

### Project Structure

```
.
├── index.js            
├── src
│ ├── App.js
│ ├── screens
│ │ ├── Welcome.js
│ │ └── ...
│ ├── stores 
│ │ ├── store.js
│ │ ├── store.test.js
│ │ ├── actions.js
│ │ ├── actions.test.js
│ │ └-─ ...
│ └── services           
│   ├── HttpService.js
│   ├── HttpService.test.js
│   └── ...
├── e2e
│ ├── Welcome.e2e.js
│ └── ...
└── package.json
```

### Scripts

Command       |         Description
---------------|-----------
`npm run start` | Start React Native packager
`npm run test` | Run Jest tests + shows coverage
`npm run xcode` | Open Xcode
`npm run androidStudio` | Open Android Studio


