const CustomBlock = function () {
  this.templates = {};
};

CustomBlock.prototype.add = function ({ key, Component }) {
  this.templates[key] = Component;
};
CustomBlock.prototype.remove = function (key) {
  delete this.templates[key];
};
CustomBlock.prototype.find = function (key) {
  return this.templates[key];
};

export default CustomBlock;
