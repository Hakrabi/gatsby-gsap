import React, {Component} from 'react';
import {gsap} from "gsap";
import AniLink from "gatsby-plugin-transition-link/AniLink";

class Hamster extends Component {
    constructor() {
        super();
        this.hamster = null
        this.hello = null
        this.anim = null;

        this.runAnim = this.runAnim.bind(this);
    }

    componentDidMount() {
        this.anim = gsap.from(this.hello, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            y: 5,
            transformOrigin: "70% 100%"
        }).reversed(true);
    }

    runAnim(){
        this.anim.reversed(!this.anim.reversed())
    }

    render() {
        return (
            <svg ref={svg => this.hamster = svg}
                 className="Hamster"
                 onMouseEnter = {this.runAnim}
                 onMouseLeave = {this.runAnim}
                 width="352" height="215" viewBox="0 0 352 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M130.5 192.6C130.5 192.6 133.6 198.5 131.6 200C129.6 201.5 124.4 195.9 123.7 190.8C123 185.7 130.5 192.6 130.5 192.6Z" fill="#DADBE8" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M165.2 145.9C164.4 144.7 162.7 142.5 159.9 140C161.6 138.8 162.9 137.4 163.8 135.8C165.3 133.3 167.2 127.6 160.8 117.5C161 114.4 161 107.1 156.2 100.7C150.1 92.4996 140.3 91.2996 133.7 90.5996C129 89.9996 110.6 88.6996 98.0995 101.3C95.8995 103.5 90.5995 109.1 88.7995 118C87.9995 122.2 88.1995 125.9 88.5995 128.3C88.5995 128.3 88.7995 132.7 92.0995 136.9C92.5995 137.5 93.1995 138.1 93.8995 138.7C91.3995 140.9 86.1995 146 83.6995 154.1C83.3995 155 78.7995 171.4 88.6995 182.5C92.9995 187.3 97.9995 188.9 105.3 191.1C117.4 194.9 127.7 194.1 132.4 193.6C144.7 192.2 156.4 190.8 163.7 181C174.2 167.1 166.9 148.3 165.2 145.9Z" fill="#DADBE8" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M160.4 141.3C160.3 141.3 160.2 141.1 160.1 140.9C159.7 139.7 162.2 138.2 163.2 137.4C164.9 133 166.4 126.4 161.9 122.4C161.3 121.8 159.8 120.6 157.4 120C155.3 119.5 153.4 119.7 148.8 120.8H148.7C145.3 121.6 141.8 121.2 138.9 119.7C136.3 118.4 133.2 117 130.5 116.9C128.5 116.8 125.5 117.8 122.8 118.8C119.4 120.1 115.5 120.2 112.2 118.9C110.6 118.2 108.6 117.7 105.5 117.3C102.4 116.9 100.2 116.6 97.6998 117.5C92.8998 119.2 89.9998 124.1 89.7998 128.1C89.4998 132.9 92.6998 137.6 93.4998 138.7C93.1998 138.6 92.6998 139 92.0998 139.5C91.6998 139.8 91.6 141.3 91 142C80.8 153.4 82.3998 165.3 82.3998 165.3C82.9998 171.5 86.2998 182.9 94.6998 185.9C100.6 188 108.3 185.5 109 185.2C111 184.5 113.6 183.4 118.3 182.1C120.4 181.5 122.5 181 125.2 181.4C127.4 181.7 129 182.4 129.5 182.6C131 183.2 144 188.9 153.3 184.6C153.3 184.6 160.3 181.3 166.2 169.3C166.3 169.1 166.4 168.9 166.4 168.9C167 167.7 167.8 165.8 168.2 163.3C169.3 157.5 168.2 149.9 164.9 146.7C163.3 145 162.1 142.9 160.4 141.3Z" fill="#EFEFF7"/>
                <path d="M142.605 115.187C144.418 114.998 145.706 113.107 145.482 110.965C145.258 108.823 143.607 107.24 141.794 107.429C139.981 107.619 138.693 109.509 138.917 111.651C139.141 113.794 140.792 115.377 142.605 115.187Z" fill="#525375"/>
                <path d="M141.641 111.592C142.191 111.535 142.571 110.865 142.49 110.096C142.41 109.327 141.899 108.75 141.35 108.807C140.801 108.865 140.421 109.535 140.501 110.304C140.581 111.073 141.092 111.649 141.641 111.592Z" fill="white"/>
                <path d="M122.744 112.509C122.765 110.355 121.305 108.594 119.482 108.576C117.66 108.558 116.165 110.29 116.144 112.444C116.123 114.598 117.583 116.358 119.405 116.376C121.228 116.394 122.723 114.663 122.744 112.509Z" fill="#525375"/>
                <path d="M121.166 111.43C121.174 110.657 120.732 110.026 120.18 110.02C119.628 110.015 119.174 110.637 119.166 111.411C119.159 112.184 119.6 112.815 120.152 112.82C120.705 112.826 121.159 112.203 121.166 111.43Z" fill="white"/>
                <path d="M134.601 121.9C134.901 121.2 134.801 120.4 134.201 119.9C133.401 119.3 132.201 118.7 130.301 118.9C128.301 119.1 126.601 119.7 125.501 120.2C124.601 120.6 124.401 121.7 124.901 122.4C125.301 122.9 125.801 123.5 126.701 124.2C129.501 126.5 128.601 127.8 130.801 126.9C132.301 126.2 133.901 123.4 134.601 121.9Z" fill="#525375"/>
                <path d="M130 126.7C131.5 129 130.7 131.7 129.3 132.4C127.9 133.1 125.3 132.2 124.4 129.6" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M135.099 129.2C135.499 130.7 134.399 132 133.199 132.2C132.099 132.3 130.999 131.5 130.699 130.3" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M112.799 95.7004C113.499 91.8004 112.299 88.0004 109.599 85.9004C109.099 85.5004 105.899 83.1004 102.399 84.5004C99.7989 85.5004 98.2989 88.2004 98.2989 90.5004C98.1989 94.2004 101.899 98.1004 107.299 98.7004" fill="#DADBE8"/>
                <path d="M112.799 95.7004C113.499 91.8004 112.299 88.0004 109.599 85.9004C109.099 85.5004 105.899 83.1004 102.399 84.5004C99.7989 85.5004 98.2989 88.2004 98.2989 90.5004C98.1989 94.2004 101.899 98.1004 107.299 98.7004" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M140.1 93.5995C140 93.2995 138.1 89.2995 140.4 85.3995C141.5 83.4995 144.2 80.4995 147.3 81.1995C150.3 81.7995 151.8 85.4995 151.9 88.0995C152 91.4995 149.8 94.6995 146.2 96.3995" fill="#DADBE8"/>
                <path d="M140.1 93.5995C140 93.2995 138.1 89.2995 140.4 85.3995C141.5 83.4995 144.2 80.4995 147.3 81.1995C150.3 81.7995 151.8 85.4995 151.9 88.0995C152 91.4995 149.8 94.6995 146.2 96.3995" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M103.801 87.7002C103.801 87.7002 111.101 87.2002 110.201 96.3002L103.801 87.7002Z" fill="#DADBE8"/>
                <path d="M103.801 87.7002C103.801 87.7002 111.101 87.2002 110.201 96.3002" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M147.3 84C147.3 84 141.3 84.6 142.4 94L147.3 84Z" fill="#DADBE8"/>
                <path d="M147.3 84C147.3 84 141.3 84.6 142.4 94" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M146.299 89.7002L142.699 93.1002" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M106.6 94.5L110 95.3" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M93 125.1L83 124.9" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M93.1008 128L84.8008 129.7" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M161.1 123.8L166.7 122.5" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M161.1 127.2L169.4 127.6" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M144.699 144.1C144.699 144.1 138.299 144.6 136.599 146.6C134.899 148.6 135.799 152.7 139.899 152.5C143.999 152.2 146.199 148.8 146.199 148.8" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M112.6 143.6C112.6 143.6 119.4 142.4 121.4 145.8C123.4 149.2 117.2 153.1 112.6 149.8" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M150.201 172.1C150.201 172.1 149.801 165.2 145.801 165C141.801 164.8 140.501 168.1 143.801 173.6" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M106.699 171.8C106.699 171.8 111.099 163.2 113.999 166.3C116.899 169.4 114.899 172.3 112.399 174.7" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M121.2 145.7L118 145.9" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M120.9 148.2L117.9 148.4" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M136.301 148.3L139.601 147.4" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M137.6 151.7L140.4 150.1" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M146.1 165.3L146.8 167.9" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M143 166L144.1 168.4" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M114.5 168.2L113.4 169.5" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M113.3 166L111.5 167.9" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M198.265 179.114C196.613 185.45 201.395 191.637 207.942 191.637H338.558C345.105 191.637 349.887 185.45 348.234 179.114L327.688 100.32C326.54 95.9158 322.563 92.8428 318.012 92.8428H228.488C223.937 92.8428 219.96 95.9158 218.812 100.32L198.265 179.114Z" fill="#EFEFF7"/>
                <path d="M308.22 78H302.682V93.8432H308.22V78Z" fill="#EFEFF7"/>
                <path d="M244.076 78H238.537V93.8432H244.076V78Z" fill="#EFEFF7"/>
                <path d="M272.927 180.044C293.344 180.044 309.895 163.493 309.895 143.077C309.895 122.66 293.344 106.109 272.927 106.109C252.511 106.109 235.96 122.66 235.96 143.077C235.96 163.493 252.511 180.044 272.927 180.044Z" fill="#EFEFF7" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M273.571 155.571C280.969 155.571 286.967 149.574 286.967 142.175C286.967 134.777 280.969 128.779 273.571 128.779C266.172 128.779 260.175 134.777 260.175 142.175C260.175 149.574 266.172 155.571 273.571 155.571Z" fill="#F6D37E"/>
                <path d="M273.186 125.172C276.458 125.172 279.111 122.52 279.111 119.247C279.111 115.975 276.458 113.322 273.186 113.322C269.914 113.322 267.261 115.975 267.261 119.247C267.261 122.52 269.914 125.172 273.186 125.172Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M273.186 170.899C276.458 170.899 279.111 168.246 279.111 164.974C279.111 161.702 276.458 159.049 273.186 159.049C269.914 159.049 267.261 161.702 267.261 164.974C267.261 168.246 269.914 170.899 273.186 170.899Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M296.114 148.101C299.386 148.101 302.039 145.448 302.039 142.176C302.039 138.904 299.386 136.251 296.114 136.251C292.841 136.251 290.188 138.904 290.188 142.176C290.188 145.448 292.841 148.101 296.114 148.101Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M250.387 148.101C253.659 148.101 256.312 145.448 256.312 142.176C256.312 138.904 253.659 136.251 250.387 136.251C247.115 136.251 244.462 138.904 244.462 142.176C244.462 145.448 247.115 148.101 250.387 148.101Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M289.414 131.871C292.687 131.871 295.339 129.218 295.339 125.946C295.339 122.673 292.687 120.021 289.414 120.021C286.142 120.021 283.489 122.673 283.489 125.946C283.489 129.218 286.142 131.871 289.414 131.871Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M257.084 164.201C260.357 164.201 263.009 161.548 263.009 158.276C263.009 155.003 260.357 152.351 257.084 152.351C253.812 152.351 251.159 155.003 251.159 158.276C251.159 161.548 253.812 164.201 257.084 164.201Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M257.084 131.871C260.357 131.871 263.009 129.218 263.009 125.946C263.009 122.673 260.357 120.021 257.084 120.021C253.812 120.021 251.159 122.673 251.159 125.946C251.159 129.218 253.812 131.871 257.084 131.871Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M302.866 173.633L307.248 168.739L293.238 156.196L288.856 161.09L302.866 173.633Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M146.3 106C146.3 106 144.9 103.2 141.9 104.5" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M118.9 105.5C118.9 105.5 116.7 105 115 107.4" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M281.379 11.6494L246.576 65.1816L259.451 73.5518C264.576 76.8837 266.13 83.7935 262.698 89.0713L238.843 125.765C235.493 130.917 228.591 132.508 223.341 129.095L210.466 120.724L175.091 175.136C194.091 187.488 219.514 182.027 231.932 162.927L240.919 149.104L244.84 143.072L280.95 87.5293L284.545 82.0001L293.286 68.5542C305.704 49.4535 300.378 24.0016 281.379 11.6494Z" fill="white" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M244.414 65.1474L237.38 60.5745C233.799 58.2464 232.721 53.4676 234.99 49.9781L262.7 7.35594C264.969 3.8664 269.774 2.91234 273.354 5.24041L280.388 9.8134C281.284 10.3954 281.518 11.4343 280.951 12.3067L246.921 64.6497C246.435 65.3974 245.309 65.7295 244.414 65.1474Z" fill="#F6D37E" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M173.557 174.139L166.523 169.566C162.942 167.238 161.868 162.452 164.142 158.955L191.833 116.361C194.107 112.864 198.916 111.904 202.497 114.232L209.531 118.805C210.426 119.387 210.66 120.427 210.091 121.301L175.985 173.762C175.498 174.512 174.452 174.721 173.557 174.139Z" fill="#525375"/>
                <path d="M173.557 174.147L166.523 169.574C162.942 167.246 161.868 162.461 164.142 158.964L191.833 116.37C194.107 112.873 198.916 111.912 202.497 114.24L209.531 118.813C210.426 119.395 210.66 120.436 210.091 121.31L175.985 173.771C175.498 174.521 174.452 174.729 173.557 174.147Z" fill="#F6D37E" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M208.1 180C213.3 186.8 212.5 195.3 208 198.8C202.6 203.1 192.3 199.7 191.6 196.1C191 192.8 198.3 187.6 200.7 189C203.5 190.7 201.9 202.9 195.4 208.7C182.4 220.5 149.2 207.2 149.3 199.4C149.4 195.2 159 190.3 163.5 193C166.7 194.9 167.8 200.9 165.9 205C161.7 214.3 141.6 214.8 131.1 212.8C100.6 206.8 72.2003 170.9 80.8003 150.1C85.4003 138.9 99.5003 134.8 114 130.5C144 121.8 173.4 127.4 173.4 130.3C173.4 135.4 79.1003 137.6 79.2003 140.3C79.3003 142.9 170.9 139.8 171.2 144.7C171.5 149.8 74.8003 157.2 75.0003 164.9C75.1003 168.5 96.3003 172.4 170.1 175.5" stroke="#525375" strokeLinecap="round" strokeLinejoin="round"/>
                <g clipPath="url(#clip0)">
                    <path d="M209.5 177.5L213.397 187.547L210.001 188.5L204.94 179.728L209.5 177.5Z" fill="#525375"/>
                </g>
                <g clipPath="url(#clip1)">
                    <path d="M90.3005 36.4004C78.0005 20.1004 53.4005 23.4004 45.0005 24.6004C41.9005 25.0004 3.40047 30.7004 0.700469 52.5004C-1.29953 68.2004 16.0005 86.5004 31.7005 88.4004C41.6005 89.6004 48.4005 84.1004 58.7005 88.8004C66.2005 92.3004 70.9005 99.1004 72.0005 98.2004C73.2005 97.2004 66.3005 90.4004 68.2005 84.7004C70.6005 77.2004 85.1005 80.8004 92.6005 72.2004C100.1 64.0004 98.1005 46.8004 90.3005 36.4004Z" fill="#EFEFF7"/>
                </g>
                <g ref={g => this.hello = g}>
                    <path d="M2.37988 43.8557H0V69.5464H2.05161V56.5979H13.5406V69.5464H15.5922V45.5464C15.5922 45.1065 15.6059 44.7904 15.6333 44.5979C15.6606 44.4055 15.7563 44.2543 15.9205 44.1443V43.8557H13.5817V54.866H2.05161V45.5464C2.05161 45.1065 2.06528 44.7904 2.09263 44.5979C2.11998 44.4055 2.21575 44.2543 2.37988 44.1443V43.8557Z" fill="#525375"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.896 67.4021C24.5099 69.1065 26.6298 69.9588 29.2559 69.9588C30.651 69.9588 31.882 69.6976 32.9488 69.1753C34.043 68.6529 35.0004 67.9107 35.8211 66.9485L34.5901 65.8351C33.9336 66.6048 33.1676 67.2096 32.2923 67.6495C31.4443 68.0619 30.4458 68.268 29.2969 68.268C27.3274 68.268 25.6998 67.6082 24.4141 66.2887C23.1558 64.9691 22.4993 62.9622 22.4446 60.268H36.2314V59.732C36.2588 59.567 36.2724 59.3746 36.2724 59.1546C36.2724 57.1753 35.9305 55.5395 35.2466 54.2474C34.5901 52.9553 33.6874 51.9931 32.5385 51.3608C31.4169 50.7285 30.1449 50.4124 28.7225 50.4124C27.1906 50.4124 25.7956 50.7973 24.5372 51.567C23.3063 52.3093 22.3214 53.4227 21.5829 54.9072C20.8717 56.3643 20.5161 58.1512 20.5161 60.268C20.5161 63.2921 21.3094 65.6701 22.896 67.4021ZM34.2618 58.6186H22.5266C22.6908 56.5842 23.3199 54.9759 24.4141 53.7938C25.5083 52.6117 26.9308 52.0206 28.6814 52.0206C30.3227 52.0206 31.6632 52.5979 32.7026 53.7526C33.7421 54.9072 34.2618 56.5292 34.2618 58.6186Z" fill="#525375"/>
                    <path d="M42.222 67.8557V69.5464H55.8448V67.8557H50.0592V42.1237H42.4683V43.7732H48.0487V67.8557H42.222Z" fill="#525375"/>
                    <path d="M62.7381 67.8557V69.5464H76.3609V67.8557H70.5753V42.1237H62.9843V43.7732H68.5648V67.8557H62.7381Z" fill="#525375"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M85.6751 68.6392C86.9061 69.4639 88.3696 69.8763 90.0656 69.8763C91.7615 69.8763 93.225 69.4639 94.456 68.6392C95.6869 67.8144 96.6307 66.6735 97.2873 65.2165C97.9711 63.7595 98.3131 62.0825 98.3131 60.1856C98.3131 58.2612 97.9711 56.5704 97.2873 55.1134C96.6307 53.6564 95.6869 52.5155 94.456 51.6907C93.225 50.866 91.7615 50.4536 90.0656 50.4536C88.3696 50.4536 86.9061 50.866 85.6751 51.6907C84.4442 52.5155 83.4867 53.6564 82.8029 55.1134C82.1463 56.5704 81.8181 58.2612 81.8181 60.1856C81.8181 62.0825 82.1463 63.7595 82.8029 65.2165C83.4867 66.6735 84.4442 67.8144 85.6751 68.6392ZM93.3892 67.1134C92.4591 67.8007 91.3512 68.1443 90.0656 68.1443C88.1507 68.1443 86.6462 67.4158 85.552 65.9588C84.4578 64.4742 83.9107 62.5361 83.9107 60.1443C83.9107 57.8076 84.4578 55.8969 85.552 54.4124C86.6462 52.9003 88.1507 52.1443 90.0656 52.1443C91.8983 52.1443 93.3892 52.8729 94.538 54.3299C95.6869 55.7869 96.2615 57.7251 96.2615 60.1443C96.2615 61.6838 96.0152 63.0584 95.5229 64.268C95.0305 65.4777 94.3192 66.4261 93.3892 67.1134Z" fill="#525375"/>
                    <path d="M110.882 44.433L111.579 61.5464H112.892L113.713 44.8454C113.713 42.9485 113.234 42 112.277 42C111.784 42 111.429 42.2337 111.21 42.701C110.991 43.1409 110.882 43.7182 110.882 44.433Z" fill="#525375"/>
                    <path d="M110.923 69.5052C111.278 69.8351 111.702 70 112.195 70C112.66 70 113.07 69.8351 113.425 69.5052C113.808 69.1478 114 68.7217 114 68.2268C114 67.732 113.808 67.3058 113.425 66.9485C113.07 66.5911 112.66 66.4124 112.195 66.4124C111.702 66.4124 111.278 66.5911 110.923 66.9485C110.567 67.3058 110.389 67.732 110.389 68.2268C110.389 68.7217 110.567 69.1478 110.923 69.5052Z" fill="#525375"/>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="8.53479" height="16.2674" fill="white" transform="translate(204 175.965) rotate(-6.494)"/>
                        </clipPath>
                        <clipPath id="clip1">
                            <rect width="97.8" height="75.9" fill="white" transform="translate(0 23)"/>
                        </clipPath>
                    </defs>
                </g>
            </svg>

        );
    }
}

export default Hamster;