import {useRef} from "react" // hook to grab node in DOM (instead of using document.querySelector)


// uncontrolled bc no state to control the input of the form, we are directly accessing the input via the node
function Uncontrolled(props){

    // creates a hook to attach dom node to later
    // value in useRef doesn't matter, null is fine
    const inputRef = useRef(null)

    const handleClick = (event) => {
        console.log(inputRef)
        console.log(inputRef.current)
        console.log(inputRef.current.value)
    }

    return (
        <div>
            {/* attach node to ref hook by setting ref attribute equal to the variable with the ref hook. now the node is saved in the var! */}
            <input type="text" ref={inputRef} />
            <button onClick={handleClick} >Submit</button>
        </div>
    )
}

export default Uncontrolled