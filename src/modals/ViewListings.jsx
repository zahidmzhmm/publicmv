import React, {useState} from "react";
import {Box, Modal} from '@mui/material';
import {FaTimes} from "react-icons/fa";
import ListingsView from "../components/ListingsView";
import {ReqCRUD} from "../request";
import "../utils/jobs.scss";

const ViewListings = ({name, id, title}) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = (id) => {
        if (data === false) {
            ReqCRUD('listing-view/' + id).then((data) => {
                if (parseInt(data.status) === 200) {
                    setData(data.data)
                }
            })
        }
        setOpen(true)
    };
    return (
        <>
            <h6 className="my-0 cursor-pointer text-ellipse" onClick={() => handleOpen(id)}>{title}</h6>
            <Modal className="viewjobModal"
                   open={open}
                   onClose={handleClose}>
                <Box className="modal-jobView pb-3">
                    <div className="text-right py-2 px-2 closeModalViewJob">
                        <div className="d-flex ps-5 ms-5">
                            <h5 className="w-50 text-end">{parseInt(data.type) === 1 ? 'Notice' : "Tender"} Details</h5>
                            <div className="w-50 text-end"><FaTimes onClick={() => handleClose()}
                                                                    className="w-5 cursor-pointer h-5 ml-auto"/></div>
                        </div>
                    </div>
                    <ListingsView data={data}/>
                </Box>
            </Modal>
        </>
    );
}
export default ViewListings;
