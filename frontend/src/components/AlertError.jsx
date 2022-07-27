import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const AlertError = () => {
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
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Une erreur est survenue, veuillez contacter l'administration du site.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertError;
