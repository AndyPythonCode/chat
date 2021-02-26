import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

function Room({ user }) {
  let { room_name } = useParams();
  const client = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${room_name}/`);
  const out_put = React.useRef();
  const in_put = React.useRef();

  //se ejecuta después de cada renderizado.
  React.useEffect(() => {
    client.onopen = () => {
      console.log("Connected to Django Services");
    };

    //get message
    client.onmessage = (Message) => {
      const data = JSON.parse(Message.data);
      out_put.current.value += `${data.user}: ${data.message} \n`;
    };
  });

  //set message
  const sendMessage = () => {
    if (in_put.current.value) {
      client.send(
        JSON.stringify({
          message: in_put.current.value,
          user: user,
        })
      );
      in_put.current.value = "";
    }
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
              ref={out_put}
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
              placeholder="Message..."
              ref={in_put}
              onKeyUp={pressEnter}
            />
            <input
              className="btn btn-outline-success"
              type="button"
              id="button-chat"
              onClick={sendMessage}
              value="Button"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Room;
