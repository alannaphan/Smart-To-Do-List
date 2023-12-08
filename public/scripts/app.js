// Client facing scripts here

const createToDoElement = function(todoObj) {
  const ddlStr = todoObj.deadline;
  const ddl = ddlStr.slice(0,10);

  const layout = `
    <article>
      <div class="check-item">
        <input type="checkbox" name="checkbox" id="checkbox">
        <p>${todoObj.name}</p>
      </div>
      <footer>
        <i class="fa-regular fa-clock" style="color: #a52a2a;"></i>
        deadline: ${ddl}
      </footer>
      <div class="modify-buttons">
        <a href="/items">
        <form method="GET" action="/items/${todoObj.id}">
          <button class="button-4" role="button">edit</button>
        </form>
        </a>
        <form method="POST" action="/items/delete">
          <input type="hidden" name="todoId" value="${todoObj.id}">
          <button class="button-4" role="button">delete</button>
        </form>
      </div>
    </article>
  `;

  return layout;
};

const renderToDos = function(todoArr) {
  for (const todoObj of todoArr) {
    const $todo = createToDoElement(todoObj);

    if (todoObj['category_id'] === 1) {
      $('#read').prepend($todo);
    } else if (todoObj['category_id'] === 2) {
      $('#watch').prepend($todo);
    } else if (todoObj['category_id'] === 3) {
      $('#eat').prepend($todo);
    } else if (todoObj['category_id'] === 4) {
      $('#buy').prepend($todo);
    } else if (todoObj['category_id'] === 5) {
      $('#other').prepend($todo);
    }
  }
};

$(document).ready(function() {

  const loadTodos = function() {
    $.get('/api/items', function(todoArr) {
      renderToDos(todoArr);
    });
  };
  loadTodos();

});
