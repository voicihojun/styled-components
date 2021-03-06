import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    console.log("confirm");
    setDialog(false);
  };

  const onCancel = () => {
    console.log("cancel");
    setDialog(false);
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          gray: "#495057",
          pink: "#f06595",
        },
      }}
    >
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size="large">BUTTON</Button>
            <Button>BUTTON</Button>
            <Button size="small">BUTTON</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="gray" size="large">
              BUTTON
            </Button>
            <Button color="gray">BUTTON</Button>
            <Button color="gray" size="small">
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="pink" size="large" outline>
              BUTTON
            </Button>
            <Button color="pink" outline>
              BUTTON
            </Button>
            <Button color="pink" size="small" outline>
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="blue" size="medium" fullWidth>
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="gray" size="medium" fullWidth>
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="pink" size="medium" fullWidth onClick={onClick}>
              DELETE
            </Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="????????? ?????????????????????????"
          confirmText="??????"
          cancelText="??????"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          ???????????? ????????? ?????????????????????????
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
