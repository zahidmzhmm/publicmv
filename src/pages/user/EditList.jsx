import React from 'react';
import {useParams} from "react-router-dom";
import CreateListItem from "../../components/CreateListItem";

const EditList = () => {
    const {id} = useParams();
    return (
        <>
            <CreateListItem data={id} listType={2}/>
        </>
    );
};

export default EditList;