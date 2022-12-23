export default function Ellipse11(props) {
  return (
    <div>
      <div className="absolute opacity-[0.35] w-[1080px] h-[2123px] top-[990px] left-[calc(50%_-_540px_+_-180px)] [filter:blur(500px)]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1080 2123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.35" filter="url(#filter0_f_414_270)">
            <ellipse
              cx="39.1407"
              cy="1061.61"
              rx="561.848"
              ry="539.036"
              transform="rotate(-104.304 39.1407 1061.61)"
              fill="#043036"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_414_270"
              x="-1001.45"
              y="0.998047"
              width="2081.18"
              height="2121.22"
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
                stdDeviation="250"
                result="effect1_foregroundBlur_414_270"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
Ellipse11.defaultProps = {};
