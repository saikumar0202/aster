import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";



const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
export default function EditModel () {

 const [open, setOpen] = React.useState(false);
//   const clickOpen = () => setOpen(true);
  const clickClose = () => setOpen(false);
    return(
        <>
         <Modal
              open={open}
              onClose={clickClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="boxModal">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Discard Changes?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Your changes will not be saved. Are you sure you want to
                  Discard the changes?
                </Typography>
                <div className="btn">
                  <button onClick={clickClose} className="Canclebtn">
                    Cancle
                  </button>
                  <button
                    className="discardBtn"
                    // onClick={() => deleteSlide(index)}
                  >
                    Discard
                  </button>
                </div>
              </Box>
            </Modal>
        </>
    )
}