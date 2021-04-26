import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";

class WwuImg extends Component {
    constructor(props) {
        super(props);

        this.img1 = null
        this.img2 = null
        this.img3 = null
        this.img4 = null
    }
    componentDidMount() {
        this.props.anim.imgAnim = new TimelineLite()
            .from(this.img1, 0.4, {scale: 0, transformOrigin: "50% 50%"},"-=0.2")
            .from(this.img2, 0.4, {scale: 0, transformOrigin: "50% 50%"},"-=0.2")
            .from(this.img3, 0.4, {scale: 0, transformOrigin: "50% 50%"},"-=0.2")
            .from(this.img4, 0.4, {scale: 0, transformOrigin: "50% 50%"},"-=0.2")
    }

    render() {
        return (
            <svg className="mb" width="391" height="81" viewBox="0 0 391 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g ref={el => this.img1 = el}>
                    <path d="M10.9969 3H69.0031C73.9751 3 78 7.02491 78 11.9969V70.0031C78 74.9751 73.9751 79 69.0031 79H10.9969C6.02493 79 2 74.9751 2 70.0031V11.9969C2 7.02491 6.02493 3 10.9969 3Z" fill="#D16978" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M33.252 61.4782C37.0402 61.4782 40.1181 58.4003 40.1181 54.6121V47.7461H33.252C29.4639 47.9829 26.6227 51.2975 26.8595 54.8489C27.0962 58.6371 29.7006 61.2414 33.252 61.4782Z" fill="white" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M26.3848 41.116C26.3848 37.3279 29.4627 34.25 33.2508 34.25H40.1169V47.9821H33.2508C29.4627 47.9821 26.3848 44.9042 26.3848 41.116Z" fill="white" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M26.3848 27.3836C26.3848 23.5954 29.4627 20.5176 33.2508 20.5176H40.1169V34.2497H33.2508C29.4627 34.2497 26.3848 31.1718 26.3848 27.3836Z" fill="white" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M40.1196 20.5157H46.9857C50.7738 20.279 54.0885 23.1201 54.0885 26.9083C54.0885 30.6964 51.4841 34.0111 47.6959 34.0111C47.4592 34.0111 47.2224 34.0111 46.9857 34.0111H40.1196V20.5157Z" fill="white" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M53.6115 41.116C53.6115 44.9042 50.5336 47.9821 46.7455 47.9821C42.9573 47.9821 39.8794 44.9042 39.8794 41.116C39.8794 37.3279 42.9573 34.25 46.7455 34.25C50.5336 34.25 53.6115 37.3279 53.6115 41.116Z" fill="white" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                </g>
                <g ref={el => this.img2 = el}>
                    <path d="M111.997 2H170.003C174.975 2 179 6.02489 179 10.9969V69.0031C179 73.9751 174.975 78 170.003 78H111.997C107.025 78 103 73.9751 103 69.0031V10.9969C103 5.78813 107.025 2 111.997 2Z" fill="#5C5DB1" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M158.874 28.9902C150.588 28.9902 145.853 36.3298 145.853 45.5634C145.853 53.8501 149.641 61.4264 159.821 61.4264C162.426 61.4264 165.03 60.9529 167.634 60.0058C167.871 59.7691 168.108 59.5323 168.108 59.2955V54.5603C168.108 54.3236 167.871 54.0868 167.634 54.3236C165.74 55.2706 163.61 55.5074 161.479 55.5074C155.796 55.5074 153.192 51.956 153.192 46.984H163.373C165.504 46.984 167.634 46.984 169.765 46.7472C170.002 46.7472 170.239 46.5105 170.239 46.2737C170.476 44.8532 170.476 43.4326 170.476 42.2488C170.239 35.8563 167.398 28.9902 158.874 28.9902ZM163.61 41.065C162.663 41.065 161.715 41.065 160.768 41.065H152.955C153.429 37.7504 154.849 34.4357 158.638 34.4357C161.479 34.6725 163.846 37.0401 163.61 40.118V40.3547C163.61 40.5915 163.61 40.8283 163.61 41.065Z" fill="white" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M144.196 60.2444L131.884 18.8114C131.884 18.5746 131.648 18.3379 131.411 18.3379H123.361C123.124 18.3379 123.124 18.5746 123.124 18.8114C123.124 19.9952 123.124 20.9423 122.651 21.8893L111.76 60.0077C111.76 60.4812 111.76 60.4812 112.233 60.4812H117.916C118.389 60.4812 118.389 60.2445 118.389 60.0077L121.467 48.4064H133.778L136.856 60.0077C136.856 60.2445 137.093 60.4812 137.33 60.4812H143.722C144.196 60.718 144.196 60.4812 144.196 60.2444ZM123.124 42.4874C124.782 36.5684 127.623 24.4937 127.623 24.4937C128.57 28.9921 131.174 38.2257 132.358 42.4874H123.124Z" fill="white" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>

                </g>
                <g ref={el => this.img3 = el}>
                    <path d="M220.997 2H279.003C283.975 2 288 6.02493 288 10.9969V69.0031C288 73.9751 283.975 78 279.003 78H220.997C216.025 78 212 73.9751 212 69.0031V10.9969C212 6.02493 216.025 2 220.997 2Z" fill="#F4BC4F" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M265.037 31.3603C265.037 31.1235 265.037 30.8867 265.51 30.8867H271.429C271.666 30.8867 271.903 30.8867 271.903 31.3603V61.192C271.903 61.4288 271.903 61.6655 271.429 61.6655H265.51C265.037 61.6655 265.037 61.4288 265.037 61.192V31.3603Z" fill="white" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M264.56 22.8331C264.56 20.7023 266.217 19.0449 268.348 19.0449C270.479 19.0449 272.136 20.7023 272.136 22.8331C272.136 24.9639 270.479 26.6213 268.348 26.6213C266.454 26.858 264.797 25.2007 264.56 23.3066C264.56 23.3066 264.56 23.0699 264.56 22.8331Z" fill="white" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M259.589 61.1865L247.514 20.4637C247.514 20.227 247.278 19.9902 247.041 19.9902H239.228C238.991 19.9902 238.991 19.9902 238.991 20.4637C238.991 21.4108 238.991 22.5946 238.517 23.5416L227.863 60.9497C227.863 61.4233 227.863 61.4233 228.337 61.4233H233.782C234.256 61.4233 234.256 61.4233 234.256 60.9497L237.334 49.5852H249.645L252.723 60.9497C252.723 61.1865 252.96 61.1865 253.197 61.1865H259.352C259.589 61.66 259.589 61.4232 259.589 61.1865ZM238.754 43.903C240.412 37.984 243.016 26.146 243.016 26.146C243.963 30.6444 246.331 39.6413 247.514 43.903H238.754Z" fill="white" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                </g>
                <g ref={el => this.img4 = el}>
                    <path d="M324.788 2H377.212C383.727 2 389 7.27348 389 13.7878V66.2122C389 72.7265 383.727 78 377.212 78H324.788C318.273 78 313 72.7265 313 66.2122V13.7878C313 7.27348 318.273 2 324.788 2Z" fill="#72CDDA" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M378.568 52.43C378.568 59.332 372.979 63.0967 365.748 63.0967C362.46 63.0967 359.502 62.4693 356.543 61.2144C356.215 61.2144 356.215 60.9007 356.215 60.5869V54.3124C356.215 53.9987 356.544 53.6849 356.872 53.9987C359.502 55.5673 362.789 56.5085 365.748 56.5085C369.364 56.5085 370.678 55.2536 370.678 53.0575C370.678 50.8614 369.692 50.234 365.09 48.0379C358.845 45.2144 356.215 42.0771 356.215 37.3712C356.215 31.7242 360.817 27.332 368.706 27.332C371.336 27.332 374.295 27.6458 376.596 28.587C376.924 28.9007 376.924 29.2144 376.924 29.5281V35.4889C376.924 35.8026 376.595 36.1163 376.267 35.8026C373.966 34.5477 371.336 33.9203 368.378 33.9203C364.762 33.9203 363.775 35.8026 363.775 37.0575C363.775 38.3124 364.433 39.5673 369.364 42.0771C376.596 44.9006 378.568 48.0379 378.568 52.43Z" fill="white" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M336.744 15.4102C332.699 15.4102 328.654 15.4101 325.854 15.7259C325.543 15.7259 324.92 16.0418 324.92 16.3576V62.4648C324.92 62.7806 324.92 63.0964 325.231 63.0964H331.765C332.076 63.0964 332.388 62.7806 332.388 62.4648V46.0431H335.81C345.456 46.0431 353.234 41.306 353.234 30.5687C352.923 22.042 348.256 15.4102 336.744 15.4102ZM335.81 39.0954C334.566 39.0954 333.632 39.0954 332.388 39.0954V22.6736C333.01 22.6736 334.877 22.6736 336.432 22.6736C342.033 22.6736 345.456 25.5158 345.456 30.8845C345.456 37.5164 340.789 39.0954 335.81 39.0954Z" fill="white" stroke="#525375" stroke-width="2.23529" stroke-miterlimit="10" stroke-linejoin="round"/>
                </g>
            </svg>
        );
    }
}

export default WwuImg;
