let x;
function deleteComment(event) {
  event.target.parentElement.parentElement.remove();
}

function addComment(event) {
  event.preventDefault();

  name = document.getElementsByClassName('userNameField')[0].value;
  comment = document.getElementById('userCommentField').value;
  console.log(name, comment);
  template = document.getElementById('commentTemplate').content.cloneNode(true);

  //Fill template comment.
  template.querySelector('.userName').innerText= name;
  template.querySelector('.userComment').innerText= comment;

  //Append
  comments = document.getElementById('seccionComments');
  comments.appendChild(template);

  last_comment = comments.children[comments.children.length - 1];
  last_comment.querySelector('.deleteButton').addEventListener('click', deleteComment);
}

function init() {
  document.getElementById('formComment').addEventListener('submit', addComment);
}

window.addEventListener('load', init());