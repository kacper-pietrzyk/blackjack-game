# Blackjack game
## Description
Page with frequently asked questions, which could be one of subpages. Questions and answers loaded by fetch API.
Cards game 1-on-1 (player vs automated dealer) turn based blackjack game with 1000$ starting credit. 
Game use 6 decks of cards which are getting from API. Cards are shuffled before the game begins. One game consist 5 rounds. The rules for blackjack can be read [here](https://pl.wikipedia.org/wiki/Blackjack).

Each round starts with the player placing a bet and then the cards are dealt. During a round are available these actions:
- Hit
- Stand
- Double Down

If user won round - get 1.5x the bet, losing means the bet is gone.

Game can be saved and loaded at any time. Game can be also reset at any time.

## Technologies
* SCSS
* CSS (SCSS) Modules
* React
* React Hooks
## Usage
Game can be run here: \
https://kacper-pietrzyk.github.io/blackjack-game/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
