
function createNameSpace(name: string) {
  const prefixName = 'el-' + name;
  return prefixName
}

function createBEM(prefixName: string) {
  return function (element?: string, modifier?: string) {
    if (element && modifier) {
      return `${prefixName}__${element}--${modifier}`;
    }
    if (element) {
      return `${prefixName}__${element}`;
    }
    return prefixName;
  }
}

