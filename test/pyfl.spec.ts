﻿"use strict";

import test from "ava";
import pyfl from "../src/index";

console.log(`Yolo , let's try some test!`);

test("should be M", t => t.is(pyfl("喵"), "M"));

test("should be HXMGSZYYZTJZDHHHHHHH", t =>
  t.is(
    pyfl("好笑吗跟傻子一样整天就知道哈哈哈哈哈哈哈"),
    "HXMGSZYYZTJZDHHHHHHH"
  ));

test("should be TBFZX", t => t.is(pyfl("罤夶繙着洗"), "TBFZX"));

test("should be Pure", t => t.is(pyfl("Pure"), "Pure"));

test("should be Made by ❤", t => t.is(pyfl("Made by ❤"), "Made by ❤"));

// Will return origin string
test("أشتون", t => t.is(pyfl("أشتون"), "أشتون"));
