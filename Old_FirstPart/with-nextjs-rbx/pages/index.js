import React from "react";

import { Container, Delete, Notification } from "rbx";
import "rbx/index.css";

export class HelloWorldNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }

  onClose = () => {
    this.setState({ active: false });
  };

  render() {
    if (!this.state.active) {
      return (
        <div>
          <span>You've closed the notification </span>
          <span role="img" aria-label="shoe">
            👟
          </span>
        </div>
      );
    }

    return (
      <Notification color="primary">
        Welcome to{" "}
        <span role="img" aria-label="shoe">
          👟
        </span>{" "}
        <strong>rbx</strong>
        <Delete onClick={this.onClose} />
      </Notification>
    );
  }
}

export default function Index() {
  return (
    <Container>
      <HelloWorldNotification />
    </Container>
  );
}
