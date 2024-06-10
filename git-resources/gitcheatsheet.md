Git: Your Ultimate Cheat Sheet provided by Danny Burrow


# Git Command Cheat Sheet 📘

### Getting & Creating Projects

| Command | Description |
| ------- | ----------- |
| `git init` | Initialize a local Git repository |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Create a local copy of a remote repository |

### Basic Snapshotting

| Command | Description |
| ------- | ----------- |
| `git status` | Check status |
| `git add [file-name.txt]` | Add a file to the staging area |
| `git add -A` | Add all new and changed files to the staging area |
| `git commit -m "[commit message]"` | Commit changes |
| `git rm -r [file-name.txt]` | Remove a file (or folder) |

### Branching & Merging

| Command | Description |
| ------- | ----------- |
| `git branch` | List branches (the asterisk denotes the current branch) |
| `git branch -a` | List all branches (local and remote) |
| `git branch [branch name]` | Create a new branch |
| `git branch -d [branch name]` | Delete a branch |
| `git push origin --delete [branch name]` | Delete a remote branch |
| `git checkout -b [branch name]` | Create a new branch and switch to it |
| `git checkout -b [branch name] origin/[branch name]` | Clone a remote branch and switch to it |
| `git branch -m [old branch name] [new branch name]` | Rename a local branch |
| `git checkout [branch name]` | Switch to a branch |
| `git checkout -` | Switch to the branch last checked out |
| `git checkout -- [file-name.txt]` | Discard changes to a file |
| `git merge [branch name]` | Merge a branch into the active branch |
| `git merge [source branch] [target branch]` | Merge a branch into a target branch |
| `git stash` | Stash changes in a dirty working directory |
| `git stash clear` | Remove all stashed entries |

### Sharing & Updating Projects

| Command | Description |
| ------- | ----------- |
| `git push origin [branch name]` | Push a branch to your remote repository |
| `git push -u origin [branch name]` | Push changes to remote repository (and remember the branch) |
| `git push` | Push changes to remote repository (remembered branch) |
| `git pull` | Update local repository to the newest commit |
| `git pull origin [branch name]` | Pull changes from remote repository |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Add a remote repository |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Set a repository's origin branch to SSH |

### Inspection & Comparison

| Command | Description |
| ------- | ----------- |
| `git log` | View changes |
| `git log --summary` | View changes (detailed) |
| `git log --oneline` | View changes (briefly) |
| `git diff [source branch] [target branch]` | Preview changes before merging |



The official git command list is found [here](https://git-scm.com/docs)
 
- git add: Prepare your changes for committing by adding them to the staging area.

- git branch: Organize and manage branches effortlessly within your repository.

- git config: Customize Git settings like username and email to suit your preferences.

- git commit: Safeguard your changes with descriptive messages as you save them to the repository.

- git checkout: Seamlessly switch between branches or restore files to previous states.

- git init: Start a new Git repository in your current directory with ease.

- git diff: Analyze the differences between file changes efficiently.

- git stash: Temporarily store unfinished changes for later without committing them.

- git merge: Integrate changes from different branches into your current branch seamlessly.

- git push: Share your local repository changes with a remote repository effortlessly.

- git clone: Duplicate a remote repository onto your local machine effortlessly.

- git status: Keep track of your repository's status, including changes and untracked files.

- git pull: Fetch updates from a remote repository and merge them into your current branch with ease.

- git reset: Undo changes made to the repository, restoring files to previous states effortlessly.

- git remote: Manage connections to remote repositories efficiently, adding or removing remotes as needed.

- git blame: It Show what revision and author last modified each line of a file

**- git bisect: This command uses a binary search algorithm to find which commit in your project’s history introduced a bug.**



# Git Commands Cheat Sheet  continuation🚀
Show what revision and author last modified each line of a file

## Setup and Configuration 🛠️
- **Set global configuration**: 
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

- **Check configuration**:
  ```bash
  git config --list
  ```

## Creating & Cloning Repositories 🌱
- **Initialize a new repository**:
  ```bash
  git init
  ```
- **Clone an existing repository**:
  ```bash
  git clone https://github.com/username/repository.git
  ```

## Basic Snapshotting 📸
- **Check status**:
  ```bash
  git status
  ```
- **Add files to staging**:
  ```bash
  git add .
  git add <file_name>
  ```
- **Commit changes**:
  ```bash
  git commit -m "Commit message"
  ```
- **View commit history**:
  ```bash
  git log
  ```

## Branching & Merging 🌿
- **List all branches**:
  ```bash
  git branch
  git branch -a  # Include remote branches
  ```
- **Create a new branch**:
  ```bash
  git branch <branch_name>
  ```
- **Switch branches**:
  ```bash
  git checkout <branch_name>
  ```
- **Merge a branch**:
  ```bash
  git merge <branch_name>
  ```
- **Delete a branch**:
  ```bash
  git branch -d <branch_name>
  ```

## Sharing & Updating Projects 🔄
- **Pull latest changes from remote**:
  ```bash
  git pull
  ```
- **Push changes to remote**:
  ```bash
  git push
  git push origin <branch_name>
  ```

## Inspection & Comparison 🔍
- **Show changes between commits, commit and working tree, etc.**:
  ```bash
  git diff
  git diff --staged
  ```
- **Show changes in a specific file or directory**:
  ```bash
  git log --follow <file_name>
  ```

## 🚀 Getting Started ContinuationShow what revision and author last modified each line of a file
- **Clone a repository:**  
  ```
  git clone <repository-url>
  ```
- **Initialize a new Git repository:**  
  ```
  git init
  ```

## 🔍 Basic Commands
- **View the current status of the repository:**  
  ```
  git status
  ```
- **Add files to the staging area:**  
  ```
  git add <file-or-directory>
  ```
- **Commit changes:**  
  ```
  git commit -m "commit message"
  ```

## 🌿 Branching
- **Create a new branch:**  
  ```
  git branch <branch-name>
  ```
- **Switch to a branch:**  
  ```
  git checkout <branch-name>
  ```
- **Create a new branch and switch to it:**  
  ```
  git checkout -b <branch-name>
  ```

## 🔀 Merging and Rebase
- **Merge a branch into the current branch:**  
  ```
  git merge <branch-name>
  ```
- **Rebase the current branch onto another branch:**  
  ```
  git rebase <branch-name>
  ```

## 🧹 Undo Changes
- **Revert changes in the working directory:**  
  ```
  git checkout -- <file>
  ```
- **Reset staging area to match the last commit, but leave the working directory unchanged:**  
  ```
  git reset
  ```
- **Hard reset to a specific commit (dangerous):**  
  ```
  git reset --hard <commit-id>
  ```

## 🕵️‍♂️ History and Log
- **Show commit logs:**  
  ```
  git log
  ```
- **Show commit changes:**  
  ```
  git show <commit-id>
  ```

## 🌐 Remote Repositories
- **Fetch changes from remote repository:**  
  ```
  git fetch <remote>
  ```
- **Pull changes from remote repository:**  
  ```
  git pull <remote> <branch>
  ```
- **Push changes to remote repository:**  
  ```
  git push <remote> <branch>
  ```

## 🔖 Tagging
- **Create a new tag:**  
  ```
  git tag <tag-name> <commit-id>
  ```
- **List all tags:**  
  ```
  git tag
  ```

## 🛠 Stashing
- **Stash your changes:**  
  ```
  git stash
  ```
- **Apply stashed changes:**  
  ```
  git stash apply
  ```

## 📦 Advanced Topics
- **Check out a remote branch:**  
  ```
  git checkout -b <branch-name> <remote>/<branch>
  ```
- **Cherry-pick a commit:**  
  ```
  git cherry-pick <commit-id>
  ```
- **Revert a commit by creating a new commit with contrary changes:**  
  ```
  git revert <commit-id>
 
Feel free to print this cheat sheet and keep it handy while working on your projects 🌟


in addition, you could view a pictorial representation of the cheatsheet below 👇 ![here](Gitcommands.png)

________

________

