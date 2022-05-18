import {Skeleton} from '@mui/material';
import icon from "./assets/favicon.png";
import logo from "./assets/logo.png";
import moment from "moment";

// export const mainUri = "http://localhost:8000";
export const mainUri = "https://backend.public.mv";
export const apiUri = mainUri + "/api/";
// export const rootURI = "http://localhost:3000";
export const rootURI = "https://public.mv";
export const jobsicleUri = "https://jobsicle.org";
export const jobsicleUriApi = jobsicleUri + "/api/";
export const websiteData = {
    header_logo: logo,
    favicon: icon
}

export const alertOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}
export const loader = (height, width = '100%') => {
    return (
        <div style={{width: width, height: height}}>
            <Skeleton style={{height: '30%'}}/>
            <Skeleton variant="rectangular" animation="wave"
                      className=""
                      style={{maxWidth: 'none', height: '20%'}}/>
            <Skeleton style={{height: '30%'}} animation={false}/>
        </div>
    )
}

export const countDays = (start) => {
    let startD = moment(start, "YYYY-MM-DD");
    let current = moment().startOf('day');
    return moment.duration(startD.diff(current)).asDays();
}

export const filtered = (name, fields) => fields.filter(function (el) {
    if (el.field == name) {
        return el;
    }
});

export const sortedFields = (name, fields) => {
    return filtered(name, fields).sort((a, b) => (a.value > b.value) ? 1 : -1);
}