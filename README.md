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
               "7492", "4580", "9620", "5570",
               "2852", "4351", "3811", "9791",
               "8122", "2116", "5281", "7434"]

> shortest-unique-prefix(items)
//returns an array of shortest unique prefixes

> ["7", "3", "dc", "d0", "1", "b", "0", "50", "e", "4", "d8", "59"]

> shortest-unique-prefix(items, { alias:true })

> { 21: "2116", 32: "3276", 38: "3811", 41: "4147", 43: "4351", 44: "4461",
    45: "4580",    52: "5281", 55: "5570", 58: "5808", 59: "5973", 71: "7150",
    81: "8122", 83: "8354", 96: "9620", 97: "9791", 285: "2852", 288: "2883",
    743: "7434", 749: "7492" }

```
