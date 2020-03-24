import React from 'react';
import {withRouter} from "react-router-dom";
import NavigationUrls from "../routers/NavigationUrls";

const AboutLink = ({history}) =>  {
    const aboutButtonHandler = () => {
        history.push(NavigationUrls.aboutPageUrl);
    };
    return <span style={{textDecoration: "underline"}} onClick={aboutButtonHandler}>Back to About</span>
};

export default withRouter(AboutLink);
