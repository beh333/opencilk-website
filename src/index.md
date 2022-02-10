---
layout: pages
title: 
path: home
sidebar: none
images:
  placement: background # options: feature, background
  feature: flow-760x400.jpg
  feature-height: h-1/3 # optional. Default = h-48 md:h-1/3
  background: grey-silk-bg.jpg
  thumb: grey-silk-bg.jpg
  align: object-center # object-center (default) - other options at https://tailwindcss.com/docs/object-position
hero:
  title: logo
  subtitle: The language of performance engineering.
  links:
    - title: Get started
      url: "/doc/howto/install/"
      desc: OpenCilk makes it easy to write fast parallel programs.
    - title: Beyond runtime
      url: "/blog/"
      desc: What is performance engineering?
    - title: In the classroom
      url: "/learn/"
      desc: Teach with OpenCilk.
    - title: How to
      url: "/doc/"
      desc: Easily translate existing apps to OpenCilk.
pagination:
  data: collections.post 
  size: 3
  reverse: true
  alias: posts
---

## Writing fast parallel programs is easy with C/C++ and OpenCilk.

OpenCilk is an open-source platform that makes parallel programming a simple extension of serial programming.
 - Efficient compiling makes your OpenCilk program faster.
 - Provably efficient scheduling tunes each execution of your OpenCilk program to its host environment.
 - Provable race-detection guarantees that your OpenCilk program has a deterministic result.