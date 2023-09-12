import PROFILE_PHOTO from "/profile.png";


export default function Header() {
  return (
    <header className="flex justify-between items-center py-5 border-b border-gray-300">
      <h1 className='text-3xl font-bold'>Knowdege Cafe</h1>
      <img src={PROFILE_PHOTO} alt="" />
    </header>
  )
}
