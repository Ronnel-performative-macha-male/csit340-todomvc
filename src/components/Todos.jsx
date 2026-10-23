import { useState } from 'react'

function Todos() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

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

  // Handle checking/unchecking a todo
  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <section className="mx-auto max-w-[550px]">
      <h1 className="text-center text-[80px] font-extralight text-[#b83f45]">
        todos
      </h1>

      <div className="relative bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)]">
        <form onSubmit={handleSubmit}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-[65px] w-full py-4 pr-4 pl-[60px] text-2xl shadow-[inset_0_-2px_1px_rgba(0,0,0,0.03)] outline-none placeholder:text-black/40 placeholder:italic focus:shadow-[0_0_2px_2px_#cf7d7d]"
            placeholder="What needs to be done?"
          />
        </form>

        {todos.length > 0 && (
          <main className="relative border-t border-[#e6e6e6]">
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="group relative flex items-center border-b border-[#ededed] text-2xl"
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo.id)}
                    className="ml-[15px] size-[30px] shrink-0 cursor-pointer accent-[#59a193]"
                  />
                  <span
                    className={
                      todo.completed
                        ? 'flex-1 py-[15px] pr-[60px] pl-[15px] break-all text-[#949494] line-through'
                        : 'flex-1 py-[15px] pr-[60px] pl-[15px] break-all'
                    }
                  >
                    {todo.text}
                  </span>
                </li>
              ))}
            </ul>
          </main>
        )}
      </div>
    </section>
  )
}

export default Todos