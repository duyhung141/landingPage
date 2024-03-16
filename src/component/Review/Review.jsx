import React from "react"
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import RatingBar from "./RatingBar";
import Comment from "./Comment";
import {formatDate} from "../../functions/helperFunctions";

function Review(props) {
    const {data} = props;
    const ratings = [
        {stars: 5, percentage: 0.98},
        {stars: 4, percentage: 0.02},
        {stars: 3, percentage: 0},
        {stars: 2, percentage: 0},
        {stars: 1, percentage: 0},
    ];

    const comments = data?.map(comment => ({
        username: comment?.user ?? 'boongbong1009',
        avatar: comment?.avatar ?? 'https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lqh91p0t6ypjcc_tn',
        date: comment?.createdAt,
        thumbnail: comment?.thumbnail,
        rating: comment?.rating ?? 5,
        text: comment?.comment
    }));
    return (
        <>
            <div className="bg-[#F0F0F0] p-3">
                <h3 className='text-[#3E1980] font-bold uppercase text-lg my-1'>Đánh giá khách hàng</h3>
                <div className="bg-white">
                    {/*Rating*/}
                    <div className="p-2 grid grid-cols-5 ">
                        <div className="col-span-2 border-r text-center p-1">
                            <h4 className='font-bold uppercase'>Đánh giá trung bình</h4>
                            <p className='text-[#FF1616] text-lg font-bold '>4.9/5</p>
                            <Rating
                                name="half-rating-read"
                                value={4.9}
                                readOnly
                                precision={0.1}
                                emptyIcon={<StarIcon style={{opacity: 0.5}} fontSize="inherit"/>}
                            />
                            <p className='text-sm text-[#A6A6A6]'>(12.8k đánh giá)</p>
                        </div>
                        <div className="col-span-3 p-1">
                            {(ratings).map((rating) => (
                                <RatingBar key={rating.stars} stars={parseInt(rating.stars)}
                                           percentage={rating.percentage * 100}/>
                            ))}
                        </div>
                    </div>
                    {/*EndRating*/}

                    {/*Comment*/}
                    <div className="p-2">
                        {comments?.map((comment, index) => (
                            <Comment
                                key={index}
                                username={comment?.username}
                                avatar={comment?.avatar}
                                rating={comment?.rating}
                                date={formatDate(comment?.date)}
                                text={comment?.text}
                                thumbnail={comment?.thumbnail}
                            />
                        ))}
                    </div>
                    {/*EndComment*/}
                </div>
            </div>

        </>
    )
}

export default Review
