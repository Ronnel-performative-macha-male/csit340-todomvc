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

  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function handleClearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const itemsLeft = todos.filter((todo) => !todo.completed).length

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
          <>
            <main className="relative border-t border-[#e6e6e6]">
              <input id="toggle-all" type="checkbox" className="peer sr-only" />
              <label
                htmlFor="toggle-all"
                className="absolute top-[18px] left-[15px] size-[30px] rotate-90 cursor-pointer text-center text-2xl text-[#949494] select-none before:content-['❯'] peer-checked:text-[#484848]"
              >
                Mark all as complete
              </label>
              <ul className="overflow-hidden">
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
                    <button
                      type="button"
                      onClick={() => handleDelete(todo.id)}
                      className="absolute right-[10px] hidden size-10 cursor-pointer text-[30px] text-[#949494] group-hover:block hover:text-[#c18585]"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            </main>

            <footer className="relative flex h-10 items-center justify-between border-t border-[#ededed] px-[15px] text-sm text-[#777] shadow-[0_1px_1px_rgba(0,0,0,0.08),0_8px_0_-3px_#f6f6f6,0_9px_1px_-3px_rgba(0,0,0,0.08),0_16px_0_-6px_#f6f6f6,0_17px_2px_-6px_rgba(0,0,0,0.08)]">
              <span>
                <strong>{itemsLeft}</strong> items left
              </span>
              <ul className="flex gap-[3px]">
                <li>
                  <a
                    href="#/"
                    className="rounded border border-transparent px-[7px] py-[3px] hover:border-[#b83f45]/20"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    href="#/active"
                    className="rounded border border-transparent px-[7px] py-[3px] hover:border-[#b83f45]/20"
                  >
                    Active
                  </a>
                </li>
                <li>
                  <a
                    href="#/completed"
                    className="rounded border border-transparent px-[7px] py-[3px] hover:border-[#b83f45]/20"
                  >
                    Completed
                  </a>
                </li>
              </ul>
              <button
                type="button"
                onClick={handleClearCompleted}
                className="cursor-pointer hover:underline"
              >
                Clear completedd
              </button>
            </footer>
          </>
        )}
      </div>
    </section>
  )
}

export default Todos