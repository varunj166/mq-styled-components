<div align="center">

![Banner](images/banner.png 'Banner')

<br />

[![npm](https://img.shields.io/npm/v/mq-styled-components)](https://www.npmjs.com/package/mq-styled-components)
[![Travis (.com) branch](https://img.shields.io/travis/com/varunj166/mq-styled-components/master)](https://travis-ci.com/varunj166/mq-styled-components)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/mq-styled-components)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/varunj166/mq-styled-components)
[![Coveralls github](https://img.shields.io/coveralls/github/varunj166/mq-styled-components)](https://coveralls.io/github/varunj166/mq-styled-components?branch=master)

<br />

</div>

# Mq Styled Components <!-- omit in toc -->

Mq Styled Components is a very simple media query string generator designed to make using the CSS `@media` directive inside of a [Styled Component's](https://www.npmjs.com/package/styled-components) CSS rules ultra-easy.

Other similar libraries seem to have taken the approach of generating the entire media query for you, but I found that to be problematic because not only does it look unfamiliar to those who know CSS well, but you also lose the code-completion that your IDE offers. 

By inserting a media query string inside of a CSS `@media` directive, your code stays clean and you retain the benefits of code-completion.

---

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Default breakpoints](#default-breakpoints)
- [Changing a single breakpoint](#changing-a-single-breakpoint)
- [Changing multiple breakpoints](#changing-multiple-breakpoints)
- [Typescript](#typescript)
- [Running tests](#running-tests)

---

## Installation

Install using npm:

`npm install mq-styled-components`

Or yarn:

`yarn add mq-styled-components`

---

## Usage

Import styled-components and 'Mq' **(note the named import)**:

```javascript
import styled from 'styled-components';
import { Mq } from 'mq-styled-components';
```

Then use `Mq` to retrieve a max-width or min-width media query string inside of a CSS `@media` directive within your CSS rules, inserted into a `${...}` inside the template string:

```javascript
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${Mq.max.md} {
    display: none;
  }
`
```

The call to `Mq.max.md` will return the string: `'(max-width: 768px)'` (with the default 'md' breakpoint being 768px). So, for all window-widths less than or equal to 768px, the div will have a `display: none` css rule applied.

Retrieve max-width media query strings with `Mq.max.XX`, and min-width media query strings with `Mq.min.XX`, where 'XX' is one of:
- 'sm'
- 'md'
- 'lg'
- 'xl'

So, for example, to apply rules for window-widths greater than or equal to 'lg' size (which has a default of 992px), you would use a min-width media query, like this:

```javascript
@media ${Mq.min.lg} {
  /*  Your CSS rules here  */
}
```

**NOTE: All the standard rules of CSS cascading-style rules apply to styled-components. Specifically, if you are setting different rules for different window-widths, the order of your `@media` directives matters. But you should already know that if you're using Styled Components... right?**

---

## Default breakpoints

Mq Styled Components uses the same default breakpoints as Bootstrap.

They are (in pixels):

```json
{
  "sm": 576,
  "md": 768,
  "lg": 992,
  "xl": 1200
}
```

However, unlike Boostrap, you specify if you want a min-width or a max-width media query string, through the use of `Mq.min.XX` or `Mq.max.XX`.

---

## Changing a single breakpoint

Changing a single breakpoint value is very easy with the use of Mq Styled Component's 'setBreakpoint' method.

Use it like this:

```javascript
import { Mq } from 'mq-styled-components';

Mq.setBreakpoint('md', 800);
```

This changes the 'md' breakpoint to 800.

If you want to change multiple breakpoints, see ['changing multiple breakpoints' here](#changing-multiple-breakpoints).

**NOTE: Changing a breakpoint anywhere in your code will change that breakpoint EVERYWHERE in your code. This way, your breakpoints will remain the same no matter where you've used `Mq`.**

---

## Changing multiple breakpoints

You may wish to change multiple breakpoints all at once. Mq Styled Components makes that easy, too, with the use of the 'setBreakpoints' method.

Use it like this:

```javascript
import { Mq } from 'mq-styled-components';

Mq.setBreakpoints({
  md: 800,
  lg: 1050,
  xl: 1400
});
```

- 'Mq.setBreakpoints' accepts an object whose keys are the breakpoints you wish to change, and whose values are the numerical value (in pixels) you want to change each breakpoint to.
- Change just one breakpoint, or change them all -- 'Mq.setBreakpoints' will apply the changes to whichever breakpoints you've specified in the keys of your breakpoints object.
  
**NOTE: Changing breakpoints anywhere in your code will change that breakpoint EVERYWHERE in your code. This way, your breakpoints will remain the same no matter where you've used `Mq`.**

---

## Typescript

Mq Styled Components was written in Typescript, so type definitions are complete and up-to-date.

---

## Running tests

Steps to run tests:

1. Clone the Github repo:
  
    `git clone https://github.com/varunj166/mq-styled-components.git`
  
2. Install dependencies:

    `npm install`
  
3. Run test suites:

    `npm test`