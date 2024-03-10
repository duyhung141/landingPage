import React from 'react';
import StarIcon from '@mui/icons-material/Star';

function Comment({username, avatar, rating, date, text, thumbnail}) {
    return (
        <div className="border p-4 rounded-md space-y-2">
            <div className="flex justify-between items-start gap-2">
                <div className="flex items-center gap-2">
                    <img src={avatar} alt={`${username}'s avatar`} className="h-8 w-8 rounded-full"/>
                    <div className="font-semibold">
                        <p> {username}</p>
                        <p className="text-gray-600 text-sm">{date}</p>
                    </div>
                </div>

                <div className="flex">
                    {[...Array(rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-500"/>
                    ))}
                </div>
            </div>
            <p>{text}</p>
            {thumbnail &&
                <img src={thumbnail} alt="Comment thumbnail" className="object-cover w-[200px] h-[200px] rounded-md"/>}
        </div>
    );
};

export default Comment;

