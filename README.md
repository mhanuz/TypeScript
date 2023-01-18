# TYPESCRIPT

## TYPESCRIPT: INTRODUCTION

- Open Source
- Core Object Oriented programming language
- Static and strongly type
- Superset of Javascript
- Compiled: TSC
- Developed and maintain by Microsoft
- It is a set of tools


## TYPESCRIPT: WHY USE TYPESCRIPT
- Error checking at compile time
- Support all Javascript libraries
- Reusability because Of inheritence
- Used in enterprise/large scale application
- Always highlights error at compile time
- Support with intellisense: active hints the code
- Namespace concept: avoid name collisons
- Autocompletion, type checking and source documentation

## JS VS TS

|              Javascript              | Typescript                                                  |
| ------------------------------------ | ----------------------------------------------------------- |
| It is directly run on browser        | It does not, genereates equivalent JS than run on browser   |
| Scripting Language                   | OOP: class, inheritence, interface, generics                |
| Does not optional parameter          | Support optional parameter                                  |
| Highlight error at runtime           | Highlight error during development time                     |
| Does not support module              | Support module                                              |
| Numbers, Strings are objects         | Numbers, Strings are interface                              |
| Does not support generic             | Support Generic                                             |


## 3 layers of typescript component

* Language: comprises elements: syntax, keywords, and type documentation
* TSC: generate equivalent js code of ts,declaration file provide intellisense, you can avoid misusing libraries
* TSLS: assistance feature: automatic refactor, intellisense, code formatting, colorization, signatures

## Installation
+ install node.js 
+ install typescript globally: ``` npm install typescript -g ```
+ verify installation: ``` tsc -v ```
+ Typescript project initialization: ``` tsc --init`` 

## Boilerplate
![alt text](https://i.ibb.co/qmDTr13/typescriptboilerplate.png)

## Tsconfig setup
+ set root dir in tsconfig file: "rootDir./src"
+ set output dir in tsconfig file: "ourDir./output"


to watch file ``` tsc -w ```
