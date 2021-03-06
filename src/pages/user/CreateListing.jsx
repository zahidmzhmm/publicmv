import React, {useContext} from 'react';
import {UserContext} from "../../App";
import CreateListItem from "../../components/CreateListItem";

const CreateListing = () => {
    const {profile} = useContext(UserContext);
    return (
        <>
            {profile.annual !== null || profile.payper !== null ?
                <CreateListItem data={false} listType={false}/> :
                <div className="col-lg-10">
                    <div className="bg-white text-sm text-muted p-3 rounded-main mt-1">
                        Subscription not found!
                    </div>
                </div>}
        </>
    );
};

export default CreateListing;