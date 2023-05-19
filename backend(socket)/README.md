# Socket I/O with Node.js

To test the implementation run- 
>> node index.js

What this code does, is it creates a function handler for Express which then gets supplied to an HTTP server. This handler responds with an HTML File that is sent using th sendFile Method to the client when / page is requested. Finally, the HTTP server starts listening on to the port 3000.

Open http://localhost:3000/ to view the html page.

The output will be updating the DOM element with the current value of the upvote count.