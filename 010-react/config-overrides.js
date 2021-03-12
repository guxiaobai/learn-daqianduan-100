// https://github.com/arackaf/customize-cra
// // https://github.com/timarney/react-app-rewired/
// // https://segmentfault.com/a/1190000013220134
// // https://github.com/iuap-design/blog/issues/260

const { overrideDevServer} = require('customize-cra');
const path = require('path');
const apiMocker = require('mocker-api')


const mockAll = () => config => {
    config.before = function(app){
      apiMocker(app, path.resolve('./mocker/index.js'))
    }
    return config;
};

module.exports = {

  devServer: overrideDevServer(
    mockAll()
  )
};
