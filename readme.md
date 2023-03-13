# Pope

![](https://img.shields.io/travis/poppinss/pope.svg)
[![Coverage Status](https://coveralls.io/repos/poppinss/pope/badge.svg?branch=master&service=github)](https://coveralls.io/github/poppinss/pope?branch=master)

Pope is a fast, minimal and micro template engine for strings only, it plays well where you want to embed micro templates inside your module.

<details>
<summary> Upgrading from 1.x.x </summary>
The version <strong>2.0.x</strong> has a breaking change, where <code>pope</code> is not the default export, instead exported as a property on the object.

<h4> Earlier </h4>
<pre class="language-javascript">
<code>
const pope = require('pope')
</code>
</pre>

<h4> Now </h4>
<pre class="language-javascript">
<code>
const { pope } = require('pope')
</code>
</pre>
</details>

## Examples

### string interpolation
```javascript
const { pope } = require('pope')
pope('There are {{count}} emails in your inbox', [20])
```

### nested values

```javascript
const { pope } = require('pope')
pope('My name is {{profile.name}} and age is {{profile.age}}', ['Bob', 26])
```

### arrays only

```javascript
const { pope } = require('pope')
pope('There are {{0}} emails in your inbox', [20])
```
