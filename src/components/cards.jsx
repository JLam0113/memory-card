function Cards({ url, name, id, onClick }) {

    return <>
        <li className="card" 
        id={id} 
        onClick={onClick}>
            <h3>{name}</h3>
            <img src={url}></img>
        </li>
    </>
}

export default Cards