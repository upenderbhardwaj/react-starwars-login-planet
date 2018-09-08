const initialState = {
  count: 0,
  data: new Set(),
};

export default (state = initialState, payload) => {
  let { type, item } = payload;

  switch (type) {
    case 'ADD_PLANET':
      return { count: state.count, data: state.data.add(item) };
    default:
      return state;
  }
};
