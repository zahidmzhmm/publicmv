import React, {useContext} from 'react';
import {UserContext} from "../../App";

const CreateListing = () => {
    const {profile} = useContext(UserContext);
    return (
        <>
            {profile.annual !== null || profile.payper !== null ?
                <div className="col-lg-10">
                    <div className="bg-white px-4 py-5 m-1 rounded-main">
                        Testing
                    </div>
                </div> : ""}
        </>
    );
};

export default CreateListing;