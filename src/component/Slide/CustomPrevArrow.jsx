import React from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2  font-bold py-2 px-4 rounded-l`}
            style={{ ...style, zIndex: 10, left:"8px", top:"40%" }}
            onClick={onClick}
        >
            <ArrowBackIosIcon fontSize={'large'} style={{color:"black"}}/>
        </div>
    );
}

export default CustomPrevArrow