# @finepoint/hyperapp-head

Patch Hyperapp `<head>` nodes.

## Install

```
npm i @finepoint/hyperapp-head
```

## Usage

```js
import { patchHead } from '@finepoint/hyperapp-head'

patchHead(
    <head>
        <title>Hello world.</title>
    </head>
)
```

Here are some notes about the implementation:

- It only patches `<title>`, `<meta>`, and `<link>` elements. There may be others (such as `<base>`) but they wont be patched.
- It is not recursive because `<head>` is usually flat. It focuses on matching keys instead, such as `<meta name>`, `<meta property>`, `<link rel>`, and so on.
- There is a `mergeHead(targetHead, head)` function for patching in tools or servers. For example, you have the site's `<head>` and the route page `<head>`, these would need be merged when prerendering.