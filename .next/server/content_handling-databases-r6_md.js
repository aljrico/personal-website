"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "content_handling-databases-r6_md";
exports.ids = ["content_handling-databases-r6_md"];
exports.modules = {

/***/ "./content/handling-databases-r6.md":
/*!******************************************!*\
  !*** ./content/handling-databases-r6.md ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"---\\nlayout: post\\ntitle: 'Handling multiple database connections with R'\\ndate: 2020-12-12\\ndraft: false\\ntoc: false\\nimages:\\nCover:\\ntags:\\n  - r\\n  - programming\\n---\\n\\nFrom its origin, R has been conceived as a programming language aimed to excel at statistic analysis, and as a mathematical tool. Technically capable of performing almost anything you can think of, as it would be expected from a general programming language such as Python. But both the specific functionality of the language, and the whole community, culture and universe of libraries that has been built upon R, has made of it a niche programming tool, used to address a relatively narrow set of tasks.\\n\\nThough this has been changing in recent years. As the rise of Data Science has bubbled up a new interest in statistics, the usage of R has skyrocketted. This has encouraged developers to design more and more R libraries, paving the way to start using R as a general purpose programming language.\\n\\nOne of the areas in which R has excelled above other languages, is in the availability and capability of data visualisation libraries. For many developers and analysts, R is the go-to language when it comes to processing, cleaning and displaying data in a beautiful and understandable way. It's easy-to-use, it's powerful, and its community grows bigger and wider every day. It was only a matter of time than this evolution would lead to the use-case that is web app development.\\n\\nBy the hand of the 'shiny' library, web app development with R has become widely popular in many industries. It has helped to bring together the best of R original toolkit and known libraries, and to push it in the direction of becoming a more general language.\\n\\nAlthough originally used to build simple dashboards, shiny development has grown to manage huge and complicated applications used for many purposes in academica, corporations or as stand-alone apps for the public. Even indie videogames have been created with it. Despite this growth, there's not much information out there about proper software development with R or shiny, particularly when it comes to handling connection and access to the databases. This article here aims to summarise some of those basics for R developers.\\n\\n## Dealing with credentials\\n\\nSo we are getting started with the most delicate bit of managing access to the databases. Credentials. Please remember that I'm only displaying the very basics upon which you can start code your own solution to manage credentials. Out there are plenty of built and tested solutions that could be more reliable if you are handling delicate information. But we'll start with the most basic way of handling this: Hashing.\\n\\n## Hashing\\n\\nSo let's say that a user wishes to register and create a user with our app, we have a nice UI that captures `username` and `password`. The UI is so fancy that hides the password as the user enters it, but of course the server can read that. So we get the following information:\\n\\n```{r}\\nusername = input$signup_username\\npassword = input$signup_password\\n```\\n\\nWe need to store this information somewhere so we're capable of checking the user's credentials every time they want to log in. But we are not supposed to actually know that password, even less to store it like that. So we need to encrypt that password. A cool library that I like to do just that is `digest`. So to make sure we only save a hashed password, our server code should look more like this:\\n\\n```{r}\\nusername = input$signup_username\\nhash = digest::digest(input$signup_password, algo = \\\"md5\\\")\\n```\\n\\nThis library lets you pick whatever algorithm you want to encrypt objects. As long as you always use the same one, any should work fine. So now we can store this credentials, for example, in a data.table:\\n\\n```{r}\\ncredentials_dt = data.table::data.table(usernames = username, passwords = hash)\\n```\\n\\nThis data.table should be stored in a safe database and keep binding new users as they sign up. So now that we have stored a table with all registered users and their credentials in a safe way, we can let them log in. Now let's say that we have another pretty piece of UI that captures users log in, we get\\n\\n```{r}\\nlogin_username = input$login_username\\nlogin_hash = digest::digest(input$login_password, algo = \\\"md5\\\")\\n```\\n\\nNote that we are encrypting the login password with the exact same algorithm as we did with the sign up. Since this is a one-way algorithm, the result is deterministic. Which means that if the user has introduced the correct password, the encrypted login password will be the same as the signup pasword. So checking user credentials ends up being as easy as just filtering that table:\\n\\n```{r}\\nuser_credentials = credentials_dt[usernames == login_username & passwords == login_hash]\\nif(nrow(user_credentials) > 0 ) print(\\\"Success!\\\") else print(\\\"Wrong username or password\\\")\\n```\\n\\nSo this way we have managed to capture user credentials, store them and then check that the login is correct. All of that without actually knowing or storing their actual password anywhere. You could argue that this encrypting method is kind of shallow. And it is. Let's say that a malicious agent gets access to the database where we have all the credentials stored. The passwords are encrypted, so they can't be seen. But the way they're encrypted still presents a vulnerability: Two equal passwords will yield the exact same hash. Brute force is not a realistic threat though, as these hashing algorithms are - by design - quite slow.\\n\\n## Handling Database Connections\\n\\nNow that we have a rough idea of how to manage and store credentials, we can start talking about how to use them to connect our shiny app to a database. So let's say that a user has logged in and we haved checked he's properly registered. At this point ideally we'd also have given that user certain permissions in the database we want them to have access to. So we can simply open a connection using the `odbc` library:\\n\\n```{r}\\nconnection_string = paste0(\\n  \\\"Driver=\\\", \\\"{ODBC Driver 42 for SQL Server}\\\",\\n  \\\";Server=\\\", \\\"sql-abc-rstudio-dev,1234\\\",\\n  \\\";Database=\\\", \\\"ProjectDataBase\\\",\\n  \\\";UID=\\\", login_username,\\n  \\\";PWD=\\\", login_hash\\n)\\n\\nconnection = odbc::dbConnect(odbc::odbc(), .connection_string = connection_string, encoding = \\\"UTF-8\\\")\\n```\\n\\nIt's likely the user will need to query many things in a session, so we can just keep this connection open and send queries that way:\\n\\n```{r}\\nsql_string = \\\"SELECT * FROM main_table\\\"\\nodbc::dbGetQuery(connection, DBI::SQL(sql_string))\\n```\\n\\nEventually we'll need to close that connection, which is as easy as:\\n\\n```{r}\\nodbc::dbDisconnect(connection)\\n```\\n\\nDeciding when to close the connection can actually get quite tricky. Typically, you'd do it whenever the user logs out. But what if the user doesn't log out and just closes the app? Or goes inactive and the app freezes? Or maybe some error pops up and stops everything. And that gets far more complicated if we want to allow multiple connections on the same user. The immediate reaction to this, is to pepper all the server code with closing statements. `close_connection()` when the session ends, when the user logs out, when inactivity is detected, after any detectable error, etc. In my experience, going down this route tends to flood the app with overly complicated code, very prone to errors and difficult to maintain.\\n\\nMy proposal here is simply to open conenctions only when they are needed, and close them immediately after using them. The main caveat of this is that you are creating a huge overhead. Especially if we know a user is going to request access to the database many times while casually browsing the app.\\n\\nThen, how should we implement this?\\n\\n### R6\\n\\nNot many people are aware that the typical Object Oriented Programming everyone knows is also possible with R. It's not as popular as S3 or so, but it's possible with the `R6` library. Without going into full detail on how to use R6, I'll just go through a very basic connections handler.\\n\\nThe main advantage of constructing an R6 class to handle connections, is that we can very tidy when designing what it needs. Let's start with the fields it'll need:\\n\\n```{r}\\nConnectionHandler = R6::R6Class(\\n  \\\"ConnectionHandler\\\",\\n  private = list(\\n    username = character(0),\\n    password = character(0),\\n    connection_object = NULL\\n  )\\n)\\n```\\n\\nSo we have created a list of values that we know will need to be filled. And we also know that not even the developer should ever need to access them directly. So they're all private fields. Now we need to define a method that actually fills them with user input.\\n\\n```{r}\\nConnectionHandler = R6::R6Class(\\n  \\\"ConnectionHandler\\\",\\n  private = list(\\n    username = character(0),\\n    password = character(0),\\n    connection_object = NULL\\n  ),\\n\\n  public = list(\\n    capture_credentials = function(username, password){\\n      private$username = username\\n      private$password = digest::digest(password, algo = \\\"md5\\\")\\n    }\\n  )\\n)\\n```\\n\\nSo now we have a class that will be capable of creating an instance object, capture a user credentials and store them as their field. And it would be used like this:\\n\\n```{r}\\nconnection_handler = ConnectionHandler$new()\\nconnection_handler$capture_credentials(username = input$login_username, password = input$login_password)\\n```\\n\\nSo now we have the basics, let's go to actually handling database connections. We'll start by adding another field with the whole connection string, and then defining private methods that open and close those connections:\\n\\n```{r}\\nConnectionHandler = R6::R6Class(\\n  \\\"ConnectionHandler\\\",\\n  private = list(\\n    username = character(0),\\n    password = character(0),\\n    connection_object = NULL,\\n    connection_string = character(0),\\n    open_connection = function() {\\n      private$connection_object = odbc::dbConnect(odbc::odbc(), .connection_string = self$connection_string, encoding = \\\"UTF-8\\\")\\n    },\\n    close_connection = function() {\\n      odbc::dbDisconnect(private$connection_object)\\n    },\\n  ),\\n\\n  public = list(\\n    capture_credentials = function(username, password){\\n      private$username = username\\n      private$password = digest::digest(password, algo = \\\"md5\\\")\\n      private$connection_string = paste0(\\n        \\\"Driver=\\\", \\\"{ODBC Driver 42 for SQL Server}\\\",\\n        \\\";Server=\\\", \\\"sql-abc-rstudio-dev,1234\\\",\\n        \\\";Database=\\\", \\\"ProjectDataBase\\\",\\n        \\\";UID=\\\", private$username,\\n        \\\";PWD=\\\", private$password\\n      )\\n    }\\n  )\\n)\\n```\\n\\nNote that we've essentially pasted the `connection_string` we created before into the `capture_credentials` method. This way the moment credentials are introduced and verified we have the database access details ready to go.\\n\\nSo to make this complete, we only need to add the remaining piece: The method that allows to user to actually query stuff.\\n\\n```{r}\\nConnectionHandler = R6::R6Class(\\n  \\\"ConnectionHandler\\\",\\n  private = list(\\n    username = character(0),\\n    password = character(0),\\n    connection_object = NULL,\\n    connection_string = character(0),\\n    open_connection = function() {\\n      private$connection_object = odbc::dbConnect(odbc::odbc(), .connection_string = self$connection_string, encoding = \\\"UTF-8\\\")\\n    },\\n    close_connection = function() {\\n      odbc::dbDisconnect(private$connection_object)\\n    }\\n  ),\\n\\n  public = list(\\n    capture_credentials = function(username, password){\\n      private$username = username\\n      private$password = digest::digest(password, algo = \\\"md5\\\")\\n      private$connection_string = paste0(\\n        \\\"Driver=\\\", \\\"{ODBC Driver 42 for SQL Server}\\\",\\n        \\\";Server=\\\", \\\"sql-abc-rstudio-dev,1234\\\",\\n        \\\";Database=\\\", \\\"ProjectDataBase\\\",\\n        \\\";UID=\\\", private$username,\\n        \\\";PWD=\\\", private$password\\n      )\\n    },\\n    query = function(sql_string){\\n      private$open_connection()\\n      odbc::dbGetQuery(private$connection_object, DBI::SQL(sql_string))\\n      private$close_connection()\\n    }\\n  )\\n)\\n```\\n\\n### How would that be used\\n\\nEssentially, this is it. We've got an R6 class that can capture and store credentials and uses them to handle access to a database. And this is how it'd be used inside a shiny app:\\n\\n```{r}\\nconnection_handler = ConnectionHandler$new()\\nconnection_handler$capture_credentials(username = input$login_username, password = input$login_password)\\n\\nsql_string = \\\"SELECT * FROM main_table\\\"\\nconnection_handler$query(sql_string)\\n```\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZW50L2hhbmRsaW5nLWRhdGFiYXNlcy1yNi5tZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUscThGQUFxOEYsRUFBRSxzZUFBc2UsRUFBRSw2VEFBNlQsRUFBRSxvWkFBb1osRUFBRSwyZkFBMmYsRUFBRSxveENBQW94QyxFQUFFLGlEQUFpRCw4QkFBOEIsVUFBVSwrQ0FBK0Msd0NBQXdDLDhCQUE4Qix1UkFBdVIsRUFBRSxvTEFBb0wsRUFBRSxrakRBQWtqRCxFQUFFLHljQUF5YyxFQUFFLDRQQUE0UCw2R0FBNkcsOExBQThMLEVBQUUsc1lBQXNZLEVBQUUscVBBQXFQLDJJQUEySSxzQ0FBc0MsNERBQTRELG9GQUFvRiwyS0FBMkssOEJBQThCLGdCQUFnQixxREFBcUQsOENBQThDLHNDQUFzQyx3Q0FBd0MsdVhBQXVYLEVBQUUscVBBQXFQLDJJQUEySSxzQ0FBc0MsNERBQTRELG1GQUFtRiwyS0FBMkssOEJBQThCLGdCQUFnQixxREFBcUQsOENBQThDLHNDQUFzQyx3Q0FBd0Msb0NBQW9DLG1KQUFtSiwyT0FBMk8sRUFBRSxtUEFBbVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vY29udGVudC9oYW5kbGluZy1kYXRhYmFzZXMtcjYubWQ/ZTg1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi0tLVxcbmxheW91dDogcG9zdFxcbnRpdGxlOiAnSGFuZGxpbmcgbXVsdGlwbGUgZGF0YWJhc2UgY29ubmVjdGlvbnMgd2l0aCBSJ1xcbmRhdGU6IDIwMjAtMTItMTJcXG5kcmFmdDogZmFsc2VcXG50b2M6IGZhbHNlXFxuaW1hZ2VzOlxcbkNvdmVyOlxcbnRhZ3M6XFxuICAtIHJcXG4gIC0gcHJvZ3JhbW1pbmdcXG4tLS1cXG5cXG5Gcm9tIGl0cyBvcmlnaW4sIFIgaGFzIGJlZW4gY29uY2VpdmVkIGFzIGEgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgYWltZWQgdG8gZXhjZWwgYXQgc3RhdGlzdGljIGFuYWx5c2lzLCBhbmQgYXMgYSBtYXRoZW1hdGljYWwgdG9vbC4gVGVjaG5pY2FsbHkgY2FwYWJsZSBvZiBwZXJmb3JtaW5nIGFsbW9zdCBhbnl0aGluZyB5b3UgY2FuIHRoaW5rIG9mLCBhcyBpdCB3b3VsZCBiZSBleHBlY3RlZCBmcm9tIGEgZ2VuZXJhbCBwcm9ncmFtbWluZyBsYW5ndWFnZSBzdWNoIGFzIFB5dGhvbi4gQnV0IGJvdGggdGhlIHNwZWNpZmljIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGxhbmd1YWdlLCBhbmQgdGhlIHdob2xlIGNvbW11bml0eSwgY3VsdHVyZSBhbmQgdW5pdmVyc2Ugb2YgbGlicmFyaWVzIHRoYXQgaGFzIGJlZW4gYnVpbHQgdXBvbiBSLCBoYXMgbWFkZSBvZiBpdCBhIG5pY2hlIHByb2dyYW1taW5nIHRvb2wsIHVzZWQgdG8gYWRkcmVzcyBhIHJlbGF0aXZlbHkgbmFycm93IHNldCBvZiB0YXNrcy5cXG5cXG5UaG91Z2ggdGhpcyBoYXMgYmVlbiBjaGFuZ2luZyBpbiByZWNlbnQgeWVhcnMuIEFzIHRoZSByaXNlIG9mIERhdGEgU2NpZW5jZSBoYXMgYnViYmxlZCB1cCBhIG5ldyBpbnRlcmVzdCBpbiBzdGF0aXN0aWNzLCB0aGUgdXNhZ2Ugb2YgUiBoYXMgc2t5cm9ja2V0dGVkLiBUaGlzIGhhcyBlbmNvdXJhZ2VkIGRldmVsb3BlcnMgdG8gZGVzaWduIG1vcmUgYW5kIG1vcmUgUiBsaWJyYXJpZXMsIHBhdmluZyB0aGUgd2F5IHRvIHN0YXJ0IHVzaW5nIFIgYXMgYSBnZW5lcmFsIHB1cnBvc2UgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuXFxuXFxuT25lIG9mIHRoZSBhcmVhcyBpbiB3aGljaCBSIGhhcyBleGNlbGxlZCBhYm92ZSBvdGhlciBsYW5ndWFnZXMsIGlzIGluIHRoZSBhdmFpbGFiaWxpdHkgYW5kIGNhcGFiaWxpdHkgb2YgZGF0YSB2aXN1YWxpc2F0aW9uIGxpYnJhcmllcy4gRm9yIG1hbnkgZGV2ZWxvcGVycyBhbmQgYW5hbHlzdHMsIFIgaXMgdGhlIGdvLXRvIGxhbmd1YWdlIHdoZW4gaXQgY29tZXMgdG8gcHJvY2Vzc2luZywgY2xlYW5pbmcgYW5kIGRpc3BsYXlpbmcgZGF0YSBpbiBhIGJlYXV0aWZ1bCBhbmQgdW5kZXJzdGFuZGFibGUgd2F5LiBJdCdzIGVhc3ktdG8tdXNlLCBpdCdzIHBvd2VyZnVsLCBhbmQgaXRzIGNvbW11bml0eSBncm93cyBiaWdnZXIgYW5kIHdpZGVyIGV2ZXJ5IGRheS4gSXQgd2FzIG9ubHkgYSBtYXR0ZXIgb2YgdGltZSB0aGFuIHRoaXMgZXZvbHV0aW9uIHdvdWxkIGxlYWQgdG8gdGhlIHVzZS1jYXNlIHRoYXQgaXMgd2ViIGFwcCBkZXZlbG9wbWVudC5cXG5cXG5CeSB0aGUgaGFuZCBvZiB0aGUgJ3NoaW55JyBsaWJyYXJ5LCB3ZWIgYXBwIGRldmVsb3BtZW50IHdpdGggUiBoYXMgYmVjb21lIHdpZGVseSBwb3B1bGFyIGluIG1hbnkgaW5kdXN0cmllcy4gSXQgaGFzIGhlbHBlZCB0byBicmluZyB0b2dldGhlciB0aGUgYmVzdCBvZiBSIG9yaWdpbmFsIHRvb2xraXQgYW5kIGtub3duIGxpYnJhcmllcywgYW5kIHRvIHB1c2ggaXQgaW4gdGhlIGRpcmVjdGlvbiBvZiBiZWNvbWluZyBhIG1vcmUgZ2VuZXJhbCBsYW5ndWFnZS5cXG5cXG5BbHRob3VnaCBvcmlnaW5hbGx5IHVzZWQgdG8gYnVpbGQgc2ltcGxlIGRhc2hib2FyZHMsIHNoaW55IGRldmVsb3BtZW50IGhhcyBncm93biB0byBtYW5hZ2UgaHVnZSBhbmQgY29tcGxpY2F0ZWQgYXBwbGljYXRpb25zIHVzZWQgZm9yIG1hbnkgcHVycG9zZXMgaW4gYWNhZGVtaWNhLCBjb3Jwb3JhdGlvbnMgb3IgYXMgc3RhbmQtYWxvbmUgYXBwcyBmb3IgdGhlIHB1YmxpYy4gRXZlbiBpbmRpZSB2aWRlb2dhbWVzIGhhdmUgYmVlbiBjcmVhdGVkIHdpdGggaXQuIERlc3BpdGUgdGhpcyBncm93dGgsIHRoZXJlJ3Mgbm90IG11Y2ggaW5mb3JtYXRpb24gb3V0IHRoZXJlIGFib3V0IHByb3BlciBzb2Z0d2FyZSBkZXZlbG9wbWVudCB3aXRoIFIgb3Igc2hpbnksIHBhcnRpY3VsYXJseSB3aGVuIGl0IGNvbWVzIHRvIGhhbmRsaW5nIGNvbm5lY3Rpb24gYW5kIGFjY2VzcyB0byB0aGUgZGF0YWJhc2VzLiBUaGlzIGFydGljbGUgaGVyZSBhaW1zIHRvIHN1bW1hcmlzZSBzb21lIG9mIHRob3NlIGJhc2ljcyBmb3IgUiBkZXZlbG9wZXJzLlxcblxcbiMjIERlYWxpbmcgd2l0aCBjcmVkZW50aWFsc1xcblxcblNvIHdlIGFyZSBnZXR0aW5nIHN0YXJ0ZWQgd2l0aCB0aGUgbW9zdCBkZWxpY2F0ZSBiaXQgb2YgbWFuYWdpbmcgYWNjZXNzIHRvIHRoZSBkYXRhYmFzZXMuIENyZWRlbnRpYWxzLiBQbGVhc2UgcmVtZW1iZXIgdGhhdCBJJ20gb25seSBkaXNwbGF5aW5nIHRoZSB2ZXJ5IGJhc2ljcyB1cG9uIHdoaWNoIHlvdSBjYW4gc3RhcnQgY29kZSB5b3VyIG93biBzb2x1dGlvbiB0byBtYW5hZ2UgY3JlZGVudGlhbHMuIE91dCB0aGVyZSBhcmUgcGxlbnR5IG9mIGJ1aWx0IGFuZCB0ZXN0ZWQgc29sdXRpb25zIHRoYXQgY291bGQgYmUgbW9yZSByZWxpYWJsZSBpZiB5b3UgYXJlIGhhbmRsaW5nIGRlbGljYXRlIGluZm9ybWF0aW9uLiBCdXQgd2UnbGwgc3RhcnQgd2l0aCB0aGUgbW9zdCBiYXNpYyB3YXkgb2YgaGFuZGxpbmcgdGhpczogSGFzaGluZy5cXG5cXG4jIyBIYXNoaW5nXFxuXFxuU28gbGV0J3Mgc2F5IHRoYXQgYSB1c2VyIHdpc2hlcyB0byByZWdpc3RlciBhbmQgY3JlYXRlIGEgdXNlciB3aXRoIG91ciBhcHAsIHdlIGhhdmUgYSBuaWNlIFVJIHRoYXQgY2FwdHVyZXMgYHVzZXJuYW1lYCBhbmQgYHBhc3N3b3JkYC4gVGhlIFVJIGlzIHNvIGZhbmN5IHRoYXQgaGlkZXMgdGhlIHBhc3N3b3JkIGFzIHRoZSB1c2VyIGVudGVycyBpdCwgYnV0IG9mIGNvdXJzZSB0aGUgc2VydmVyIGNhbiByZWFkIHRoYXQuIFNvIHdlIGdldCB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uOlxcblxcbmBgYHtyfVxcbnVzZXJuYW1lID0gaW5wdXQkc2lnbnVwX3VzZXJuYW1lXFxucGFzc3dvcmQgPSBpbnB1dCRzaWdudXBfcGFzc3dvcmRcXG5gYGBcXG5cXG5XZSBuZWVkIHRvIHN0b3JlIHRoaXMgaW5mb3JtYXRpb24gc29tZXdoZXJlIHNvIHdlJ3JlIGNhcGFibGUgb2YgY2hlY2tpbmcgdGhlIHVzZXIncyBjcmVkZW50aWFscyBldmVyeSB0aW1lIHRoZXkgd2FudCB0byBsb2cgaW4uIEJ1dCB3ZSBhcmUgbm90IHN1cHBvc2VkIHRvIGFjdHVhbGx5IGtub3cgdGhhdCBwYXNzd29yZCwgZXZlbiBsZXNzIHRvIHN0b3JlIGl0IGxpa2UgdGhhdC4gU28gd2UgbmVlZCB0byBlbmNyeXB0IHRoYXQgcGFzc3dvcmQuIEEgY29vbCBsaWJyYXJ5IHRoYXQgSSBsaWtlIHRvIGRvIGp1c3QgdGhhdCBpcyBgZGlnZXN0YC4gU28gdG8gbWFrZSBzdXJlIHdlIG9ubHkgc2F2ZSBhIGhhc2hlZCBwYXNzd29yZCwgb3VyIHNlcnZlciBjb2RlIHNob3VsZCBsb29rIG1vcmUgbGlrZSB0aGlzOlxcblxcbmBgYHtyfVxcbnVzZXJuYW1lID0gaW5wdXQkc2lnbnVwX3VzZXJuYW1lXFxuaGFzaCA9IGRpZ2VzdDo6ZGlnZXN0KGlucHV0JHNpZ251cF9wYXNzd29yZCwgYWxnbyA9IFxcXCJtZDVcXFwiKVxcbmBgYFxcblxcblRoaXMgbGlicmFyeSBsZXRzIHlvdSBwaWNrIHdoYXRldmVyIGFsZ29yaXRobSB5b3Ugd2FudCB0byBlbmNyeXB0IG9iamVjdHMuIEFzIGxvbmcgYXMgeW91IGFsd2F5cyB1c2UgdGhlIHNhbWUgb25lLCBhbnkgc2hvdWxkIHdvcmsgZmluZS4gU28gbm93IHdlIGNhbiBzdG9yZSB0aGlzIGNyZWRlbnRpYWxzLCBmb3IgZXhhbXBsZSwgaW4gYSBkYXRhLnRhYmxlOlxcblxcbmBgYHtyfVxcbmNyZWRlbnRpYWxzX2R0ID0gZGF0YS50YWJsZTo6ZGF0YS50YWJsZSh1c2VybmFtZXMgPSB1c2VybmFtZSwgcGFzc3dvcmRzID0gaGFzaClcXG5gYGBcXG5cXG5UaGlzIGRhdGEudGFibGUgc2hvdWxkIGJlIHN0b3JlZCBpbiBhIHNhZmUgZGF0YWJhc2UgYW5kIGtlZXAgYmluZGluZyBuZXcgdXNlcnMgYXMgdGhleSBzaWduIHVwLiBTbyBub3cgdGhhdCB3ZSBoYXZlIHN0b3JlZCBhIHRhYmxlIHdpdGggYWxsIHJlZ2lzdGVyZWQgdXNlcnMgYW5kIHRoZWlyIGNyZWRlbnRpYWxzIGluIGEgc2FmZSB3YXksIHdlIGNhbiBsZXQgdGhlbSBsb2cgaW4uIE5vdyBsZXQncyBzYXkgdGhhdCB3ZSBoYXZlIGFub3RoZXIgcHJldHR5IHBpZWNlIG9mIFVJIHRoYXQgY2FwdHVyZXMgdXNlcnMgbG9nIGluLCB3ZSBnZXRcXG5cXG5gYGB7cn1cXG5sb2dpbl91c2VybmFtZSA9IGlucHV0JGxvZ2luX3VzZXJuYW1lXFxubG9naW5faGFzaCA9IGRpZ2VzdDo6ZGlnZXN0KGlucHV0JGxvZ2luX3Bhc3N3b3JkLCBhbGdvID0gXFxcIm1kNVxcXCIpXFxuYGBgXFxuXFxuTm90ZSB0aGF0IHdlIGFyZSBlbmNyeXB0aW5nIHRoZSBsb2dpbiBwYXNzd29yZCB3aXRoIHRoZSBleGFjdCBzYW1lIGFsZ29yaXRobSBhcyB3ZSBkaWQgd2l0aCB0aGUgc2lnbiB1cC4gU2luY2UgdGhpcyBpcyBhIG9uZS13YXkgYWxnb3JpdGhtLCB0aGUgcmVzdWx0IGlzIGRldGVybWluaXN0aWMuIFdoaWNoIG1lYW5zIHRoYXQgaWYgdGhlIHVzZXIgaGFzIGludHJvZHVjZWQgdGhlIGNvcnJlY3QgcGFzc3dvcmQsIHRoZSBlbmNyeXB0ZWQgbG9naW4gcGFzc3dvcmQgd2lsbCBiZSB0aGUgc2FtZSBhcyB0aGUgc2lnbnVwIHBhc3dvcmQuIFNvIGNoZWNraW5nIHVzZXIgY3JlZGVudGlhbHMgZW5kcyB1cCBiZWluZyBhcyBlYXN5IGFzIGp1c3QgZmlsdGVyaW5nIHRoYXQgdGFibGU6XFxuXFxuYGBge3J9XFxudXNlcl9jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzX2R0W3VzZXJuYW1lcyA9PSBsb2dpbl91c2VybmFtZSAmIHBhc3N3b3JkcyA9PSBsb2dpbl9oYXNoXVxcbmlmKG5yb3codXNlcl9jcmVkZW50aWFscykgPiAwICkgcHJpbnQoXFxcIlN1Y2Nlc3MhXFxcIikgZWxzZSBwcmludChcXFwiV3JvbmcgdXNlcm5hbWUgb3IgcGFzc3dvcmRcXFwiKVxcbmBgYFxcblxcblNvIHRoaXMgd2F5IHdlIGhhdmUgbWFuYWdlZCB0byBjYXB0dXJlIHVzZXIgY3JlZGVudGlhbHMsIHN0b3JlIHRoZW0gYW5kIHRoZW4gY2hlY2sgdGhhdCB0aGUgbG9naW4gaXMgY29ycmVjdC4gQWxsIG9mIHRoYXQgd2l0aG91dCBhY3R1YWxseSBrbm93aW5nIG9yIHN0b3JpbmcgdGhlaXIgYWN0dWFsIHBhc3N3b3JkIGFueXdoZXJlLiBZb3UgY291bGQgYXJndWUgdGhhdCB0aGlzIGVuY3J5cHRpbmcgbWV0aG9kIGlzIGtpbmQgb2Ygc2hhbGxvdy4gQW5kIGl0IGlzLiBMZXQncyBzYXkgdGhhdCBhIG1hbGljaW91cyBhZ2VudCBnZXRzIGFjY2VzcyB0byB0aGUgZGF0YWJhc2Ugd2hlcmUgd2UgaGF2ZSBhbGwgdGhlIGNyZWRlbnRpYWxzIHN0b3JlZC4gVGhlIHBhc3N3b3JkcyBhcmUgZW5jcnlwdGVkLCBzbyB0aGV5IGNhbid0IGJlIHNlZW4uIEJ1dCB0aGUgd2F5IHRoZXkncmUgZW5jcnlwdGVkIHN0aWxsIHByZXNlbnRzIGEgdnVsbmVyYWJpbGl0eTogVHdvIGVxdWFsIHBhc3N3b3JkcyB3aWxsIHlpZWxkIHRoZSBleGFjdCBzYW1lIGhhc2guIEJydXRlIGZvcmNlIGlzIG5vdCBhIHJlYWxpc3RpYyB0aHJlYXQgdGhvdWdoLCBhcyB0aGVzZSBoYXNoaW5nIGFsZ29yaXRobXMgYXJlIC0gYnkgZGVzaWduIC0gcXVpdGUgc2xvdy5cXG5cXG4jIyBIYW5kbGluZyBEYXRhYmFzZSBDb25uZWN0aW9uc1xcblxcbk5vdyB0aGF0IHdlIGhhdmUgYSByb3VnaCBpZGVhIG9mIGhvdyB0byBtYW5hZ2UgYW5kIHN0b3JlIGNyZWRlbnRpYWxzLCB3ZSBjYW4gc3RhcnQgdGFsa2luZyBhYm91dCBob3cgdG8gdXNlIHRoZW0gdG8gY29ubmVjdCBvdXIgc2hpbnkgYXBwIHRvIGEgZGF0YWJhc2UuIFNvIGxldCdzIHNheSB0aGF0IGEgdXNlciBoYXMgbG9nZ2VkIGluIGFuZCB3ZSBoYXZlZCBjaGVja2VkIGhlJ3MgcHJvcGVybHkgcmVnaXN0ZXJlZC4gQXQgdGhpcyBwb2ludCBpZGVhbGx5IHdlJ2QgYWxzbyBoYXZlIGdpdmVuIHRoYXQgdXNlciBjZXJ0YWluIHBlcm1pc3Npb25zIGluIHRoZSBkYXRhYmFzZSB3ZSB3YW50IHRoZW0gdG8gaGF2ZSBhY2Nlc3MgdG8uIFNvIHdlIGNhbiBzaW1wbHkgb3BlbiBhIGNvbm5lY3Rpb24gdXNpbmcgdGhlIGBvZGJjYCBsaWJyYXJ5OlxcblxcbmBgYHtyfVxcbmNvbm5lY3Rpb25fc3RyaW5nID0gcGFzdGUwKFxcbiAgXFxcIkRyaXZlcj1cXFwiLCBcXFwie09EQkMgRHJpdmVyIDQyIGZvciBTUUwgU2VydmVyfVxcXCIsXFxuICBcXFwiO1NlcnZlcj1cXFwiLCBcXFwic3FsLWFiYy1yc3R1ZGlvLWRldiwxMjM0XFxcIixcXG4gIFxcXCI7RGF0YWJhc2U9XFxcIiwgXFxcIlByb2plY3REYXRhQmFzZVxcXCIsXFxuICBcXFwiO1VJRD1cXFwiLCBsb2dpbl91c2VybmFtZSxcXG4gIFxcXCI7UFdEPVxcXCIsIGxvZ2luX2hhc2hcXG4pXFxuXFxuY29ubmVjdGlvbiA9IG9kYmM6OmRiQ29ubmVjdChvZGJjOjpvZGJjKCksIC5jb25uZWN0aW9uX3N0cmluZyA9IGNvbm5lY3Rpb25fc3RyaW5nLCBlbmNvZGluZyA9IFxcXCJVVEYtOFxcXCIpXFxuYGBgXFxuXFxuSXQncyBsaWtlbHkgdGhlIHVzZXIgd2lsbCBuZWVkIHRvIHF1ZXJ5IG1hbnkgdGhpbmdzIGluIGEgc2Vzc2lvbiwgc28gd2UgY2FuIGp1c3Qga2VlcCB0aGlzIGNvbm5lY3Rpb24gb3BlbiBhbmQgc2VuZCBxdWVyaWVzIHRoYXQgd2F5OlxcblxcbmBgYHtyfVxcbnNxbF9zdHJpbmcgPSBcXFwiU0VMRUNUICogRlJPTSBtYWluX3RhYmxlXFxcIlxcbm9kYmM6OmRiR2V0UXVlcnkoY29ubmVjdGlvbiwgREJJOjpTUUwoc3FsX3N0cmluZykpXFxuYGBgXFxuXFxuRXZlbnR1YWxseSB3ZSdsbCBuZWVkIHRvIGNsb3NlIHRoYXQgY29ubmVjdGlvbiwgd2hpY2ggaXMgYXMgZWFzeSBhczpcXG5cXG5gYGB7cn1cXG5vZGJjOjpkYkRpc2Nvbm5lY3QoY29ubmVjdGlvbilcXG5gYGBcXG5cXG5EZWNpZGluZyB3aGVuIHRvIGNsb3NlIHRoZSBjb25uZWN0aW9uIGNhbiBhY3R1YWxseSBnZXQgcXVpdGUgdHJpY2t5LiBUeXBpY2FsbHksIHlvdSdkIGRvIGl0IHdoZW5ldmVyIHRoZSB1c2VyIGxvZ3Mgb3V0LiBCdXQgd2hhdCBpZiB0aGUgdXNlciBkb2Vzbid0IGxvZyBvdXQgYW5kIGp1c3QgY2xvc2VzIHRoZSBhcHA/IE9yIGdvZXMgaW5hY3RpdmUgYW5kIHRoZSBhcHAgZnJlZXplcz8gT3IgbWF5YmUgc29tZSBlcnJvciBwb3BzIHVwIGFuZCBzdG9wcyBldmVyeXRoaW5nLiBBbmQgdGhhdCBnZXRzIGZhciBtb3JlIGNvbXBsaWNhdGVkIGlmIHdlIHdhbnQgdG8gYWxsb3cgbXVsdGlwbGUgY29ubmVjdGlvbnMgb24gdGhlIHNhbWUgdXNlci4gVGhlIGltbWVkaWF0ZSByZWFjdGlvbiB0byB0aGlzLCBpcyB0byBwZXBwZXIgYWxsIHRoZSBzZXJ2ZXIgY29kZSB3aXRoIGNsb3Npbmcgc3RhdGVtZW50cy4gYGNsb3NlX2Nvbm5lY3Rpb24oKWAgd2hlbiB0aGUgc2Vzc2lvbiBlbmRzLCB3aGVuIHRoZSB1c2VyIGxvZ3Mgb3V0LCB3aGVuIGluYWN0aXZpdHkgaXMgZGV0ZWN0ZWQsIGFmdGVyIGFueSBkZXRlY3RhYmxlIGVycm9yLCBldGMuIEluIG15IGV4cGVyaWVuY2UsIGdvaW5nIGRvd24gdGhpcyByb3V0ZSB0ZW5kcyB0byBmbG9vZCB0aGUgYXBwIHdpdGggb3Zlcmx5IGNvbXBsaWNhdGVkIGNvZGUsIHZlcnkgcHJvbmUgdG8gZXJyb3JzIGFuZCBkaWZmaWN1bHQgdG8gbWFpbnRhaW4uXFxuXFxuTXkgcHJvcG9zYWwgaGVyZSBpcyBzaW1wbHkgdG8gb3BlbiBjb25lbmN0aW9ucyBvbmx5IHdoZW4gdGhleSBhcmUgbmVlZGVkLCBhbmQgY2xvc2UgdGhlbSBpbW1lZGlhdGVseSBhZnRlciB1c2luZyB0aGVtLiBUaGUgbWFpbiBjYXZlYXQgb2YgdGhpcyBpcyB0aGF0IHlvdSBhcmUgY3JlYXRpbmcgYSBodWdlIG92ZXJoZWFkLiBFc3BlY2lhbGx5IGlmIHdlIGtub3cgYSB1c2VyIGlzIGdvaW5nIHRvIHJlcXVlc3QgYWNjZXNzIHRvIHRoZSBkYXRhYmFzZSBtYW55IHRpbWVzIHdoaWxlIGNhc3VhbGx5IGJyb3dzaW5nIHRoZSBhcHAuXFxuXFxuVGhlbiwgaG93IHNob3VsZCB3ZSBpbXBsZW1lbnQgdGhpcz9cXG5cXG4jIyMgUjZcXG5cXG5Ob3QgbWFueSBwZW9wbGUgYXJlIGF3YXJlIHRoYXQgdGhlIHR5cGljYWwgT2JqZWN0IE9yaWVudGVkIFByb2dyYW1taW5nIGV2ZXJ5b25lIGtub3dzIGlzIGFsc28gcG9zc2libGUgd2l0aCBSLiBJdCdzIG5vdCBhcyBwb3B1bGFyIGFzIFMzIG9yIHNvLCBidXQgaXQncyBwb3NzaWJsZSB3aXRoIHRoZSBgUjZgIGxpYnJhcnkuIFdpdGhvdXQgZ29pbmcgaW50byBmdWxsIGRldGFpbCBvbiBob3cgdG8gdXNlIFI2LCBJJ2xsIGp1c3QgZ28gdGhyb3VnaCBhIHZlcnkgYmFzaWMgY29ubmVjdGlvbnMgaGFuZGxlci5cXG5cXG5UaGUgbWFpbiBhZHZhbnRhZ2Ugb2YgY29uc3RydWN0aW5nIGFuIFI2IGNsYXNzIHRvIGhhbmRsZSBjb25uZWN0aW9ucywgaXMgdGhhdCB3ZSBjYW4gdmVyeSB0aWR5IHdoZW4gZGVzaWduaW5nIHdoYXQgaXQgbmVlZHMuIExldCdzIHN0YXJ0IHdpdGggdGhlIGZpZWxkcyBpdCdsbCBuZWVkOlxcblxcbmBgYHtyfVxcbkNvbm5lY3Rpb25IYW5kbGVyID0gUjY6OlI2Q2xhc3MoXFxuICBcXFwiQ29ubmVjdGlvbkhhbmRsZXJcXFwiLFxcbiAgcHJpdmF0ZSA9IGxpc3QoXFxuICAgIHVzZXJuYW1lID0gY2hhcmFjdGVyKDApLFxcbiAgICBwYXNzd29yZCA9IGNoYXJhY3RlcigwKSxcXG4gICAgY29ubmVjdGlvbl9vYmplY3QgPSBOVUxMXFxuICApXFxuKVxcbmBgYFxcblxcblNvIHdlIGhhdmUgY3JlYXRlZCBhIGxpc3Qgb2YgdmFsdWVzIHRoYXQgd2Uga25vdyB3aWxsIG5lZWQgdG8gYmUgZmlsbGVkLiBBbmQgd2UgYWxzbyBrbm93IHRoYXQgbm90IGV2ZW4gdGhlIGRldmVsb3BlciBzaG91bGQgZXZlciBuZWVkIHRvIGFjY2VzcyB0aGVtIGRpcmVjdGx5LiBTbyB0aGV5J3JlIGFsbCBwcml2YXRlIGZpZWxkcy4gTm93IHdlIG5lZWQgdG8gZGVmaW5lIGEgbWV0aG9kIHRoYXQgYWN0dWFsbHkgZmlsbHMgdGhlbSB3aXRoIHVzZXIgaW5wdXQuXFxuXFxuYGBge3J9XFxuQ29ubmVjdGlvbkhhbmRsZXIgPSBSNjo6UjZDbGFzcyhcXG4gIFxcXCJDb25uZWN0aW9uSGFuZGxlclxcXCIsXFxuICBwcml2YXRlID0gbGlzdChcXG4gICAgdXNlcm5hbWUgPSBjaGFyYWN0ZXIoMCksXFxuICAgIHBhc3N3b3JkID0gY2hhcmFjdGVyKDApLFxcbiAgICBjb25uZWN0aW9uX29iamVjdCA9IE5VTExcXG4gICksXFxuXFxuICBwdWJsaWMgPSBsaXN0KFxcbiAgICBjYXB0dXJlX2NyZWRlbnRpYWxzID0gZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKXtcXG4gICAgICBwcml2YXRlJHVzZXJuYW1lID0gdXNlcm5hbWVcXG4gICAgICBwcml2YXRlJHBhc3N3b3JkID0gZGlnZXN0OjpkaWdlc3QocGFzc3dvcmQsIGFsZ28gPSBcXFwibWQ1XFxcIilcXG4gICAgfVxcbiAgKVxcbilcXG5gYGBcXG5cXG5TbyBub3cgd2UgaGF2ZSBhIGNsYXNzIHRoYXQgd2lsbCBiZSBjYXBhYmxlIG9mIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9iamVjdCwgY2FwdHVyZSBhIHVzZXIgY3JlZGVudGlhbHMgYW5kIHN0b3JlIHRoZW0gYXMgdGhlaXIgZmllbGQuIEFuZCBpdCB3b3VsZCBiZSB1c2VkIGxpa2UgdGhpczpcXG5cXG5gYGB7cn1cXG5jb25uZWN0aW9uX2hhbmRsZXIgPSBDb25uZWN0aW9uSGFuZGxlciRuZXcoKVxcbmNvbm5lY3Rpb25faGFuZGxlciRjYXB0dXJlX2NyZWRlbnRpYWxzKHVzZXJuYW1lID0gaW5wdXQkbG9naW5fdXNlcm5hbWUsIHBhc3N3b3JkID0gaW5wdXQkbG9naW5fcGFzc3dvcmQpXFxuYGBgXFxuXFxuU28gbm93IHdlIGhhdmUgdGhlIGJhc2ljcywgbGV0J3MgZ28gdG8gYWN0dWFsbHkgaGFuZGxpbmcgZGF0YWJhc2UgY29ubmVjdGlvbnMuIFdlJ2xsIHN0YXJ0IGJ5IGFkZGluZyBhbm90aGVyIGZpZWxkIHdpdGggdGhlIHdob2xlIGNvbm5lY3Rpb24gc3RyaW5nLCBhbmQgdGhlbiBkZWZpbmluZyBwcml2YXRlIG1ldGhvZHMgdGhhdCBvcGVuIGFuZCBjbG9zZSB0aG9zZSBjb25uZWN0aW9uczpcXG5cXG5gYGB7cn1cXG5Db25uZWN0aW9uSGFuZGxlciA9IFI2OjpSNkNsYXNzKFxcbiAgXFxcIkNvbm5lY3Rpb25IYW5kbGVyXFxcIixcXG4gIHByaXZhdGUgPSBsaXN0KFxcbiAgICB1c2VybmFtZSA9IGNoYXJhY3RlcigwKSxcXG4gICAgcGFzc3dvcmQgPSBjaGFyYWN0ZXIoMCksXFxuICAgIGNvbm5lY3Rpb25fb2JqZWN0ID0gTlVMTCxcXG4gICAgY29ubmVjdGlvbl9zdHJpbmcgPSBjaGFyYWN0ZXIoMCksXFxuICAgIG9wZW5fY29ubmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xcbiAgICAgIHByaXZhdGUkY29ubmVjdGlvbl9vYmplY3QgPSBvZGJjOjpkYkNvbm5lY3Qob2RiYzo6b2RiYygpLCAuY29ubmVjdGlvbl9zdHJpbmcgPSBzZWxmJGNvbm5lY3Rpb25fc3RyaW5nLCBlbmNvZGluZyA9IFxcXCJVVEYtOFxcXCIpXFxuICAgIH0sXFxuICAgIGNsb3NlX2Nvbm5lY3Rpb24gPSBmdW5jdGlvbigpIHtcXG4gICAgICBvZGJjOjpkYkRpc2Nvbm5lY3QocHJpdmF0ZSRjb25uZWN0aW9uX29iamVjdClcXG4gICAgfSxcXG4gICksXFxuXFxuICBwdWJsaWMgPSBsaXN0KFxcbiAgICBjYXB0dXJlX2NyZWRlbnRpYWxzID0gZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKXtcXG4gICAgICBwcml2YXRlJHVzZXJuYW1lID0gdXNlcm5hbWVcXG4gICAgICBwcml2YXRlJHBhc3N3b3JkID0gZGlnZXN0OjpkaWdlc3QocGFzc3dvcmQsIGFsZ28gPSBcXFwibWQ1XFxcIilcXG4gICAgICBwcml2YXRlJGNvbm5lY3Rpb25fc3RyaW5nID0gcGFzdGUwKFxcbiAgICAgICAgXFxcIkRyaXZlcj1cXFwiLCBcXFwie09EQkMgRHJpdmVyIDQyIGZvciBTUUwgU2VydmVyfVxcXCIsXFxuICAgICAgICBcXFwiO1NlcnZlcj1cXFwiLCBcXFwic3FsLWFiYy1yc3R1ZGlvLWRldiwxMjM0XFxcIixcXG4gICAgICAgIFxcXCI7RGF0YWJhc2U9XFxcIiwgXFxcIlByb2plY3REYXRhQmFzZVxcXCIsXFxuICAgICAgICBcXFwiO1VJRD1cXFwiLCBwcml2YXRlJHVzZXJuYW1lLFxcbiAgICAgICAgXFxcIjtQV0Q9XFxcIiwgcHJpdmF0ZSRwYXNzd29yZFxcbiAgICAgIClcXG4gICAgfVxcbiAgKVxcbilcXG5gYGBcXG5cXG5Ob3RlIHRoYXQgd2UndmUgZXNzZW50aWFsbHkgcGFzdGVkIHRoZSBgY29ubmVjdGlvbl9zdHJpbmdgIHdlIGNyZWF0ZWQgYmVmb3JlIGludG8gdGhlIGBjYXB0dXJlX2NyZWRlbnRpYWxzYCBtZXRob2QuIFRoaXMgd2F5IHRoZSBtb21lbnQgY3JlZGVudGlhbHMgYXJlIGludHJvZHVjZWQgYW5kIHZlcmlmaWVkIHdlIGhhdmUgdGhlIGRhdGFiYXNlIGFjY2VzcyBkZXRhaWxzIHJlYWR5IHRvIGdvLlxcblxcblNvIHRvIG1ha2UgdGhpcyBjb21wbGV0ZSwgd2Ugb25seSBuZWVkIHRvIGFkZCB0aGUgcmVtYWluaW5nIHBpZWNlOiBUaGUgbWV0aG9kIHRoYXQgYWxsb3dzIHRvIHVzZXIgdG8gYWN0dWFsbHkgcXVlcnkgc3R1ZmYuXFxuXFxuYGBge3J9XFxuQ29ubmVjdGlvbkhhbmRsZXIgPSBSNjo6UjZDbGFzcyhcXG4gIFxcXCJDb25uZWN0aW9uSGFuZGxlclxcXCIsXFxuICBwcml2YXRlID0gbGlzdChcXG4gICAgdXNlcm5hbWUgPSBjaGFyYWN0ZXIoMCksXFxuICAgIHBhc3N3b3JkID0gY2hhcmFjdGVyKDApLFxcbiAgICBjb25uZWN0aW9uX29iamVjdCA9IE5VTEwsXFxuICAgIGNvbm5lY3Rpb25fc3RyaW5nID0gY2hhcmFjdGVyKDApLFxcbiAgICBvcGVuX2Nvbm5lY3Rpb24gPSBmdW5jdGlvbigpIHtcXG4gICAgICBwcml2YXRlJGNvbm5lY3Rpb25fb2JqZWN0ID0gb2RiYzo6ZGJDb25uZWN0KG9kYmM6Om9kYmMoKSwgLmNvbm5lY3Rpb25fc3RyaW5nID0gc2VsZiRjb25uZWN0aW9uX3N0cmluZywgZW5jb2RpbmcgPSBcXFwiVVRGLThcXFwiKVxcbiAgICB9LFxcbiAgICBjbG9zZV9jb25uZWN0aW9uID0gZnVuY3Rpb24oKSB7XFxuICAgICAgb2RiYzo6ZGJEaXNjb25uZWN0KHByaXZhdGUkY29ubmVjdGlvbl9vYmplY3QpXFxuICAgIH1cXG4gICksXFxuXFxuICBwdWJsaWMgPSBsaXN0KFxcbiAgICBjYXB0dXJlX2NyZWRlbnRpYWxzID0gZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKXtcXG4gICAgICBwcml2YXRlJHVzZXJuYW1lID0gdXNlcm5hbWVcXG4gICAgICBwcml2YXRlJHBhc3N3b3JkID0gZGlnZXN0OjpkaWdlc3QocGFzc3dvcmQsIGFsZ28gPSBcXFwibWQ1XFxcIilcXG4gICAgICBwcml2YXRlJGNvbm5lY3Rpb25fc3RyaW5nID0gcGFzdGUwKFxcbiAgICAgICAgXFxcIkRyaXZlcj1cXFwiLCBcXFwie09EQkMgRHJpdmVyIDQyIGZvciBTUUwgU2VydmVyfVxcXCIsXFxuICAgICAgICBcXFwiO1NlcnZlcj1cXFwiLCBcXFwic3FsLWFiYy1yc3R1ZGlvLWRldiwxMjM0XFxcIixcXG4gICAgICAgIFxcXCI7RGF0YWJhc2U9XFxcIiwgXFxcIlByb2plY3REYXRhQmFzZVxcXCIsXFxuICAgICAgICBcXFwiO1VJRD1cXFwiLCBwcml2YXRlJHVzZXJuYW1lLFxcbiAgICAgICAgXFxcIjtQV0Q9XFxcIiwgcHJpdmF0ZSRwYXNzd29yZFxcbiAgICAgIClcXG4gICAgfSxcXG4gICAgcXVlcnkgPSBmdW5jdGlvbihzcWxfc3RyaW5nKXtcXG4gICAgICBwcml2YXRlJG9wZW5fY29ubmVjdGlvbigpXFxuICAgICAgb2RiYzo6ZGJHZXRRdWVyeShwcml2YXRlJGNvbm5lY3Rpb25fb2JqZWN0LCBEQkk6OlNRTChzcWxfc3RyaW5nKSlcXG4gICAgICBwcml2YXRlJGNsb3NlX2Nvbm5lY3Rpb24oKVxcbiAgICB9XFxuICApXFxuKVxcbmBgYFxcblxcbiMjIyBIb3cgd291bGQgdGhhdCBiZSB1c2VkXFxuXFxuRXNzZW50aWFsbHksIHRoaXMgaXMgaXQuIFdlJ3ZlIGdvdCBhbiBSNiBjbGFzcyB0aGF0IGNhbiBjYXB0dXJlIGFuZCBzdG9yZSBjcmVkZW50aWFscyBhbmQgdXNlcyB0aGVtIHRvIGhhbmRsZSBhY2Nlc3MgdG8gYSBkYXRhYmFzZS4gQW5kIHRoaXMgaXMgaG93IGl0J2QgYmUgdXNlZCBpbnNpZGUgYSBzaGlueSBhcHA6XFxuXFxuYGBge3J9XFxuY29ubmVjdGlvbl9oYW5kbGVyID0gQ29ubmVjdGlvbkhhbmRsZXIkbmV3KClcXG5jb25uZWN0aW9uX2hhbmRsZXIkY2FwdHVyZV9jcmVkZW50aWFscyh1c2VybmFtZSA9IGlucHV0JGxvZ2luX3VzZXJuYW1lLCBwYXNzd29yZCA9IGlucHV0JGxvZ2luX3Bhc3N3b3JkKVxcblxcbnNxbF9zdHJpbmcgPSBcXFwiU0VMRUNUICogRlJPTSBtYWluX3RhYmxlXFxcIlxcbmNvbm5lY3Rpb25faGFuZGxlciRxdWVyeShzcWxfc3RyaW5nKVxcbmBgYFxcblwiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./content/handling-databases-r6.md\n");

/***/ })

};
;