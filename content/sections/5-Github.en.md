---
anchor: "Publishing"
header: "Publishing Your Work to Github"
subheader: "Create an online portfolio of your work for employers"
lessons: [
    {
        header: "Lesson 1: Command-line Interfaces",
        content: '
        When most users interact with their computer, they do so via the graphical user interface (GUI). They click on icons, shortcuts, folders, and menus to find their way around the computer and do everything from creating new files to opening a web browser. It’s all very intuitive and easy to understand; if you want to move a file from one folder to another, simply click and drag it to the desired location.


However, there is a more efficient and powerful way to interact with your computer and it’s one that’s essential for any programmer, software developer or test engineer such as yourself. That way is via the **command line** or **CLI**, a text-based interface that allows the user to do everything a GUI does as well as many more advanced operations.  


However, there is a more efficient and powerful way to interact with your computer and it’s essential for any programmer, software developer or test engineer such as yourself. That way is via the **command line** or **CLI**, a text-based interface that allows the user to do everything a GUI does as well as many more advanced operations.  


On Windows machines, the default command-line interface is called **Command Prompt**, or **cmd.exe**. On macOS, it’s **Terminal**. Both operate almost identically and for the most part, respond to the same commands.  


Let’s walk through how to do some everyday operations using the command line. First, open cmd (type “cmd” into the Windows search bar) or Terminal (search “Terminal” in finder or Spotlight).


If you’re using Windows, you’ll see this: `C:\Users\YOUR PC NAME HERE>`. On Mac, you may see `~`, which is just a shorthand for the home directory, or you may see the name of a folder. No doubt you’ve seen something like this before when saving a file or installing a piece of software. This is a *file path*, effectively an address to a particular location on your computer. In this case, it’s the file path of your current working directory, the place you’ll always start from when you open your command-line interface. As you navigate into different directories, you’ll see this current working directory update to reflect where you are now. Let’s see that in action.


First type `dir` (`ls` on Mac) and press enter. This command will list all of the folders inside your current working directory. Next type `start .` (`open .`) and hit enter. A window will open showing you the same location via the GUI. Compare the folder names in the new window to the list of directory names in cmd and you’ll see they’re all the same. (N.b. the `.` in `start .` is shorthand for your current working directory).  


Next, let’s make a new folder using the command `mkdir`. Type `mkdir new_folder` and then enter. Now, using either the `dir` (`ls`) command or `start .` (`open .`), check to see that folder has been created. 


Nice - we’ve made a new folder, so let’s get inside it. To change directories we use the command `cd`. Type `cd new_folder` then enter. You’ll see that the current working directory has changed, and now reads `C:\Users\YOUR PC NAME HERE\new_folder` or `new_folder` on MacOS.

Next, let’s make a file. We’re going to make an empty text file called "hello_world.txt”.


In cmd, we’ll do that by typing `echo > hello_world.txt` and hitting enter. Now type “hello_world.txt” and the empty text file you just created will open up in Notepad. (In Terminal, this process is a little easier. Just type `touch hello_world.txt`)


Let’s delete that file now. Type `del /f hello_world.txt` (`rm hello_world.txt` on Mac) and hit enter. Again, feel free to confirm it’s gone with `dir` or `start .`


Okay, time to retrace our steps and return to where we started. Our current working directory is `C:\Users\YOUR PC NAME HERE\new_folder>` or `new_folder`. To return to our user folder type `cd ..`. The `..` refers to the parent directory, i.e. the directory above that encloses the directory we are currently inside. 


Next, let’s delete the folder we made earlier. (BE CAREFUL here - you don’t want to accidentally delete the wrong folder! 😉)  Type `rmdir new_folder` and that’s that taken care of.


And that’s all the basics of navigating file structures in the command line, as well as creating and deleting files and folders. One last tip: while typing a command, like `cd new_folder` for instance, you can press tab while you’re typing the file or folder name to have cmd autocomplete it for you. If a different file appears first that shares the same letters, keep pressing tab to cycle the files till you find the one you want.

        '
    },
    {
        header: "Lesson 2: Installing VS Code and Git CLI",
        content: '
        Visual Studio Code, otherwise known as VSCode or VSC is a text editor highly developed and optimised for writing code. It supports hundreds of programming languages and thousands of extensions to improve your efficiency.  


        VSCode is great tool to familiarise yourself with; it is used by a huge number of professionals every day. In fact, this site was developed using VSCode as a text editor!


To get set up, type "Visual Studio Code" into your search browser or go to https://code.visualstudio.com/.


The website should automatically detect the correct version for your operating system, but if for some reason it does not, simply click the down arrow to the right of the download button. This will display other versions for you to download. 


###### Windows:  

Once downloading has finished you should have a file named something similar to "VSCodeUserSetup-{version}.exe." Agree to the license terms and select the options you would like. From there, you can launch VSC!


###### Mac:  

Downloading this on Mac should give you a .zip file. Double click it the same as when you’re downloading anything else. Drag "Visual Studio Code.app" to the "Applications" folder, so it is available in the "Launchpad". Then double click it to open VSC! 


#### Git

Git command line (cli) comes preinstalled on most Mac and Linux devices, to check if it is installed, type `git version` into your “Terminal” if on Mac, or “Command Prompt or Git Bash” on Windows. If it is not installed simply search for “Git” on your search browser and find the downloads page, or enter https://git-scm.com/downloads into the URL. It is recommended that you install Git Bash and Git Credential Manager to make authenticating Git and Github easier.


From the official Git website, click the download for your respective operating system. Follow the same setup steps as VSCode from there.

        '
    },
    {
        header: "Lesson 3: Setting up a GitHub account and connecting it to Git",
        content: '
        We have already installed Git, and now we will look at Github. These are different tools by different vendors, so let''s define each:  

* Git is a version control software (VCS) which is used to track changes to code from the command line. Because it uses *branching* It allows any number of developers to download a piece of code, work on it and contribute changes without breaking the original. Because all of your changes are tracked by Git, it is very hard to break your code, as long as you keep committing! Git is fully open-source.  

* Github is a code hosting platform that uses Git as the base, and then adds lots of interesting features on top. GitHub lets you *push* your Git repositories to the web, where others can download them and collaborate. It also allows you to share and display your work as a developer, which is what we are looking at in this chapter! Many developers use GitHub as a showcase of their coolest projects. Github is owned by Microsoft.


This section looks at setting up your GitHub account and getting it to talk to Git.

###### Signing up for GitHub:

We will begin by visiting GitHub’s home page at: https://github.com


Click on the link to sign-up. On this page, you can enter your email address. You must then: create a password, create a unique username, select whether you would like to receive product updates and announcements via Email (Y-yes/N-no), and finally complete a puzzle to verify you are human.


Congratulations, you should now have a GitHub account and are ready to start some collaborative coding!
     
#### Getting GitHub to talk to Git:

Now that you have set up your GitHub account you can connect it to Git, which should be installed on your device. If you are using Mac or Linux device open Terminal and if you are using Windows open the Command Prompt. From here we can check Git is correctly installed by typing: `git --version`. This should give you the current version of Git installed on your device, if this is not the case you should go back to the previous section and make sure Git, Git Bash and GCM are installed.  

To begin, we need to set some global variables for our local Git installation. Open up Git Bash and type the following:


```
bash

git config --global user.email "hello@example.com"


```

Where the Email address within the quotation marks is replaced by the email address you used to set up your GitHub account.




Git will now use this mail address to link your future commits with your GitHub account. From here we can use another command:

```
bash

git config --global user.name "Your Name".  

```

This will set the author name of all your commits to be published under the name input in “Your Name”.



We can now try getting Git to talk to GitHub. This is the trickiest part, as there are several ways to go about setting this up, and GitHub has changed authentication methods overtime to make this more secure. In this case, we are going to set up communication between Git and GitHub over HTTPS (this is the standard protocol that you use to browse the web) with a *Personal Access Token* or PAT. Why not just use a password? As of August 2021, GitHub decided to remove support for passwords for authentication due to security concerns.


If you have installed Git Credential Manager with Git, then setting this up is very simple. When you go to do something that requires authentication, a browser window will open up and guide you through the authentication process. Then GCM will store the credentials for you, and you will never have to think about it again. That wasn''t so bad!  


If for whatever reason GCM is not working, you''ll have to manually create a token in GitHub:

1. Log in to GitHub and click on the avatar icon on the top-right of the page to bring up a drop-down menu.

2. Select "Settings"

3. Scroll down the page and click on "Developer Settings", then "personal access tokens".

4. Click on the "generate new token" button

5. Give the token a name and set the expiration to a fairly long setting.

6. Set the scopes for the token. You will certainly want to check the "repo" box.

7. Click "Generate token" and copy the token displayed. Make sure that you save it somewhere as you will need it and cannot view it again on GitHub.

8. From the command line, when you are pushing or pulling to GitHub you will be prompted for a username and password. The token **is** the password, not the one that you used to sign up for GitHub. Pushing and pulling will be covered in the next lesson.


If you are still having issues with authenticating to GitHub, welcome to development! You may find some helpful guidance in the [GitHub docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github).  


Your local installation of Git should now be able to communicate with Github. This means that you are now ready to start pushing code directly to GitHub from the command line.

        '
    },
    {
        header: "Lesson 4: Pushing to Github and adding a Readme",
        content: '

        When we work with Git on our machines, we: 
        
        1. *initialise* a repository at the root folder of whatever project we are working on
        
        2. When we have made some progress, we make a *commit*. This is like a snapshot on the project as it is. Git has some tools that allow us to go back and forth between commits if we find that we have made a mistake and need to go back.  
        
        3. The `git push` command is used to push the commit of changes made on your local machine to a remote repository such as GitHub.


To start with, let’s create a new repository on GitHub. This is where we will push our local repository to later:

1. Go to GitHub.com and log in.

2. Somewhere on the left hand side of the screen should be a green button which says "new".

3. If you are offered a template, select "no template" and give the repo a name of "hello world".

4. Ensure that all of the checkboxes are unticked, especially "add a README file" and click "Create repository".

5. You should now see a page with several lines that you can copy and paste into the command line to push a local repo up to GitHub. We will come back to this page later.


Now, let’s initialise a local git repository and add a readme file. So open up your command line window.

The command prompt should default to C:\Users\’your_own_name’ on a Windows machine.

For demonstration purposes, let’s initialise the git repository here in the default location. But first, we need to create a folder to contain our project. You can do this either by manually creating it through the file explorer or just input this command into the command prompt:

```
bash

mkdir git_tutorial

```


Then you would need to move to the specific folder before we initialise the git repository so we use the command:

```
bash

cd git_tutorial

```


Now that we are in our project folder, we can finally initialise the repository. To do that we use the command:

```
bash

git init

```

Now that we have initialised our repository, we can now get started on creating our readme.md file for our repository. To open up VSCode in the current folder you can use the command:

```
bash

code .

```

If this has not automatically set up when you installed VSCode, you can just open VSCode from the start menu/launchpad like any other app.

1. In VSCode, on the top left click File -> New File.

2. Give the file a name of `README.md` with the file extension .md standing for Markdown. 

3. Open up your README. These files are written in Markdown, which allows you to use symbols to decorate text. For example, you can create headers with the ‘#’ symbol before the text. For more information regarding Markdown and all the syntax, you could use, check out https://www.markdownguide.org/cheat-sheet/.


So input:


```
markdown

# Example Header  

this is some content for my readme

```  
code blocks go between triple backticks like this, or between triple tildas (~~~)  
```


```

Or whatever you want to put as the title header for the readme file then input whatever text under the header. This would typically be a description of the project, how to run it and maybe some screenshots.


Now that we have finished typing in our README.md file, we can now save it. Go to File -> Save As -> browse to our repository location “C:\Users\’your_own_name’\git_tutorial” and remember to name the file README.md (with the captial letters).

##### Staging

We can now do our first commit to our repository. To do that we need to use several commands. First use:

```
bash

git add .

git status

```

Using ‘git add’ will add all the new files ready for the commit, and the `.` is shorthand for "all". ‘git status’ will show a list of all the files staged to the first commit. You should see your README in this list highlighted in green.

#### Committing

Now for our first commit, we need to use:  

```   
bash

git commit -m "your message"

```  

The ‘-m’ flag is used for a message to set the commits where the full description is written. E.g. “what was changed”, “why was the change made”
Remember to put your message in quotations otherwise the command won’t go through. For example:

```
bash

git commit -m “First Commit”

```

Now we need to link this local repository to the repository created in GitHub. Return to the page on GitHub that you reached earlier. Beneath "...or push an existing repository from the command line" you should see:


```
bash

git remote add origin https://github.com/youraccount/hello-world.git
git branch -M main
git push -u origin main

```

The first command adds the remote repository based on the URL name given and ‘origin’ is used as the remote name. A git remote is just a git repository that is hosted online. We have to give git a remote name so that it knows where to push to. The second command is saying that the main branch is defined as "main", which is the default anyway. 


The third command “git push -u origin main” pushes the content to the remote repository. ‘Origin’ is the remote repository name, ‘-u’ flag is upstream which is the equivalent to ‘-set-upstream’ and the ‘main’ is the branch. 

After this point, if you are just pushing commits to the main branch, you can just shorten this to:


```
bash

git push

```

After this, you should have successfully pushed all the changes to the remote repository in GitHub. You should see on GitHub the README.md file you created with the content you filled in from before.


> TIP: the default branch on new github repositories used to be called `master`. This was changed to be `main` instead by Github in 2020. Since some people have older git installs, this can occasionally cause some issues when pushing a repo up, as git expects a `master` and can''t find it. If this is happening to you, try `git push -u origin master` instead.

        '
    },
    {
        header: "Extra: Reference List of Git Commands",
        content: '
        
* `git init` - initialise a new repository

* `git config --global user.name “John Smith”`- configure the author name to be used with your commits.  

* `git config --global user.email john@example.com` - configure the author email address to be used with your commits.  

* `git config -l `- check the configuration

* `git status` - check the repository status  

* `git add <filename> or git add .` - choose(stage) the files you want to take a snapshot of. You can choose specific files but normally you would   want to take a snapshot of all the files  

* `git commit -m ‘placeholder’` - make the commit, this only affects the files that are currently staged. Every commit needs to have a short description of what has changed in single quotes  

* `git branch` - Lists all the branches and places an asterisk against the one we are currently on.

* `git checkout -b ‘placeholder name’` - Creates a new branch and switches to it

* `git checkout` - use to switch between branches, commits on different branches won’t show on the master branch 

* `git merge placeholderBranch -m ‘placeholder’` - use to merge branches, first checkout branch you want to merge into then type the branch you’re merging, with a suitable note in single quotes 

* `git push` - push your commits to the GitHub server 

* `git push origin master` - This command pushes the commits on your master branch 

* `git push --all origin` - push all branches using this command 

* `git clone ‘placeholder git link’` - This downloads the entire repository to your local computer as a clone so you can contribute to a project already pushed onto GitHub

* `git pull` - To fetch any changes made by other developers on the project
        '
    }
]
---
