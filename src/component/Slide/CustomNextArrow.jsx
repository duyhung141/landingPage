import React from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function CustomNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 font-bold py-2 px-4 rounded-r`}
            style={{...style, zIndex: 10, right: "10px", top: "40%"}}
            onClick={onClick}
        >
            <ArrowForwardIosIcon fontSize={'large'} style={{color: "black"}}/>
        </div>
    );
}

export default CustomNextArrow