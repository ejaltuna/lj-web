const Star = (props) => {
    return (
        <>
            <svg
                {...props}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z"
                    fill="#FF9529"
                />
            </svg>
        </>
    );
};
export default Star;
