import React from "react";
import { Button, Stack,IconButton,ButtonGroup ,ToggleButton,ToggleButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";

const MuiButton = () => {
    const [formats,setFormats]=useState<string | null>(null);
    console.log({formats,});
    const handleFormateChange=(_event:React.MouseEvent<HTMLElement>,updatedFormats:string | null)=>{
        setFormats(updatedFormats);
    }
  return (
    <div>
      spacing and direction both attributes & are used in Stack Component.{" "}
      <br />
      spacing attribute is use to give space around the element <br />
      direction attribute is use to tell the direction of the element <br />
      <br />
      <br />
      <br />
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack spacing={2}>
          <Stack spacing={2} direction='row'>
          <Button variant="contained" size="large" color="error">
            Text
          </Button>
          <Button variant="text" size="medium" color="error">
            Text
          </Button>
          <Button variant="outlined" size="small" color="error">
            Text
          </Button>
          </Stack>
          <Stack spacing={2} direction='row'>
          <Button variant="contained" color="info">
            Text
          </Button>
          <Button variant="text" color="info">
            Text
          </Button>
          <Button variant="outlined" color="info">
            Text
          </Button>
          </Stack>
          <Stack spacing={2} direction='row'>
          <Button variant="contained" color="inherit">
            Text
          </Button>
          <Button variant="text" color="inherit">
            Text
          </Button>
          <Button variant="outlined" color="inherit">
            Text
          </Button>
          </Stack>
          <Stack spacing={2} direction='row'>
          <Button variant="contained" color="primary">
            Text
          </Button>
          <Button variant="text" color="primary">
            Text
          </Button>
          <Button variant="outlined" color="primary">
            Text
          </Button>
          </Stack>
          <Stack spacing={2} direction='row'>
          <Button variant="contained" color="secondary">
            Text
          </Button>
          <Button variant="text" color="secondary">
            Text
          </Button>
          <Button variant="outlined" color="secondary">
            Text
          </Button>
          </Stack>
          <Stack spacing={2} direction='row'>
          <Button variant="contained" color="success" disableRipple>
            Text
          </Button>
          <Button variant="text" color="success">
            Text
          </Button>
          <Button variant="outlined" color="success">
            Text
          </Button>
          </Stack>
          <Stack spacing={2} direction='row'>
          <Button variant="contained" color="warning" disableElevation>
            Text
          </Button>
          <Button variant="text" color="warning">
            Text
          </Button>
          <Button variant="outlined" color="warning" startIcon={<SendIcon/>} endIcon={<SendIcon/>} >
            Text
          </Button>
          <IconButton aria-label="Send" color="success" size="medium">
            <SendIcon color="error"/>
          </IconButton>
          </Stack>
        </Stack>
        <Stack direction="row">
            <ButtonGroup variant="contained" orientation="vertical"  size="small" color="secondary" aria-label="Button Group">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ToggleButtonGroup aria-label="Text Formatting" value={formats} onChange={handleFormateChange}>
                <ToggleButton aria-label="italic" value="italic"><FormatItalicIcon/></ToggleButton>
                <ToggleButton aria-label="bold" value="bold"><FormatBoldIcon/></ToggleButton>
                <ToggleButton aria-label="underline" value="underline"><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiButton;
