import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";
import {gsap} from "gsap";

class PresentationImg extends Component {
    constructor(props) {
        super(props);

        this.page = null
        this.shadow = null
        this.label = null
        this.star = null
    }
    componentDidMount() {
        gsap.set(this.star,{x: 20, y:20,rotation:-15})
        gsap.from(this.star, {rotation: 30, ease:'sine.inOut', yoyo: true, transformOrigin:"50% 50%", duration: 2, repeat:-1})
        this.props.anim.imgAnim = new TimelineLite()
            .from(this.page, 0.3, {scale: 0, transformOrigin: "50% 50%"})
            .from(this.page, 0.5, {x: 5, y: 5},0.3)
            .from(this.shadow, 0.4, {opacity: 0,x: -5, y: -5},0.3)
            .from(this.label, 0.5, {opacity: 0, x: -10})
            .from(this.star, 0.3, {scale: 0})
    }

    render() {
        return (
            <svg className="mb" width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <g ref={el => this.shadow = el}>
                        <path d="M45.2897 171.175H118.033C121.443 171.175 124.153 168.464 124.153 165.054V77.5353L109.639 62.6719H45.2897C41.8798 62.6719 39.1694 65.3823 39.1694 68.7921V165.054C39.1694 168.464 41.8798 171.175 45.2897 171.175Z" fill="#F4BC4F" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M113.312 79.4588H124.153V77.5353L109.639 62.6719H107.191V73.3385C107.191 76.7484 109.902 79.4588 113.312 79.4588Z" fill="#F4BC4F" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <g ref={el => this.page = el}>
                        <path d="M25.8797 160.683H106.055C109.727 160.683 112.787 157.711 112.787 153.951V57.5138L96.6994 41.1641H25.8797C22.2076 41.1641 19.1475 44.1367 19.1475 47.8963V153.951C19.1475 157.623 22.1201 160.683 25.8797 160.683Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M100.808 59.6996H112.787V57.5138L96.6992 41.1641H93.9888V52.9673C94.0762 56.6395 97.0489 59.6996 100.808 59.6996Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M37.6831 64.7705H46.6011C48.1749 64.7705 49.3989 65.9071 49.3989 67.306C49.3989 68.7049 48.1749 69.8415 46.6011 69.8415H37.6831C36.1093 69.8415 34.8853 68.7049 34.8853 67.306C34.8853 65.9071 36.1093 64.7705 37.6831 64.7705Z" fill="#D16978"/>
                        <path d="M53.9453 64.7705H80.4371C82.0108 64.7705 83.2349 65.9071 83.2349 67.306C83.2349 68.7049 82.0108 69.8415 80.4371 69.8415H53.9453C52.3715 69.8415 51.1475 68.7049 51.1475 67.306C51.2349 65.9071 52.4589 64.7705 53.9453 64.7705Z" fill="#D16978"/>
                        <path d="M37.3334 74.8252H80.6995C82.0984 74.8252 83.235 75.9618 83.235 77.3607C83.235 78.7596 82.0984 79.8962 80.6995 79.8962H37.3334C35.9345 79.8962 34.7979 78.7596 34.7979 77.3607C34.7979 75.8744 35.9345 74.8252 37.3334 74.8252Z" fill="#D16978"/>
                        <path d="M37.3334 84.7051H80.6995C82.0984 84.7051 83.235 85.8417 83.235 87.2406C83.235 88.6395 82.0984 89.7761 80.6995 89.7761H37.3334C35.9345 89.7761 34.7979 88.6395 34.7979 87.2406C34.7979 85.8417 35.9345 84.7051 37.3334 84.7051Z" fill="#5C5DB1"/>
                    </g>
                    <g ref={el => this.label = el}>
                        <path d="M4.28401 137.863H77.9889C80.0873 137.863 81.8359 136.115 81.8359 134.016V107.7C81.8359 105.601 80.0873 103.853 77.9889 103.853H4.28401C2.18565 103.853 0.437012 105.601 0.437012 107.7V134.016C0.437012 136.202 2.18565 137.863 4.28401 137.863Z" fill="#D16978" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5737 130.956V111.196H24.306C25.7923 111.196 27.1038 111.459 28.0655 111.983C29.0273 112.508 29.8142 113.207 30.2513 114.082C30.7759 114.956 30.9508 115.918 30.9508 116.967C30.9508 118.016 30.6885 118.978 30.2513 119.852C29.8142 120.726 29.1147 121.338 28.0655 121.863C27.1038 122.388 25.8797 122.65 24.3934 122.65H21.1584V130.868H17.5737V130.956ZM21.1584 119.677H24.1311C25.1803 119.677 25.8797 119.415 26.4043 118.89C26.9289 118.366 27.1912 117.754 27.1912 116.967C27.1912 116.18 26.9289 115.568 26.4043 115.043C25.8797 114.519 25.0929 114.256 24.1311 114.256H21.1584V119.677ZM34.5355 130.956V111.196H39.6065C41.3551 111.196 42.6666 111.459 43.6284 111.896C44.5901 112.333 45.377 113.032 46.0765 113.907C46.6885 114.781 47.2131 115.83 47.5628 117.054C47.9125 118.278 48.1748 119.677 48.1748 121.164C48.1748 123.174 47.8251 124.836 47.2131 126.322C46.601 127.808 45.6393 128.857 44.3278 129.644C43.0163 130.431 41.3551 130.781 39.2568 130.781H34.5355V130.956ZM38.0327 128.158H39.1694C40.4808 128.158 41.6174 127.896 42.4043 127.284C43.1912 126.672 43.8032 125.885 44.153 124.923C44.5027 123.874 44.6775 122.65 44.6775 121.251C44.6775 119.765 44.5027 118.541 44.2404 117.491C43.9781 116.442 43.4535 115.568 42.6666 114.956C41.8797 114.344 40.918 114.082 39.6065 114.082H38.1202V128.158H38.0327ZM52.459 130.956V111.196H64.6994V114.082H55.6065V118.89H62.9508V121.776H55.6065V130.956H52.459Z" fill="white"/>
                    </g>
                </g>
                <path ref={el => this.star = el} d="M151.601 19.7604C151.231 19.7604 150.892 19.5563 150.718 19.2297L141.558 1.99149C141.151 1.22559 140.028 1.29604 139.728 2.10968C137.786 7.36993 132.776 20.6469 131.669 20.6469C130.685 20.6469 120.207 22.9183 115.393 23.9732C114.517 24.1652 114.327 25.3221 115.089 25.7946L130.148 35.1275C130.524 35.3604 130.702 35.8125 130.587 36.2392L126.293 52.0765C126.04 53.0068 127.121 53.7204 127.877 53.1231L143.97 40.4182C144.29 40.1655 144.732 40.1325 145.086 40.3349L162.579 50.3307C163.442 50.8242 164.419 49.8912 163.965 49.0061L155.874 33.2286C155.656 32.8048 155.768 32.2866 156.141 31.99L169.262 21.5427C170.002 20.9532 169.585 19.7604 168.639 19.7604H151.601Z" fill="#F4BC4F"/>
                {/*<defs>*/}
                {/*    <clipPath id="clip0">*/}
                {/*        <rect width="124.59" height="130.885" fill="white" transform="translate(0 40.7266)"/>*/}
                {/*    </clipPath>*/}
                {/*</defs>*/}
            </svg>


        );
    }
}

export default PresentationImg;
