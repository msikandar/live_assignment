import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Image } from "antd";
import { Input } from "antd";
import { Button } from "antd";
import "./Signup.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/appActions";
import { useSelector } from "react-redux";

function Signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginData);
  console.log(user, "auth");
  const styles = {
    border: {
      height: "100vh",
    },
    row1: {
      height: "90%",
    },
    row2: {
      height: "10%",
    },
    heading: {
      fontSize: "30px",
      fontWeight: "bold",
    },
    name: {
      marginTop: "20%",
      borderTopStyle: "hidden",
      borderRightStyle: "hidden",
      borderLeftStyle: "hidden",
      height: "55px",
      size: "20",
    },
    email: {
      marginTop: "20%",
      borderTopStyle: "hidden",
      borderRightStyle: "hidden",
      borderLeftStyle: "hidden",
      height: "55px",
    },
    password: {
      marginTop: "7%",
      borderTopStyle: "hidden",
      borderRightStyle: "hidden",
      borderLeftStyle: "hidden",
      height: "55px",
    },
    button: {
      marginTop: "7%",
      height: "50px",
      borderRadius: "5px",
      fontSize: "20px",
    },
  };
  useEffect(() => {
    console.log(user);
    if (user.email != undefined) {
      history.push("/");
    }
    console.log(user);
  }, [user]);
  const handleSubmit = () => {
    console.log(email, password);

    dispatch(
      userLogin({
        email: email,
        password: password,
      })
    );
    // if (user) {
    //   history.push("/");
    // }
  };
  return (
    <div>
      <Row>
        <Col xs={0} sm={0} md={10} lg={10} xl={10} style={styles.border}>
          <Image
            preview={false}
            height="100%"
            width="100%"
            src="https://images.unsplash.com/photo-1632676862700-c76914722fd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
        </Col>
        <Col xs={24} sm={24} md={14} lg={14} xl={14} style={styles.border}>
          <Row style={styles.row1}>
            <Col span={24} style={{ padding: "50px" }}>
              <div style={styles.heading}>Sign in</div>
              <div
                style={{
                  border: " 3px solid orange",
                  width: "65px",
                  background: "orange",
                }}
              ></div>
              {/* <Input placeholder="Full Name" style={styles.name} /> */}

              <Input
                placeholder="Email"
                style={styles.email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
                autoFocus
              />
              <Input.Password
                placeholder="Password"
                style={styles.password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                value={password}
              />
              <Button
                type="primary"
                style={styles.button}
                block
                size="large"
                onClick={email != "" && password != "" ? handleSubmit : null}
              >
                Login
              </Button>
            </Col>
          </Row>
          <Row style={styles.row2}>
            <Col span={24} style={{ backgroundColor: "#EFEFEF" }}>
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "30px",
                  fontSize: "medium",
                }}
              >
                Dont have an account?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => {
                    history.push("/signup");
                  }}
                >
                  Signup
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Signin;
