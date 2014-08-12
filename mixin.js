// @preserve mixinjs, copyright Matthew Parke 2014, license https://github.com/mparke/eventsjs/blob/master/LICENSE
(function (window, Array) {
  var slice = Array.prototype.slice;

  /**
  *  Creates a constructor that automatically mixes other modules into a given revealing module
  *  @param {function} Module: the revealing module to be mixed into
  *  @param {...function} any number of mixins to be applied with .call
  *  @return {function} a new module constructor
  */
  function mixin(Module) {
    var MixinModules = slice.call(arguments, 1);
    var length = MixinModules.length;

    return function () {
      var module = Module.apply(this, arguments);

      for (var i = 0; i < length; i++) {
        MixinModules[i].call(module);
      }

      return module;
    };
  }

  if (typeof module === 'object') {
    module.exports = mixin;
  } else if (typeof define === 'function') {
    define(function () { return mixin; });
  } else {
    window.mixin = mixin;
  }
})(window, Array);
