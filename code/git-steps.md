# Git steps for completing an assignment

## 1. make new branch

To avoid conflicts, make sure you're on your branch, and your branch is up to date with the remote, before you make your new branch.

1. `git checkout my-branch`
1. `git pull`
1. `git checkout -b my-name-assignment-name`

## 2. make changes to your files

Make whatever changes you want to commit.

> It's okay if you do this before you make your branch.

## 3. double check your changes

You can use a `git status` to make sure you have only changed the files you intended to change

and then use `git diff` to see your changes line by line and make sure they look right.

> Use the space bar to scroll in the diff window, use q to quit the diff window.

## 4. stage changes using git add

Use **ONLY ONE** of these:

-   `git add .` adds all files in the working directory

-   `git add -A` adds all tracked and untracked files

-   `git add {path}` adds files at the specified path (it could be a path to a directory or just a single file)
-   `git add code` is an example of the above command, which will add all the changes within your code/ folder

## 5. check your staged changes

Do another `git status` to make sure that all of your changes are staged (in green) and that you haven't staged anything you didn't mean to.

## 6. commit changes

> Files have to be added by this point (green in the git status) or your commit will be empty.

`git commit -m "commit message goes here"`

## 7. repeat!

Repeat steps 2-6 until you finish the assignment.

## 8. push commits

You don't have to do this every time you commit, but you do have to push before the commits exist on GitHub (so, before you can make a pull request.)

The first time you push to a brand new branch: `git push -u origin this-branch-name`

After that:
`git push`

## 9. make a pull request

When you are ready to turn in your assignment, go to the github repository in you browser.

You will probably see a large box at the top that says "branch-name has recent commits" with a button that says "Compare & pull request". Click that button! If you don't see that box/button, you can go to the "Pull Requests" tab, and click the "New Pull Request" button.

At the top of the page you will see something like this:

![branch selection for pull requests](./0-getting-ready/images/git-compare.png)

Change the "base" to your regular branch, and the "compare" to your assignment branch. This determines which branch gets merged into which.

Now you should see all of your commits, and the changelog, below. Take a moment to check that it is correct, that all of your commits are represented and the code looks like what you meant to commit.

Fill out the title field with the name of the assignment. _The title does not need to incude your name, but it does need to say which assignment the PR is for._ If you have any comments or questions about your work, you may write them in the "Description" field. This is optional.

If you are ready, click the button to open the pull request. That's it! Now you wait for feedback.

If you are not ready, use the drop-down button to open the pull request as a draft. You will be able to add more commits, or edit the title or description. If you do this, you must remember to come back and mark it as "Ready for review" when you are ready.

## 10. make requested changes

When you get feedback and need to make changes, you will follow these steps

1. `git checkout assignment-branch`
1. repeat steps 2-8 until you are finished
1. make a new comment on the pull request to indicate that you have made the changes

Keep doing this until we tell you that you are finished!

## 11. close the PR

When Danny or Adesoji say your assignment is finished, you may now merge your pull request. There will be a button at the bottom to do so. After you merge it, it will show you a button to delete the branch. Click that button.

Then in your terminal:

1. `git checkout my-branch`
1. `git pull`
1. `git branch -d assignment-branch` (to delete the local branch)

That's it! You're done, great job.