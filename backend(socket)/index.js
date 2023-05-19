var app = require( "express" )();
var http = require( "http" ).createServer( app );
var io = require("socket.io")(http)

const PORT = 3000;

app.get( '/', function( req, res ) {
    res.sendFile( __dirname + '/public/index.html' );
    });

http.listen( PORT, function() {
console.log( 'listening on  *:' + PORT );
});

//try opening the localhost on multiple tabs and browsers. Each of them will act as a unique client connection. The log message will print every time a connection is established between the client and the server.
//it will print user disconnected when the user closes a tab(thanks to a special disconnect event)
var upvote_count=0;
io.on( 'connection', function( socket ) {
    console.log( 'a user has connected!' );
    socket.on( 'disconnect', function() {
        console.log( 'user disconnected' );
    });
    socket.on( 'upvote-event', function( upvote_flag ) {
        upvote_count += upvote_flag ? 1: -1;
        var f_str = upvote_count + ( upvote_count == 1 ? 'upvote': 'upvotes');

        io.emit( 'update-upvotes', f_str );upvote_count += upvote_flag ? 1: -1;
        var f_str = upvote_count + ( upvote_count == 1 ? 'upvote': 'upvotes');

        io.emit( 'update-upvotes', f_str );
    });
});