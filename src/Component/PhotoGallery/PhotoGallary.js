import React from 'react';
import './PhotoGallary.css'
const PhotoGallary = () => {
    return (
        <div>

            <div className="row mb-5">
                <h1>PhotoGallary</h1>

                <div className="column">
                    <img src="https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_960_720.jpg" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2018/06/04/16/00/street-3453557_960_720.jpg" alt="" />
                </div>
                <div className="column">
                    <img src="https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072_960_720.jpg" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521_960_720.jpg" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2015/09/22/19/00/ship-952292_960_720.jpg" alt="" />
                </div>
                <div className="column">
                    <img src="https://cdn.pixabay.com/photo/2020/02/23/12/22/river-4873198_960_720.jpg" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2020/02/02/07/50/mosque-4812260_960_720.jpg" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2020/11/22/20/45/colorful-5767937_960_720.jpg" alt="" />
                </div>
                <div className="column">
                    <img src="https://pixabay.com/photos/scooter-vintage-motorcycle-vehicle-593155/" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2017/06/24/00/54/milan-cathedral-2436458_960_720.jpg" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2020/08/17/13/23/venice-5495378_960_720.jpg" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2016/09/23/16/43/alley-1690053_960_720.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default PhotoGallary;