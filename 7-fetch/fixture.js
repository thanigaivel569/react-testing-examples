import { ServerCounter } from './components';

let count = 5;

let mockGet = {
  matcher: '/count',
  method: 'GET',
  response: { count }
};

let mockPost = {
  matcher: '/count',
  method: 'POST',
  response: () => ({ count: ++count })
};

export default {
  component: ServerCounter,
  fetch: [mockGet, mockPost]
};
