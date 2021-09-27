import React, { useState } from "react";
import { Switch } from "antd";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();
  const [daymode, setdaymode] = useState(true);
  const textwhite = "white";
  const styles = {
    nav: {
      color: textwhite,
      height: "20vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    brand: {
      color: textwhite,
      fontSize: "50px",
      padding: "25px",
    },
    toggle: {
      paddingTop: "70px",
      paddingRight: "20px",
    },
    body: {
      color: textwhite,
      paddingTop: "100px",
      height: "",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    daymode: {
      background: "rgb(87,166,249)",
      background:
        "linear-gradient(276deg, rgba(87,166,249,1) 35%, rgba(50,225,146,1) 100%, rgba(0,212,255,1) 100%)",
      height: "100vh",
    },
    darkmode: {
      background: "grey",
      height: "100vh",
    },
  };

  function onChange(checked) {
    setdaymode(checked);
    console.log(`switch to ${checked}`);
  }

  return (
    <div style={daymode ? styles.daymode : styles.darkmode}>
      <div style={styles.nav}>
        <div style={styles.brand}>LUCY</div>{" "}
        <div style={styles.toggle}>
          <Switch defaultChecked onChange={onChange} />
        </div>
      </div>
      <div style={styles.body}>
        <div>
          <img
            src="https://img.icons8.com/bubbles/300/000000/apple-app-store.png"
            alt=""
          />
        </div>
        <div style={{ width: "50%" }}>
          <h1
            style={{ fontSize: "35px", marginBottom: "-9px", color: textwhite }}
          >
            ONE TOUCH FOR
          </h1>
          <h1 style={{ color: textwhite }}>ALL NEEDS</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          {/* <Button
            type=""
            shape="round"
            icon={<LogoutOutlined />}
            size="large"
            onClick={() => {
              history.push("/signin");
            }}
          >
            Login
          </Button> */}
          {/* <span style={{ paddingRight: "35px" }}></span> */}
          <Button
            type=""
            shape="round"
            icon={<LogoutOutlined />}
            size="large"
            onClick={() => {
              history.push("/signin");
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
