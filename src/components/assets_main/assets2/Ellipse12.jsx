export default function Ellipse12(props) {
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
          <g filter="url(#filter0_f_414_378)">
            <ellipse
              cx="119.965"
              cy="492.213"
              rx="229.198"
              ry="218.948"
              transform="rotate(-30 119.965 492.213)"
              fill="#E16913"
              fillOpacity="0.39"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_414_378"
              x="-427.756"
              y="-50.3749"
              width="1095.44"
              height="1085.18"
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
                result="effect1_foregroundBlur_414_378"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
Ellipse12.defaultProps = {};
