
# Starter Kit for Easy Hybrid App Development

## About 
- This monorepo is a starter for an Expo + Next.js + pnpm.
- included packages: react-native, expo, next.js v14, pnpm workspace, turbo repo, zustand, styled-component
- created by [jongyeol91](https://github.com/jongyeol91)

## Pre-requisites for build
1) sing up [expo](https://expo.dev/accounts/day1company)
3) install watchman
```
brew update
brew install watchman
```
4) install expo-cli & eas login
```
npx expo install expo-dev-client
npm install -g eas-cli
eas login
```

## Build for ios development 
1) install [Xcode](https://apps.apple.com/us/app/xcode/id497799835) 
2) development build   
`cd app`  
`eas build --platform ios --profile development` or `npm run build:dev:ios`
3) (optional) select build result and emulator to install   
`eas build:run -p ios` or `npm run dev:ios`

## Build for android development
1) install [android studio](https://developer.android.com/?hl=ko)
2) install Java   
`brew install --cask zulu@17`

3) environment variable
```
// .zshrc
export ANDROID_HOME=$HOME/Library/Android/sdk // your sdk path
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

4) development build  
`eas build --platform android --profile development`
or
`npm run build:dev:aos`

5) (optional) select build result and emulator to install  
`eas build:run -p android` or `npm run dev:aos`

## run
``` 
// cd.. (starter-kit root) 
pnpm run dev
```
