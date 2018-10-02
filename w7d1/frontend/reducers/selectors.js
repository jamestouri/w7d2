

export const allTodos = (state) => {
  let res = [];
  const keys = Object.keys(state.todos).map((el) => el);
  keys.forEach((el) => {
    res.push(state.todos[el]);
  });
  return res;
};
