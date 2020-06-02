export const SignUp = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);

export const Login = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

export const Logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session',
    })
);