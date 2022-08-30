import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import youtube from '../images/icon-youtube.svg'
import instagram from '../images/icon-instagram.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

export default function 

() {
  return (
    <section className='relative z-10 max-w-7xl mx-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>

        {/* FACEBOOK */}
        <article className='bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-blue-600'>
            <ul className='flex items-center justify-center text-center'>
                <li><img src={facebook} alt="Facebook logo"  className='mr-2'/></li>
                <li className='text-sm text-slate-600 font-bold dark:text-slate-400'>@filipPop</li>
            </ul>

            <h2 className='text-5xl my-5 font-bold text-slate-800 text-center dark:text-white'>1987 <span className='text-sm block text-slate-600 font-normal uppercase tracking-widest dark:text-slate-400'>Followers</span></h2>

            <p className='text-center text-emerald-600 flex items-center justify-center font-bold text-small'>
                <img src={up} alt="" className='mr-2 w-3' />
                12 today
            </p>
        </article>

        {/* TWITTER */}
        <article className='bg-slate-200 p-5 rounded-lg shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700 border-t-8 border-blue-500 '>
            <ul className='flex items-center justify-center text-center'>
                <li><img src={twitter} alt="Twitter logo"  className='mr-2'/></li>
                <li className='text-sm text-slate-600 font-bold dark:text-slate-400'>@fpoppyzz</li>
            </ul>

            <h2 className='text-5xl my-5 font-bold text-slate-800 text-center dark:text-white'>1044 <span className='text-sm block text-slate-600 font-normal uppercase tracking-widest dark:text-slate-400'>Followers</span></h2>

            <p className='text-center text-emerald-600 flex items-center justify-center font-bold text-small'>
                <img src={up} alt="" className='mr-2 w-3' />
                99 today
            </p>
        </article>

        {/* INSTAGRAM */}
        <article className='bg-slate-200 p-5 rounded-lg shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700 relative'>

            <div className='instagram h-2 w-full rounded-tl-lg rounded-tr-lg absolute top-0 left-0'></div>

            <ul className='flex items-center justify-center text-center'>
                <li><img src={instagram} alt="Instagram logo"  className='mr-2'/></li>
                <li className='text-sm text-slate-600 font-bold dark:text-slate-400'>@popiezz</li>
            </ul>

            <h2 className='text-5xl my-5 font-bold text-slate-800 text-center dark:text-white'>11K <span className='text-sm block text-slate-600 font-normal uppercase tracking-widest dark:text-slate-400'>Followers</span></h2>

            <p className='text-center text-emerald-600 flex items-center justify-center font-bold text-small'>
                <img src={up} alt="" className='mr-2 w-3' />
                1099 today
            </p>
        </article>

        {/* YOUTUBE */}
        <article className='bg-slate-200 p-5 rounded-lg shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700 border-t-8 border-red-700'>
            <ul className='flex items-center justify-center text-center'>
                <li><img src={youtube} alt="Youtube logo"  className='mr-2'/></li>
                <li className='text-sm text-slate-600 font-bold dark:text-slate-400'>@poppyzz</li>
            </ul>

            <h2 className='text-5xl my-5 font-bold text-slate-800 text-center dark:text-white'>8239 <span className='text-sm block text-slate-600 font-normal uppercase tracking-widest dark:text-slate-400'>Subscribers</span></h2>

            <p className='text-center text-red-600 flex items-center justify-center font-bold text-small'>
                <img src={down} alt="" className='mr-2 w-3' />
                144 today
            </p>
        </article>
    </section>
  )
}
