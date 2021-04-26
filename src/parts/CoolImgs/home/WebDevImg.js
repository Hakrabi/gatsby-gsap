import React, {Component} from 'react';
import {gsap} from "gsap";
import {TimelineLite} from "gsap/all";

class WebDevImg extends Component {
    constructor(props) {
        super(props);

        this. = null
    }

    componentDidMount() {
        gsap.from(this.indicator, 0.5, {opacity: 0, yoyo: true, repeat: -1})
        this.props.anim.imgAnim = new TimelineLite()
            .from(this.camera, 0.5, {scale: 0, transformOrigin: "50% 50%",})
            .from(this.frame, 1.5, { opacity: 0,ease: this.ease}, 0.5)
            .to(this.face, 1, {y:5,x:5,rotate: 5, },1)
            .to(this.face, 1, {y:10,x:-5,rotate: -5, })
            .to(this.face, 1, {y:0,x:0,rotate: 0 })
    }


    render() {
        return (
            <svg className="mb"  width="302" height="138" viewBox="0 0 302 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M247.677 8.01855H63.5123C61.0682 8.01855 59.0869 9.99989 59.0869 12.444V118.382C59.0869 120.826 61.0682 122.807 63.5123 122.807H247.677C250.121 122.807 252.102 120.826 252.102 118.382V12.444C252.102 9.99989 250.121 8.01855 247.677 8.01855Z" fill="white" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M59.0869 105.378H252.102" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M149.38 12.6504H74.55V98.4669H149.38V12.6504Z" fill="white" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M236.639 12.6504H161.816V47.5892H236.639V12.6504Z" fill="white" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M236.639 63.5283H161.816V98.4708H236.639V63.5283Z" fill="white" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M236.639 12.6505H161.816C161.816 11.4137 162.06 10.1891 162.533 9.0466C163.006 7.90407 163.7 6.86599 164.575 5.99167C165.45 5.11735 166.488 4.42391 167.631 3.95098C168.773 3.47804 169.998 3.23487 171.235 3.23535H227.224C228.46 3.23487 229.685 3.47806 230.827 3.95105C231.97 4.42403 233.008 5.11752 233.882 5.99189C234.757 6.86626 235.45 7.90437 235.923 9.04688C236.396 10.1894 236.639 11.4139 236.639 12.6505Z" fill="white" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M236.639 63.5284H161.816C161.816 62.2917 162.06 61.0671 162.533 59.9245C163.006 58.782 163.7 57.7439 164.575 56.8696C165.45 55.9953 166.488 55.3018 167.631 54.8289C168.773 54.356 169.998 54.1128 171.235 54.1133H227.224C228.46 54.1128 229.685 54.356 230.827 54.829C231.97 55.302 233.008 55.9955 233.882 56.8698C234.757 57.7442 235.45 58.7823 235.923 59.9248C236.396 61.0673 236.639 62.2919 236.639 63.5284Z" fill="white" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M149.377 12.6505H74.55C74.55 10.1534 75.542 7.75865 77.3077 5.99297C79.0733 4.2273 81.4681 3.23535 83.9652 3.23535H139.962C142.459 3.23535 144.853 4.2273 146.619 5.99297C148.385 7.75865 149.377 10.1534 149.377 12.6505Z" fill="white" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M84.5407 9.22094C85.2454 9.22094 85.8166 8.64966 85.8166 7.94495C85.8166 7.24023 85.2454 6.66895 84.5407 6.66895C83.8359 6.66895 83.2646 7.24023 83.2646 7.94495C83.2646 8.64966 83.8359 9.22094 84.5407 9.22094Z" fill="#D16978"/>
                <path d="M88.3683 9.22094C89.073 9.22094 89.6443 8.64966 89.6443 7.94495C89.6443 7.24023 89.073 6.66895 88.3683 6.66895C87.6636 6.66895 87.0923 7.24023 87.0923 7.94495C87.0923 8.64966 87.6636 9.22094 88.3683 9.22094Z" fill="#5C5DB1"/>
                <path d="M92.1928 9.22094C92.8975 9.22094 93.4687 8.64966 93.4687 7.94495C93.4687 7.24023 92.8975 6.66895 92.1928 6.66895C91.488 6.66895 90.9167 7.24023 90.9167 7.94495C90.9167 8.64966 91.488 9.22094 92.1928 9.22094Z" fill="#F4BC4F"/>
                <path d="M171.806 9.22094C172.511 9.22094 173.082 8.64966 173.082 7.94495C173.082 7.24023 172.511 6.66895 171.806 6.66895C171.102 6.66895 170.53 7.24023 170.53 7.94495C170.53 8.64966 171.102 9.22094 171.806 9.22094Z" fill="#D16978"/>
                <path d="M175.634 9.22094C176.339 9.22094 176.91 8.64966 176.91 7.94495C176.91 7.24023 176.339 6.66895 175.634 6.66895C174.93 6.66895 174.358 7.24023 174.358 7.94495C174.358 8.64966 174.93 9.22094 175.634 9.22094Z" fill="#5C5DB1"/>
                <path d="M179.459 9.22094C180.163 9.22094 180.735 8.64966 180.735 7.94495C180.735 7.24023 180.163 6.66895 179.459 6.66895C178.754 6.66895 178.183 7.24023 178.183 7.94495C178.183 8.64966 178.754 9.22094 179.459 9.22094Z" fill="#F4BC4F"/>
                <path d="M236.639 63.5284H161.816C161.816 62.2917 162.06 61.0671 162.533 59.9245C163.006 58.782 163.7 57.7439 164.575 56.8696C165.45 55.9953 166.488 55.3018 167.631 54.8289C168.773 54.356 169.998 54.1128 171.235 54.1133H227.224C228.46 54.1128 229.685 54.356 230.827 54.829C231.97 55.302 233.008 55.9955 233.882 56.8698C234.757 57.7442 235.45 58.7823 235.923 59.9248C236.396 61.0673 236.639 62.2919 236.639 63.5284Z" fill="white" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M171.806 60.095C172.511 60.095 173.082 59.5237 173.082 58.819C173.082 58.1143 172.511 57.543 171.806 57.543C171.102 57.543 170.53 58.1143 170.53 58.819C170.53 59.5237 171.102 60.095 171.806 60.095Z" fill="#D16978"/>
                <path d="M175.634 60.095C176.339 60.095 176.91 59.5237 176.91 58.819C176.91 58.1143 176.339 57.543 175.634 57.543C174.93 57.543 174.358 58.1143 174.358 58.819C174.358 59.5237 174.93 60.095 175.634 60.095Z" fill="#5C5DB1"/>
                <path d="M179.459 60.095C180.163 60.095 180.735 59.5237 180.735 58.819C180.735 58.1143 180.163 57.543 179.459 57.543C178.754 57.543 178.183 58.1143 178.183 58.819C178.183 59.5237 178.754 60.095 179.459 60.095Z" fill="#F4BC4F"/>
                <path d="M101.475 17.5479H80.7861C79.6903 17.5479 78.802 18.4362 78.802 19.5319C78.802 20.6277 79.6903 21.516 80.7861 21.516H101.475C102.571 21.516 103.459 20.6277 103.459 19.5319C103.459 18.4362 102.571 17.5479 101.475 17.5479Z" fill="#D16978"/>
                <path d="M178.076 17.5479H168.686C167.59 17.5479 166.702 18.4362 166.702 19.5319C166.702 20.6277 167.59 21.516 168.686 21.516H178.076C179.171 21.516 180.06 20.6277 180.06 19.5319C180.06 18.4362 179.171 17.5479 178.076 17.5479Z" fill="#D16978"/>
                <path d="M177.117 68.1416H167.727C166.632 68.1416 165.743 69.0299 165.743 70.1257C165.743 71.2214 166.632 72.1097 167.727 72.1097H177.117C178.213 72.1097 179.101 71.2214 179.101 70.1257C179.101 69.0299 178.213 68.1416 177.117 68.1416Z" fill="#D16978"/>
                <path d="M181.052 24.0684H171.663C170.567 24.0684 169.678 24.9567 169.678 26.0524C169.678 27.1482 170.567 28.0365 171.663 28.0365H181.052C182.148 28.0365 183.036 27.1482 183.036 26.0524C183.036 24.9567 182.148 24.0684 181.052 24.0684Z" fill="#5C5DB1"/>
                <path d="M202.659 30.585H193.269C192.174 30.585 191.285 31.4733 191.285 32.569C191.285 33.6648 192.174 34.5531 193.269 34.5531H202.659C203.755 34.5531 204.643 33.6648 204.643 32.569C204.643 31.4733 203.755 30.585 202.659 30.585Z" fill="#F4BC4F"/>
                <path d="M202.659 24.0684H188.029C186.933 24.0684 186.045 24.9567 186.045 26.0524C186.045 27.1482 186.933 28.0365 188.029 28.0365H202.659C203.755 28.0365 204.643 27.1482 204.643 26.0524C204.643 24.9567 203.755 24.0684 202.659 24.0684Z" fill="#D16978"/>
                <path d="M185.499 80.3301H170.87C169.774 80.3301 168.885 81.2184 168.885 82.3141C168.885 83.4099 169.774 84.2982 170.87 84.2982H185.499C186.595 84.2982 187.483 83.4099 187.483 82.3141C187.483 81.2184 186.595 80.3301 185.499 80.3301Z" fill="#D16978"/>
                <path d="M197.245 80.3301H191.916C190.82 80.3301 189.932 81.2184 189.932 82.3141C189.932 83.4099 190.82 84.2982 191.916 84.2982H197.245C198.341 84.2982 199.229 83.4099 199.229 82.3141C199.229 81.2184 198.341 80.3301 197.245 80.3301Z" fill="#5C5DB1"/>
                <path d="M209.253 80.3301H203.924C202.828 80.3301 201.94 81.2184 201.94 82.3141C201.94 83.4099 202.828 84.2982 203.924 84.2982H209.253C210.349 84.2982 211.237 83.4099 211.237 82.3141C211.237 81.2184 210.349 80.3301 209.253 80.3301Z" fill="#F4BC4F"/>
                <path d="M174.369 86.4219H167.727C166.632 86.4219 165.743 87.3102 165.743 88.4059C165.743 89.5017 166.632 90.39 167.727 90.39H174.369C175.465 90.39 176.353 89.5017 176.353 88.4059C176.353 87.3102 175.465 86.4219 174.369 86.4219Z" fill="#5C5DB1"/>
                <path d="M195.501 74.2334H183.353C182.257 74.2334 181.369 75.1217 181.369 76.2175C181.369 77.3132 182.257 78.2015 183.353 78.2015H195.501C196.597 78.2015 197.485 77.3132 197.485 76.2175C197.485 75.1217 196.597 74.2334 195.501 74.2334Z" fill="#D16978"/>
                <path d="M185.864 30.585H171.235C170.139 30.585 169.25 31.4733 169.25 32.569C169.25 33.6648 170.139 34.5531 171.235 34.5531H185.864C186.96 34.5531 187.848 33.6648 187.848 32.569C187.848 31.4733 186.96 30.585 185.864 30.585Z" fill="#D16978"/>
                <path d="M191.44 17.5479H185.798C184.702 17.5479 183.814 18.4362 183.814 19.5319C183.814 20.6277 184.702 21.516 185.798 21.516H191.44C192.536 21.516 193.425 20.6277 193.425 19.5319C193.425 18.4362 192.536 17.5479 191.44 17.5479Z" fill="#F4BC4F"/>
                <path d="M176.199 74.2334H170.556C169.46 74.2334 168.572 75.1217 168.572 76.2175C168.572 77.3132 169.46 78.2015 170.556 78.2015H176.199C177.294 78.2015 178.183 77.3132 178.183 76.2175C178.183 75.1217 177.294 74.2334 176.199 74.2334Z" fill="#5C5DB1"/>
                <path d="M173.901 37.1045H168.259C167.163 37.1045 166.275 37.9928 166.275 39.0886C166.275 40.1843 167.163 41.0726 168.259 41.0726H173.901C174.997 41.0726 175.885 40.1843 175.885 39.0886C175.885 37.9928 174.997 37.1045 173.901 37.1045Z" fill="#5C5DB1"/>
                <path d="M91.0641 57.2295H80.7861C79.6903 57.2295 78.802 58.1178 78.802 59.2136C78.802 60.3093 79.6903 61.1976 80.7861 61.1976H91.0641C92.1599 61.1976 93.0482 60.3093 93.0482 59.2136C93.0482 58.1178 92.1599 57.2295 91.0641 57.2295Z" fill="#F4BC4F"/>
                <path d="M95.0693 63.7451H84.7912C83.6954 63.7451 82.8071 64.6334 82.8071 65.7292C82.8071 66.825 83.6954 67.7133 84.7912 67.7133H95.0693C96.165 67.7133 97.0533 66.825 97.0533 65.7292C97.0533 64.6334 96.165 63.7451 95.0693 63.7451Z" fill="#D16978"/>
                <path d="M108.039 57.2295H97.7614C96.6656 57.2295 95.7773 58.1178 95.7773 59.2136C95.7773 60.3093 96.6656 61.1976 97.7614 61.1976H108.039C109.135 61.1976 110.024 60.3093 110.024 59.2136C110.024 58.1178 109.135 57.2295 108.039 57.2295Z" fill="#5C5DB1"/>
                <path d="M122.286 63.7451H112.008C110.912 63.7451 110.023 64.6334 110.023 65.7292C110.023 66.825 110.912 67.7133 112.008 67.7133H122.286C123.381 67.7133 124.27 66.825 124.27 65.7292C124.27 64.6334 123.381 63.7451 122.286 63.7451Z" fill="#F4BC4F"/>
                <path d="M92.6869 24.0684H84.8945C83.7987 24.0684 82.9104 24.9567 82.9104 26.0524C82.9104 27.1482 83.7987 28.0365 84.8945 28.0365H92.6869C93.7827 28.0365 94.671 27.1482 94.671 26.0524C94.671 24.9567 93.7827 24.0684 92.6869 24.0684Z" fill="#5C5DB1"/>
                <path d="M91.9899 30.585H87.8705C86.7748 30.585 85.8865 31.4733 85.8865 32.569C85.8865 33.6648 86.7748 34.5531 87.8705 34.5531H91.9899C93.0857 34.5531 93.974 33.6648 93.974 32.569C93.974 31.4733 93.0857 30.585 91.9899 30.585Z" fill="#D16978"/>
                <path d="M95.1098 37.1045H90.9904C89.8946 37.1045 89.0063 37.9928 89.0063 39.0886C89.0063 40.1843 89.8946 41.0726 90.9904 41.0726H95.1098C96.2055 41.0726 97.0938 40.1843 97.0938 39.0886C97.0938 37.9928 96.2055 37.1045 95.1098 37.1045Z" fill="#D16978"/>
                <path d="M98.499 43.624H87.8705C86.7748 43.624 85.8865 44.5123 85.8865 45.6081C85.8865 46.7039 86.7748 47.5922 87.8705 47.5922H98.499C99.5947 47.5922 100.483 46.7039 100.483 45.6081C100.483 44.5123 99.5947 43.624 98.499 43.624Z" fill="#F4BC4F"/>
                <path d="M95.2463 50.709H84.6179C83.5221 50.709 82.6338 51.5973 82.6338 52.6931C82.6338 53.7888 83.5221 54.6771 84.6179 54.6771H95.2463C96.342 54.6771 97.2303 53.7888 97.2303 52.6931C97.2303 51.5973 96.342 50.709 95.2463 50.709Z" fill="#D16978"/>
                <path d="M117.58 50.709H102.467C101.371 50.709 100.483 51.5973 100.483 52.6931C100.483 53.7888 101.371 54.6771 102.467 54.6771H117.58C118.676 54.6771 119.564 53.7888 119.564 52.6931C119.564 51.5973 118.676 50.709 117.58 50.709Z" fill="#5C5DB1"/>
                <path d="M106.671 70.2656H91.5583C90.4625 70.2656 89.5742 71.1539 89.5742 72.2497C89.5742 73.3455 90.4625 74.2338 91.5583 74.2338H106.671C107.767 74.2338 108.655 73.3455 108.655 72.2497C108.655 71.1539 107.767 70.2656 106.671 70.2656Z" fill="#D16978"/>
                <path d="M96.3489 83.3018H81.236C80.1402 83.3018 79.252 84.1901 79.252 85.2858C79.252 86.3816 80.1402 87.2699 81.236 87.2699H96.3489C97.4447 87.2699 98.3329 86.3816 98.3329 85.2858C98.3329 84.1901 97.4447 83.3018 96.3489 83.3018Z" fill="#5C5DB1"/>
                <path d="M129.912 70.2656H114.8C113.704 70.2656 112.815 71.1539 112.815 72.2497C112.815 73.3455 113.704 74.2338 114.8 74.2338H129.912C131.008 74.2338 131.896 73.3455 131.896 72.2497C131.896 71.1539 131.008 70.2656 129.912 70.2656Z" fill="#5C5DB1"/>
                <path d="M93.797 76.7861H84.3303C83.2345 76.7861 82.3462 77.6744 82.3462 78.7702C82.3462 79.866 83.2345 80.7543 84.3303 80.7543H93.797C94.8928 80.7543 95.7811 79.866 95.7811 78.7702C95.7811 77.6744 94.8928 76.7861 93.797 76.7861Z" fill="#5C5DB1"/>
                <path d="M90.6586 89.8232H81.1918C80.0961 89.8232 79.2078 90.7115 79.2078 91.8073C79.2078 92.9031 80.0961 93.7914 81.1918 93.7914H90.6586C91.7543 93.7914 92.6426 92.9031 92.6426 91.8073C92.6426 90.7115 91.7543 89.8232 90.6586 89.8232Z" fill="#F4BC4F"/>
                <path d="M111.477 76.7861H102.01C100.914 76.7861 100.026 77.6744 100.026 78.7702C100.026 79.866 100.914 80.7543 102.01 80.7543H111.477C112.572 80.7543 113.461 79.866 113.461 78.7702C113.461 77.6744 112.572 76.7861 111.477 76.7861Z" fill="#5C5DB1"/>
                <path d="M108.04 43.624H105.443C104.348 43.624 103.459 44.5123 103.459 45.6081C103.459 46.7039 104.348 47.5922 105.443 47.5922H108.04C109.135 47.5922 110.024 46.7039 110.024 45.6081C110.024 44.5123 109.135 43.624 108.04 43.624Z" fill="#D16978"/>
                <path d="M127.596 50.709H125C123.904 50.709 123.016 51.5973 123.016 52.6931C123.016 53.7888 123.904 54.6771 125 54.6771H127.596C128.692 54.6771 129.58 53.7888 129.58 52.6931C129.58 51.5973 128.692 50.709 127.596 50.709Z" fill="#F4BC4F"/>
                <path d="M104.757 63.7451H102.161C101.065 63.7451 100.177 64.6334 100.177 65.7292C100.177 66.825 101.065 67.7133 102.161 67.7133H104.757C105.853 67.7133 106.741 66.825 106.741 65.7292C106.741 64.6334 105.853 63.7451 104.757 63.7451Z" fill="#5C5DB1"/>
                <path d="M106.667 83.3018H104.071C102.975 83.3018 102.087 84.1901 102.087 85.2858C102.087 86.3816 102.975 87.2699 104.071 87.2699H106.667C107.763 87.2699 108.652 86.3816 108.652 85.2858C108.652 84.1901 107.763 83.3018 106.667 83.3018Z" fill="#D16978"/>
                <path d="M106.586 37.1045H102.467C101.371 37.1045 100.483 37.9928 100.483 39.0886C100.483 40.1843 101.371 41.0726 102.467 41.0726H106.586C107.682 41.0726 108.57 40.1843 108.57 39.0886C108.57 37.9928 107.682 37.1045 106.586 37.1045Z" fill="#5C5DB1"/>
                <path d="M122.758 37.1045H113.464C112.369 37.1045 111.48 37.9928 111.48 39.0886C111.48 40.1843 112.369 41.0726 113.464 41.0726H122.758C123.853 41.0726 124.742 40.1843 124.742 39.0886C124.742 37.9928 123.853 37.1045 122.758 37.1045Z" fill="#F4BC4F"/>
                <path d="M108.04 30.585H99.7751C98.6793 30.585 97.791 31.4733 97.791 32.569C97.791 33.6648 98.6793 34.5531 99.7751 34.5531H108.04C109.135 34.5531 110.024 33.6648 110.024 32.569C110.024 31.4733 109.135 30.585 108.04 30.585Z" fill="#5C5DB1"/>
                <path d="M117.58 24.0684H102.467C101.371 24.0684 100.483 24.9567 100.483 26.0524C100.483 27.1482 101.371 28.0365 102.467 28.0365H117.58C118.676 28.0365 119.564 27.1482 119.564 26.0524C119.564 24.9567 118.676 24.0684 117.58 24.0684Z" fill="#F4BC4F"/>
                <path d="M171.084 122.969H140.105V137.351H171.084V122.969Z" fill="white" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M121.666 137.352H155.588H178.2H155.598H155.599H189.523" fill="white"/>
                <path d="M121.666 137.352H155.588H178.2H155.598H155.599H189.523" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M105.677 20.3721H18.4036C8.79187 20.3721 1 28.1974 1 37.8505V69.9519C1 79.6049 8.79187 87.4303 18.4036 87.4303H105.677C115.288 87.4303 123.08 79.6049 123.08 69.9519V37.8505C123.08 28.1974 115.288 20.3721 105.677 20.3721Z" fill="#F4BC4F" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.8492 36.4172C14.0077 36.4172 15.7575 34.6674 15.7575 32.5089C15.7575 30.3504 14.0077 28.6006 11.8492 28.6006C9.69073 28.6006 7.94092 30.3504 7.94092 32.5089C7.94092 34.6674 9.69073 36.4172 11.8492 36.4172Z" fill="#D16978"/>
                <path d="M16.0079 61.1006H19.8178V72.9165C19.84 73.3065 19.7916 73.6976 19.6756 74.0645C19.5597 74.4314 19.3788 74.766 19.1447 75.0467C18.6117 75.5608 17.9314 75.8223 17.2397 75.7789C16.5517 75.8283 15.874 75.5658 15.3491 75.0467C15.1168 74.7652 14.9381 74.4301 14.8245 74.0631C14.711 73.6961 14.6653 73.3054 14.6902 72.9165V71.4686H16.0223V72.9997C15.9963 73.1938 16.0097 73.3923 16.0613 73.5793C16.1128 73.7664 16.2012 73.937 16.3193 74.0775C16.4375 74.218 16.5821 74.3245 16.7419 74.3888C16.9017 74.453 17.0721 74.4732 17.2397 74.4476C17.4089 74.4753 17.5814 74.457 17.7434 74.394C17.9055 74.3311 18.0528 74.2252 18.1736 74.0848C18.2944 73.9444 18.3855 73.7733 18.4397 73.585C18.4939 73.3967 18.5097 73.1963 18.4858 72.9997V62.4153H16.0079V61.1006Z" fill="white"/>
                <path d="M26.4434 61.1006H28.5456L31.5705 75.7848H30.1639L29.4833 72.3778H25.5813L24.9007 75.7848H23.4941L26.4434 61.1006ZM27.4869 62.8041L25.8384 70.9809H29.1355L27.4869 62.8041Z" fill="white"/>
                <path d="M38.4097 75.7848H35.9065L32.3047 61.1006H33.9795L37.0591 74.0472L40.1746 61.1006H41.8494L38.4097 75.7848Z" fill="white"/>
                <path d="M46.2616 61.1006H48.375L51.3942 75.7848H49.9903L49.311 72.3778H45.4011L44.7218 75.7848H43.3179L46.2616 61.1006ZM47.3032 62.8041L45.6577 70.9809H48.9487L47.3032 62.8041Z" fill="white"/>
                <path d="M61.6706 72.7627C61.6706 74.7774 60.4456 75.7848 57.9956 75.7848C55.5619 75.7848 54.3369 74.7774 54.3369 72.7627V70.9267H55.8559V72.8602C55.8463 73.0884 55.8899 73.3157 55.9835 73.5243C56.077 73.733 56.2178 73.9172 56.3949 74.0625C56.8736 74.3875 57.451 74.5369 58.0283 74.485C58.6057 74.5396 59.184 74.39 59.6616 74.0625C59.8421 73.9265 59.9869 73.7491 60.0836 73.5454C60.1803 73.3417 60.226 73.1178 60.217 72.8927C60.2261 72.4912 60.171 72.0908 60.0536 71.7066C59.9062 71.3454 59.677 71.0229 59.3839 70.7642L55.5129 67.0596C55.1147 66.6895 54.7977 66.2414 54.5819 65.7436C54.4014 65.2213 54.3184 64.6707 54.3369 64.1188C54.31 63.7045 54.3767 63.2896 54.5321 62.9044C54.6876 62.5192 54.9278 62.1735 55.2352 61.8928C56.0201 61.3141 56.9889 61.0371 57.9629 61.1129C60.2823 61.1129 61.442 62.1202 61.442 64.1188V65.9548H59.923V64.0375C59.9378 63.8118 59.8998 63.5857 59.8119 63.3771C59.7241 63.1685 59.5887 62.9829 59.4166 62.8351C58.9596 62.5478 58.4301 62.3953 57.8894 62.3953C57.3488 62.3953 56.8192 62.5478 56.3622 62.8351C56.1914 62.9804 56.0568 63.1632 55.9689 63.369C55.8811 63.5748 55.8424 63.7981 55.8559 64.0213C55.8425 64.4218 55.8921 64.822 56.0029 65.2074C56.1541 65.5571 56.3831 65.8682 56.6726 66.1173L60.56 69.8218C60.9303 70.2015 61.2242 70.6482 61.4256 71.1379C61.6061 71.6601 61.6891 72.2108 61.6706 72.7627Z" fill="white"/>
                <path d="M71.1371 72.7503V71.5637H72.6804V72.7503C72.7068 73.1655 72.6394 73.5813 72.483 73.9688C72.3265 74.3562 72.0848 74.7059 71.7746 74.9935C70.9918 75.568 70.0194 75.8454 69.0403 75.7737C68.0508 75.8445 67.0682 75.5675 66.2724 74.9935C65.9573 74.7087 65.7112 74.3599 65.5516 73.9721C65.3921 73.5842 65.3232 73.167 65.3498 72.7503V64.1189C65.3236 63.7061 65.3911 63.2927 65.5476 62.908C65.7041 62.5232 65.9458 62.1764 66.2556 61.8919C67.0384 61.3174 68.0108 61.04 68.9899 61.1117C69.9793 61.0409 70.9619 61.3179 71.7578 61.8919C72.0735 62.1728 72.3202 62.5186 72.4799 62.9039C72.6395 63.2893 72.708 63.7045 72.6804 64.1189V66.167H71.1371V64.1189C71.1371 62.981 70.4326 62.3958 69.0067 62.3958C67.5809 62.3958 66.8931 62.981 66.8931 64.1189V72.7503C66.8931 73.9044 67.5976 74.4733 69.0067 74.4733C70.4158 74.4733 71.1371 73.9044 71.1371 72.7503Z" fill="white"/>
                <path d="M77.9974 75.7848H76.3574V61.1118H79.8842C80.8836 61.0374 81.8745 61.3359 82.6527 61.9458C82.977 62.2411 83.2304 62.6014 83.3949 63.0014C83.5594 63.4014 83.6311 63.8313 83.605 64.2608V67.427C83.6726 68.0733 83.5032 68.7221 83.1261 69.2602C82.7491 69.7984 82.1884 70.1918 81.5418 70.3718L84.4338 75.7848H82.6704L79.9371 70.6782H77.9974V75.7848ZM81.965 67.427V64.2608C81.9812 64.0158 81.9424 63.7703 81.8511 63.5411C81.7598 63.3119 81.6182 63.1045 81.436 62.9331C80.9999 62.5904 80.4453 62.4201 79.8842 62.4565H77.9974V69.2654H79.8842C81.3478 69.2313 81.965 68.6866 81.965 67.427Z" fill="white"/>
                <path d="M89.5732 74.5683V75.7851H85.9021V74.5683H86.9789V63.7862H85.9021V62.5693H89.5732V63.7862H88.4963V74.5683H89.5732Z" fill="white"/>
                <path d="M94.8864 75.7848H93.2441V61.1109H96.8143C97.8256 61.04 98.8274 61.3381 99.6169 61.945C99.9452 62.2403 100.202 62.6006 100.368 63.0006C100.535 63.4006 100.607 63.8305 100.581 64.2601V68.1074C100.607 68.538 100.537 68.9691 100.373 69.3715C100.21 69.7738 99.9583 70.1381 99.6347 70.4395C98.8398 71.049 97.8314 71.3473 96.8143 71.2737H94.8864V75.7848ZM98.9207 68.1074V64.2601C98.9371 64.0151 98.8978 63.7695 98.8053 63.5403C98.7129 63.3111 98.5696 63.1037 98.3852 62.9323C97.9437 62.5896 97.3823 62.4193 96.8143 62.4557H94.8864V69.9118H96.8143C98.2245 69.9118 98.9207 69.316 98.9207 68.1074Z" fill="white"/>
                <path d="M109.397 61.1006V62.4463H106.514V75.7848H104.955V62.4463H102.055V61.1006H109.397Z" fill="white"/>
                <path d="M40.5471 50.749L58.082 32.9814L68.8893 50.4179L86.3989 42.4829" stroke="white" stroke-miterlimit="10"/>
                <path d="M39.9741 53.0423C39.634 53.0423 39.3016 52.9246 39.0188 52.7042C38.7361 52.4838 38.5157 52.1705 38.3855 51.804C38.2554 51.4374 38.2213 51.0341 38.2877 50.6449C38.354 50.2558 38.5178 49.8984 38.7583 49.6178C38.9987 49.3373 39.3051 49.1462 39.6386 49.0688C39.9722 48.9914 40.3179 49.0311 40.6321 49.183C40.9463 49.3348 41.2148 49.5919 41.4037 49.9218C41.5927 50.2517 41.6935 50.6395 41.6935 51.0363C41.6935 51.5683 41.5124 52.0786 41.1899 52.4548C40.8675 52.831 40.4301 53.0423 39.9741 53.0423Z" fill="#F4BC4F"/>
                <path d="M40.2603 49.8742C40.4901 49.8742 40.7148 49.9423 40.9059 50.07C41.097 50.1977 41.2459 50.3792 41.3339 50.5915C41.4218 50.8039 41.4448 51.0375 41.4 51.2629C41.3552 51.4883 41.2445 51.6954 41.082 51.8579C40.9195 52.0204 40.7124 52.1311 40.487 52.1759C40.2616 52.2207 40.0279 52.1977 39.8156 52.1098C39.6033 52.0218 39.4218 51.8729 39.2941 51.6818C39.1664 51.4907 39.0983 51.266 39.0983 51.0362C39.0983 50.728 39.2207 50.4324 39.4386 50.2145C39.6565 49.9966 39.9521 49.8742 40.2603 49.8742ZM40.2603 48.4571C39.7502 48.4571 39.2515 48.6083 38.8274 48.8917C38.4033 49.1751 38.0727 49.5779 37.8775 50.0492C37.6823 50.5205 37.6312 51.0391 37.7307 51.5394C37.8302 52.0397 38.0759 52.4992 38.4366 52.8599C38.7973 53.2206 39.2568 53.4663 39.7571 53.5658C40.2574 53.6653 40.776 53.6142 41.2473 53.419C41.7186 53.2238 42.1214 52.8932 42.4048 52.4691C42.6882 52.045 42.8394 51.5463 42.8394 51.0362C42.8413 50.697 42.7759 50.3608 42.6469 50.047C42.518 49.7332 42.3281 49.4482 42.0882 49.2083C41.8483 48.9684 41.5633 48.7785 41.2495 48.6496C40.9357 48.5206 40.5995 48.4552 40.2603 48.4571Z" fill="white"/>
                <path d="M57.7417 34.7007C57.4016 34.7007 57.0691 34.6167 56.7864 34.4592C56.5036 34.3018 56.2832 34.078 56.1531 33.8162C56.023 33.5543 55.9889 33.2662 56.0553 32.9883C56.1216 32.7103 56.2854 32.455 56.5258 32.2546C56.7663 32.0542 57.0727 31.9178 57.4062 31.8625C57.7398 31.8072 58.0855 31.8356 58.3997 31.944C58.7138 32.0525 58.9824 32.2361 59.1713 32.4718C59.3603 32.7074 59.4611 32.9844 59.4611 33.2678C59.4611 33.6478 59.2799 34.0123 58.9575 34.281C58.635 34.5497 58.1977 34.7007 57.7417 34.7007Z" fill="#F4BC4F"/>
                <path d="M57.7418 31.9491C57.9461 31.9491 58.1458 32.0097 58.3157 32.1232C58.4855 32.2367 58.6179 32.398 58.6961 32.5868C58.7743 32.7755 58.7947 32.9832 58.7549 33.1836C58.715 33.3839 58.6167 33.568 58.4722 33.7124C58.3277 33.8569 58.1437 33.9553 57.9433 33.9951C57.743 34.035 57.5353 34.0145 57.3465 33.9363C57.1578 33.8582 56.9965 33.7258 56.883 33.5559C56.7695 33.386 56.7089 33.1863 56.7089 32.982C56.7089 32.7081 56.8177 32.4454 57.0114 32.2517C57.2051 32.0579 57.4679 31.9491 57.7418 31.9491ZM57.7418 30.6895C57.2884 30.6895 56.8451 30.8239 56.4681 31.0758C56.0911 31.3277 55.7973 31.6858 55.6237 32.1047C55.4502 32.5236 55.4048 32.9846 55.4933 33.4293C55.5817 33.874 55.8001 34.2825 56.1207 34.6031C56.4413 34.9238 56.8498 35.1421 57.2945 35.2306C57.7393 35.319 58.2002 35.2736 58.6191 35.1001C59.0381 34.9266 59.3961 34.6327 59.648 34.2557C59.8999 33.8787 60.0344 33.4355 60.0344 32.982C60.0311 32.375 59.7885 31.7938 59.3593 31.3646C58.93 30.9354 58.3488 30.6928 57.7418 30.6895Z" fill="white"/>
                <path d="M69.2174 51.8959C68.8763 51.8984 68.5421 51.7994 68.2573 51.6115C67.9726 51.4235 67.7502 51.1551 67.6185 50.8404C67.4867 50.5257 67.4516 50.1789 67.5175 49.8442C67.5835 49.5094 67.7475 49.2019 67.9887 48.9606C68.23 48.7194 68.5375 48.5554 68.8723 48.4894C69.207 48.4235 69.5538 48.4587 69.8685 48.5904C70.1832 48.7221 70.4516 48.9445 70.6396 49.2293C70.8275 49.514 70.9265 49.8482 70.9239 50.1894C70.9206 50.6409 70.7397 51.073 70.4204 51.3923C70.1011 51.7116 69.669 51.8925 69.2174 51.8959Z" fill="#F4BC4F"/>
                <path d="M69.217 49.7098C69.4232 49.7074 69.6254 49.7662 69.798 49.879C69.9707 49.9917 70.1059 50.1532 70.1865 50.343C70.2672 50.5328 70.2895 50.7422 70.2508 50.9447C70.2122 51.1472 70.1141 51.3337 69.9692 51.4804C69.8243 51.627 69.6391 51.7273 69.437 51.7685C69.235 51.8096 69.0253 51.7898 68.8345 51.7115C68.6438 51.6331 68.4807 51.4999 68.3659 51.3286C68.251 51.1574 68.1897 50.9558 68.1897 50.7497C68.188 50.6137 68.2134 50.4788 68.2643 50.3527C68.3152 50.2266 68.3906 50.1119 68.4861 50.0151C68.5817 49.9184 68.6955 49.8416 68.8209 49.7892C68.9464 49.7368 69.081 49.7098 69.217 49.7098ZM69.217 48.4571C68.763 48.4546 68.3186 48.5869 67.9399 48.8373C67.5612 49.0877 67.2654 49.4449 67.09 49.8636C66.9146 50.2823 66.8674 50.7436 66.9544 51.1892C67.0414 51.6347 67.2588 52.0444 67.5789 52.3663C67.899 52.6882 68.3075 52.9077 68.7526 52.9972C69.1976 53.0867 69.6592 53.0421 70.0789 52.8689C70.4985 52.6958 70.8573 52.4019 71.1098 52.0246C71.3623 51.6474 71.497 51.2036 71.497 50.7497C71.4971 50.1438 71.2572 49.5626 70.83 49.133C70.4028 48.7034 69.8228 48.4604 69.217 48.4571Z" fill="white"/>
                <path d="M86.9721 44.4447C86.6321 44.4447 86.2996 44.3439 86.0169 44.155C85.7341 43.966 85.5137 43.6975 85.3836 43.3833C85.2534 43.0691 85.2194 42.7234 85.2857 42.3899C85.3521 42.0563 85.5158 41.7499 85.7563 41.5095C85.9968 41.269 86.3031 41.1052 86.6367 41.0389C86.9702 40.9726 87.3159 41.0066 87.6301 41.1367C87.9443 41.2669 88.2129 41.4873 88.4018 41.77C88.5907 42.0528 88.6916 42.3852 88.6916 42.7253C88.6916 43.1813 88.5104 43.6187 88.188 43.9411C87.8655 44.2636 87.4282 44.4447 86.9721 44.4447Z" fill="#F4BC4F"/>
                <path d="M86.6856 41.2765C86.9938 41.2765 87.2894 41.3989 87.5073 41.6168C87.7252 41.8348 87.8476 42.1303 87.8476 42.4385C87.8476 42.7467 87.7252 43.0423 87.5073 43.2602C87.2894 43.4781 86.9938 43.6006 86.6856 43.6006C86.3774 43.6006 86.0818 43.4781 85.8639 43.2602C85.646 43.0423 85.5236 42.7467 85.5236 42.4385C85.5236 42.1303 85.646 41.8348 85.8639 41.6168C86.0818 41.3989 86.3774 41.2765 86.6856 41.2765ZM86.6856 39.8594C86.1755 39.8594 85.6769 40.0106 85.2527 40.294C84.8286 40.5774 84.498 40.9803 84.3028 41.4515C84.1076 41.9228 84.0565 42.4414 84.156 42.9417C84.2555 43.442 84.5012 43.9016 84.8619 44.2623C85.2226 44.623 85.6821 44.8686 86.1824 44.9681C86.6827 45.0677 87.2013 45.0166 87.6726 44.8214C88.1439 44.6262 88.5467 44.2956 88.8301 43.8714C89.1135 43.4473 89.2648 42.9486 89.2648 42.4385C89.2648 41.7545 88.993 41.0985 88.5094 40.6148C88.0257 40.1311 87.3696 39.8594 86.6856 39.8594Z" fill="white"/>
                <path d="M117.078 42.2495C117.6 42.2495 118.022 41.8268 118.022 41.3054C118.022 40.784 117.6 40.3613 117.078 40.3613C116.557 40.3613 116.134 40.784 116.134 41.3054C116.134 41.8268 116.557 42.2495 117.078 42.2495Z" fill="#525375"/>
                <path d="M127.604 45.7857C128.088 45.7857 128.481 45.3927 128.481 44.908C128.481 44.4232 128.088 44.0303 127.604 44.0303C127.119 44.0303 126.726 44.4232 126.726 44.908C126.726 45.3927 127.119 45.7857 127.604 45.7857Z" fill="#525375"/>
                <path d="M117.079 41.316C119.321 41.0579 120.648 41.5926 121.445 42.12C122.574 42.8576 122.802 43.7242 124.027 44.3991C125.133 44.9582 126.392 45.1408 127.611 44.9191" stroke="#525375" stroke-miterlimit="10"/>
                <path d="M290.736 1H239.263C233.594 1 228.998 5.58306 228.998 11.2365V30.0373C228.998 35.6908 233.594 40.2738 239.263 40.2738H290.736C296.405 40.2738 301 35.6908 301 30.0373V11.2365C301 5.58306 296.405 1 290.736 1Z" fill="#D16978" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M235.823 10.3665C237.112 10.3665 238.157 9.32144 238.157 8.03235C238.157 6.74326 237.112 5.69824 235.823 5.69824C234.534 5.69824 233.489 6.74326 233.489 8.03235C233.489 9.32144 234.534 10.3665 235.823 10.3665Z" fill="#D16978"/>
                <path d="M248.423 29.7995H246.453V11.4833H250.705C251.906 11.3995 253.095 11.7716 254.035 12.5257C254.423 12.8985 254.726 13.3512 254.922 13.8525C255.118 14.3538 255.204 14.8919 255.172 15.4295V20.217C255.208 20.7559 255.126 21.2961 254.932 21.8001C254.738 22.3041 254.437 22.7598 254.05 23.1357C253.103 23.886 251.909 24.2527 250.705 24.1631H248.423V29.7995ZM253.202 20.217V15.4518C253.221 15.1447 253.173 14.8372 253.061 14.5506C252.949 14.2639 252.777 14.005 252.556 13.7914C252.037 13.3648 251.375 13.1519 250.705 13.1958H248.423V22.4953H250.705C252.37 22.4804 253.202 21.721 253.202 20.217Z" fill="white"/>
                <path d="M261.974 29.7995H259.98V11.4717H261.974V19.667H267.587V11.4717H269.581V29.7995H267.587V21.3434H261.974V29.7995Z" fill="white"/>
                <path d="M276.787 29.7995H274.817V11.4833H279.069C280.271 11.3995 281.46 11.7716 282.4 12.5257C282.787 12.8985 283.09 13.3512 283.286 13.8525C283.483 14.3538 283.568 14.8919 283.537 15.4295V20.217C283.572 20.7559 283.49 21.2961 283.296 21.8001C283.103 22.3041 282.802 22.7598 282.414 23.1357C281.467 23.886 280.274 24.2527 279.069 24.1631H276.787V29.7995ZM281.567 20.217V15.4518C281.585 15.1447 281.537 14.8372 281.425 14.5506C281.314 14.2639 281.141 14.005 280.92 13.7914C280.401 13.3648 279.739 13.1519 279.069 13.1958H276.787V22.4953H279.069C280.734 22.4804 281.567 21.721 281.567 20.217Z" fill="white"/>
                <path d="M223.981 25.2407C224.503 25.2407 224.925 24.818 224.925 24.2966C224.925 23.7752 224.503 23.3525 223.981 23.3525C223.46 23.3525 223.037 23.7752 223.037 24.2966C223.037 24.818 223.46 25.2407 223.981 25.2407Z" fill="#525375"/>
                <path d="M234.506 28.7808C234.991 28.7808 235.384 28.3878 235.384 27.9031C235.384 27.4184 234.991 27.0254 234.506 27.0254C234.022 27.0254 233.629 27.4184 233.629 27.9031C233.629 28.3878 234.022 28.7808 234.506 28.7808Z" fill="#525375"/>
                <path d="M223.981 24.2971C226.223 24.0426 227.551 24.5737 228.348 25.1047C229.476 25.8423 229.705 26.709 230.929 27.3801C232.035 27.9403 233.294 28.1241 234.514 27.9038" stroke="#525375" stroke-miterlimit="10"/>
                <path d="M276.309 67.6504H236.236C231.823 67.6504 228.245 71.2304 228.245 75.6465V124.929C228.245 129.346 231.823 132.926 236.236 132.926H276.309C280.723 132.926 284.301 129.346 284.301 124.929V75.6465C284.301 71.2304 280.723 67.6504 276.309 67.6504Z" fill="#5C5DB1" stroke="#525375" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M233.777 75.3952C234.999 75.3952 235.99 74.4045 235.99 73.1824C235.99 71.9604 234.999 70.9697 233.777 70.9697C232.555 70.9697 231.564 71.9604 231.564 73.1824C231.564 74.4045 232.555 75.3952 233.777 75.3952Z" fill="#D16978"/>
                <path d="M239.309 100.769V99.5003L247.413 94.5732L248.16 96.097L241.429 100.105L248.16 104.113L247.413 105.637L239.309 100.769Z" fill="white"/>
                <path d="M254.289 111.906H252.585L258.257 87.9346H259.961L254.289 111.906Z" fill="white"/>
                <path d="M273.606 99.4575V100.753L265.19 105.637L264.386 104.088L271.372 100.09L264.386 96.0929L265.166 94.5732L273.606 99.4575Z" fill="white"/>
                <path d="M232.586 82.8999C233.107 82.8999 233.53 82.4772 233.53 81.9558C233.53 81.4344 233.107 81.0117 232.586 81.0117C232.065 81.0117 231.642 81.4344 231.642 81.9558C231.642 82.4772 232.065 82.8999 232.586 82.8999Z" fill="#525375"/>
                <path d="M222.061 86.441C222.546 86.441 222.939 86.048 222.939 85.5633C222.939 85.0785 222.546 84.6855 222.061 84.6855C221.576 84.6855 221.183 85.0785 221.183 85.5633C221.183 86.048 221.576 86.441 222.061 86.441Z" fill="#525375"/>
                <path d="M232.586 81.956C230.344 81.7015 229.016 82.2363 228.22 82.7636C227.091 83.5012 226.862 84.3678 225.638 85.039C224.533 85.601 223.273 85.785 222.053 85.5627" stroke="#525375" stroke-miterlimit="10"/>
                <path d="M151.497 118.543C151.493 118.556 151.487 118.569 151.477 118.579C151.468 118.589 151.457 118.598 151.445 118.604C151.432 118.61 151.419 118.613 151.405 118.613C151.391 118.614 151.377 118.611 151.365 118.606C150.53 118.293 149.811 117.733 149.303 117.001C148.795 116.268 148.523 115.398 148.523 114.507C148.523 113.616 148.795 112.746 149.303 112.013C149.811 111.281 150.53 110.721 151.365 110.408C151.377 110.403 151.391 110.4 151.405 110.4C151.419 110.401 151.432 110.404 151.445 110.41C151.457 110.416 151.468 110.424 151.477 110.435C151.487 110.445 151.493 110.457 151.497 110.47L152.235 112.632C152.244 112.657 152.242 112.684 152.231 112.708C152.22 112.732 152.2 112.751 152.176 112.761C151.829 112.902 151.532 113.144 151.322 113.456C151.113 113.767 151.002 114.134 151.002 114.509C151.002 114.884 151.113 115.25 151.322 115.562C151.532 115.873 151.829 116.115 152.176 116.257C152.201 116.267 152.221 116.285 152.232 116.309C152.244 116.333 152.246 116.36 152.239 116.386L151.497 118.543Z" fill="#5C5DB1"/>
                <path d="M156.645 118.543C156.641 118.556 156.635 118.569 156.625 118.579C156.616 118.589 156.605 118.598 156.593 118.604C156.58 118.61 156.567 118.613 156.553 118.613C156.539 118.614 156.525 118.611 156.513 118.606C155.68 118.292 154.962 117.731 154.456 116.999C153.949 116.266 153.678 115.397 153.678 114.507C153.678 113.617 153.949 112.747 154.456 112.015C154.962 111.283 155.68 110.722 156.513 110.408C156.525 110.403 156.539 110.4 156.553 110.4C156.567 110.401 156.58 110.404 156.593 110.41C156.605 110.416 156.616 110.424 156.625 110.435C156.635 110.445 156.641 110.457 156.645 110.47L157.383 112.632C157.392 112.657 157.39 112.684 157.379 112.708C157.368 112.732 157.348 112.751 157.324 112.761C156.977 112.902 156.68 113.144 156.47 113.456C156.261 113.767 156.15 114.134 156.15 114.509C156.15 114.884 156.261 115.25 156.47 115.562C156.68 115.873 156.977 116.115 157.324 116.257C157.349 116.266 157.37 116.285 157.381 116.309C157.393 116.333 157.395 116.36 157.387 116.386L156.645 118.543Z" fill="#D16978"/>
                <path d="M162.602 116.272C162.262 116.131 161.97 115.894 161.762 115.59C161.555 115.286 161.44 114.928 161.433 114.56V110.504C161.433 110.49 161.431 110.476 161.426 110.464C161.421 110.451 161.413 110.439 161.403 110.43C161.394 110.42 161.382 110.412 161.369 110.407C161.357 110.402 161.343 110.4 161.329 110.4H159.043C159.029 110.4 159.015 110.402 159.003 110.407C158.99 110.412 158.978 110.42 158.969 110.43C158.959 110.439 158.951 110.451 158.946 110.464C158.941 110.476 158.939 110.49 158.94 110.504V114.523C158.94 115.413 159.211 116.281 159.716 117.012C160.221 117.744 160.937 118.305 161.768 118.621C161.781 118.626 161.795 118.628 161.808 118.628C161.822 118.628 161.836 118.624 161.848 118.619C161.861 118.613 161.872 118.604 161.881 118.594C161.89 118.583 161.897 118.571 161.901 118.558L162.661 116.401C162.665 116.388 162.667 116.375 162.667 116.362C162.667 116.349 162.664 116.336 162.658 116.324C162.653 116.312 162.645 116.301 162.635 116.292C162.625 116.283 162.614 116.276 162.602 116.272Z" fill="#F4BC4F"/>
            </svg>

        );
    }
}

export default WebDevImg;
