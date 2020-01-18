async function getUsers() {
    const response = await fetch("http://localhost:8000/api/getusers");
    const result = await response.json();
    return result;
};

async function postUser(login, email, password, confirm_password, admin) {
      const user = {
        login,
        email,
        password,
        confirm_password,
        admin
    };

    const response = await fetch("http://localhost:8000/register/", {
        method: "post",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)
    });

    const result = await response.json();
    return result;
};

async function putUser(user) {
       
    const url = `http://localhost:8000/update/${user.id}`;

    const response = await fetch(url, {
        method: "put",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)
    });

    const result = await response.json();
    return result;
};

async function deleteUser(id) {
       
    const url = `http://localhost:8000/api/users/${id}`;

    const response = await fetch(url, {
        method: "delete"
    });

    const result = await response.json();
    return result;
};

module.exports.getUsers = getUsers;
module.exports.postUser = postUser;
module.exports.putUser = putUser;
module.exports.deleteUser = deleteUser;
