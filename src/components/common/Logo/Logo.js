import React from "react"
import LogoImage from './../../../images/DXdao Logo.svg';

const Logo = (props) => {
    return (
        <section className="logo">
            {props.type === "isotype" ? (
                <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.2803 49.641C39.0335 49.641 50.1827 38.5285 50.1827 24.8205C50.1827 11.1125 39.0335 0 25.2803 0C11.5271 0 0.37793 11.1125 0.37793 24.8205C0.37793 38.5285 11.5271 49.641 25.2803 49.641Z" fill="url(#paint0_radial)"/>
                    <path d="M12.6129 12.1945C17.9926 6.83254 25.8884 5.62178 32.396 8.47571L29.0121 11.8485C24.4134 10.5513 19.2941 11.6756 15.7366 15.3078C10.9644 20.0644 10.5305 27.4154 14.3483 32.6908L19.4676 27.5884L22.5913 30.7017L14.2615 38.9176C13.6542 38.4852 13.1336 37.9663 12.6129 37.4474C5.58475 30.4423 5.58475 19.1131 12.6129 12.1945Z" fill="white"/>
                    <path d="M18.0791 41.1645C24.6735 44.0185 32.5693 42.7212 37.8622 37.4458C44.8904 30.4407 44.8904 19.198 37.8622 12.1929C37.3416 11.674 36.821 11.1551 36.2136 10.7227L27.9706 18.9385L31.0943 22.0519L36.2136 16.9494C40.0314 22.2248 39.5108 29.6624 34.8253 34.3324C31.1811 37.9647 26.0617 39.089 21.5498 37.7917L18.0791 41.1645Z" fill="white"/>
                    <path d="M28.4045 24.8204L25.2809 21.707L22.1572 24.8204L25.2809 27.9338L28.4045 24.8204Z" fill="white"/>
                    <path d="M19.3805 15.8242L22.5041 18.9376L19.3805 22.051L16.2568 18.9376L19.3805 15.8242Z" fill="white"/>
                    <path d="M34.3049 30.7032L31.1813 27.5898L28.0576 30.7032L31.1813 33.8166L34.3049 30.7032Z" fill="white"/>
                    <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.2647 24.8072) rotate(90) scale(24.8084 24.8902)">
                    <stop stop-color="#304FFE"/>
                    <stop offset="1" stop-color="#3D5AFE"/>
                    </radialGradient>
                    </defs>
                </svg>
            ) : (
                <img alt={'DxDao'} src={LogoImage}/>
            )}
        </section>
    );
};

export default Logo;