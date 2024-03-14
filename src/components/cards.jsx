function Cards({ url,name,id }) {


    return <>
    <li className="card" key={id}>
        <h3>{name}</h3>
        <img src={url}></img>
    </li>
    </>
}

export default Cards