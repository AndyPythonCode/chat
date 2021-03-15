import React from "react";
import axios from "axios";

function CurrentUser({token}) {
  const [user, setUser] = React.useState({
    name: "",
  });

  React.useEffect(() => {
    axios.get("http://127.0.0.1:8000/user/current_user/",{
      headers: {
        'Authorization': `Token ${token}`
      }
    }).then((res) => {
      const response = res.data;
      setUser({
        name: response.user,
      });
    });
  }, [token]);

  return user.name;
}

export default CurrentUser;
