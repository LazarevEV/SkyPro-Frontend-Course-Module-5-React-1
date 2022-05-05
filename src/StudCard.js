function StudCard({ name, text }) {
    return (
        <>
            <hr />
            <div className="name">{name}</div>
            <div className="card">{text}</div>
            <hr />
        </>
    )
}
  
export default StudCard