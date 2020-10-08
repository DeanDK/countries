## Motivation

This project is purely made as a proof of concept for React Clean Architecture, inspired by [Trading Card Manager](https://github.com/mtg-community/trading-card-manager). I by no means am saying that it's supposed to be done this way. Quite contrary, I am also beginner and I hope this might inspire someone and will be used as a template for a discussion. Project itself has absolutely no real life value or purpose.

## Stack + Platforms

- React/NextJs
- MobX
- Typescript
- Styled Components
- GraphQL + Apollo
- Firebase
- Mapbox

## Login Credentials

```
email: test@test.com
password: testtest
```

# Architecture

## data

The data layer is responsible for handloing connections with the outside world, all data that is accessed or sent outside the application passes through here.

## domain

The domain layer is responsbile for connecting the data module with application.

## pages

NextJS pages. I wanted to move it to presentation layer, but AFAIK, you can't.

## presentation

The presentation layer is where we create graphical interface and where we receive interaction with the user. This layer should contains as little logic as possible and it is forbidden to communicate directly with the data layer or contain any bussines logic, rules etc.
