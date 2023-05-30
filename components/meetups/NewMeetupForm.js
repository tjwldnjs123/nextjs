import { Button, Card, TextField } from "@mui/material";
import { useRef, useState } from "react";

function NewMeetupForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const onNewMeetup = (e) => {
    e.preventDefault();

    console.log(image);
  };
  return (
    <Card className="w-[90%] m-auto mt-20 flex flex-col">
      <div className=" flex flex-row justify-center h-[450px]">
        <div className="w-[80%] p-10 flex flex-col justify-around ">
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Meetup Title"
            fullWidth
          />
          <TextField
            value={image}
            onChange={(e) => setImage(e.target.value)}
            label="Meetup Image"
            fullWidth
          />
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            label="Address"
            fullWidth
          />
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            multiline
            fullWidth
            rows={5}
          />
        </div>
      </div>
      <Button className="mb-5 w-30 m-auto" onClick={onNewMeetup}>
        Add Meetup
      </Button>
    </Card>
  );
}

export default NewMeetupForm;
