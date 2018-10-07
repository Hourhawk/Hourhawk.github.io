var socket = io('https://github-backend.tk');
socket.on('update-word', function(word) {
	$('h2').text('The current word is: ' + word);
});
$('button').click(function() {
	socket.emit('update-word', $('input').val());
});