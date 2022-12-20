import React, { useState } from "react";

export default function App() {
  const [skills, setSkills] = useState([{ skill: "JavaScript", level: 4 }])

  function addSkill() {
    alert("ADD SKILL CLICKED");
  }

  return (
    <section>
      <h2>DEV SKILLS</h2>
      <hr />
      {skills.map((s) => (
        <article key={s.skill}>
          <div>{s.skill}</div> <div>{s.level}</div>
        </article>
      ))}
      <hr />
      <form>
        <label>
          <span>SKILL</span>
          <input name="skill" />
        </label>
        <label>
          <span>LEVEL</span>
          <select name="level">
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