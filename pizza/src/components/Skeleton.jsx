import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="134" cy="136" r="125" />
        <rect x="-2" y="285" rx="9" ry="9" width="280" height="33" />
        <rect x="144" y="316" rx="0" ry="0" width="22" height="0" />
        <rect x="1" y="326" rx="0" ry="0" width="280" height="88" />
        <rect x="2" y="427" rx="10" ry="10" width="95" height="30" />
        <rect x="126" y="420" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton
