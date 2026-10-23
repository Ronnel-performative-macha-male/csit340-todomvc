import { useState } from 'react'

function Todos() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn the spread operator', completed: false },
    { id: 2, text: 'Set up Tailwind', completed: true },
  ])

  // Handle form submission to add a new todo
  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed === '') {
      return
    }
    const newTodo = { id: crypto.randomUUID(), text: trimmed, completed: false }
    setTodos([...todos, newTodo])
    setText('')
  }

  return (
    <section className="mx-auto max-w-[550px]">
      <h1 className="text-center text-[80px] font-extralight text-[#b83f45]">
        todos
      </h1>

      <div className="relative bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)]">
        {/* Hooked up handleSubmit to the form */}
        <form onSubmit={handleSubmit}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-[65px] w-full py-4 pr-4 pl-[60px] text-2xl shadow-[inset_0_-2px_1px_rgba(0,0,0,0.03)] outline-none placeholder:text-black/40 placeholder:italic focus:shadow-[0_0_2px_2px_#cf7d7d]"
            placeholder="What needs to be done?"
          />
        </form>
      </div>
    </section>
  )
}

export default Todos