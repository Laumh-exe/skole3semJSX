import React, { Fragment, useState, useEffect } from "react"

function PersonViewer({}) {
  const [nameState, setNameState] = useState(name);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const myPromise = fetch("https://jsonplaceholder.typicode.com/users");
    const myPromise2 = myPromise.then((response) => response.json());
    myPromise2.then((data) => {
      setUsers(data);
    });
  }, []);

return (
  <>
    {users.map((user, index) => (
      <div key={user.id}>
        {user.name &&<h1>name: {user.name}</h1>}
        <div>email: {user.email}</div>
      </div>
    ))}
  </>
)
}
export default PersonViewer