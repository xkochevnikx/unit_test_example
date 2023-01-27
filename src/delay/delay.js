function delay(callback) {
  return new Promise(resolve => {
    resolve(callback());
  });
}

delay(() => 5 + 5, 1000).then(res => console.log(res));

module.exports = delay;
