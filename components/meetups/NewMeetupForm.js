import { Button, Card, TextField } from "@mui/material";

function NewMeetupForm() {
  return (
    <Card className="w-[90%] m-auto mt-20 flex flex-col">
      <div className=" flex flex-row justify-center h-[450px]">
        <div className="w-[80%] p-10 flex flex-col justify-around ">
          <TextField label="Meetup Title" fullWidth />
          <TextField label="Meetup Image" fullWidth />
          <TextField label="Address" fullWidth />
          <TextField label="Description" multiline fullWidth rows={5} />
        </div>
      </div>
      <Button className="mb-5 w-30 m-auto">Add Meetup</Button>
    </Card>
  );
}

export default NewMeetupForm;
