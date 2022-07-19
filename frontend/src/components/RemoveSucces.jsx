import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

const RemoveSucces = () => {
  const [open, setOpen] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          La client à bien été supprimé.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RemoveSucces;
