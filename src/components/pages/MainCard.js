import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  FormControlLabel,
  IconButton,
  Input,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import FormOptions from "./FormOptions";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SectionAppBar from "./SectionAppBar";

const MainCard = ({ form, handleChange, handleDelete, handleDuplicate},{content }) => {
  if (!form) return null;
  return (
  
    <Card sx={{marginTop:'30px', borderLeft: '4px solid #3F51B5',}}>
      <CardContent sx={{ display: "flex", gap: 13 }}>
        <TextField
          id="standard-basic"
          label="Question"
          variant="filled"
          value={form.question}
          onChange={(e) => handleChange("question", e.target.value)}
          style={{ width: 350 }}
        />
        <ImageIcon size="small" />
        <FormOptions />
      </CardContent>
      <Box>
{content}
      </Box>
      <Divider />
      <CardActions
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Tooltip title="Duplicate">
          <IconButton onClick={handleDuplicate}>
            <ContentCopyIcon size="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={handleDelete}>
            <DeleteOutlineIcon size="small" />
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />
        <FormControlLabel label="Required" control={<Switch checked={form.required} onChange={(e) => handleChange("required", e.target.checked)} />} required />
        <Tooltip title="more">
          <IconButton>
            <MoreVertIcon size="small" />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
 
  
  );
};

export default MainCard;





