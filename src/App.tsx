import { Editor } from "./components/Editor";

function App() {
  return (
    <div className="flex items-center min-h-screen text-zinc-50 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="bg-[#191919] text-[#ffffffcf] w-[1100px] mx-auto rounded-xl min-h-[600px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-[#202020] border-r border-r-zinc-700 p-4">
          <div className="flex gap-1 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}

export default App;
