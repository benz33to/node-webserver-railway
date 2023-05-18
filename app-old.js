import http from "http";

http.createServer((req, res) => {
    // res.writeHead(200, {'Content-type': 'application/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=list.csv')
    // res.writeHead(200, {'Content-type': 'application/csv'});
    // const person = {
    //     id: 1,
    //     name: 'Breo',
    // };
    res.write('Hello World');
    res.end();
}).listen(8080);

console.log('Listening in port', 8080);