!function(n,e){function t(n){var e=r.call(arguments,1),t=e.length;return function(){for(var r=n.apply(this,arguments),o=0;t>o;o++)e[o].call(r);return r}}var r=e.prototype.slice;"object"==typeof module?define(function(){return t}):"function"==typeof define?module.exports=t:n.Mixin=t}(window,Array);