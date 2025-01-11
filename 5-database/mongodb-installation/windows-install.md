# MongoDB Setup - Windows

## Install MongoDB Service

1. Download the MongoDB Community Server at: <https://www.mongodb.com/try/download/community>
1. Run the installer from your Downloads folder
1. Choose the "Complete" setup type from the installation wizard
1. On the "Service Configuration" pane, select "Run Service as Network Service User"

## Install MongoDB Compass

**NOTE**: MongoDB Compass is usually installed automatically when MongoDB Community Edition is installed via the official installer. The first step is to check whether it has installed correctly. If not, proceed with the following instructions.

1. Try to open Compass on your computer, in whatever way you normally open applications.
1. If it's there and opens, you're done with this section! If not, proceed to install it separately
1. Download MongoDB Compass from <https://www.mongodb.com/try/download/compass>
   - There are multiple downloads on this page, look for the one labeled `MongoDB Compass Download (GUI)`
1. Run the installer from your Downloads folder
1. Accept the default values for installation location and options

## Verify Installation and Connect

1. Open Compass
1. Click the green "Connect" button
1. If you see a red box that says `connect ECONNREFUSED 127.0.0.1:27017`, you just need to start the service in the background. Run `brew services start mongodb-community` in your terminal. Then try clicking the green Connect button again.

It should now look something like this:

![mongodb compass](./mongo-success.png)

## If something goes wrong...

We will be troubleshooting individual MongoDB install problems on Saturday, Sep. 14. If you miss that day, you can stay after class on another day to ask for help.
