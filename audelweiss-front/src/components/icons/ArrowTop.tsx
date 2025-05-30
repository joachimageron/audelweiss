import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement> & {
    className?: string;
};

const ArrowTop = ({ ...props }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
            <polygon points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625" />
        </svg>
    );
};

export default ArrowTop;
