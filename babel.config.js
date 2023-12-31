module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@icons': './src/assets/icons',
          '@types': './src/types',
          '@pages': './src/pages',
        },
      },
    ],
  ],
};
