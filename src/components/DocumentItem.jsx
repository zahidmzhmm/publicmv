import React from 'react';
import {AiFillFileText} from "react-icons/ai";

const DocumentItem = ({document}) => {
    const splitUrl = (url) => {
        return url.split("/");
    }
    return (
        <>
            {document !== null &&
            <>
                <div className="flex mb-2 items-center gap-1">
                    <div className=""><AiFillFileText className="w-6 h-6"/></div>
                    <p className="my-0"><a className="link font-color-primary font-weight-600"
                                           href={document}>{splitUrl(document)[splitUrl(document).length - 1]}</a>
                    </p>
                </div>
            </>}
        </>
    );
};

export default DocumentItem;