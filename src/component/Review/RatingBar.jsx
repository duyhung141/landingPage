import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const RatingBar = ({stars, percentage}) => {
    return (
        <div className="flex items-center space-x-2">
            <div className="flex items-center">
                {stars}
                <StarIcon fontSize={"small"} className="h-5 w-5 text-gray-500"/>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{width: `${percentage}%`}}
                ></div>
            </div>
            <span>{percentage}%</span>
        </div>
    );
};

export default RatingBar;
