import {ReqCRUD} from "../request";

export const jobfetch = (id, setApplicationChecker, setSave, setData) => {
    if (localStorage.getItem('token')) {
        ReqCRUD('user/applicationChecker/' + id).then((response) => {
            setApplicationChecker(response)
        })
    }
    if (localStorage.getItem('token')) {
        ReqCRUD('job/save/' + id).then((response) => {
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
    ReqCRUD('jobView/' + id).then((response) => {
        if (response.status === 200) {
            setData(response.data)
        }
    })
}