const renameProperty = (obj, oldName, newName) => {
  const oldObj = obj;
  oldObj[newName] = obj[oldName];
  delete oldObj[oldName];
};

module.exports = renameProperty;
