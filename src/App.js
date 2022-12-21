import React, { useState } from "react";
import Uncontrolled from "./components/Uncontrolled";

export default function App() {
  // create states
  const [skills, setSkills] = useState([{ skill: "JavaScript", level: 4 }])

  const [form, setForm] = useState({
    skill: "",
    level: "1"
  })

  function addSkill(event) {
    // prevent default first!!! bc itll auto refresh after a submit
    event.preventDefault()

    // 1) console.log the form state
    console.log(form)

    // 2) make copy of current state
    const newState = [...skills]

    // 3) add new skill
    newState.push(form)

    // 4) update the state
    setSkills(newState)

    // 5) reset form
    setForm({
      skill: "",
      level: ""
    })

  }

  // event handler
  // ALL event handlers recieve the event object !!!
  // we want this function to update the input based on what user does
  function handleChange(event) {
    // 1) make a copy of the current state
    // why? bc you cant update the old object, bc react will just say "oh hey, this object is the SAME object as the old object" (EVEN THO U UPDATED IT, IT IS STILL SAME OBJ) and not render the change!!
    // so make a copy so that it's a WHOLE NEW OBJ
    // use spread operater ... to make copy of object
    // takes all pieces of obj and injects into new one
    const newState = {...form}

    // 2) now select the input dynamically (based on what user picks) and set it equal to the user's input
    // updates copy
    newState[event.target.name] = event.target.value

    // 3) update state
    setForm(newState)
    console.log(form)

    // another way to do it
    // make copy of form, then update property
    setForm({...form,  [event.target.name]: event.target.value})

  }

  return (
    <section>
      <Uncontrolled />
      <h2>DEV SKILLS</h2>
      <hr />
      {skills.map((s) => (
        <article key={s.skill}>
          <div>{s.skill}</div> <div>{s.level}</div>
        </article>
      ))}
      <hr />
      {/* DONT ADD click event to submit button, add onSubmit event handler to FORM ELEMENT */}
      <form onSubmit={addSkill}>
        <label>
          <span>SKILL</span>
          {/* EVERY INPUT has a CHANGE EVENT #1 */}
          <input name="skill" value={form.skill} onChange={handleChange}/>
        </label>
        <label>
          <span>LEVEL</span>
          {/* EVERY INPUT has a CHANGE EVENT #2 */}
          <select name="level" value={form.level} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button>ADD SKILL</button>
      </form>
    </section>
  );
}