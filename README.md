# shortest-unique-prefix
outputs the shortest unique prefixes of elements in an array

# shortest-unique-prefix [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

## Usage

[![NPM](https://nodei.co/npm/shortest-unique-prefix.png)](https://nodei.co/npm/shortest-unique-prefix/)

### `shortest-unique-prefix(arrayOfStrings, options)`

example usage:

``` javascript
const items = ["5973", "2883", "5808", "7150",
               "3276", "4461", "4147", "8354",
               "7492", "4580", "9620", "5570"]

> shortest-unique-prefix(items)
//returns an array of shortest unique prefixes

>  ["59", "2", "58", "71", "3", "44", "41", "8", "74", "45", "9", "55"]

> shortest-unique-prefix(items, { alias:true })

> { 2: "2883", 3: "3276", 8: "8354", 9: "9620", 41: "4147", 44: "4461", 45: "4580",
    55: "5570", 58: "5808", 59: "5973", 71: "7150", 74: "7492"}

```
