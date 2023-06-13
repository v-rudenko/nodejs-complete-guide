const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment</title></head>");
    res.write(
      "<body style='text-align: center'><h1>Welcome to my page!</h1><h3>Register a new user</h3><form action='/create-user' method='POST'><input type='text' name='username' placeholder='username'><button type='submit'>register</button></form></body>"
    );
    res.write("<html>");
    return res.end();
  }
  if (url === "/success") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment</title></head>");
    res.write(
      "<body style='text-align: center'><h1>New user has been registered!</h1><a href='/'><button>Continue</button></a></body>"
    );
    res.write("<html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment</title></head>");
    res.write(
      "<body><h1>Dummy users list:</h1 style='text-align: center'><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>"
    );
    res.write("<html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const newUser = parsedBody.split("=")[1];
      console.log(`New user has been registered: ${newUser}`)
      res.statusCode = 302;
      res.setHeader("Location", "/success");
      res.end();
    });
  }
});

server.listen(3000);
console.log("Server started!");
