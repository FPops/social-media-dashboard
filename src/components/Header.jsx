import {useState} from 'react'

export default function Header() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);

        const body = document.querySelector("body");

        if(darkMode){
            body.classList.add("dark")
        }else{
            body.classList.remove("dark")
        }
    }


  return (
    <>
    <header className='relative z-10 max-w-7xl mx-auto  flex item-center justify-between'>
        <div>
            <h1 className='font-bold text-2xl  text-slate-800 dark:text-white'>Social Media Dashboard</h1>
            <p className='text-slate-600 dark:text-slate-400 font-bold'>Total Followers: 23,004</p>
        </div>
        {/* {Toggle} */}
        <div className='toggle'>
            <label htmlFor="checkbox" className='font-bold text-slate-600 dark:text-slate-400 text-sm cursor-pointer'>Dark Mode</label>
            <input type="checkbox" className='checkbox' id='checkbox' 
            checked={!darkMode} 
            onChange={toggleTheme}
            />
            <label for="checkbox" className='label'>
                <div className='ball'></div>
            </label>
        </div>
    </header>
    </>
  )
}
