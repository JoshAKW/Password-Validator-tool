/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = " Git is a free(for me) DevOps tool tool. It is an open-source mangement system, that allows projects of\
various sizes to be work on with potentially multiple developers."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = " GitHub, as opposed to Git, is an online site that Git users can connect with to store or find code/information\
& others pertinent resources"

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

const gitInitDefinition = "git init is usually the first command available in git commands as it either makes an exisitng project intp a\
repository or it creates a new empty repository"

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

const gitCloneDefinition =" git clone will create an new local directory from an existing git repository, for example downloading\
and creating a new repository locally on your computer from GitHub (At least I believe thats true) "

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

const gitStatusDefinition = " git status will tell you the condition of the current repository you are\
 in, such as tracked, untracked files and changes."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

const gitAddDefinition =" This command adds file to be tracked to the staging area\
 (like a start here and track changes to be committed)"

const gitAddCode = " git add -A or git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

const gitCommitDefinition = " git commit takes a snapshot of the current staged changes and moves them\
from the staging area to the commit, where they are ready to be pushed to the main repository"

const gitCommitCode = " git commit -am 'initial commit' "

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

const gitPushDefinition = "a git push command is for uploadind the local repository to a remote repository (I use it to send my local\
    to my GitHub repo)"