const forEachAsync = async (data, exec, i = 0) => {
  const item = data[i];
  if (item) {
    await exec(item, i);
    return forEachAsync(data, exec, i + 1);
  }
};

exports.forEachAsync = forEachAsync;
