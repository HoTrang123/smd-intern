const GifItem = ({ id, url }) => {
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>{`Gif ${id}`}</h2>
            <img src={url} />
        </div>
    );
};

export default GifItem;