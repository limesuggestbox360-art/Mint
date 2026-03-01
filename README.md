# ---How to use Mint---

# If its your first time using Mint do the following

Step 1: Run Setup.bat as administrator
Step 2: To use Console click on mint.py
Step 3: To use IDLE, first install the extension

## Extension

Step 1: Go to https://github.com/limesuggestbox360-art/Mint
Step 2: Click on <>Code
Step 3: Download ZIP
Step 4: Extract ZIP
Step 5: Open VSCODE
Step 6: Open the Extensions view
Step 7: Click on the three dots
Step 8: Select Install from VSIX.
Step 9: Select the extracted folder
Step 10: Create a new file
Step 11: Write your code
Step 12: Run it

if you guys think this is a virus, check the code its not malware.

Create a .mint file and set it to open with Python.exe
Run the mint.py file to start!

## Basics

    write() --> Prints "hello" in console
    a = 100 --> Creates new Var
    @a --> Combines Var with a str 
    wait(seconds) --> waits amount of seconds
    calc(mathequation) --> does complex math equation
    exit --> Exits console

## Logic

    if(condition, code) --> Execute something on matching condition(s)
    repeat(times, code) --> Execute something by times
    while(condition, code) --> Execute something forever until the matching condition(s) are false

## Func

    func name (argument) {code; code} --> Creates a new func with name "name" and with 2 vals 'argument, code'
    call name --> Calls the func

## Media

    img(imagefile.format) --> Creates a new image on the console
    sound(soundfile.format) --> Plays a sound 
    stopsound() --> Stop all sounds
    video(videofile.format) --> Opens VLC(NEEDS VLC) and plays a video
    vvolume(volume) --> Sets the volume of video
    vstop() --> Stops video
    vseek(ms) --> Seeks to ms of video
    vlength() --> Gets the length of the video
 
## Website Automation

    browser(browser) --> Opens a new browser
    website(website) --> Opens a new website
    click(bytype, item, wait_time) --> Clicks on a element
    type(bytype, item, wait_time, text) --> Enter text in a input
    clink(link) --> Click on a link
    browser.quit() --> Close browser
    
## UI & Turt Design

### Turt
	turt() --> Open a new Turtle window
	turt(circ, radius) --> Creates a new circle with the provided 'radius'
	turt(pup) --> Pen up
	turt(pdown) --> Pen down
	turt(pensize, size) --> Pen size
	turt(color, value) --> Changes Pen color by the provided 'value'
	turt(direction, degree) --> Moves towards the direction by the provided 'degree'
	turt(clear) --> Clears the screen
	turt(reset) --> Resets the window
	turt(move, cord) --> Moves to the provided 'cord'
	turt(head, cord) --> Moves head to the provided 'cord'
	turt(speed, value) --> Sets the speed by the provided 'value'
    
## File

    save(file.format) --> Saves to a file
    load(file.format) --> Loads in all vars and functions
    run(file.format) --> Runs a file
    locate(filedirectory, action) --> does an action on a file (best used when file is outside mint folder)
    file(filedirectory) --> Run any type of file that your computer supports

 # Developer API 

    py(pythoncode1; pythoncode2; pythoncode3; etc...) --> Runs python commands
    
    To create a new command, open mint.py through a IDLE (Python IDLE or VSCODE)

    Template command

    elif tag == "command":
                
                try:
                    print("Command")
                except Exception as e:
                    print(f"{error_bg} Command Error: {e} {reset}")
                    sound.playsound("error.mp3", block=False)
                return
    
    To add a new module into mint, open mod.bat and go to line 13 -->

    Write this,

    pip install modulename

    if there is already an module do this

    pip install module1 module2 modulename

    if you want to make console invis, remove "pause" inside mod.bat

### MultiLine

    Multiline is usually part of a tag 
    The shell reads the entire line, splits it by the semicolon, and runs each part one by one.

    To make multiline () codes follow this structure

    elif tag == "command":
        # 1. Split the logic from the commands
        parts = val.split(",", 1) 
        
        # 2. Extract the commands (separated by ;)
        commands = parts[1].split(";")
        
        # 3. Loop and run each command 
        for cmd in commands:
            #Code

### Blocktype

    Uses braces { } or a dedicated block() tag to hold code.
    It allows you to pass a long list of instructions into a function or a logic gate as if it were just one argument.

    To make block {} codes follow this structure

    elif tag == "block":
    # Syntax: block(write(Hello); write(World); playsound(pop.mp3))
    
        for statement in val.split(";"):
            #Code
    return
	
# Updates(Contributers & Commiters Only)

	If you have updated the mint.py file(except bug fixes), do the following

	Step 1: Go to mint-lang folder
	Step 2: Add your command inside syntaxes > mint.tmLanguage.json
	Step 3: Make changes in lc.json, extension.js or package.json if needed
	Step 4: Save all
	Step 5: type "vsce package" in vscode terminal
	Step 6: type "git add extension.js package.json language-configuration.json
		git commit -m "update title"
		git push origin main --force" in vscode terminal
	Step 7: Go to GitHub and Make a new release of Mint(mint-lang has been released auto)
