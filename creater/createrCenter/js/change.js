window.onload = function() {
var like = document.getElementById('ilike'),
	create = document.getElementById('create');
like.onclick = function () {
	likes.style.display = 'block';
	creation.style.display = 'none';
}
create.onclick = function () {
	likes.style.display = 'none';
	creation.style.display = 'block';
}
}