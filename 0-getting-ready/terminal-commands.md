> This is based on Brad Traversy's command line tutorial. You can find his original gist [here](https://gist.github.com/bradtraversy/cc180de0edee05075a6139e42d5f28ce), or his YouTube tutorial [here](https://www.youtube.com/watch?v=uwAqEzhyjtw)

# Common Terminal Commands

## Key Commands & Navigation

Before we look at some common commands, I just want to note a few keyboard commands that are very helpful:

- `Up Arrow`: Will show your last command
- `Down Arrow`: Will show your next command
- `Tab`: Will auto-complete your command or path
- `Ctrl + L`: Will clear the screen
- `Ctrl + C`: Will cancel a command
- `Ctrl + R`: Will search for a command
- `Ctrl + D`: Will exit the terminal

## Manual Command

On Linux and Mac, the `man` command is used to show the **manual** of any command that you can run in the terminal. So if you wanted to know more about the `ls` command, you could run:

```bash
  man ls
```

Unfortunately, if you are on Windows and using Git Bash, the `man` command is not included, however, you can just type the command that you want to know more about and then `--help` and you will get similar info:

```bash
  ls --help
```

You should be able to use the arrow keys or page up and down. When you are ready to exit, just press `q`.

## File System Navigation

Commands to navigate your file system are very important. You will be using them all the time. You won't remember every single command that you use, but these are the ones that you should remember.

| Command      | Description                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| pwd          | Lists the path to the working directory                                           |
| ls           | List directory contents                                                           |
| ls -a        | List contents including hidden files (Files that begin with a dot)                |
| ls -l        | List contents with more info including permissions (long listing)                 |
| ls -r        | List contents reverse order                                                       |
| cd           | Change directory to home                                                          |
| cd [dirname] | Change directory to specific directory                                            |
| cd ~         | Change to home directory                                                          |
| cd ..        | Change to parent directory                                                        |
| cd -         | Change to previous directory (which could be different than the parent of course) |

Of course, you can group flags together. For example, if I want to see more info and view hidden files, I could do `ls -l -a` and even shorten it to `ls -la`.

## Modifying Files & Directories

| Command                     | Description                                         |
| --------------------------- | --------------------------------------------------- |
| mkdir [dirname]             | Make directory                                      |
| touch [filename]            | Create file                                         |
| rm [filename]               | Remove file                                         |
| rm -i [filename]            | Remove directory, but ask before                    |
| rm -r [dirname]             | Remove directory                                    |
| rm -rf [dirname]            | Remove directory with contents                      |
| rm ./\*                     | Remove everything in the current folder             |
| cp [filename] [dirname]     | Copy file                                           |
| mv [filename] [dirname]     | Move file                                           |
| mv [dirname] [dirname]      | Move directory                                      |
| mv [filename] [filename]    | Rename file or folder                               |
| mv [filename] [filename] -v | Rename Verbose - print source/destination directory |

## Operators

### Chaining operator &&

We can do multiple commands sequentially with the `&&` operator:

```bash
cd test2 && mkdir test3
```

### Output operator >

The right angle bracket tells the system to output results into whatever you specify next. The target is usually a filename. Note that if the file you output to already exists, this will overwrite its contents.

```bash
echo "Hello World" > hello.txt
```

You can use this symbol by itself to create a new file:

```bash
> new_file.txt
```

### Append operator >>

Two right angle brackets will append contents onto the end of a file, rather than overwrite it as the `>` operator does.

## The `cat` (concatenate) Command

The cat command is a very common command and allows you to create single or multiple files, view content of a file, concatenate files and redirect output in terminal or files.

The most common thing I use it for is to display the contents of a file:

```bash
  cat [filename]
```

You can also view the contents of multiple files:

```bash
  cat [filename] [filename]
```

## The `echo` Command

The `echo` command is used to display messages, or to create and write to files.

```bash
  echo "Hello World"
```

You can also use it to create a file:

```bash
  echo "Hello World" > [filename]
```

You can also append to a file:

```bash
  echo "Hello World" >> [filename]
```

## The `nano` Command

`nano` is a text editor that works directly in the terminal. It is much easier to use than the `vim` editor, which is usually the default terminal editor.

You can open an existing file to edit or create a new file and open it with:

```bash
  nano [filename]
```

When you're ready to exit, follow the commands on the bottom of the screen, or just hit `Ctrl + X` and then `Y` to save or `N` to not save.

## The `grep` Command

The `grep` command is used to search for a text pattern in a file. It is very powerful and can be used to search for a string or regular expression in a file or set of files.

```bash
  grep [searchterm] [filename]
```

You can also search for a string in multiple files:

```bash
  grep [searchterm] [filename] [filename]
```

There are a lot more things that you can do with the `grep` command, but it's a bit more advanced.

## The `history` Command

Used to display the history of commands that you have run.

```bash
  history
```

You can also use the `!` to run a command from the history.

```bash
  !100
```

This will run the command that is in the 100th position in the history.
