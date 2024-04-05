/* eslint-disable react/prop-types */
export default function Footer(props){
    const { handleToggleDescription, data } = props;

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>{data?.title}</h2>
                <h1>Space Site</h1>
            </div>
            <button onClick={handleToggleDescription}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}