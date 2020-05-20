let socket = {}

if (process.browser) {
  // client-side-only code
	socket = require('socket.io-client')(process.env.NEXT_PUBLIC_API_URL);
	
	socket.on('connect', function(){
		console.log('connected')
	})
	
	socket.on('event', function(data){
		console.log(data)
	})
	
	socket.on('disconnect', function(){
	
	})
}
export default socket
