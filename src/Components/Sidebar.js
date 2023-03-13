import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  
  if(!isMenuOpen) return null;
  return (
    <div className='w-52 '>
        <div className='shadow-lg text-center py-2 w-52' >
        <ul>
            <Link to="/">
            <li className='py-2 px-6 hover:bg-slate-200 flex'>
                <img className="h-6 pr-5" src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home icon"/>
                <p >Home</p>
            </li>
            </Link>
            <li className='py-2 px-6  hover:bg-slate-200 flex'>
                <img className="h-6 pr-5" src="https://cdn.pixabay.com/photo/2021/05/05/12/16/shorts-png-6230962_960_720.png" alt="Shorts icon"/>
                <p >Shorts</p>
            </li>
            <li className='py-2 px-6 hover:bg-slate-200 flex'>
                <img className="h-6 pr-5" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png" alt="Subscriptions icon"/>
                <p >Subscriptions</p>
            </li>
        </ul>
        </div>
        <div className='shadow-lg py-2'>
        <h1 className='py-2  px-6 font-sans text-xl font-normal text-center '>Explore</h1>
        <ul className='text-sm font-normal font-sans'>
            <li className='py-1 px-6  hover:bg-slate-200 flex'>
            <img className="h-6 pr-5" src="https://icon-library.com/images/trending-icon/trending-icon-2.jpg" alt="Trending icon"/>
                <p>Trending</p>
            </li>
            <li className='py-1 px-6  hover:bg-slate-200 flex'>
            <img className="h-6 pr-5" src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Shopping icon"/>
                <p>Shopping</p>
            </li>
            <li className='py-1 px-6  hover:bg-slate-200 flex'>
            <img className="h-6 pr-5" src="https://cdn3.iconfinder.com/data/icons/social-network-linear-color/100/Youtube_Music-512.png" alt="Music icon"/>
                <p>Music</p>
            </li>
            <li className='py-1 px-6  hover:bg-slate-200 flex'>
            <img className="h-6 pr-5" src="https://cdn-icons-png.flaticon.com/512/3799/3799786.png" alt="Movies icon"/>
                <p>Movies</p>
            </li>
            <li className='py-1 px-6  hover:bg-slate-200 flex'>
            <img className="h-6 pr-5" src="https://img.icons8.com/ios/512/youtube-live.png" alt="Live icon"/>
                <p>Live</p>
            </li>
            <li className='py-1 px-6  hover:bg-slate-200 flex'>
            <img className="h-6 pr-5" src="https://cdn.iconscout.com/icon/free/png-256/youtube-gaming-4627159-3853350.png" alt="Gaming icon"/>
                <p>Gaming</p>
            </li> 
            <li className='py-1 px-6  hover:bg-slate-200 flex'>
            <img className="h-6 pr-5" src="https://cdn-icons-png.flaticon.com/128/3208/3208799.png" alt="News icon"/>
                <p>News</p>
            </li>
            <li className='py-1 px-6  hover:bg-slate-200 flex'>
            <img className="h-6 pr-5" src="https://cdn-icons-png.flaticon.com/128/711/711840.png" alt="Sports icon"/>
                <p>Sports</p>
            </li>
            <li className='py-1 px-6  hover:bg-slate-200 flex'>
            <img className="h-6 pr-5" src="https://cdn-icons-png.flaticon.com/512/2932/2932883.png" alt="Learning icon"/>
            <p>Learning</p>
            </li>
            <li className='py-1 px-6  hover:bg-slate-200 flex'>
            <img className="h-6 pr-5" src="https://cdn-icons-png.flaticon.com/512/3081/3081850.png" alt="Fashion icon"/>
                <p>Fashion & Beauty</p>
            </li>
        </ul>
        </div>
    </div>
  )
}
