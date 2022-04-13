import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import swiperImg1 from '../../../../../../../assets/swipable/swiper_img1.png'
import swiperImg2 from '../../../../../../../assets/swipable/swiper_img2.png'
import swiperImg3 from '../../../../../../../assets/swipable/swiper_img3.png'
import './swiper.css'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



class ImageCarosel extends React.Component {
    state = {
        index: 0,
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {
        const { index } = this.state;

        return (
            <div className='swiper_cont'>
                <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <div>
                        <img className='swiper_images' src={swiperImg1} alt='swipeable-contant' />
                    </div>
                    <div>
                        <img className='swiper_images' src={swiperImg2} alt='swipeable-contant' />
                    </div>
                    <div>
                        <img className='swiper_images' src={swiperImg3} alt='swipeable-contant' />
                    </div>
                </AutoPlaySwipeableViews>
            </div>
        );
    }
}

export default ImageCarosel;
