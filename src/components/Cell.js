const Cell = ({id, cell, onClick}) => {
    return (
        // <div className="square" id={id}>{cell}</div>
        <button 
            className="square" 
            id={id} 
            key={id}
            onClick={() => onClick(id)}
            disabled={cell !== null}
        >
            {cell}
        </button>
    )
}

export default Cell;