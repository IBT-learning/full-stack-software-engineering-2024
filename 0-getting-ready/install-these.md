# Installations

We will use a lot of programs throughout this course. This is not all of them, but these are the ones we need to get started.

If you work on multiple computers, it will be possible to complete your coursework by synchronizing your work between computers. However, each computer will need to have all of these programs installed and configured.

##### NOTE: Only complete the sections that are applicable to your operating system!

-   [Online user accounts (both Windows and Mac)](#online-user-accounts)
-   [Windows instructions](#windows)
-   [Apple/Mac instructions](#apple-macos)
-   [GitHub SSH setup (both Windows and Mac)](#github-ssh-setup)

## Online User Accounts

### Github User Account

Almost everyone has only one github account. Unlike email, where each new employer will give you a new email account to use for work, your github account will follow you and you will use it to contribute to your future employers' work. Until then, your account will serve as part of your portfolio and you will include it in employment applications. Make sure your github username is professional.

It should not reference information such as your age or birth year, your location or place of birth, your education or employment history, or your family status. I personally prefer usernames _not_ to include words like "dev", "coder", "hacker", etc, but not everyone frowns upon those. It should be short, and written all lowercase. It can include numbers, hyphens `-` or underscores `_`, but it's better if it doesn't.

It is acceptable to use nicknames, or wordplay. It's okay for it to be light-hearted. Most people use fragments of their names. Mine is `burrowdown` which is a pun on my surname.

**It is possible to change your github username!** However, it is best to settle on something before you start sharing with outside collaborators, potential employers, mentors, etc. If you already have a github account and don't like the name, [change it now](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/changing-your-github-username#changing-your-username).

#### If you do not yet have an account, create one [here](https://github.com/join).

### Loom

Loom is a tool for creating short video snippets. **This is optional**, but I recommend it. When you ask for help from me or your classmates, it can be helpful to include a brief demonstration of the problem along with your question.

1. Visit [Sign up for Loom](https://www.loom.com/signup)
2. Signup with your preferred method of login
3. For the question "What do you plan to use Loom for?" you can say "For education" or "For personal use", it doesn't make a difference.
4. Next you'll be able to name your workspace. Name this whatever you want but keep it professional.
5. On the "Who do you collaborate with?" you can click "not now". You don't need to add any team members to your workspace.
6. Finally, you'll be prompted to either install a Loom browser extension or download the Loom Desktop App. Either method of recording a Loom is fine and it's your choice which method you want to use.

## Windows

The instructions below will walk you through installing the following tools:

1. Git Version Control System
1. Git Bash Terminal Emulator
1. Visual Studio Code Text Editor
1. Node.js JavaScript Engine

#### Git Bash - Command Line Tool Installation

1. Visit the [Git downloads page](https://git-scm.com/downloads/win)
1. Download either the 32-bit or 64-bit "Standalone Installer"
    - If you are not sure whether you have a 32-bit or 64-bit system, use [these instructions](https://support.microsoft.com/en-us/windows/which-version-of-windows-operating-system-am-i-running-628bec99-476a-2c13-5296-9dd081cdd808) to find out
1. Open your downloads folder and run the installer
1. In the installer, select the default options, just keep clicking "Next" and don't change anything
1. Check to see if Git Bash was installed correctly by searching for the program and running it
    - This is now your "terminal", this is the program you will open when you are instructed to open your terminal

### Visual Studio Code Text Editor

> The tool we are going to use is `Visual Studio Code` which is a free open-source editor with a strong developer community, made by Microsoft. This is a different tool than `Microsoft Visual Studio` which is a proprietary tool for enterprise software teams, and is not free.

1. Download the [Installer](https://code.visualstudio.com/download)
2. Run the installer, accepting the default options
3. Run the VS Code Application from the start menu or shortcut.

#### Helpful VS Code Extensions

The following extensions for VS Code are helpful, but optional. You can learn how to install extensions [from the official documentation](https://code.visualstudio.com/docs/editor/extension-marketplace).

-   [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Node.js JavaScript Engine

1. Visit the Node.js homepage at <https://nodejs.org/en/>
2. Click and download the installer for the **Current** version
3. Run the managed installer from your Downloads folder
4. Select the default options for installation location and packages

[Video Installation Guide for Node.js on Windows](https://www.loom.com/share/57f2b35af8a74a3e98f4c8d2f4a63e6d)

## Apple MacOS

The instructions below will walk you through installing the following tools:

1. Visual Studio Code
2. Homebrew package manager
3. Checking essential packages:
    1. Node.js JavaScript Engine
    1. Git Command Line

### Visual Studio Code Text Editor

> NOTE: The tool we are going to use is `Visual Studio Code` which is a free open-source editor with a strong developer community, made by Microsoft. This is a different tool than `Microsoft Visual Studio` which is a non-free proprietary tool for enterprise software teams.

1. Download the [Installer](https://code.visualstudio.com/download)
2. Expand the Application within your `Downloads` folder.
3. Move the `Visual Studio Code.app` package to your `/Applications` directory
4. Run the VS Code Application from the `/Applications` directory, **do not run it from within your `Downloads` folder** as you will not be able to use all the features
5. Add VS Code to your Dock by right-clicking on the icon to bring up the context menu and choosing Options, Keep in Dock
6. Install the `code` command-line tool by performing the following
    - Open VS Code if you have not yet done so.
    - Open the `Command Palette` by typing the following <kbd>CMD</kbd>-<kbd>SHIFT</kbd>-<kbd>P</kbd>
    - Type `install code command` and then typing <kbd>RETURN</kbd>
    - You may be asked to confirm you want to install the `code` command
    - See the [official documentation for additional help](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

#### Helpful VS Code Extensions

The following extensions for VS Code are helpful, but optional. You can learn how to install extensions [from the official documentation](https://code.visualstudio.com/docs/editor/extension-marketplace).

-   [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### MacOS Homebrew

Homebrew is a package manager for MacOS that lets you install tools directly from the Terminal. Once it's installed, it's generally easier to use Homebrew than to use a web browser and graphical installer app.

These instructions are for recent versions of MacOS (MacOS v10.14 Mojave or newer). If these do not work for you, we can assist you in installing the tools another way.

#### Install Homebrew

1.  Visit <https://brew.sh>
2.  Copy the **entire line** beneath "Install Homebrew"
    -   `tip`: use the clipboard icon to copy it
3.  Open a **Terminal.app** window, paste the copied text, and hit <kbd>Return</kbd>
4.  Follow the instructions in your terminal. Enter your password and hit <kbd>Return</kbd> as prompted, **you will not see the characters as you type your password**, this is default behavior in command-line applications.
5.  Follow the default option for any further prompts
    > NOTE: The homebrew install may take a long time! On a slow internet connection, it could take more than an hour. If it takes more than 15 minutes, look at the terminal periodically to make sure things are moving and changing. (If you scroll up you may not see the most recent changes, so make sure you are scrolled to the bottom of your terminal screen.) If things do not change for more than 10 minutes, end the process by typing <kbd>ctrl</kbd> + <kbd>C</kbd> and then run the same command again. If this happens again the next time, send Danny a Slack message for help.

### Node.js (JavaScript)

We prefer to use the `brew` command to install Node.js.

#### Install Node.js using Homebrew

1.  Open a Terminal.app window and type the following, followed by <kbd>Return</kbd>

        brew install node

2.  Confirm that Node.js is installed by typing the command below, followed by <kbd>Return</kbd>

        node --version

3.  You should see a version string such as v16.1.0 or similar

        v16.1.0

4.  If you see any other message, copy it and paste it into a Slack message to Danny

### Git Command Line Tool

Hopefully, git was already installed by default when you installed homebrew.

1.  Confirm that Git is installed by running the command below followed by <kbd>Return</kbd>

          git --version

1.  You should see something like the following, any version above v2.0 is fine

          git version 2.30.0

1.  If you see any other message, copy it and paste it into a Slack message to Danny

## Github SSH Setup

In order to access Github we need to set up SSH Keys. We will follow GitHub's instructions to do so.

### Generating an SSH Key

Click the link below and follow the steps to generate an SSH key. Be mindful of what Operating System the steps pertain to. To change which steps you are following you can select your OS at the top of the page. The first step on Mac should be "Open Terminal" and the first Windows step should be "Open Git Bash".

[Generating a New SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### Adding SSH key to your SSH agent

You can try following the instructions in the GitHub documentation, or you can run these two commands:

`eval $(ssh-agent)`

`ssh-add ~/.ssh/id_ed25519`

### Adding a new SSH Key to GitHub

After we've generated a new SSH Key we can then add it to our Github account. Make sure you select the correct OS and follow the "Web Browser" instructions.

[Adding a New SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

### Testing the SSH Key

Lastly we'll check to make sure everything is working properly by following Github's protocol.

[Testing Your SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)
