export default function Archive({ fill = "#ffffff", width = "24", height = "24", className = "" }: { fill?: string, width?: string, height?: string, className?: string }) {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_735_17461)">
                <path d="M21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0ZM8.856 16.2045L15 10.0605V14.2125C15 14.4114 15.079 14.6022 15.2197 14.7428C15.3603 14.8835 15.5511 14.9625 15.75 14.9625C15.9489 14.9625 16.1397 14.8835 16.2803 14.7428C16.421 14.6022 16.5 14.4114 16.5 14.2125V8.25C16.5 8.05109 16.421 7.86032 16.2803 7.71967C16.1397 7.57902 15.9489 7.5 15.75 7.5H9.7875C9.58859 7.5 9.39782 7.57902 9.25717 7.71967C9.11652 7.86032 9.0375 8.05109 9.0375 8.25C9.0375 8.44891 9.11652 8.63968 9.25717 8.78033C9.39782 8.92098 9.58859 9 9.7875 9H13.9395L7.7955 15.144C7.65888 15.2855 7.58329 15.4749 7.58499 15.6716C7.5867 15.8682 7.66558 16.0563 7.80464 16.1954C7.94369 16.3344 8.1318 16.4133 8.32845 16.415C8.5251 16.4167 8.71455 16.3411 8.856 16.2045Z" fill="#00295C" />
            </g>
            <defs>
                <clipPath id="clip0_735_17461">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}