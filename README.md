# Rock Paper Scissors

## How to play
* Game begins automatically on page load
* Make selections with rock, paper, and scissors buttons
* Result of round and and score will be updated automatically
* First to 5 points wins
* Use reset button or reload page to play again

## Thoughts
* Functional on page using event listeners. 
* Will spend time styling for improved experience
* Core logic functional
    * Logically I want to have some core functionality controlling game state instead of using the page itself to maintain state. I don't have a strong reason it just seems the most intuitive way, but passing logic back and forth is tricky and would involve global variables which seem less used in JS.
    * Linear propagation of events using page to maintain state was easy to implement and appears to be the most common method for page logic. 
    * Will benefit from further learning on best practices for logic implementation in JS