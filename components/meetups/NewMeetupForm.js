import { TextField } from "@mui/material";

function NewMeetupForm() {
  return (
    <div className=" flex flex-row justify-center h-[450px]">
      <div className="w-[80%] pt-10 flex flex-col justify-around ">
        <TextField label="Meetup Title" fullWidth />
        <TextField label="Meetup Image" fullWidth />
        <TextField label="Address" fullWidth />
        <TextField label="Description" multiline fullWidth rows={5} />
      </div>
    </div>
  );
}

export default NewMeetupForm;
