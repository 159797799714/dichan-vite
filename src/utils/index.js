// 动态获取assets静态资源
const utils = {}
utils.getAssetsFile = url => {
  return new URL(`../assets/${url}`, import.meta.url).href
}

// 自动加载某个文件夹下面的文件
utils.autoImportAll = () => {

  //vite import.meta.glob 该方法返回一个对象，其中每个键都是匹配到的模块路径，每个值都是一个异步加载函数，用于动态导入对应的模块。

  // 匹配某个文件夹下的所有 .js 文件：./path/*.js
  // 匹配某个文件夹及其子文件夹下的所有 .vue 文件：./path/**/*.vue
  // !可以反选
  // 排除某个文件夹下的某个文件：./path/!(*.md)

  // eager配置 不配为需要的时候再执行，true是代表预先加载所有匹配的模块

  // import.meta.glob('./global/*.vue', { eager: true })


  const modules = import.meta.glob('./global/*.vue')
  return modules

}

export default {...utils}