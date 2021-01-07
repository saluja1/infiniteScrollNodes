var listElm = document.querySelector('#infinite-list');

var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 10; i++) {
    var item = document.createElement('li');
    item.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    listElm.appendChild(item);
  }
}

listElm.addEventListener('scroll', function() {
	console.log(listElm.scrollTop)
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

loadMore();