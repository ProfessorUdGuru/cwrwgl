# CWRWGL -- a simple text editor

* To be written in HTML, CSS, JavaScript, and Electron

## Purpose

* This is a straight code editor, like Notepad++, not a live editor like Codepen. I want an editor that's as far from being an IDE as you can get without falling off the edge of the earth.

* If you can't guess (from the Official Slogan, "Code in Peace") what my philosophy is, then here's one more hint: the original name for the project was "Feduppitor". I still like that name but I'm trying to show some restraint. 

![volcano erupting](icons/fedup_logo.png)

* In Atom and VSCode I turn most features off. I want very little highlighting, no suggestions, no autocomplete. The few autocomplete features I haven't turned off aren't important to me, like the addition of a closing bracket in a pair, which wastes my time as often as it saves me time. Sometimes it turns out that, in order to turn one feature on or off, other features piggyback along unwelcome. (Example: I found a feature I could import or turn on which would highlight all occurrences of a highlighted word. Now when my cursor is next to a word, that word auto-highlights. Which is horrific.) Or a feature exists but I don't like the way it's accomplished. For example, in VSCode, if you want the matching brackets highlighted, you get ugly rectangles drawn around them instead of a simple change of the character's color. I find myself staring at the rectangle trying to see what's inside of it, when all I wanted was two yellow brackets. There's so much kandy-kolored krap in VSCode that I feel like a senile old fart lost at Disneyland.

![no more Kandy](images/no_more_kandy.png)

* The accepted standard in code editor GUI design is too busy and intrusive for me, and it takes a long time to tweak the program to my liking. I doubt that I'll ever finish this project but it gives me a learning experience that's more productive than ranting on a blog post.

* The features I do want include:
1. changing the foreground color of a matching pair of brackets: when the cursor is placed next to one bracket, it turns yellow and the foreground color of its  matching bracket changes to match
1. highlighting of reserved words so I don't use `def` as a variable name in Python
1. highlighting of all occurrences of any word that I double-click
1. moving blocks of highlighted text from one place to another by drag-and-drop
in Atom, this has to be installed but it barely works
in VSCode it works fairly well
in NPP it works perfectly
1. macro recorder (I'm dreaming)
Neither VSCode nor Atom have one, even though MS Word has had one since Bill Gates was in diapers
Notepad++'s macro recorder is imported from Scintilla
1. find and replace
in Atom this covers a large area of code when it opens
in VSCode it covers a small area of code when it opens
in NPP it opens in a separate window that can't be configured for dark themes and steals focus from the code, so for example Ctrl-S doesn't work
I might prefer to put this in a dedicated full-width strip along the bottom edge of the window. This would cover some code but do it consistently instead of jutting out into the window and covering parts of lines.
1. I only use a few languages and I would make it dead simple to add another one, instead of using a plug-in system to do it. Since complex syntax highlighting doesn't interest me, there's no reason why the editor should come pre-loaded with a bunch of languages. Just add a list of reserved words, and add a string to an array? I haven't tried it yet, we'll see how it works out. 
1. In general all the code for the app should be editable by a beginner (me).
1. I also wanted to test a design idea for an editor GUI whose file explorer sidebar would not push the code over when it (the explorer) is opened. In VSCode, if I have a file open with the window sized to 80+ characters in width so I can see all my code, when I open the explorer, the code is pushed over and I can't read the right half of the code until I close the explorer or manually resize the window. I think it would be worth looking into dynamically adding the explorer to the left edge of the window instead, so the code doesn't move and the editor stays the same size when the explorer opens. I know tabbed windows aren't supposed to change sizes unless manually resized, but this might be an exception. The whole point is to NOT change the size of the editor just to see the file explorer.
1. The word "cwrwgl" refers to a very small and simple one-man boat, like a lily pad for humans. The fisherman carries it home on his back. The anglified version is "coracle". The original Welsh version is pronounced "coo-ROO-gl".

## Progress

* I've only been working on this code editor for a week or so, but will probably put it away for awhile and work on my other projects till my repos are all caught up and organized.

* The basic layout is pretty much done. The editor adds line numbers as needed and the scrollbars work. The explorer opens to the left of the editor, as intended, without covering the code or shifting the code over. Cursor position is retained so you don't lose your place in the document if the editor loses focus. 

* The explorer doesn't do anything yet except expand to show the file structure that I hard-coded into it. The top file link actually opens a file picker but creating, opening, and saving files needs to be coded. As well as populating the explorer dynamically from the system file tree.

* A tabbed format will be built to accomodate more than one file, but first it needs to be able to create and open files.

* The default title bar and dropdown menu have been removed so foreign styling from Windows doesn't intrude upon the GUI design or color scheme. A custom dropdown menu has to be added. To open the Chrome developer tools that come with Electron, use Ctrl+Alt+I. Ctrl+K opens a rudimentary About dialog. To temporarily turn on the system title bar and Electron dropdown menu, comment the line in main.js that says `frame: false`.

## Do List

* Get back to this project when Treebard GPS refactoring is done, after Toykinter project is dumped into its repo, and before diving head-first into Treebard v. 0.0.0.

## Bugs

* It bugs me that I have too many projects started and I have to set this one aside for a while. Which means I'll be using VSCode a lot longer, which also bugs me.