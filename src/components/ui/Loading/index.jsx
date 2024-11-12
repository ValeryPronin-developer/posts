import React from "react";
import ReactLoading from "react-loading";

export const Loading = () =>
    <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactLoading type={'spinningBubbles'} color={'darkred'} width={'15%'}/>
    </div>