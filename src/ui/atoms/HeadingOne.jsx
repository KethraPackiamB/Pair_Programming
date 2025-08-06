export const HeadingOne = ({text}) => {

    return(
        <div>
            <h1 style={{
                fontFamily:"serif",
                fontWeight:"bold",
                fontSize: "60px",
                lineHeight: "55px",
                }}>
                {text}
            </h1>
        </div>
    )
}