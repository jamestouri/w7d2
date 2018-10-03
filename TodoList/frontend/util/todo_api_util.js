export default function uniqueId() {
  return new Date().getTime();
}
export const fetchTodo = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
);
