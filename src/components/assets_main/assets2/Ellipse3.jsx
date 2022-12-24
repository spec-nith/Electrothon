export default function Ellipse3(props) {
  return (
    <div>
      <div className="left-0 top-0 absolute w-[428px] h-[926px] [filter:blur(321px)]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 428 926"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_414_377)">
            <ellipse
              cx="388.09"
              cy="537.151"
              rx="283.575"
              ry="281.013"
              transform="rotate(-30 388.09 537.151)"
              fill="#517189"
              fillOpacity="0.94"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_414_377"
              x="-215.895"
              y="-65.5504"
              width="1207.97"
              height="1205.4"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="160.5"
                result="effect1_foregroundBlur_414_377"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
Ellipse3.defaultProps = {};
