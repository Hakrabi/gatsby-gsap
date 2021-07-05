import React, {Component} from 'react';
import {TimelineLite} from "gsap/all";
import {gsap} from "gsap";

gsap.registerPlugin(TimelineLite)
class MobileImg extends Component {

    constructor(props) {
        super(props);

        this.line = []
        this.panel = []
    }

    componentDidMount() {
        this.props.anim.imgAnim = new TimelineLite()
            .from(this.panel[0], 0.3, {scale: 0, transformOrigin: "50% 50%"})
            .from(this.panel[1], 0.3, {scale: 0, transformOrigin: "0% 60%"})
            .from(this.panel[2], 0.3, {scale: 0, transformOrigin: "100% 60%"})
            .fromTo(this.line[1], 1, {drawSVG: "0%"}, {
                ease: "power1.inOut",
                drawSVG: "100%",
                stagger: 0.1
            })
            .fromTo(this.line[0], 1, {drawSVG: "100% 100%"}, {
                ease: "power1.inOut",
                drawSVG: "0% 100%",
                stagger: 0.1
            })
    }

    render() {
        return (
            <svg className="mb" width="191" height="112" fill="none" version="1.1" viewBox="0 0 191 112" xmlns="http://www.w3.org/2000/svg">
                <g ref={el => this.panel.push(el)}>
                    <rect x="66.67" y="1" width="58.548" height="102.9" rx="15" fill="#fff" stroke="#525375" stroke-miterlimit="10"/>
                    <path d="m114.01 1c-1.202 0-2.176 0.9745-2.176 2.1766 0 2.4042-1.949 4.3532-4.354 4.3532h-23.05c-2.4042 0-4.3532-1.949-4.3532-4.3532 0-1.2021-0.9745-2.1766-2.1766-2.1766h-1.1745c-5.5522 0-10.053 4.501-10.053 10.053v78.737c0 8.2843 6.7158 15 15 15h28.548c8.285 0 15-6.7154 15-15v-78.75c0-5.5454-4.495-10.041-10.04-10.041z" fill="#fff" stroke="#525375" stroke-miterlimit="10"/>
                    <path d="m95.755 22.293h7.475c0.196-0.0116 0.393 0.0136 0.579 0.0741 0.185 0.0605 0.357 0.1551 0.504 0.2784 0.147 0.1234 0.267 0.273 0.354 0.4404 0.086 0.1673 0.136 0.3491 0.148 0.535-0.012 0.1858-0.062 0.3676-0.148 0.535-0.087 0.1674-0.207 0.317-0.354 0.4403s-0.319 0.218-0.504 0.2785c-0.186 0.0605-0.383 0.0857-0.579 0.0741h-7.475c-0.1961 0.0116-0.3927-0.0136-0.5786-0.0741-0.1858-0.0605-0.3572-0.1552-0.5044-0.2785-0.1473-0.1233-0.2674-0.2729-0.3535-0.4403-0.0862-0.1674-0.1366-0.3492-0.1486-0.535 0.012-0.1859 0.0624-0.3677 0.1486-0.535 0.0861-0.1674 0.2062-0.317 0.3535-0.4404 0.1472-0.1233 0.3186-0.2179 0.5044-0.2784 0.1859-0.0605 0.3825-0.0857 0.5786-0.0741z" fill="#f4bc4f"/>
                    <path d="m95.755 48.019h7.475c0.196-0.0115 0.393 0.0137 0.579 0.0742 0.185 0.0605 0.357 0.1551 0.504 0.2784s0.267 0.273 0.354 0.4403c0.086 0.1674 0.136 0.3492 0.148 0.535-0.012 0.1859-0.062 0.3677-0.148 0.5351-0.087 0.1673-0.207 0.3169-0.354 0.4403-0.147 0.1233-0.319 0.2179-0.504 0.2784-0.186 0.0605-0.383 0.0857-0.579 0.0742h-7.475c-0.1961 0.0115-0.3927-0.0137-0.5786-0.0742-0.1858-0.0605-0.3572-0.1551-0.5044-0.2784-0.1473-0.1234-0.2674-0.273-0.3535-0.4403-0.0862-0.1674-0.1366-0.3492-0.1486-0.5351 0.012-0.1858 0.0624-0.3676 0.1486-0.535 0.0861-0.1673 0.2062-0.317 0.3535-0.4403 0.1472-0.1233 0.3186-0.2179 0.5044-0.2784 0.1859-0.0605 0.3825-0.0857 0.5786-0.0742z" fill="#f4bc4f"/>
                    <path d="m95.755 74.632h7.475c0.196-0.0115 0.393 0.0137 0.579 0.0742 0.185 0.0605 0.357 0.1551 0.504 0.2784s0.267 0.273 0.354 0.4403c0.086 0.1674 0.136 0.3492 0.148 0.5351-0.012 0.1858-0.062 0.3676-0.148 0.535-0.087 0.1673-0.207 0.317-0.354 0.4403s-0.319 0.2179-0.504 0.2784c-0.186 0.0605-0.383 0.0857-0.579 0.0742h-7.475c-0.1961 0.0115-0.3927-0.0137-0.5786-0.0742-0.1858-0.0605-0.3572-0.1551-0.5044-0.2784-0.1473-0.1233-0.2674-0.273-0.3535-0.4403-0.0862-0.1674-0.1366-0.3492-0.1486-0.535 0.012-0.1859 0.0624-0.3677 0.1486-0.5351 0.0861-0.1673 0.2062-0.317 0.3535-0.4403 0.1472-0.1233 0.3186-0.2179 0.5044-0.2784 0.1859-0.0605 0.3825-0.0857 0.5786-0.0742z" fill="#f4bc4f"/>
                    <path d="m123.12 78.695c0.462 0 0.837-0.3747 0.837-0.8369 0-0.4621-0.375-0.8368-0.837-0.8368s-0.837 0.3747-0.837 0.8368c0 0.4622 0.375 0.8369 0.837 0.8369z" fill="#525375"/>
                    <path d="m68.229 44.502c0.4971 0 0.9001-0.403 0.9001-0.9002 0-0.4971-0.403-0.9001-0.9001-0.9001-0.4972 0-0.9002 0.403-0.9002 0.9001 0 0.4972 0.403 0.9002 0.9002 0.9002z" fill="#525375"/>
                    <path d="m107.16 22.293h6.852c0.18-0.0116 0.36 0.0136 0.531 0.0741 0.17 0.0605 0.327 0.1551 0.462 0.2784 0.135 0.1234 0.245 0.273 0.324 0.4404 0.079 0.1673 0.125 0.3491 0.136 0.535-0.011 0.1858-0.057 0.3676-0.136 0.535s-0.189 0.317-0.324 0.4403-0.292 0.218-0.462 0.2785c-0.171 0.0605-0.351 0.0857-0.531 0.0741h-6.852c-0.18 0.0116-0.36-0.0136-0.53-0.0741-0.171-0.0605-0.328-0.1552-0.463-0.2785s-0.245-0.2729-0.324-0.4403-0.125-0.3492-0.136-0.535c0.03-0.3724 0.197-0.7186 0.468-0.9661s0.624-0.3772 0.985-0.3618z" fill="#f4bc4f"/>
                    <path d="m107.16 48.019h6.852c0.18-0.0115 0.36 0.0137 0.531 0.0742 0.17 0.0605 0.327 0.1551 0.462 0.2784s0.245 0.273 0.324 0.4403c0.079 0.1674 0.125 0.3492 0.136 0.535-0.011 0.1859-0.057 0.3677-0.136 0.5351-0.079 0.1673-0.189 0.3169-0.324 0.4403-0.135 0.1233-0.292 0.2179-0.462 0.2784-0.171 0.0605-0.351 0.0857-0.531 0.0742h-6.852c-0.18 0.0115-0.36-0.0137-0.53-0.0742-0.171-0.0605-0.328-0.1551-0.463-0.2784-0.135-0.1234-0.245-0.273-0.324-0.4403-0.079-0.1674-0.125-0.3492-0.136-0.5351 0.03-0.3724 0.197-0.7186 0.468-0.9661s0.624-0.3771 0.985-0.3618z" fill="#f4bc4f"/>
                    <path d="m107.16 74.632h6.852c0.18-0.0115 0.36 0.0137 0.531 0.0742 0.17 0.0605 0.327 0.1551 0.462 0.2784s0.245 0.273 0.324 0.4403c0.079 0.1674 0.125 0.3492 0.136 0.5351-0.011 0.1858-0.057 0.3676-0.136 0.535-0.079 0.1673-0.189 0.317-0.324 0.4403s-0.292 0.2179-0.462 0.2784c-0.171 0.0605-0.351 0.0857-0.531 0.0742h-6.852c-0.18 0.0115-0.36-0.0137-0.53-0.0742-0.171-0.0605-0.328-0.1551-0.463-0.2784s-0.245-0.273-0.324-0.4403c-0.079-0.1674-0.125-0.3492-0.136-0.535 0.03-0.3725 0.197-0.7187 0.468-0.9662s0.624-0.3771 0.985-0.3618z" fill="#f4bc4f"/>
                    <path d="m95.51 27.613h18.61c0.176-5e-4 0.35 0.0336 0.513 0.1002s0.311 0.1645 0.436 0.288c0.124 0.1235 0.223 0.2702 0.29 0.4316 0.067 0.1615 0.102 0.3345 0.101 0.5091 1e-3 0.175-0.033 0.3483-0.1 0.5102-0.067 0.1618-0.166 0.3089-0.29 0.4327-0.125 0.1239-0.273 0.2221-0.436 0.2889s-0.338 0.101-0.514 0.1006h-18.61c-0.1765 4e-4 -0.3513-0.0338-0.5144-0.1006-0.163-0.0668-0.3111-0.165-0.4358-0.2889-0.1246-0.1238-0.2232-0.2709-0.2902-0.4327-0.067-0.1619-0.1011-0.3352-0.1002-0.5102-4e-4 -0.1746 0.034-0.3476 0.1012-0.5091 0.0672-0.1614 0.1659-0.3081 0.2905-0.4316 0.1245-0.1235 0.2725-0.2214 0.4353-0.288 0.1629-0.0666 0.3374-0.1007 0.5136-0.1002z" fill="#f4bc4f"/>
                    <path d="m95.51 53.339h18.61c0.176-6e-4 0.35 0.0448 0.513 0.1336 0.163 0.0889 0.311 0.2194 0.436 0.384 0.124 0.1647 0.223 0.3602 0.29 0.5755 0.067 0.2152 0.102 0.4459 0.101 0.6788 1e-3 0.2332-0.033 0.4644-0.1 0.6802s-0.166 0.4119-0.29 0.577c-0.125 0.1651-0.273 0.296-0.436 0.3852-0.163 0.0891-0.338 0.1347-0.514 0.134h-18.61c-0.1765 7e-4 -0.3513-0.0449-0.5144-0.134-0.163-0.0892-0.3111-0.2201-0.4358-0.3852-0.1246-0.1651-0.2232-0.3612-0.2902-0.577s-0.1011-0.447-0.1002-0.6802c-4e-4 -0.2329 0.034-0.4636 0.1012-0.6788 0.0672-0.2153 0.1659-0.4108 0.2905-0.5755 0.1245-0.1646 0.2725-0.2951 0.4353-0.384 0.1629-0.0888 0.3374-0.1342 0.5136-0.1336z" fill="#f4bc4f"/>
                    <path d="m95.51 79.951h18.61c0.176-5e-4 0.35 0.0336 0.513 0.1002s0.311 0.1645 0.436 0.288c0.124 0.1235 0.223 0.2702 0.29 0.4316 0.067 0.1615 0.102 0.3345 0.101 0.5091 1e-3 0.1749-0.033 0.3483-0.1 0.5102-0.067 0.1618-0.166 0.3089-0.29 0.4327-0.125 0.1239-0.273 0.2221-0.436 0.2889s-0.338 0.101-0.514 0.1006h-18.61c-0.1765 4e-4 -0.3513-0.0338-0.5144-0.1006-0.163-0.0668-0.3111-0.165-0.4358-0.2889-0.1246-0.1238-0.2232-0.2709-0.2902-0.4327-0.067-0.1619-0.1011-0.3353-0.1002-0.5102-4e-4 -0.1746 0.034-0.3476 0.1012-0.5091 0.0672-0.1614 0.1659-0.3081 0.2905-0.4316 0.1245-0.1235 0.2725-0.2214 0.4353-0.288 0.1629-0.0666 0.3374-0.1007 0.5136-0.1002z" fill="#f4bc4f"/>
                    <path d="m95.51 33.822h18.61c0.176-5e-4 0.35 0.0336 0.513 0.1003s0.311 0.1647 0.436 0.2884c0.124 0.1237 0.223 0.2705 0.29 0.4322 0.067 0.1616 0.102 0.3348 0.101 0.5097 1e-3 0.1749-0.034 0.3481-0.101 0.5098-0.067 0.1616-0.166 0.3085-0.29 0.4321-0.125 0.1237-0.273 0.2217-0.436 0.2884s-0.337 0.1008-0.513 0.1004h-18.61c-0.1762 4e-4 -0.3507-0.0337-0.5136-0.1004-0.1628-0.0667-0.3108-0.1647-0.4353-0.2884-0.1246-0.1236-0.2233-0.2705-0.2906-0.4321-0.0672-0.1617-0.1015-0.3349-0.1011-0.5098-4e-4 -0.1749 0.0339-0.3481 0.1011-0.5097 0.0673-0.1617 0.166-0.3085 0.2906-0.4322 0.1245-0.1237 0.2725-0.2217 0.4353-0.2884 0.1629-0.0667 0.3374-0.1008 0.5136-0.1003z" fill="#f4bc4f"/>
                    <path d="m95.51 59.549h18.61c0.176-4e-4 0.35 0.0337 0.513 0.1004s0.311 0.1647 0.436 0.2884c0.124 0.1236 0.223 0.2705 0.29 0.4321 0.067 0.1617 0.102 0.3349 0.101 0.5098 1e-3 0.1748-0.034 0.3481-0.101 0.5097-0.067 0.1617-0.166 0.3085-0.29 0.4322-0.125 0.1236-0.273 0.2216-0.436 0.2883-0.163 0.0668-0.337 0.1009-0.513 0.1004h-18.61c-0.1762 5e-4 -0.3507-0.0336-0.5136-0.1004-0.1628-0.0667-0.3108-0.1647-0.4353-0.2883-0.1246-0.1237-0.2233-0.2705-0.2906-0.4322-0.0672-0.1616-0.1015-0.3349-0.1011-0.5097-4e-4 -0.1749 0.0339-0.3481 0.1011-0.5098 0.0673-0.1616 0.166-0.3085 0.2906-0.4321 0.1245-0.1237 0.2725-0.2217 0.4353-0.2884 0.1629-0.0667 0.3374-0.1008 0.5136-0.1004z" fill="#f4bc4f"/>
                    <path d="m95.51 85.274h18.61c0.176-4e-4 0.35 0.0337 0.513 0.1004s0.311 0.1647 0.436 0.2883c0.124 0.1237 0.223 0.2706 0.29 0.4322 0.067 0.1617 0.102 0.3349 0.101 0.5098 1e-3 0.1748-0.034 0.3481-0.101 0.5097s-0.166 0.3085-0.29 0.4322c-0.125 0.1236-0.273 0.2216-0.436 0.2883s-0.337 0.1009-0.513 0.1004h-18.61c-0.1762 5e-4 -0.3507-0.0337-0.5136-0.1004-0.1628-0.0667-0.3108-0.1647-0.4353-0.2883-0.1246-0.1237-0.2233-0.2706-0.2906-0.4322-0.0672-0.1616-0.1015-0.3349-0.1011-0.5097-4e-4 -0.1749 0.0339-0.3481 0.1011-0.5098 0.0673-0.1616 0.166-0.3085 0.2906-0.4322 0.1245-0.1236 0.2725-0.2216 0.4353-0.2883 0.1629-0.0667 0.3374-0.1008 0.5136-0.1004z" fill="#f4bc4f"/>
                    <path d="m80.42 36.484c3.6745 0 6.6533-3.1773 6.6533-7.0968 0-3.9194-2.9788-7.0968-6.6533-7.0968-3.6744 0-6.6532 3.1774-6.6532 7.0968 0 3.9195 2.9788 7.0968 6.6532 7.0968z" fill="#f4bc4f"/>
                    <path d="m87.073 74.629h-13.306v13.306h13.306z" fill="#5c5db1"/>
                    <path d="m80.42 48.903-6.6532 12.419h13.306z" fill="#d16978"/>
                </g>
                <g ref={el => this.panel.push(el)}>
                    <rect x="1.0244" y="8.0967" width="59.436" height="102.9" rx="15" fill="#fff" stroke="#525375" stroke-miterlimit="10"/>
                    <path d="m49.027 8.0967c-1.1919 0-2.158 0.96617-2.158 2.158 0 2.3836-1.9324 4.316-4.316 4.316h-23.606c-2.3836 0-4.316-1.9324-4.316-4.316 0-1.1918-0.9661-2.158-2.1579-2.158h-1.2439c-5.6363 0-10.205 4.5691-10.205 10.206v77.698c0 8.2841 6.7157 15 15 15h29.436c8.2843 0 15-6.716 15-15v-77.71c0-5.6294-4.5635-10.193-10.193-10.193h-1.2396z" fill="#fff" stroke="#525375" stroke-miterlimit="10"/>
                    <path d="m44.936 87.049h-27.5c-2.6946 0-4.8791 2.1844-4.8791 4.8791 0 2.6946 2.1845 4.879 4.8791 4.879h27.5c2.6946 0 4.879-2.1844 4.879-4.879 0-2.6947-2.1844-4.8791-4.879-4.8791z" fill="#D16978"/>
                    <path d="m30.742 57.774c8.5737 0 15.524-6.9504 15.524-15.524s-6.9505-15.524-15.524-15.524c-8.5738 0-15.524 6.9504-15.524 15.524s6.9504 15.524 15.524 15.524z" fill="#5C5DB1"/>
                    <path d="m15.293 66.649h8.7209c0.2288-0.0155 0.4582 0.0181 0.675 0.0988s0.4168 0.2068 0.5885 0.3713c0.1718 0.1644 0.3119 0.3639 0.4124 0.587 0.1005 0.2232 0.1594 0.4656 0.1733 0.7134-0.0139 0.2478-0.0728 0.4902-0.1733 0.7134-0.1005 0.2231-0.2406 0.4226-0.4124 0.587-0.1717 0.1645-0.3717 0.2906-0.5885 0.3713s-0.4462 0.1143-0.675 0.0989h-8.7209c-0.2288 0.0154-0.4582-0.0182-0.675-0.0989s-0.4168-0.2068-0.5885-0.3713c-0.1718-0.1644-0.3119-0.3639-0.4124-0.587-0.1005-0.2232-0.1594-0.4656-0.1733-0.7134 0.0139-0.2478 0.0728-0.4902 0.1733-0.7134 0.1005-0.2231 0.2406-0.4226 0.4124-0.587 0.1717-0.1645 0.3717-0.2906 0.5885-0.3713s0.4462-0.1143 0.675-0.0988z" fill="#F4BC4F"/>
                    <path d="m58.195 47.878c0.4621 0 0.8368-0.3747 0.8368-0.8368 0-0.4622-0.3747-0.8369-0.8368-0.8369-0.4622 0-0.8369 0.3747-0.8369 0.8369 0 0.4621 0.3747 0.8368 0.8369 0.8368z" fill="#525375"/>
                    <path d="m29.45 66.649h16.78c0.2242-0.0155 0.4489 0.0181 0.6613 0.0988 0.2125 0.0807 0.4084 0.2068 0.5767 0.3713 0.1683 0.1644 0.3055 0.3639 0.404 0.587 0.0985 0.2232 0.1562 0.4656 0.1698 0.7134-0.0136 0.2478-0.0713 0.4902-0.1698 0.7134-0.0985 0.2231-0.2357 0.4226-0.404 0.587-0.1683 0.1645-0.3642 0.2906-0.5767 0.3713-0.2124 0.0807-0.4371 0.1143-0.6613 0.0989h-16.78c-0.2242 0.0154-0.4489-0.0182-0.6613-0.0989s-0.4084-0.2068-0.5767-0.3713c-0.1683-0.1644-0.3055-0.3639-0.404-0.587-0.0985-0.2232-0.1562-0.4656-0.1698-0.7134 0.0368-0.4966 0.246-0.9581 0.5836-1.2882 0.3377-0.33 0.7778-0.5028 1.2282-0.4823z" fill="#F4BC4F"/>
                    <path d="m15.089 72.854h31.306c0.2162-6e-4 0.4305 0.0448 0.6304 0.1336 0.1999 0.0889 0.3815 0.2194 0.5345 0.384 0.1529 0.1647 0.2741 0.3603 0.3566 0.5755 0.0825 0.2153 0.1247 0.446 0.1241 0.6788 0.0011 0.2333-0.0406 0.4644-0.1229 0.6802-0.0822 0.2158-0.2034 0.4119-0.3563 0.577-0.153 0.1652-0.3348 0.2961-0.535 0.3852s-0.4148 0.1347-0.6314 0.1341h-31.306c-0.2166 6e-4 -0.4312-0.045-0.6314-0.1341s-0.382-0.22-0.535-0.3852c-0.1529-0.1651-0.2741-0.3612-0.3563-0.577-0.0823-0.2158-0.124-0.4469-0.1229-0.6802-6e-4 -0.2328 0.0416-0.4635 0.1241-0.6788 0.0825-0.2152 0.2037-0.4108 0.3566-0.5755 0.153-0.1646 0.3346-0.2951 0.5345-0.384 0.1999-0.0888 0.4142-0.1342 0.6304-0.1336z" fill="#F4BC4F"/>
                </g>
                <g ref={el => this.panel.push(el)}>
                    <rect x="130.54" y="8.0967" width="59.436" height="102.9" rx="15" fill="#fff" stroke="#525375" stroke-miterlimit="10"/>
                    <path d="m178.54 8.0967c-1.192 0-2.158 0.96617-2.158 2.158 0 2.3836-1.932 4.316-4.316 4.316h-23.606c-2.383 0-4.316-1.9324-4.316-4.316 0-1.1918-0.966-2.158-2.158-2.158h-1.243c-5.637 0-10.206 4.5691-10.206 10.206v77.698c0 8.2841 6.716 15 15 15h29.435c8.285 0 15-6.716 15-15v-77.71c0-5.6294-4.563-10.193-10.192-10.193h-1.24z" fill="#fff" stroke="#525375" stroke-miterlimit="10"/>
                    <path d="m133.15 75.319c0.497 0 0.9-0.403 0.9-0.9002 0-0.4971-0.403-0.9001-0.9-0.9001s-0.9 0.403-0.9 0.9001c0 0.4972 0.403 0.9002 0.9 0.9002z" fill="#525375"/>
                    <path d="m162.99 63.097h12.278c0.184-5e-4 0.367 0.0336 0.537 0.1002s0.325 0.1645 0.455 0.288 0.234 0.2702 0.304 0.4316c0.07 0.1615 0.106 0.3345 0.105 0.5091 1e-3 0.1749-0.034 0.3483-0.104 0.5102-0.07 0.1618-0.173 0.3089-0.304 0.4327-0.13 0.1239-0.285 0.2221-0.455 0.2889-0.171 0.0668-0.353 0.101-0.538 0.1006h-12.278c-0.184 4e-4 -0.367-0.0338-0.537-0.1006-0.171-0.0668-0.326-0.165-0.456-0.2889-0.13-0.1238-0.233-0.2709-0.303-0.4327-0.07-0.1619-0.106-0.3353-0.105-0.5102-1e-3 -0.1746 0.035-0.3476 0.106-0.5091 0.07-0.1614 0.173-0.3081 0.303-0.4316 0.131-0.1235 0.285-0.2214 0.455-0.288 0.171-0.0666 0.353-0.1007 0.537-0.1002z" fill="#F4BC4F"/>
                    <path d="m162.99 99.468h12.278c0.184-5e-4 0.367 0.0336 0.537 0.1002s0.325 0.1645 0.455 0.288 0.234 0.27 0.304 0.432c0.07 0.161 0.106 0.334 0.105 0.509 1e-3 0.175-0.034 0.348-0.104 0.51s-0.173 0.309-0.304 0.433c-0.13 0.123-0.285 0.222-0.455 0.288-0.171 0.067-0.353 0.102-0.538 0.101h-12.278c-0.184 1e-3 -0.367-0.034-0.537-0.101-0.171-0.066-0.326-0.165-0.456-0.288-0.13-0.124-0.233-0.271-0.303-0.433s-0.106-0.335-0.105-0.51c-1e-3 -0.175 0.035-0.348 0.106-0.509 0.07-0.162 0.173-0.3085 0.303-0.432 0.131-0.1235 0.285-0.2214 0.455-0.288 0.171-0.0666 0.353-0.1007 0.537-0.1002z" fill="#F4BC4F"/>
                    <path d="m146.14 63.097h12.278c0.184-5e-4 0.366 0.0336 0.536 0.1002 0.171 0.0666 0.325 0.1645 0.456 0.288 0.13 0.1235 0.233 0.2702 0.303 0.4316 0.071 0.1615 0.106 0.3345 0.106 0.5091 1e-3 0.1749-0.035 0.3483-0.105 0.5102-0.07 0.1618-0.173 0.3089-0.303 0.4327-0.13 0.1239-0.285 0.2221-0.456 0.2889-0.17 0.0668-0.353 0.101-0.537 0.1006h-12.278c-0.185 4e-4 -0.367-0.0338-0.538-0.1006-0.17-0.0668-0.325-0.165-0.455-0.2889-0.131-0.1238-0.234-0.2709-0.304-0.4327-0.07-0.1619-0.106-0.3353-0.105-0.5102 0-0.1746 0.036-0.3476 0.106-0.5091 0.07-0.1614 0.174-0.3081 0.304-0.4316s0.285-0.2214 0.455-0.288 0.353-0.1007 0.537-0.1002z" fill="#F4BC4F"/>
                    <path d="m146.14 99.468h12.278c0.184-5e-4 0.366 0.0336 0.536 0.1002 0.171 0.0666 0.325 0.1645 0.456 0.288 0.13 0.1235 0.233 0.27 0.303 0.432 0.071 0.161 0.106 0.334 0.106 0.509 1e-3 0.175-0.035 0.348-0.105 0.51s-0.173 0.309-0.303 0.433c-0.13 0.123-0.285 0.222-0.456 0.288-0.17 0.067-0.353 0.102-0.537 0.101h-12.278c-0.185 1e-3 -0.367-0.034-0.538-0.101-0.17-0.066-0.325-0.165-0.455-0.288-0.131-0.124-0.234-0.271-0.304-0.433s-0.106-0.335-0.105-0.51c0-0.175 0.036-0.348 0.106-0.509 0.07-0.162 0.174-0.3085 0.304-0.432s0.285-0.2214 0.455-0.288 0.353-0.1007 0.537-0.1002z" fill="#F4BC4F"/>
                    <path d="m146.14 85.274h12.278c0.184-4e-4 0.366 0.0336 0.536 0.1003 0.171 0.0666 0.325 0.1645 0.456 0.2879 0.13 0.1235 0.233 0.2702 0.303 0.4317 0.071 0.1614 0.106 0.3344 0.106 0.5091 1e-3 0.1749-0.035 0.3483-0.105 0.5101s-0.173 0.3089-0.303 0.4328c-0.13 0.1238-0.285 0.222-0.456 0.2888-0.17 0.0669-0.353 0.1011-0.537 0.1006h-12.278c-0.185 5e-4 -0.367-0.0337-0.538-0.1006-0.17-0.0668-0.325-0.165-0.455-0.2888-0.131-0.1239-0.234-0.271-0.304-0.4328s-0.106-0.3352-0.105-0.5101c0-0.1747 0.036-0.3477 0.106-0.5091 0.07-0.1615 0.174-0.3082 0.304-0.4317 0.13-0.1234 0.285-0.2213 0.455-0.2879 0.17-0.0667 0.353-0.1007 0.537-0.1003z" fill="#F4BC4F"/>
                    <path d="m146.12 57.774h29.164c0.182-4e-4 0.363 0.0337 0.531 0.1004s0.321 0.1647 0.45 0.2883c0.129 0.1237 0.231 0.2706 0.3 0.4322 0.07 0.1617 0.105 0.3349 0.105 0.5098 0 0.1748-0.035 0.3481-0.105 0.5097-0.069 0.1616-0.171 0.3085-0.3 0.4322-0.129 0.1236-0.282 0.2216-0.45 0.2883s-0.349 0.1009-0.531 0.1004h-29.164c-0.182 5e-4 -0.363-0.0337-0.531-0.1004s-0.321-0.1647-0.45-0.2883c-0.129-0.1237-0.231-0.2706-0.3-0.4322-0.07-0.1616-0.105-0.3349-0.105-0.5097 0-0.1749 0.035-0.3481 0.105-0.5098 0.069-0.1616 0.171-0.3085 0.3-0.4322 0.129-0.1236 0.282-0.2216 0.45-0.2883s0.349-0.1008 0.531-0.1004z" fill="#F4BC4F"/>
                    <path d="m146.12 68.419h29.164c0.182-4e-4 0.363 0.0337 0.531 0.1004s0.321 0.1647 0.45 0.2884c0.129 0.1236 0.231 0.2705 0.3 0.4321 0.07 0.1617 0.105 0.3349 0.105 0.5098s-0.035 0.3481-0.105 0.5097c-0.069 0.1617-0.171 0.3086-0.3 0.4322-0.129 0.1237-0.282 0.2216-0.45 0.2884-0.168 0.0667-0.349 0.1008-0.531 0.1003h-29.164c-0.182 5e-4 -0.363-0.0336-0.531-0.1003-0.168-0.0668-0.321-0.1647-0.45-0.2884-0.129-0.1236-0.231-0.2705-0.3-0.4322-0.07-0.1616-0.105-0.3348-0.105-0.5097s0.035-0.3481 0.105-0.5098c0.069-0.1616 0.171-0.3085 0.3-0.4321 0.129-0.1237 0.282-0.2217 0.45-0.2884s0.349-0.1008 0.531-0.1004z" fill="#F4BC4F"/>
                    <path d="m146.12 73.742h29.164c0.182-5e-4 0.363 0.0336 0.531 0.1004 0.168 0.0667 0.321 0.1647 0.45 0.2883 0.129 0.1237 0.231 0.2705 0.3 0.4322 0.07 0.1616 0.105 0.3349 0.105 0.5097 0 0.1749-0.035 0.3481-0.105 0.5098-0.069 0.1616-0.171 0.3085-0.3 0.4321-0.129 0.1237-0.282 0.2217-0.45 0.2884s-0.349 0.1008-0.531 0.1004h-29.164c-0.182 4e-4 -0.363-0.0337-0.531-0.1004s-0.321-0.1647-0.45-0.2884c-0.129-0.1236-0.231-0.2705-0.3-0.4321-0.07-0.1617-0.105-0.3349-0.105-0.5098 0-0.1748 0.035-0.3481 0.105-0.5097 0.069-0.1617 0.171-0.3085 0.3-0.4322 0.129-0.1236 0.282-0.2216 0.45-0.2883 0.168-0.0668 0.349-0.1009 0.531-0.1004z" fill="#F4BC4F"/>
                    <path d="m146.12 79.951h29.164c0.182-5e-4 0.363 0.0336 0.531 0.1003 0.168 0.0668 0.321 0.1648 0.45 0.2884 0.129 0.1237 0.231 0.2705 0.3 0.4322 0.07 0.1616 0.105 0.3348 0.105 0.5097s-0.035 0.3481-0.105 0.5098c-0.069 0.1616-0.171 0.3085-0.3 0.4321-0.129 0.1237-0.282 0.2217-0.45 0.2884s-0.349 0.1008-0.531 0.1004h-29.164c-0.182 4e-4 -0.363-0.0337-0.531-0.1004s-0.321-0.1647-0.45-0.2884c-0.129-0.1236-0.231-0.2705-0.3-0.4321-0.07-0.1617-0.105-0.3349-0.105-0.5098s0.035-0.3481 0.105-0.5097c0.069-0.1617 0.171-0.3085 0.3-0.4322 0.129-0.1236 0.282-0.2216 0.45-0.2884 0.168-0.0667 0.349-0.1008 0.531-0.1003z" fill="#F4BC4F"/>
                    <path d="m146.12 94.146h29.164c0.182-6e-4 0.363 0.0449 0.531 0.1338 0.168 0.089 0.321 0.2197 0.45 0.3845 0.129 0.1649 0.231 0.3607 0.3 0.5762 0.07 0.2156 0.105 0.4465 0.105 0.6797s-0.035 0.4641-0.105 0.6797c-0.069 0.2155-0.171 0.4113-0.3 0.5762s-0.282 0.2955-0.45 0.3845c-0.168 0.0889-0.349 0.1344-0.531 0.1338h-29.164c-0.182 6e-4 -0.363-0.0449-0.531-0.1338-0.168-0.089-0.321-0.2196-0.45-0.3845s-0.231-0.3607-0.3-0.5762c-0.07-0.2156-0.105-0.4465-0.105-0.6797s0.035-0.4641 0.105-0.6797c0.069-0.2155 0.171-0.4113 0.3-0.5762 0.129-0.1648 0.282-0.2955 0.45-0.3845 0.168-0.0889 0.349-0.1344 0.531-0.1338z" fill="#F4BC4F"/>
                    <path d="m173.12 24.951h-25.725v25.726h25.725v-25.726z" fill="#D16978"/>
                </g>

                <path ref={el => this.line.push(el)} d="m133.15 74.419c-2.138-0.2427-3.404 0.2672-4.163 0.77-1.076 0.7033-1.294 1.5296-2.462 2.1695-1.054 0.5351-2.254 0.7104-3.418 0.4993" stroke="#525375" stroke-miterlimit="10"/>
                <path ref={el => this.line.push(el)} d="m68.231 43.601c-2.1379-0.2426-3.4037 0.2672-4.1632 0.77-1.076 0.7033-1.294 1.5296-2.4614 2.1695-1.0542 0.5351-2.2545 0.7105-3.4177 0.4993" stroke="#525375" stroke-miterlimit="10"/>
            </svg>


        );
    }
}

export default MobileImg;