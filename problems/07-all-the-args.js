function allTheArgs(func, ...args) {
  return function () {
    return (value += func(args));
  };
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
