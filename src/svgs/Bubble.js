export const Bubble = ({
    text,
    onClick,
    fill = "white",
    textColor = "white",
}) => {
    return (
        <svg
            width="118"
            height="118"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="30"
                cy="30"
                r="30"
                fill={fill}
                onClick={() => onClick(text)}
                fillOpacity={fill === "white" ? "0.5" : "1"}
                style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            />
            <path
                d="M13 11.5C15 8.49997 21.5 1.49997 36 4.49997C52.5 11.4999 51.5 23 50.5 24C49.5 25 47.5 27.5 43.5 22C39.5 16.5 35.5 15 31.5 14C27.5 13 23 15 18.5 17C14 19 11 14.5 13 11.5Z"
                fill={fill}
                fillOpacity={fill === "white" ? "0.5" : "1"}
            />
            <text
                x="40%"
                y="45%"
                textAnchor="middle"
                stroke={textColor}
                strokeWidth="2px"
                letterSpacing="1"
                onClick={() => onClick(text)}
                cursor="pointer"
            >
                {text}
            </text>
        </svg>
    );
};
