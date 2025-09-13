# Sprint 1: TypeScript CSV

### Task B: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
Some functionallity issues/edge cases include, fields that have new lines inside of them as the parser may assume a new row. Another unspecified issue that may come up is having a double quoted field as the parser should have some idea on how to escape it if the scenario comes up. 


Some caller and extensibility issues that may be present is the fact that it only works with file names; it would be nice if it could take in strings or streams. Another issue could be with big files as loading it all into memory may a taxing task. Most importantly as a caller, more specified and detiled error messages would be much appreciated.
- #### Step 2: Use an LLM to help expand your perspective.
There is clear overlap between my points and the write-up, especially around handling newlines inside quoted fields and escaping double quotes. We also both agree on the importance of providing clearer error messages to make the parser easier to use. Mine also adds useful concerns the LLM did not mention, such as allowing input from strings or streams instead of only filenames, and avoiding memory issues with large files by supporting streaming. However, it misses other common CSV pitfalls like different delimiters, blank lines, and encoding. Overall, me and the llm have similar views, with it focusing on CSV edge cases and mine highlighting extensibility and caller experience.
- #### Step 3: use an LLM to help expand your perspective.
Functionality:
Handle Quoted Fields - User Story: As a user, I can parse CSV fields that contain newlines inside quotes so that multi-line text does not incorrectly break into separate rows.

Support different delimiters - User Story: As a user, I can specify which delimiter my CSV uses (comma, semicolon, tab, or pipe) so that I can parse files from different sources without issues.


Extensibility:
Accept strings and streams, not just filenames - User Story: As a developer, I can pass in a string or stream directly, so that I’m not restricted to reading from the file system.

Provide clear and detailed error reporting - User Story: As a developer, I receive specific error messages (row/column number and cause) when parsing fails so that I can debug data issues faster.

Reflection:
My first ideas were mostly about handling tricky fields, like when there are newlines or double quotes inside them. The LLM brought up some things I didn’t think of, like supporting streams and handling different line endings. We both agreed that clear error messages are important. I noticed it didn’t really focus much on delimiters or encoding issues, which I think are also pretty common in real CSVs. Overall, the two sets of ideas worked well together and gave me a clearer picture of what to improve.

### Design Choices

### 1340 Supplement

- #### 1. Correctness
A correct CSV parser should ensure a pretty predicatble behavior along with general consensus of properties when extracting data. The properties include, keeping row and column structure, treating extras such as whitespace or double space accordingly, good error handling to inform the user, and very important from the assignment, allowance of a schema. All these properties (and some not mentioned) contribute to creating a correct parser, not the best. Following the properties can ensure a reliable structure that can, for the most part, extract data in the way the user wants.
- #### 2. Random, On-Demand Generation
With random generation comes random dimensions of data. There could be mega sizes or minature or spand many rows and/or columns, this all leads to testing the parsers ability to handle different sizes of files. Along with this you can see the rate the files are generated and fed to the parser, this effectively creates a stress test for it to see how much it can handle before (if it does) crash. Back to the varying sizes, this can also introduce the idea or test of consistency in the parsers out put, seeing if it matches rows to columns like how the user wants/expected. A very important and beneficial aspect that comes from vrying data is  the testing of the edge cases that could break the parsers. Some that the creator or developer of the parser forgot or was unaware of outside of things like double qoutes, or white space, or comma within the field.
- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
N/A
#### Tests: 
I have created my own csv file to debug the parser give to us. With this I also created my own test. Then, after updating the parser and creating my own zod schema, I re tested the the csv(People Csv) given to us to see if the implementation works.
#### How To…
to run the test in the program, in the terminal (making sure youre in the right the directory) cal npm test. This will display what test that pass and those that fail.

#### Team members and contributions (include cs logins):
N/A
#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
Jackie Casale: jgcasale
Vivian wang: vzwang
samyak jain: sjain08
#### Total estimated time it took to complete project: 5 hours
#### Link to GitHub Repo: 
https://github.com/cs0320-f25/typescript-csv-Solaidiaghe1.git 
