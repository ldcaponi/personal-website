---
title: Using Memoization to Improve Performance of Recursive Function Calls
author: Lou Caponi
slug: "2018-09-26-using-memoization-to-improve-recursion"
date: "September 26, 2018"
description: "This post describes the use of memoization in JavaScript to improve the performance of recursive function calls."
tags:
  - JavaScript
  - Recursion
---

Often times we can use recursion to write a clean and logical solution to a problem. One example is a function which returns the `n`<sup>th</sup> digit of the Fibonacci Sequence.

The Fibonacci Sequence is defined as the sequence of numbers defined by the linear recurrence equation `f(n) = f(n - 1) + f(n - 2)` and `f(0) === 0, f(1) === 1`.

Using this knowledge, we can write up a recursive solution in JavaScript pretty easily:

```javascript
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
```

Notice, `fib` will recursively call itself in a descending fashion, until it reaches its final calls `fib(0) + fib(1)` which will return `0` and `1` respectively.

This is a nice solution visually, but let's look at what happens when we call `fib(3)`:

- `fib(3)` calls `fib(2)` and `fib(1)`
- `fib(2)` calls `fib(1)` and `fib(0)`

Do you notice the issue here? We are calling `fib(1)` an extra time here. This may seem like a trivial example, but in recursion it's important to stop unnecessary calls early on, because they can compound in some nasty ways. How can we stop calling functions that we have already called in the past?

Enter <b>Memoization</b>. According to Wikipedia:

> In computing, _memoization_ or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

So, in a sense, memoization is a simple cache to store the results of previous function calls. In JavaScript, we can implement this with a simple JS object, with keys representing the function parameter, and the value representing the result of the function.

Let's refactor our solution to use memoization:

```javascript
const cache = {};

function fib(n) {
  if (n <= 1) {
    return n;
  }

  //memoization -- cache results first
  if (cache[n - 1] === undefined) {
    cache[n - 1] = fib(n - 1);
  }

  if (cache[n - 2] === undefined) {
    cache[n - 2] = fib(n - 2);
  }

  //only grab values from cache, instead of calling fib over and over again
  return cache[n - 1] + cache[n - 2];
}
```

Do you see? Now, we don't have to call `fib(1)` over and over because we can store it's result in cache first. Consequent calls to `fib(1)` will read from our cache object instead.

Just to prove my point, see how much of a savings we receive by using memoization with `fib(45)`:

- Without Memoization: <b>11,768ms</b> and <b>3,672,623,805</b> function calls
- With Memoization: <b>134ms</b> and <b>46</b> function calls

The time savings here is a huge win, but the amount of function calls saved is even better! Imagine overloading your JS call stack with over 3 million calls when you didn't have to?

Memoization is a great tool to have in your back pocket and will definitely set you apart as an efficient JS developer. Thanks for the read!
