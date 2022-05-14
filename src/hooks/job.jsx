import {ReqCRUD} from "../request";
import {jobsicleUriApi} from '../config';

export const jobfetch = (id, setApplicationChecker, setSave, setData) => {
    if (localStorage.getItem('token')) {
        ReqCRUD('user/applicationChecker/' + id, 'get', localStorage.getItem('token'), null, jobsicleUriApi).then((response) => {
            setApplicationChecker(response)
        })
    }
    if (localStorage.getItem('token')) {
        ReqCRUD('job/save/' + id, 'get', localStorage.getItem('token'), null, jobsicleUriApi).then((response) => {
            if (response !== undefined) {
                if (parseInt(response.status) === 200) {
                    setSave(true)
                } else {
                    setSave(false)
                }
            } else {
                setSave(false)
            }
        })
    }
    ReqCRUD('jobView/' + id, 'get', null, null, jobsicleUriApi).then((response) => {
        if (parseInt(response.status) === 200) {
            setData(response.data)
        }
    })
}