// @preserve mixinjs, copyright Matthew Parke 2014, license https://github.com/mparke/eventsjs/blob/master/LICENSE
(function (window, Array) {
  var slice = Array.prototype.slice;

  function Mixin (Module) {
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
    define(function () { return Mixin; });
  } else if (typeof define === 'function') {
    module.exports = Mixin;
  } else {
    window.Mixin = Mixin;
  }
})(window, Array);
