import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement> & {
  className?: string;
};

const ArrowRight = ({ ...props }: Props) => {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.996 511.996" {...props}>
      <path
        d="M508.245,246.953L363.435,102.133c-5.001-5.001-13.099-5.001-18.099,0c-5.001,5-5.001,13.099,0,18.099l122.965,122.965
			H12.8c-7.074,0-12.8,5.726-12.8,12.8c0,7.074,5.726,12.8,12.8,12.8h455.492L345.327,391.763c-5.001,5-5.001,13.099,0,18.099
			c5.009,5.001,13.099,5.001,18.108,0l144.811-144.811C513.246,260.051,513.246,251.953,508.245,246.953z"
      />
    </svg>
  );
};

export default ArrowRight;
