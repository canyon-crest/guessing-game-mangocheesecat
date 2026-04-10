Above and beyond:

1. Enter Key Shortcut
I added an Enter key listener on the guess input in script.js. This allows the player to just hit the Enter key instead of clicking Guess. It improves the game by making it easier and faster to type the number and hit enter. 

2. Score Quality Feedback
In my makeGuess function, I added a quality comment after each correct guess based on the number of tries it took to get it right. Each statement is personalized, and it makes winning more fun and gives the player another goal to try improving towards. 

3. Win Streak Tracker
I added a streak tracker in my win branch of the makeGuess() and also in the giveUp() functions. The streak allows for players to count the total number of times they have won in a row until they give up. This is useful because it encourages players to attempt to get the highest streak!

4. Confetti Animation
I added a confetti animation when you win so that players receive a dopamine hit upon guessing the correct number, prompting them to make more guesses and play the game for longer. To do this, I created a new function called launchConfetti() with style and colors. Winning now feels exciting and rewarding!