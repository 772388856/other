const http = require('http'), httpProxy = require('http-proxy');

// 新建一个代理 Proxy Server 对象
const proxy = httpProxy.createProxyServer({});

// 捕获异常
proxy.on('error', function (err, req, res) {
	res.writeHead(500, {
		'Content-Type': 'text/plain'
	});
	res.end('Something went wrong. And we are reporting a custom error message.');
});

// 在每次请求中，调用 proxy.web(req, res config) 方法进行请求分发
var server = require('http').createServer(function (req, res) {
	// 在这里可以自定义你的路由分发
	var host = req.headers.host, ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	// console.log("client ip:" + ip + ", host:" + host);

	switch (host) {
        // 淘宝客 start
		case '99-you.com':
			proxy.web(req, res, { target: 'http://localhost:3000' });
			break;
        case 'www.99-you.com':
			proxy.web(req, res, { target: 'http://localhost:3000' });
			break;
        case 'm.99-you.com':
			proxy.web(req, res, { target: 'http://localhost:3000' });
			break;
        // 淘宝客 end

        // 小说 start
		case 'book.99-you.com':
			proxy.web(req, res, { target: 'http://localhost:4000' });
			break;
        case 'wetdogbook.com':
			proxy.web(req, res, { target: 'http://localhost:4000' });
			break;
        case 'm.wetdogbook.com':
			proxy.web(req, res, { target: 'http://localhost:4000' });
			break;
        case 'www.wetdogbook.com':
			proxy.web(req, res, { target: 'http://localhost:4000' });
			break;
        case 'darlings.space':
			proxy.web(req, res, { target: 'http://localhost:4000' });
			break;
        case 'm.darlings.space':
			proxy.web(req, res, { target: 'http://localhost:4000' });
			break;
        case 'www.darlings.space':
			proxy.web(req, res, { target: 'http://localhost:4000' });
			break;
        // 小说 end

		default:
			res.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			res.end('Welcome to my server!');
	}
});

server.listen(80);
