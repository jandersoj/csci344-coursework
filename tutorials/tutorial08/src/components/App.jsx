import React, { useState } from "react";
import NavBar from "./NavBar";
import { Button, ColorPicker, Form, Input } from "antd";
import { Image, Timeline, Drawer, Alert } from "antd";

// custom components:
export default function App() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("");
  const timelineItems = [
    {
      children: "Create a services site 2015-09-01",
    },
    {
      children: "Solve initial network problems 2015-09-01",
    },
    {
      children: "Technical testing 2015-09-01",
    },
    {
      children: "Network problems being solved 2015-09-01",
    },
  ];

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const clickedWarning = () => {
    console.log("You clicked on the warning!");
  };

  const handleColorChange = (value) => {
    const color = value.toHexString();
    setColor(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <NavBar />
      You
      <main className="min-h-screen max-w-[1000px] mt-24 mx-auto">
        <Button type="primary" onClick={showDrawer}>
          show drawer
        </Button>
        <h2 className="font-Comfortaa my-4 font-bold text-xl">Photo Gallery</h2>
        <div className="flex flex-wrap content-start">
          <Image src="https://picsum.photos/600/600?id=1" width={200} />
          <Image src="https://picsum.photos/600/600?id=2" width={200} />
          <Image src="https://picsum.photos/600/600?id=3" width={200} />
          <Image src="https://picsum.photos/600/600?id=4" width={200} />
          <Image src="https://picsum.photos/600/600?id=5" width={200} />
        </div>
        <div className="flex flex-wrap content-start">
          <Drawer title="Basic Drawer" onClose={onClose} open={open}>
            <ColorPicker defaultValue="#1677ff" size="large" onChange={handleColorChange} />
            <Alert
              className="alert"
              message="You better pick a darn good color!!!"
              type="warning"
              onClick={clickedWarning}
            />
          </Drawer>
        </div>
      </main>
      <footer className="p-5 bg-white">footer goes here</footer>
    </>
  );
}
