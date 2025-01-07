/*
| This is a simple guessing game that serves as a starting point for my GitHub projects board            |
| Nothing too crazy, just a simple terminal based guessing game meant to show my simple c++ coding skills|
*/

#include <iostream>
#include <cstdlib>
using namespace std;

int main()
{
    srand(time(NULL));
    int dnum, gct, i, guess; // dnum will be used to select the initial difficulty, and then store the random number after selection

    // This cout line provides the bulk of the initializtion of the game
    cout << "Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100\n\nPlease select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n\nEnter your choice: ";
    cin >> dnum;

    while (true) // This loop allows the game to run until the user decides to quit
    {
        switch (dnum)
        {
        case 1:
            gct = 10;
            cout << "\nGreat! You have selected the Easy difficulty level.\nLet's start the game!\n\n";
            break;
        case 2:
            gct = 5;
            cout << "\nGreat! You have selected the Medium difficulty level.\nLet's start the game!\n\n";
            break;
        case 3:
            gct = 3;
            cout << "\nGreat! You have selected the Hard difficulty level.\nLet's start the game!\n\n";
            break;
        default:
            cout << "Invalid choice, please enter a number between 1-3";
        }

        dnum = rand() % 100 + 1; // sets a random number between 1-100
        i = 1;                   // this is a counter for the amount of guesses used
        while (gct > 0)
        {
            cout << "Enter your guess: ";
            cin >> guess;
            if (guess > dnum)
            {
                gct--;
                cout << "Incorrect! The number is less than " << guess << "\nGuesses remaining: "<< gct << "\n\n";
                i++;
            }
            else if (guess < dnum)
            {
                gct--;
                cout << "Incorrect! The number is more than " << guess << "\nGuesses remaining: "<< gct << "\n\n";
                i++;
            }
            else
            {
                cout << "Congratulations! You guessed the correct number in " << i << " attempt(s).";
                break;
            }
        }
        cout << "Would you like to play agian?\nIf so, type the level of difficulty, otherwise put any other key to quit: ";
        cin >> dnum;
        if (dnum < 1 || dnum > 3)
            break;
    }
    return 0;
}
