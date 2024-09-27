## Engineering processes

**stack:** The "stack" is the set of individual software components that are used to create a particular application or product. This may be as simple as a single server and client, or may include some combination of operating system, databases, processors, architectural layers, and more. They are called a stack because they are imagined as "layers" that stack on top of one another, with data passing from one layer to another, in the same order every time. (Or at least in a predictable order every time.)

For example, in this program you will learn to make a web application using the "MERN" stack: MongoDB for the database, Express for the server, React as the front-end framework, and Node.js as the runtime environment.

**front end:** The front end of an application is generally considered to be the parts of the application that users interact with, or that process input from users. This includes the "client".

**back end:** The back end of an application are the parts that cannot be accessed directly by a user. This includes databases, servers, APIs, etc.

**full stack:** The term full stack means something includes both the front and back ends, or the entire stack of an application from the top to the bottom layer. This is generally used to refer to individual engineers who can work on both the front and back, or who can build an entire web application independently. At the end of this program, you will be a full stack software engineer!

**parts of the stack:**

- **client**: A client is an application (or device) that accesses information or requests operations from a server. A web browser is an example of a client.
- **server**: A server is an application (or device) that performs operations or processes information upon request. Your email server is an example of a server. It sends and receives emails, and provides information about those emails to the client, which then displays them for you to read.
- **database:** Database refers to either a structured set of data, or a program (such as MongoDB or PostgreSQL) that stores and accesses structured data. "Structured" in this case means that the data has a predictable format, and can be accessed in a predictable way.

## Computer basics

**hardware:** Any element of a computer that is physical. Includes all of the parts of the machine, such as hard drives, processors, video cards, microchips, etc. Hardware also includes all peripherals such as monitors, keyboards, speakers, etc. It refers to computers of all sizes, including phones, tablets, and computerized IoT devices.

**software:** Any program or application that tells the computer what to do. Applies to "big" programs like operating systems and "small" programs like individual apps.

**operating system, OS:** The OS controls the operation of all other applications on a computer. Everything we do on a computer sits on top of the OS. Linux, Windows, MacOS, Android, and iOS are all examples of operating systems.

**filesystem, or file system:** (can be written either way) The OS's system for organizing, managing, accessing, and updating the files on a computer's hard drive.

**hard drive:** Any piece of hardware that is used to store computerized data. Includes the hard disk drive in your computer, the SD card in your phone, USB flash drives, etc.

**terminal:** These words all have slightly different meanings that we will get into later, when we have more context. For now, just be aware that these are all ways we might refer to the `Terminal` or `Git Bash` program on your computer that we will use to make commands directly to your OS.

- terminal
- shell
- console
- command line
- command prompt

## Source Control

**source control:** The process of tracking changes to code. Source control provides a running history of versions of a code base. This is useful for merging contributions by collaborators without losing anything. It also allows you to roll back to previous versions when you discover errors.

**version control:** A synonym for source control.

**git:** The most common software used for source control. (Do not confuse this with GitHub!)

**GitHub:** One of many providers of hosting for remote git repositories. GitHub provides a platform for people to collaborate using git. Competitors include Bitbucket, GitLab, AWS Code Commit, and many others.

**repository:** A directory that is tracked using source control. Commonly called a "repo".

**local, remote:** A _local_ repository is one that lives on your computer. A _remote_ repository lives on a host such as GitHub.

**push, pull:** Pushing is the process of moving changes from a local repository onto a remote repository. Pulling is moving changes from the remote to the local.

**merge:** Merging combines two versions of the code into a single version.

**branch:** Git can manage multiple different and divergent versions of code at the same time. The versions are stored on inidividual "branches". Each branch has its own history of changes.

**commit:** Snapshot of changes since the most recent commit. Every commit includes:

- author
- date (timestamp)
- commit message (always start your commit messages with a present tense verb!)
- a branch (which can change over time)
- a commit hash (long and short versions)
- contents / a diff (the difference from the previous commit)

**pull request:** This is confusingly named, it's not related to pulling. It's more like a "merge request." A pull request, or PR, is a process of marking a branch as ready to merge into another branch so teammates can approve it first. PRs are where code review happens.

**code review:** When collaborators read, inspect, test, and review each others' code, this is called code review. Code review is the place for collaborators to ask questions to help understand each others' contributions, to point out errors in design or execution, or to suggest improvements that can be made.

## Languages

**markup language:** A markup language specifies the structure and formatting of a document. Markup can determine the visual display of a document, or add structure that facilitates automated processing. HTML and Markdown are examples of markup languages that are primarily for display, XML and YAML are examples of markup languages that are primarily for transferring and interpreting data.

**style sheet:** A style sheet specifies a document's visual elements, such as layout, fonts and font sizes, colors, etc. The style sheet takes the content and structure from the markup document, and applies visual styling.

**hypertext:** Hypertext refers to text displayed on a digital screen which has, embedded within the text, the ability to navigate between different documents or between areas of a document. In a browser this simply means links on a web page.
