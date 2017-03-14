export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user}
  })
);

export const fetchProfile = (id) => (
  $.ajax({
    method: 'GET',
    url: '/api/users/id',
  })
);
