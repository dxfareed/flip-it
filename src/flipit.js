const Flip=({func})=>{
    //optimize for smalll screen height
    return(
        <div className="flip-it">
            <div style={{
                cursor: "pointer"
                }} className="flipdc" onClick={func}>Flip</div>
        </div>
    )
}
export default Flip;
