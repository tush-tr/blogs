const myHtml = `<div class="blog-section">
<h1>All about Rest APIs</h1>
<h2> What is REST?</h2>
<p>
    REST stands for <b>Representational State Transfer</b><br>
    The characteristics of a REST system are defined by six design rules:</p>
<ul>
    <li>Client-Server: There should be a separation between the server that offers a service, and the client
        that consumes it.</li>
    <li>
        Stateless: Each request from a client must contain all the information required by the server to carry
        out the request. In other words, the server cannot store information provided by the client in one
        request and use it in another request.</li>
    <li>
        Cacheable: The server must indicate to the client if requests can be cached or not.</li>
    <li>
        Layered System: Communication between a client and a server should be standardized in such a way that
        allows intermediaries to respond to requests instead of the end server, without the client having to do
        anything different.</li>
    <li>
        Uniform Interface: The method of communication between a client and a server must be uniform.</li>
    <li>
        Code on demand: Servers can provide executable code or scripts for clients to execute in their context.
        This constraint is the only one that is optional.
    </li>
</ul>

<hr>

<h3> How Client and Server communication works?</h3>
When the client makes request to the server classically on the internet this is done through
a HTTP request, Hypertext Transfer Protocol request.
If you've used node js you can understand by this piece of code.
<pre>
app.get("/",(req,res)=>{
// code
})
</pre>
This req is the http request that server gets from the user.
<br>
And res is the responce that server has to make for that request.
<br>


<p><b> Note:- </b><br>
    HTTP, this Hypertext Transfer Protocol, is not the only
    language that servers can speak.<br>
    Another one that you might have heard of is for example the <b> FTP request</b> which is the file transfer
    protocol request.
</p>
<h3> What is HTTPS ?</h3>
HTTPs stands for each HTTP secure request so remember that all your requests and responses are going across the
Internet and can be potentially tapped in by lots of people.<br>
So if you wanted to make it secure so you don't want to be on a website entering your car details and
it's just going through you know a bog standard age HTTP request because somebody might hijack that along
the way and that's not very secure.
<br>we can also use <b>cryptography</b> and encrypt our request. So if anybody does intercept the request they
won't be able to know what it says.


<h2> What server does for giving back the results?</h2>
In order to give us the result, the server might do one of two things. It might do some computation,
run some code to work out the result that you need or the server might need to communicate with our database in
order to grab the relevant pieces of data that the client requested.

<h2> What can a server do?</h2>
The server can have a whole bunch of APIs which are services that it can expose for clients to be able to tap
into.

<table>
    <tr>
        <td>Client----</td>
        <td>----API----</td>
        <td>----Server</td>
    </tr>
</table>

<hr>

<h2> What does it mean to make our API RESTful?</h2>
REST is an architectural style for designing APIs and it's definitely not the only architecturalstyle.
<br>
So the other really really popular one before REST became the dominant style was SOAP.
And there's also GraphQL or FALCOR and there's a lot of other architectural styles. But the gold standard for
web API is REST.
<br>


There're a lot of rules that an API has to follow to be RESTful.

<br>In which two most important ones are:--
<li>Use HTTP Request Verbs

<li> Use specific pattern of routes/endpoint urls.

    <h2> What exactly are the HTTP verbs?</h2>
    <ol>
        <li>GET
        <li>POST
        <li>PUT
        <li>PATCH(new)
        <li> DELETE
    </ol>

    <pre>
app.get("/",(req,res)=>{
// GET request simply means reading at the users side
})
</pre>
    <pre>
app.post("/",(req,res)=>{
// Simply means that creating something user sends something to the server
})
</pre>
    <pre>
app.put("/",(req,res)=>{
// means updating some data
})
</pre>
    <pre>
app.patch("/",(req,res)=>{
// Updating some data
})
</pre>
    <h4> Difference between PUT and PATCH</h4>
    PUT:- If you are updating your data with entire new data set.<br>
    PATCH:- If you are updating your data with some few changes in it.


    <h2> What about Specific pattern of routes/endpoints ?</h2>
    <pre>
www.facebook.com/account
</pre>
    <pre>/account</pre> is route/endpoint.
    <br>
    In order for our API to be RESTful we have to have a specific pattern of endpoints and routes.

</div>
`

const rest = `<h2> What is REST?</h2>
<p>
    REST stands for <b>Representational State Transfer</b><br>
    The characteristics of a REST system are defined by six design rules:</p>
<ul>
    <li>Client-Server: There should be a separation between the server that offers a service, and the client
        that consumes it.</li>
    <li>
        Stateless: Each request from a client must contain all the information required by the server to carry
        out the request. In other words, the server cannot store information provided by the client in one
        request and use it in another request.</li>
    <li>
        Cacheable: The server must indicate to the client if requests can be cached or not.</li>
    <li>
        Layered System: Communication between a client and a server should be standardized in such a way that
        allows intermediaries to respond to requests instead of the end server, without the client having to do
        anything different.</li>
    <li>
        Uniform Interface: The method of communication between a client and a server must be uniform.</li>
    <li>
        Code on demand: Servers can provide executable code or scripts for clients to execute in their context.
        This constraint is the only one that is optional.
    </li>
</ul>

<hr>

<h3> How Client and Server communication works?</h3>
When the client makes request to the server classically on the internet this is done through
a HTTP request, Hypertext Transfer Protocol request.
If you've used node js you can understand by this piece of code.
<pre>
app.get("/",(req,res)=>{
// code
})
</pre>
This req is the http request that server gets from the user.
<br>
And res is the responce that server has to make for that request.
<br>


<p><b> Note:- </b><br>
    HTTP, this Hypertext Transfer Protocol, is not the only
    language that servers can speak.<br>
    Another one that you might have heard of is for example the <b> FTP request</b> which is the file transfer
    protocol request.
</p>
<h3> What is HTTPS ?</h3>
HTTPs stands for each HTTP secure request so remember that all your requests and responses are going across the
Internet and can be potentially tapped in by lots of people.<br>
So if you wanted to make it secure so you don't want to be on a website entering your car details and
it's just going through you know a bog standard age HTTP request because somebody might hijack that along
the way and that's not very secure.
<br>we can also use <b>cryptography</b> and encrypt our request. So if anybody does intercept the request they
won't be able to know what it says.


<h2> What server does for giving back the results?</h2>
In order to give us the result, the server might do one of two things. It might do some computation,
run some code to work out the result that you need or the server might need to communicate with our database in
order to grab the relevant pieces of data that the client requested.

<h2> What can a server do?</h2>
The server can have a whole bunch of APIs which are services that it can expose for clients to be able to tap
into.

<table>
    <tr>
        <td>Client----</td>
        <td>----API----</td>
        <td>----Server</td>
    </tr>
</table>

<hr>

<h2> What does it mean to make our API RESTful?</h2>
REST is an architectural style for designing APIs and it's definitely not the only architecturalstyle.
<br>
So the other really really popular one before REST became the dominant style was SOAP.
And there's also GraphQL or FALCOR and there's a lot of other architectural styles. But the gold standard for
web API is REST.
<br>


There're a lot of rules that an API has to follow to be RESTful.

<br>In which two most important ones are:--
<li>Use HTTP Request Verbs

<li> Use specific pattern of routes/endpoint urls.

    <h2> What exactly are the HTTP verbs?</h2>
    <ol>
        <li>GET
        <li>POST
        <li>PUT
        <li>PATCH(new)
        <li> DELETE
    </ol>

    <pre>
app.get("/",(req,res)=>{
// GET request simply means reading at the users side
})
</pre>
    <pre>
app.post("/",(req,res)=>{
// Simply means that creating something user sends something to the server
})
</pre>
    <pre>
app.put("/",(req,res)=>{
// means updating some data
})
</pre>
    <pre>
app.patch("/",(req,res)=>{
// Updating some data
})
</pre>
    <h4> Difference between PUT and PATCH</h4>
    PUT:- If you are updating your data with entire new data set.<br>
    PATCH:- If you are updating your data with some few changes in it.


    <h2> What about Specific pattern of routes/endpoints ?</h2>
    <pre>
www.facebook.com/account
</pre>
    <pre>/account</pre> is route/endpoint.
    <br>
    In order for our API to be RESTful we have to have a specific pattern of endpoints and routes.

</div>`
const data = {
    "blogs":[
        {
            "id": "blog1",
            "title":"APIs",
            "content": myHtml,
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yLYObvG-7syLJnBVuNWnDPfnFsuWB0yeAw&usqp=CAU"
        },
        {
            "id":"blog2",
            "title":"Rest APIs",
            "content": rest,
            "image":"https://phpenthusiast.com/theme/assets/images/blog/what_is_rest_api.png"
        }
    ]
}

const fs = require("fs")
fs.writeFileSync("data.json",JSON.stringify(data))