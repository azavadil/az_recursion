Recursive Patterns
==================
You can run the file recSubs.js from the command line using node. Specify both the test (unindented is 0 or indented is test 1) and the string you want to use. 

For those not familiar with the command line, it's as simple as navigating to the directory and running the following command

    node recSubs.js 1 abcd

Concretely, here's what each component of that command line does. 

    node recSubs.js

uses node to run the file recSubs.js. 

    1 and abcd 

are argments that are available in process.argv. The 1 specifies that you want to use indented version and 'abcd' sets 'abcd' as the starting string.

Anthony 