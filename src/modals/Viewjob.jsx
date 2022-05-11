import React, {useState} from "react";
import {Box, Modal} from '@mui/material';
import {FaTimes} from "react-icons/fa";
import {jobfetch} from "../hooks/job";
import JobView from "../components/JobView";
import "../utils/jobs.scss";

const ViewJob = ({id, title, profile}) => {
    const [open, setOpen] = useState(false);
    const [save, setSave] = useState(false)
    const [applicationChecker, setApplicationChecker] = useState(null)
    const [data, setData] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = (id) => {
        if (data === false) {
            jobfetch(id, setApplicationChecker, setSave, setData)
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
                            <h5 className="w-50 text-end">Job Details</h5>
                            <div className="w-50 text-end"><FaTimes onClick={() => handleClose()}
                                                                    className="w-5 cursor-pointer h-5 ml-auto"/></div>
                        </div>
                    </div>
                    <JobView data={data} applicationChecker={applicationChecker} save={save}/>
                </Box>
            </Modal>
        </>
    );
}
export default ViewJob;
