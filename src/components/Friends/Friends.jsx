import Friend from "./Friend/Friend";



const Friends = (props) =>{
    let friendElement = props.state.friends.map(p =>{
        return <Friend name = {p.name}/>
     })
    return(
        <div>
            <h1>Friends</h1>
            {friendElement}
        </div>
    )
}
export default Friends;