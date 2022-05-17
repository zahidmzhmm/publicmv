import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import CreateListItem from "../../components/CreateListItem";
import {UserContext} from "../../App";

const Repost = () => {
    const {profile} = useContext(UserContext);
    const {id} = useParams();
    return (
        <>
            {profile.annual !== null || profile.payper !== null ?
                <CreateListItem data={id} listType={1}/> :
                <div className="col-lg-10">
                    <div className="bg-white text-sm text-muted p-3 rounded-main mt-1">
                        Subscription not found!
                    </div>
                </div>}
        </>
    );
};

export default Repost;