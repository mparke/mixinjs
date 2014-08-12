mixinjs
=======

A Mixin Helper Module

### Usage
<pre>
  <code>
  function MyRevealingModule() { 
    return { 
      publicMethod: function() {
        console.log('hello public method');
      };
    };
  }
  
  function Mixin1() { this.prop = 'hello world'; }
  function Mixin2() { this.val = 10; }
  
  var MixedConstructor = mixin(MyRevealingModule, Mixin1, Mixin2);
  
  var mixedInstance = MixedConstructor();
  mixedInstance.publicMethod();    // hello public method
  console.log(mixedInstance.prop); // hello world
  console.log(mixedInstance.val);  // 10
  </code>
</pre>

### Notes
- mixins are applied in the order they are defined
- mixins that set property names used by the revealing module will replace the original definition
