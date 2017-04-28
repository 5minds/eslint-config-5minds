# ESLint config for 5Minds projects

- install with npm install --save-dev eslint-config-5minds
- create a .eslintrc config with

```json
{
    "extends": "5minds"
}
```

Have fun ;-)


# Possible errors

<!-- 1.0 **no-await-in-loop:** disallow `await` inside of loops. -->

<!-- 1.1 **no-compare-neg-zero:** disallow comparing against -0. -->

1.1 **no-cond-assign:** disallow assignment operators in conditional expressions.
```javascript
// good
if (x === 0) {

}
```

```javascript
// bad
if (x = 0) {

}
```

1.2 **no-console:** disallow the use of `console`.

```javascript
// bad
console.log('Hello world');
```

1.3 **no-constant-condition:** disallow constant expressions in conditions.

```javascript
// bad
if (false) {

}
```

1.4 **no-control-regex:** disallow control characters in regular expressions.

```javascript
// bad
const pattern = /\x1f/;
```

1.5 **no-debugger:** disallow the use of `debugger`.

```javascript
// bad
debugger;
```

1.6 **no-dupe-args:** disallow duplicate arguments in `function` definitions.

```javascript
// bad
function foo(a, b, a) {
  console.log('value of the second a:', a);
}
```

1.7 **no-dupe-keys:** disallow duplicate keys in object literals.

```javascript
// bad
const foo {
  bar: 1,
  qux: 2,
  bar: 3,
}
```

1.8 **no-duplicate-case:** disallow duplicate case labels.

```javascript
// bad
switch (weekday) {
  case 'monday':
   	break;
  case 'tuesday':
    break;
  case 'monday':
    break;
  default:
    break;
}
```

1.9 **no-empty:** disallow empty block statements.

```javascript
// bad
function doNothing() {

}
```

1.10 **no-empty-character-class:** disallow empty character classes in regular expressions.

```javascript
// bad
'abcdefg'.match(/^abc[]/); // null
```


1.11 **no-ex-assign:** disallow reassigning exceptions in `catch` clauses.

```javascript
// bad
try {
  parseInt('adf', 10);
} catch (error) {
  error = new Error('You cannot parse letters.');
  throw error;
}
```


1.12 **no-extra-boolean-cast:** disallow unnecessary boolean casts.

```javascript
// bad
function negateNumber(num) {
  if (Boolean(num)) {
    return -1 * num;
  } else {
    throw new Error('missing input');
  }
}

```
```javascript
// good
function negateNumber(num) {
  if (num) {
    return -1 * num;
  } else {
    throw new Error('missing input');
  }
}
```

<!-- 1.15 **no-extra-parens:** disallow unnecessary parentheses. -->

1.13 **no-extra-semi:** disallow unnecessary semicolons.

```javascript
// bad
;
```

1.14 **no-func-assign:** disallow reassigning `function` declarations.

```javascript
// bad
function foo() {

}
foo = 'bar';
```

1.15 **no-inner-declarations:** disallow variable or `function` declarations in nested blocks.

```javascript
const Foo = (function() {
  // good -> This is a function within a function
  function Foo() {

  }
  // good -> This is an instance method(same as declared with ES6-Class)
  Foo.prototype.compare = function compare(otherFoo) {
    return this === otherFoo;
  };
  return Foo;
}());

// good -> this is a global function
function createFoo() {
  return new Foo();
}
```

```javascript
// bad -> function in nested block
if (foo) {
  function bar() {

  }
}
```

1.16 **no-invalid-regexp:** disallow invalid regular expression strings in `RegExp` constructors.

```javascript
// good
'bar'.matches(/[a-z]*/);
```

```javascript
// bad
'foo'.matches(/]a-z[*/);
```

1.17 **no-irregular-whitespace:** disallow irregular whitespace outside of strings and comments.
Various whitespace characters can be inputted by programmers by mistake for example from copying or keyboard shortcuts. Pressing Alt + Space on OS X adds in a non breaking space character for example.

1.18 **no-obj-calls:** disallow calling global object properties as functions.

```javascript
// bad
Math();
```

1.19 **no-prototype-builtins:** disallow calling some `Object.prototype` methods directly on objects.

```javascript
// good
foo.hasOwnProperty('bar');
```

```javascript
// bad
Object.prototype.hasOwnProperty.call(foo, 'bar');

```

1.20 **no-regex-spaces:** disallow multiple spaces in regular expressions.

```javascript
// good
'  '.match(/ {2}/);

// better
'  '.match(/\s{2}/);
```
```javascript
// bad
'  '.match(/  /);
```

1.21 **no-sparse-arrays:** disallow sparse arrays.

```javascript
// good
const colors = [ "red", "blue", ];
colors.length === 2; // true

```
```javascript
// bad
const colors = [ "red", ,"blue"];
```

<!--1.25 **no-template-curly-in-string:** disallow template literal placeholder syntax in regular strings. -->

1.22 **no-unexpected-multiline:** disallow confusing multiline expressions.

```javascript
// good
const hello = 'world';
[1, 2, 3].forEach(addNumber);

```
```javascript
// bad
const hello = 'world'
[1, 2, 3].forEach(addNumber);
```

1.23 **no-unreachable:** disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.

```javascript
// good
function foo() {
  console.log("done");
return true;
}
```
```javascript
// bad
function foo() {
  return true;
  console.log("done");
}
```

1.24 **no-unsafe-finally:** disallow control flow statements in `finally` blocks.

```javascript
// bad -> We expect this function to throw an error, then return
(() => {
  try {
    throw new Error("Try"); // error is thrown but suspended until finally block ends
  } finally {
    return 3; // 3 is returned before the error is thrown, which we did not expect
  }
})();
```

1.25 **no-unsafe-negation:** disallow negating the left operand of relational operators.

```javascript
// good
if (!(key in object)) {
  // key is not in object
}
```
```javascript
// bad
if (!key in object) {
  // equivalent to (!key) in object
}
```

1.26 **use-isnan:** require calls to `isNaN()` when checking for `NaN`.

```javascript
// good
if (isNaN(foo)) {

}
```
```javascript
// bad
if (foo == NaN) {

}
 ```

<!--1.31 **valid-jsdoc:** enforce valid JSDoc comments. -->

1.27 **valid-typeof:** enforce comparing `typeof` expressions against valid strings.

```javascript
// good
if (typeof foo === 'string') {

}
```
```javascript
// bad
if (typeof foo === 'strnng') {

}
```

# Best practices

<!-- 2.1 **accessor-pairs:** enforce getter and setter pairs in objects. -->


2.1 **array-callback-return:** enforce `return` statements in callbacks of array methods.

```javascript
// good
list.forEach((element) => {
  process(element);
});

// good
list.map((element) => {
  return process(element);
});
```

```javascript
// bad
list.map((element) => {
  process(element);
});
```

2.2 **block-scoped-var:** enforce the use of variables within the scope they are defined.

```javascript
// good
function doIf() {
  var build;

  if (true) {
    build = true;
  }

console.log(build);
}
```
```javascript
// bad
function doIf() {
  if (true) {
    var build = true;
  }

  console.log(build);
}
 ```

<!-- 2.4 **class-methods-use-this:** enforce that class methods utilize `this`. -->


<!-- 2.5 **complexity:** enforce a maximum cyclomatic complexity allowed in a program. -->

2.3 **consistent-return:** require `return` statements to either always or never specify values.

```javascript
// good
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return false;
  }
}
```
```javascript
// bad
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return;
  }
}
```

2.4 **curly:** enforce consistent brace style for all control statements.

```javascript
// good
if (foo) {
  bar();
}
```
```javascript
// bad
if (foo)
  bar();
else
  baz();
```

2.5 **default-case:** require `default` cases in `switch` statements.

```javascript
// good
switch (weekday) {
  case 'Monday':
    break;

  default:
    break;
}
```
```javascript
// bad
switch (weekday) {
  case 'Monday':
    break;
}
```

2.6 **dot-location:** enforce consistent newlines before property dots.

```javascript
// good
document
.documentElement
```
```javascript
// bad
document.
documentElement
```

2.7 **dot-notation:** enforce dot notation whenever possible.

```javascript
// good
object.foo = true;
object[foo] = true;
object['foo bar'] = true;
```
```javascript
// bad
object['foo'] = true;
```

2.8 **eqeqeq:** require the use of `===` and `!==` except for null-checks.

```javascript
// good
if (foo == null) {

}
if (bar === 0) {

}
```
```javascript
// bad
if (foo == 0) {

}
```


2.9 **guard-for-in:** require `for-in` loops to include an `if` statement.

```javascript
// good
for (key in foo) {
  if (Object.prototype.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}

// better
Object.keys(foo).forEach((key) => {
  doSomething(key);
});
```
```javascript
// bad
for (key in foo) {
  doSomething(key);
}
```

2.10 **no-alert:** disallow the use of `alert`, `confirm`, and `prompt`.

```javascript
// bad
alert('Hello world');
```

2.11 **no-caller:** disallow the use of `arguments.caller` or `arguments.callee`.

```javascript
// good
function factorial (n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);
```
```javascript
// bad
[1, 2, 3, 4, 5].map(function(n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```

2.12 **no-case-declarations:** disallow lexical declarations in case clauses.

```javascript
// good
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  default: {
    class C {}
  }
}
```
```javascript
// bad
switch (foo) {
  case 1:
    let x = 1;
    break;
  default:
    class C {}
}
```

<!-- 2.16 **no-div-regex:** disallow division operators explicitly at the beginning of regular expressions. -->

2.13 **no-else-return:** disallow `else` blocks after `return` statements in `if` statements.

```javascript
// good
function foo() {
  if (x) {
    return y;
  }
  var t = "foo";
}
```
```javascript
// bad
function foo() {
  if (x) {
    return y;
  } else {
    var t = "foo";
  }
}
```

2.14 **no-empty-function:** disallow empty functions.

```javascript
// bad
function emptyFunc() {

}
```

2.15 **no-empty-pattern:** disallow empty destructuring patterns.

```javascript
// good -> sets default value
var {a= {}} = foo;
```
```javascript
// bad -> does not create a var
var {a: {}} = foo;
```

<!-- 2.20 **no-eq-null:** disallow `null` comparisons without type-checking operators. -->

2.16 **no-eval:** disallow the use of `eval()`.
```javascript
// good
class Foo {

}
```
```javascript
// bad
eval('class Foo {}');
```

2.17 **no-extend-native:** disallow extending native types.

```javascript
// bad
Object.prototype.foo = 'bar';
```

2.18 **no-extra-bind:** disallow unnecessary calls to `.bind()`.

```javascript
// good
var boundGetName = (function getName() {
  return this.name;
}).bind({ name: "ESLint" });

console.log(boundGetName());
```
```javascript
// bad  -> useless
var boundGetName = (function getName() {
  return "ESLint";
}).bind({ name: "ESLint" });

console.log(boundGetName());
```

2.19 **no-extra-label:** disallow unnecessary labels.

```javascript
// bad
A: while (a) {
  break A;
}
```

2.20 **no-fallthrough:** disallow fallthrough of `case` statements.

```javascript
// good
switch(foo) {
  case 1:
    doSomething();
    break;

  case 2:
    doSomething();
}
```
```javascript
// bad
switch(foo) {
  case 1:
    doSomething();

  case 2:
    doSomething();
}
```

2.21 **no-floating-decimal:** disallow leading or trailing decimal points in numeric literals.

  ```javascript
// good
var num = 0.5;
var num = 2.0;
var num = -0.7;
```
```javascript
// bad
var num = .5;
var num = 2.;
var num = -.7;
```

2.22 **no-global-assign:** disallow assignments to native objects or read-only global variables.

```javascript
// bad
undefined = null;
```

<!-- 2.28 **no-implicit-coercion:** disallow shorthand type conversions. -->


<!-- 2.29 **no-implicit-globals:** disallow variable and `function` declarations in the global scope. -->

2.23 **no-implied-eval:** disallow the use of `eval()`-like methods.

```javascript
// good
setTimeout("alert('This is like eval.');", 100);
```
```javascript
// bad
setTimeout(() => {
  alert('This is not like eval.');
}, 100);
```
<!-- 2.31 **no-invalid-this:** disallow `this` keywords outside of classes or class-like objects. -->

2.24 **no-iterator:** disallow the use of the `__iterator__` property.

```javascript
// bad
Foo.prototype.__iterator__ = function() {
  return new FooIterator(this);
};
```

2.25 **no-labels:** disallow labeled statements.

```javascript
// bad
A: while (a) {
  break A;
}
```

2.26 **no-lone-blocks:** disallow unnecessary nested blocks.

```javascript
// good
function bar() {
  baz();
}
```
```javascript
// bad
function bar() {
  {
    baz();
  }
}
```

2.27 **no-loop-func:** disallow `function` declarations and expressions inside loop statements.
```javascript
// good
do {
  function a() { return i; };
  a();
} while (i);
```

<!-- 2.36 **no-magic-numbers:** disallow magic numbers. -->

2.28 **no-multi-spaces:** disallow multiple spaces.

2.29 **no-multi-str:** disallow multiline strings.

```javascript
// good
const blindText = `Lorem ipsum
et dolor`;
```
```javascript
// good
const blindText = 'Lorem ipsum et dolor';
```
```javascript
// bad
const blindText = 'Lorem ipsum \
et dolor';
```

2.30 **no-new:** disallow `new` operators outside of assignments or comparisons.

```javascript
// good
var thing = new Thing();

Thing();
```
```javascript
// bad
new Thing();
```

2.31 **no-new-func:** disallow `new` operators with the `Function` object.

```javascript
// bad
var x = new Function("a", "b", "return a + b");
```

2.32 **no-new-wrappers:** disallow `new` operators with the `String`, `Number`, and `Boolean` objects.

```javascript
// good
const stringObject = 'Hello world';
```
```javascript
// bad
const stringObject = new String('Hello world');
```

2.33 **no-octal:** disallow octal literals.

```javascript
// bad
const num = 071;

```

2.34 **no-octal-escape:** disallow octal escape sequences in string literals.

```javascript
// good
const foo = "Copyright \u00A9";   // unicode
```
```javascript
// bad
const foo = "Copyright \251"; // octal

```

2.35 **no-param-reassign:** disallow reassigning `function` parameters.

```javascript
// bad
function foo(bar) {
  bar++;
}
```

2.36 **no-proto:** disallow the use of the `__proto__` property.

```javascript
// good
const a = Object.getPrototypeOf(obj);
```
```javascript
// bad
const a = obj.__proto__;
```

2.37 **no-redeclare:** disallow variable redeclaration.

  ```javascript
// good
let a = 3;
a = 10;
```
```javascript
// bad
let a = 3;
let a = 10;
```

<!-- 2.47 **no-restricted-properties:** disallow certain properties on certain objects. -->


2.38 **no-return-assign:** disallow assignment operators in `return` statements.

```javascript
// bad
function doSomething() {
  return foo = bar + 2;
}

```

<!-- 2.49 **no-return-await:** disallow unnecessary `return await`. -->


2.39 **no-script-url:** disallow `javascript:` urls.

```javascript
// bad
location.href = "javascript:void(0)";
```

2.40 **no-self-assign:** disallow assignments where both sides are exactly the same.

```javascript
// good
foo = bar;
```
```javascript
// bad
foo = foo;
```

2.41 **no-self-compare:** disallow comparisons where both sides are exactly the same.

```javascript
// bad
if (x === x) {

}
```

2.42 **no-sequences:** disallow comma operators.

```javascript
// good -> init and update of for is an exception
for (i = 0, j = 10; i < j; i++, j--);
```
```javascript
// bad -> use && instead
while (val = foo(), val < 42);
```

2.43 **no-throw-literal:** disallow throwing literals as exceptions.

  ```javascript
// good
throw new Error('error');
```
```javascript
// bad
throw 'error';
```

<!-- 2.55 **no-unmodified-loop-condition:** disallow unmodified loop conditions. -->

2.44 **no-unused-expressions:** disallow unused expressions.

  ```javascript
// good
a ? b() : c();
```
```javascript
// bad
a ? b : 0;
```

2.45 **no-unused-labels:** disallow unused labels.

```javascript
// good
A: {
  if (foo()) {
    break A;
  }
  bar();
}
```
```javascript
// bad
A: var foo = 0;
```


2.46 **no-useless-call:** disallow unnecessary calls to `.call()` and `.apply()`.

```javascript
// good
foo.call(obj, 1, 2, 3);
```
```javascript
// bad
foo.call(undefined, 1, 2, 3);
```

2.47 **no-useless-concat:** disallow unnecessary concatenation of literals or template literals.

```javascript
// good
const a = a + '1';
```
```javascript
// bad
const a = `some` + `string`;
```

2.48 **no-useless-escape:** disallow unnecessary escape characters.

```javascript
// bad
let foo = "hol\a"; // > foo = "hola"
```


2.49 **no-useless-return:** disallow redundant return statements.
```javascript
// good
function foo() {
  doSomething();
}
```
```javascript
// bad
function foo() {
  doSomething();
  return;
}
```

2.50 **no-void:** disallow `void` operators.

```javascript
// bad
var foo = void bar();
```

<!-- 2.63 **no-warning-comments:** disallow specified warning terms in comments. -->

2.51 **no-with:** disallow `with` statements.

```javascript
// bad
with (point) {
  r = Math.sqrt(x * x + y * y); // is r a member of point?
}
```

<!-- 2.65 **prefer-promise-reject-errors:** require using Error objects as Promise rejection reasons. -->

2.52 **radix:** enforce the consistent use of the radix argument when using `parseInt()`.

```javascript
// good
parseInt('2000', 10);
```
```javascript
// bad
parseInt('2000');
```

<!-- 2.67 **require-await:** disallow async functions which have no `await` expression. -->

2.53 **vars-on-top:** require `var` declarations to be placed at the top of their containing scope.

```javascript
// good
function doSomething() {
  var first;
  var second;
  if (true) {
    first = true;
  }
}
```
```javascript
// bad
function doSomething() {
  var first;
  if (true) {
    first = true;
  }
  var second;
}
```

2.54 **wrap-iife:** require parentheses around immediate `function` invocations.

```javascript
// good
var x = (function () { return { y: 1 };}());
```
```javascript
// bad
var x = function () { return { y: 1 };}();
var x = (function () { return { y: 1 };})();
```

2.55 **yoda:** disallow “Yoda” conditions.

```javascript
// good
if (color === 'red') {
  // ...
}
```
```javascript
// bad
if ('red' === color) {
  // ...
}
```

# Strict

<!-- 3.1 **strict:** require or disallow strict mode directives. -->

# Variables

<!-- 4.1 **init-declarations:** require or disallow initialization in variable declarations. -->


<!-- 4.2 **no-catch-shadow:** disallow `catch` clause parameters from shadowing variables in the outer scope. -->


4.1 **no-delete-var:** disallow deleting variables.

```javascript
// bad
var x;
delete x;
```

4.2 **no-label-var:** disallow labels that share a name with a variable.

```javascript
// bad
var x = foo;
function bar() {
x:
  for (;;) {
    break x;
  }
}
```

<!-- 4.5 **no-restricted-globals:** disallow specified global variables. -->



4.3 **no-shadow:** disallow variable declarations from shadowing variables declared in the outer scope.

```javascript
// bad
var a = 3;
function b() {
  var a = 10;
}
```

4.4 **no-shadow-restricted-names:** disallow identifiers from shadowing restricted names.

```javascript
// bad
function NaN(){}
```

4.5 **no-undef:** disallow the use of undeclared variables unless mentioned in `/*global */` comments.

```javascript
// good
const b = 10;
```
```javascript
// bad
b = 10;
```


4.6 **no-undef-init:** disallow initializing variables to `undefined`.

```javascript
// good
const undef = undefined;
```
```javascript
// bad
let undef = undefined;
```

<!--1.114 **no-undefined:** disallow the use of `undefined` as an identifier. -->

4.7 **no-unused-vars:** disallow unused variables.

```javascript
// good
var y = 10;
processSomehow(y);
```
```javascript
// bad
var y = 10;
y = 2;
```


4.8 **no-use-before-define:** disallow the use of variables before they are defined.

```javascript
// bad
processSomehow(y);
var y = 10;
```

# Node.Js and CommonJS

<!-- 4.117 **callback-return:** require `return` statements after callbacks. -->

5.1 **global-require:** require `require()` calls to be placed at top-level module scope.

```javascript
// good
var fs = require("fs");
```
```javascript
// bad
function foo() {
  if (condition) {
    var fs = require("fs");
  }
}
```

<!-- 4.119 **handle-callback-err:** require error handling in callbacks. -->



<!-- 4.120 **no-mixed-requires:** disallow `require` calls to be mixed with regular variable declarations. -->



5.2 **no-new-require:** disallow `new` operators with calls to `require`.

```javascript
// good
var AppHeader = require('app-header');
var appHeader = new AppHeader();
```
```javascript
// bad
var appHeader = new require('app-header');
```

5.3 **no-path-concat:** disallow string concatenation with `__dirname` and `__filename`.

```javascript
// good
var fullPath = path.join(__dirname, "foo.js");
```
```javascript
// bad
var fullPath = __dirname + "/foo.js";
```

<!-- 4.123 **no-process-env:** disallow the use of `process.env`. -->

<!-- 4.124 **no-process-exit:** disallow the use of `process.exit()`. -->

<!-- 4.125 **no-restricted-modules:** disallow specified modules when loaded by `require`. -->

<!-- 4.126 **no-sync:** disallow synchronous methods. -->

# Stylistic Issues

6.1 **array-bracket-spacing:** enforce no spacing inside array brackets.

```javascript
// good
var arr = ['foo', 'bar'];
var [x, y] = z;
```
```javascript
// bad
var arr = [ 'foo', 'bar' ];
var [ x, y ] = z;
```

6.2 **block-spacing:** enforce consistent spacing inside single-line blocks.

```javascript
// good
function foo() { return true; }
if (foo) { bar = 0; }
```
```javascript
// bad
function foo() {return true;}
if (foo) {bar = 0;}
```

6.3 **brace-style:** enforce consistent brace style for blocks(1TBS).

```javascript
// good
if (foo) {
  bar();
} else {
  baz();
}
```
```javascript
// bad
if (foo) {
  bar();
}
else {
  baz();
}
```


6.4 **camelcase:** enforce camelcase naming convention.

```javascript
// good
const camelCase = 'good';
```
```javascript
// bad
const snake_case = 'bad';
```

<!-- 6.131 **capitalized-comments:** enforce or disallow capitalization of the first letter of a comment. -->

6.5 **comma-dangle:** require or disallow trailing commas.

```javascript
// good
const foo = {
  bar: 'baz',
  qux: 'quux',
};
```
```javascript
// bad
const foo = {
  bar: 'baz',
  qux: 'quux'
};
```


6.6 **comma-spacing:** enforce consistent spacing before and after commas.

```javascript
// good
const arr = [1, 2];
```
```javascript
// bad
const arr = [1 , 2];
```


6.7 **comma-style:** enforce consistent comma style.

```javascript
// good
function bar() {
  return {
    'a': 1,
    'b:': 2
  };
}
```
```javascript
// bad
function bar() {
  return {
    'a': 1
    ,'b:': 2
  };
}
```


6.8 **computed-property-spacing:** enforce consistent spacing inside computed property brackets.

```javascript
// good
obj[key]
```
```javascript
// bad
obj[ key]
```

<!-- 6.136 **consistent-this:** enforce consistent naming when capturing the current execution context. -->

6.9 **eol-last:** require or disallow newline at the end of files.

<!-- 6.138 **func-call-spacing:** require or disallow spacing between function identifiers and their invocations. -->

6.10 **func-name-matching:** require function names to match the name of the variable or property to which they are assigned.

```javascript
// good
var foo = function bar() {};
```
```javascript
// bad
var foo = function foo() {};
```


6.11 **func-names:** require or disallow named `function` expressions.

```javascript
// good
arr.filter(function isEven(a) {
  return (a % 2) === 0;
});
```
```javascript
// bad
arr.filter(function(a) {
  return (a % 2) === 0;
});
```

<!-- 6.141 **func-style:** enforce the consistent use of either `function` declarations or expressions. -->

<!-- 6.142 **id-blacklist:** disallow specified identifiers. -->

<!-- 6.143 **id-length:** enforce minimum and maximum identifier lengths. -->

<!-- 6.144 **id-match:** require identifiers to match a specified regular expression. -->

6.12 **indent:** enforce consistent indentation(2 spaces).

<!-- 6.146 **jsx-quotes:** enforce the consistent use of either double or single quotes in JSX attributes. -->

6.13 **key-spacing:** enforce consistent spacing between keys and values in object literal properties.

  ```javascript
// good
var obj = { "foo": 42 };

```
```javascript
// bad
var obj = { "foo" : 42 };
```


6.14 **keyword-spacing:** enforce consistent spacing before and after keywords.

```javascript
// good
if (foo) {
  //...
} else if (bar) {
  //...
} else {
  //...
}
```
```javascript
// bad
if (foo) {
  //...
}else if (bar) {
  //...
} else{
  //...
}
```


<!-- 6.149 **line-comment-position:** enforce position of line comments. -->


6.15 **linebreak-style:** enforce consistent linebreak style(unix -> LF instead of CRLF)



<!-- 6.151 **lines-around-comment:** require empty lines around comments. -->



<!-- 6.152 **lines-around-directive:** require or disallow newlines around directives. -->

<!-- 6.153 **max-depth:** enforce a maximum depth that blocks can be nested. -->



6.16 **max-len:** enforce a maximum line length of 100 characters.

<!--  6.155 **max-lines:** enforce a maximum number of lines per file. -->

<!-- 300 -->

<!-- 6.156 **max-nested-callbacks:** enforce a maximum depth that callbacks can be nested. -->



<!-- 6.157 **max-params:** enforce a maximum number of parameters in function definitions. -->



<!-- 6.158 **max-statements:** enforce a maximum number of statements allowed in function blocks. -->



<!-- 6.159 **max-statements-per-line:** enforce a maximum number of statements allowed per line. -->



<!-- 6.160 **multiline-ternary:** enforce newlines between operands of ternary expressions. -->



6.17 **new-cap:** require constructor names to begin with a capital letter.

```javascript
// good
const c = new Constructor();
```
```javascript
// bad
const c = new constructor();
```


6.18 **new-parens:** require parentheses when invoking a constructor with no arguments.

```javascript
// good
const c = new Constructor();
```
```javascript
// bad
const c = new Constructor;
```

<!-- 6.163 **newline-after-var:** require or disallow an empty line after variable declarations. -->

<!-- 6.164 **newline-before-return:** require an empty line before `return` statements. -->

6.19 **newline-per-chained-call:** require a newline after each call in a method chain.

```javascript
// good
doSomething()
.then(()=> {
  // ..
});

```
```javascript
// bad
doSomething().then(()=> {
  // ..
});
```

6.20 **no-array-constructor:** disallow `Array` constructors.

```javascript
// bad
new Array(0, 1, 2)
```

<!-- 6.167 **no-bitwise:** disallow bitwise operators. -->

6.21 **no-continue:** disallow `continue` statements.
```javascript
// bad
continue;
```

<!-- 6.169 **no-inline-comments:** disallow inline comments after code. -->

6.22 **no-lonely-if:** disallow `if` statements as the only statement in `else` blocks.

```javascript
// good
if (foo) {
  // ...
} else if (bar) {
    // ...
  }
}
```
```javascript
// bad
if (foo) {
  // ...
} else {
  if (bar) {
    // ...
  }
}
```


6.23 **no-mixed-operators:** disallow mixed binary operators.

```javascript
// good
let i = 2 + (2 * 2);
```
```javascript
// bad
let i = 2 + 2 * 2;
```


6.24 **no-mixed-spaces-and-tabs:** disallow mixed spaces and tabs for indentation.

6.25 **no-multi-assign:** disallow use of chained assignment expressions.

```javascript
// bad
var a = b = c = 5;
```

6.26 **no-multiple-empty-lines:** disallow multiple empty lines.

```javascript
// good
doSomething();

doSomeOtherThing();
yetAnotherThing();
```
```javascript
// bad
doSomething();


doSomeOtherThing();
```
<!-- 6.175 **no-negated-condition:** disallow negated conditions. -->



6.27 **no-nested-ternary:** disallow nested ternary expressions.

```javascript
// bad
var foo = bar ? baz : qux === quxx ? bing : bam;
```


6.28 **no-new-object:** disallow `Object` constructors.

```javascript
// good
var myObject = {};
```
```javascript
// bad
var myObject = new Object();
```

<!-- 6.178 **no-plusplus:** disallow the unary operators `++` and `--`. -->

6.29 **no-restricted-syntax:** disallow specified syntax(e.g. debugger, with, labels)

<!-- 6.180 **no-tabs:** disallow all tabs. -->

<!-- 6.181 **no-ternary:** disallow ternary operators. -->

6.30 **no-underscore-dangle:** disallow dangling underscores in identifiers.

```javascript
// bad
var _foo;
```

6.31 **no-unneeded-ternary:** disallow ternary operators when simpler alternatives exist.

```javascript
// good
const a = Boolean(condition);
```
```javascript
// bad
const a = (condition) ? true : false;
```

6.32 **no-whitespace-before-property:** disallow whitespace before properties.

```javascript
// good
foo.bar.baz.quz
```
```javascript
// bad
foo. bar .baz . quz
```

<!-- 6.186 **nonblock-statement-body-position:** enforce the location of single-line statements. -->

<!-- 6.187 **object-curly-newline:** enforce consistent line breaks inside braces. -->

6.33 **object-curly-spacing:** enforce consistent spacing inside braces.

```javascript
// good
var obj = {'foo': 'bar'};
```
```javascript
// bad
var obj = { 'foo': 'bar' };
```

6.34 **object-property-newline:** enforce placing object properties on separate lines.

```javascript
// good
var obj = {
  foo: "foo",
  bar: "bar",
  baz: "baz"
};
```
```javascript
// bad
var obj = {foo: "foo", bar: "bar", baz: "baz"};
```

6.35 **one-var:** enforce variables to be declared separately in functions.

```javascript
// good
var bar;
var baz;
```
```javascript
// bad
var bar, baz;
```

6.36 **one-var-declaration-per-line:** require or disallow newlines around variable declarations.

```javascript
// good
const a = 0,
  b = 0;
```
```javascript
// bad
const a = 0,  b = 0;
```

6.37 **operator-assignment:** require or disallow assignment operator shorthand where possible.

```javascript
// good
x += y;
```
```javascript
// bad
x = x + y;
```

<!-- 6.193 **operator-linebreak:** enforce consistent linebreak style for operators. -->

6.38 **padded-blocks:** disallow padding within blocks.

```javascript
// good
if (a) {
  b();
}
```
```javascript
// bad
if (a) {

  b();

}
```

6.39 **quote-props:** require quotes around object literal property names if needed, otherwise forbid them.

```javascript
// good
var object1 = {
  "a-b": 0,
  "0x0": 0,
  "1e2": 0,
  foo: 0,
};
```
```javascript
// bad
var object = {
  "a": 0,
  "0": 0,
  "true": 0,
  "null": 0
};
```

6.40 **quotes:** enforce the consistent use of single quotes. Template-Strings are still allowed(if they contain a JS-Expression).

```javascript
// good
const hw = 'Hello world';
// good
const hw2 = `${greet()} world`;
```
```javascript
// bad
const hw = "Hello world";
// bad
const hw2 = `Hello world`;
```

<!-- 6.197 **require-jsdoc:** require JSDoc comments. -->

6.41 **semi:** require semicolons instead of ASI(automatic semicolon insertion).

```javascript
// good
var name = "ESLint";
```
```javascript
// bad
var name = "ESLint"
```

6.42 **semi-spacing:** enforce consistent spacing before and after semicolons.

```javascript
// good
var foo;
```
```javascript
// bad
var foo ;
```

<!-- 6.200 **sort-keys:** require object keys to be sorted. -->

<!-- 6.201 **sort-vars:** require variables within the same declaration block to be sorted. -->

6.43 **space-before-blocks:** enforce consistent spacing before blocks.

```javascript
// good
if (a) {
  b();
}
```
```javascript
// bad
if (a){
  b();
}
```

6.44 **space-before-function-paren:** disallow spacing before `function` definition opening parenthesis(except for anonymous functions).

```javascript
// good
function foo() {
  return function () {

  }
};

```
```javascript
// bad
function foo () {
  // ...
};

```

6.45 **space-in-parens:** enforce consistent spacing inside parentheses.

```javascript
// good
foo('bar');
```
```javascript
// bad
foo( 'bar');
foo('bar' );
foo( 'bar' );
```

6.46 **space-infix-ops:** require spacing around infix operators.

```javascript
// good
a + b
  ```
```javascript
// bad
a+b
```

6.47 **space-unary-ops:** enforce consistent spacing before or after unary operators.

```javascript
// good
typeof (foo);
```
```javascript
// bad
typeof(foo);
```

6.48 **spaced-comment:** enforce consistent spacing after the `//` or `/*` in a comment.

```javascript
// good
// This is a comment with a whitespace at the beginning
```
```javascript
// bad
//This is a comment with no whitespace at the beginning
```

<!-- 6.208 **template-tag-spacing:** require or disallow spacing between template tags and their literals. -->

6.49 **unicode-bom:** require or disallow Unicode byte order mark (BOM).

The Unicode Byte Order Mark (BOM) is used to specify whether code units are big endian or little endian. That is, whether the most significant or least significant bytes come first. UTF-8 does not require a BOM because byte ordering does not matter when characters are a single byte. Since UTF-8 is the dominant encoding of the web, we make "never" the default option.

<!-- 1.210 **wrap-regex:** require parenthesis around regex literals. -->

# ECMAScript 6


7.1 **arrow-body-style:** require braces around arrow function bodies.

```javascript
// good
const foo = () => {
  return 0;
};
```
```javascript
// bad
const foo = () => 0;
```

<!-- 7.211 **arrow-parens:** require parentheses around arrow function arguments. -->

7.2 **arrow-spacing:** enforce consistent spacing before and after the arrow in arrow functions.
```javascript
// good
() => {};
```
```javascript
// bad
()=> {};
() =>{};
()=>{};
```


7.3 **constructor-super:** require `super()` calls in constructors.
```javascript
// good
class A {
  constructor() { }
}
// good
class A extends B {
  constructor() {
    super();
  }
}
```
```javascript
// bad
class A {
  constructor() {
    super();
  }
}
// bad
class A extends B {
  constructor() { }
}
```


7.4 **generator-star-spacing:** enforce consistent spacing behind `*` operators in generator functions.
```javascript
// good
function* generator() {}
```
```javascript
// bad
function *generator() {}
```


7.5 **no-class-assign:** disallow reassigning class members.
```javascript
// good
let A = class A { }
A = 0;

```
```javascript
// bad
class A { }
A = 0;
```


7.6 **no-confusing-arrow:** disallow arrow functions where they could be confused with comparisons.
```javascript
// good
var x = a => 1 ? 2 : 3;
```
```javascript
// bad
var x = a => { return 1 ? 2 : 3; };
```


7.7 **no-const-assign:** disallow reassigning `const` variables.
```javascript
// bad
const a = 0;
a = 1;
```


7.8 **no-dupe-class-members:** disallow duplicate class members.
```javascript
// bad
class Foo {
  bar() { }
  bar() { }
}
```


7.9 **no-duplicate-imports:** disallow duplicate module imports.
```javascript
// good
import {merge, find} from 'module';
```
```javascript
// bad
import {merge} from 'module';
import {find} from 'module';
```


7.10 **no-new-symbol:** disallow `new` operators with the `Symbol` object.

```javascript
// bad
var foo = new Symbol('foo');
```

<!-- 7.221 **no-restricted-imports:** disallow specified modules when loaded by `import`. -->

7.11 **no-this-before-super:** disallow `this`/`super` before calling `super()` in constructors.

```javascript
// good
class A extends B {
  constructor() {
    super();
    this.a = 0;
  }
}
```
```javascript
// bad
class A extends B {
  constructor() {
    this.a = 0;
    super();
  }
}
```

7.12 **no-useless-computed-key:** disallow unnecessary computed property keys in object literals.

```javascript
// good
var a = { x: 0 };
```
```javascript
// bad
var a = { ['x']: 0 };
  ```

7.13 **no-useless-constructor:** disallow unnecessary constructors.

```javascript
// good
class A {
  constructor () {
    doSomething();
  }
}
```
```javascript
// bad
class A {
  constructor () {
  }
}
```

7.14 **no-useless-rename:** disallow renaming import, export, and destructured assignments to the same name.

```javascript
// good
import { foo } from "bar";
```
```javascript
// bad
import { foo as foo } from "bar";
```

7.15 **no-var:** require `let` or `const` instead of `var`.

```javascript
// good
let foo;
const bar;
```
```javascript
// bad
var qux;
```

7.16 **object-shorthand:** require or disallow method and property shorthand syntax for object literals.

```javascript
// good
var foo = {
  "bar-baz": function() {},
  "qux": qux
};
```
```javascript
// bad
var foo = {
  "bar-baz"() {}
};
```

7.17 **prefer-arrow-callback:** require arrow functions as callbacks.

```javascript
// good
app.get((req, res, next) => {
  res.send(this.response);
});
```
```javascript
// bad
app.get(function (req, res, next) {
  res.send(this.response); // this is not what you might expect here
});
```

7.18 **prefer-const:** require `const` declarations for variables that are never reassigned after declared.

```javascript
// good
const pi = 3.14;
```
```javascript
// bad
let pi = 3.14
```

<!-- 7.230 **prefer-destructuring:** require destructuring from arrays and/or objects. -->

7.19 **prefer-numeric-literals:** disallow `parseInt()` in favor of binary, octal, and hexadecimal literals.

```javascript
// bad
parseInt("111110111", 2) === 503;
```

7.20 **prefer-rest-params:** require rest parameters instead of `arguments`.

```javascript
// good
function foo(...args) {
  console.log(args);
}
```
```javascript
// bad
function foo() {
  console.log(arguments);
}
```

7.21 **prefer-spread:** require spread operators instead of `.apply()`.

```javascript
// good
foo(...args);
```
```javascript
// bad
foo.apply(undefined, args);
```

7.22 **prefer-template:** require template literals instead of string concatenation.
```javascript
// good
var str = `Hello ${name}!`;
```
```javascript
// bad
var str = 'Hello, ' + name + '!';
```

7.23 **require-yield:** require generator functions to contain `yield`.

```javascript
// good
function* foo() {
  yield 5;
  return 10;
}

```
```javascript
// bad
function* foo() {
  return 10;
}
```

7.24 **rest-spread-spacing:** enforce spacing between rest and spread operators and their expressions.
```javascript
// good
fn(...args)
```
```javascript
// bad
fn(... args)
```

<!-- 7.237 **sort-imports:** enforce sorted import declarations within modules. -->

<!-- 7.238 **symbol-description:** require symbol descriptions. -->

7.25 **template-curly-spacing:**  disallow spacing around embedded expressions of template strings.

```javascript
// good
`hello, ${people.name}!`;
```
```javascript
// bad
`hello, ${ people.name}!`;
```

7.26 **yield-star-spacing:** require spacing after the `*` in `yield*` expressions.

```javascript
// good
function* generator() {
  yield* other();
}
```
