module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['react-native-reanimated/plugin',
      [
        "module-resolver",
        {
          alias: {
            Api: "./src/api",
            Components: "./src/components",
            Static: "./src/static",
            Utils: "./src/utils",
            Validation: "./src/validation",
            Xstate: "./src/xstate",
          },
        },
      ],
    ],
  }
}
