Recursive Patterns
==================
You can run the recurisve subsets from node using command line arguments to specify both the test (indented or unindented) and the string to use. 

For those not familiar with the command line, it's as simple as navigating to the directory and running the following command

    node recSubs.js 1 abcd

Concretely, here's what each component of that command line does. 

    node recSubs.js

uses node to run the file recSubs.js. 

    1 and abcd 
    1 and abcd 

are argments that are available in in process.argv. recSubs uses 1 to specify that test1 should run and 'abcd' becomes the string. Let me know if you have any trouble getting the files to run. 

Anthony 