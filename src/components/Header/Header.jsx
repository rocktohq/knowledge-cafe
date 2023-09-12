import VITE_LOGO from "/vite.svg";


export default function Header() {
  return (
    <header className="flex justify-between items-center py-5 border-b border-gray-300">
      <h1 className='text-3xl font-bold'>Knowdege Cafe</h1>
      <img src={VITE_LOGO} alt="" />
    </header>
  )
}
