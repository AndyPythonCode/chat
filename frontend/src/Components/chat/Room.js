import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//GLOBAL
const CONVERSATION = [];
const ROOMS = [];
let BACKUP_ROOM;

function Room({ token }) {
  const client = React.useRef(null);
  let { room_name } = useParams();
  const in_put = React.useRef();
  const [user, setUser] = React.useState({
    name: "",
  });

  React.useEffect(() => {
    client.current = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${room_name}/`);

    client.current.onopen = () => {
      console.log("Connected to Django Services");
      BACKUP_ROOM = client.current;
    };

    client.current.onclose = () => {
      console.log("Disconnected to Django Services");
    };

    //close if open
    ROOMS.includes(room_name) ? BACKUP_ROOM.close() : ROOMS.push(room_name);

    //get message
    client.current.onmessage = (Message) => {
      const data = JSON.parse(Message.data);
      document.getElementById(
        "floatingTextarea"
      ).value += `${data.user}: ${data.message}\n`;
      CONVERSATION.push({ user: data.user, message: data.message });
      console.log(CONVERSATION);
    };

    //current user
    axios
      .get("http://127.0.0.1:8000/user/current_user/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        const response = res.data;
        setUser({
          name: response.user,
        });
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //set message
  const sendMessage = () => {
    if (in_put.current.value) {
      client.current.send(
        JSON.stringify({
          message: in_put.current.value,
          user: user.name,
        })
      );
      in_put.current.value = "";
    }
  };

  const salir = () => {
    client.current.close();
  };

  //KeyCode === 13 is 'ENTER' on the keyboard
  const pressEnter = (key) => {
    if (key.keyCode === 13 && in_put.current.value) {
      sendMessage();
    }
  };

  return (
    <Fragment>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="form-floating">
            <textarea
              readOnly
              style={{ height: "320px", background: "#fff" }}
              className="form-control"
              id="floatingTextarea"
            ></textarea>
            <label className="text-success" htmlFor="floatingTextarea">
              Chat: <b>{room_name}</b>
            </label>
          </div>

          <div className="input-group mb-3 mt-2">
            <input
              id="message-input"
              type="text"
              className="form-control"
              placeholder="Mensaje..."
              ref={in_put}
              onKeyUp={pressEnter}
            />
            <input
              className="btn btn-outline-success"
              type="button"
              id="button-chat"
              onClick={sendMessage}
              value="Enviar Mensaje"
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <input
              className="btn btn-outline-danger"
              type="button"
              id="button-chat-exit"
              onClick={salir}
              value="Salir"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Room;
