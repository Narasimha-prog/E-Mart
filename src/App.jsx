import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage'
import WatchPage  from './stores/pages/WatchPage'
import ComputerPage from './stores/pages/ComputerPage'
import MenPage from './stores/pages/MenPage'
import WomenPage from './stores/pages/WomenPage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import FurniturePage from './stores/pages/FurniturePage'
import TvPage from './stores/pages/TvPage'
import MobileSinglePage from './singlePages/MobileSinglePage'
import UserCart from './stores/UserCart'
import BooksPage from './stores/pages/BooksPage'
import ComputerSinglePage from './singlePages/ComputerSinglePage'
import AcSinglePage from './singlePages/AcSinglePage'
import FurnitureSinglePage from './singlePages/FurnitureSinglePage'
import BookSinglePage from './singlePages/BookSinglePage'
import MenSinglePage from './singlePages/MenSinglePage'
import KitchenSinglePage from './singlePages/KitchenSinglePage'
import SpeakersPage from './stores/pages/SpeakersPage'
import SpeakerSinglePage from './singlePages/SpeakerSinglePage'
import WatchSinglePage from './singlePages/WatchSinglePage'
import WomenSinglePage from './singlePages/WomenSinglePage'
import TvSinglePage from './singlePages/TvSinglePage'
import FridgePage from './stores/pages/FridgePage'
import FridgeSinglePage from './singlePages/FridgeSinglePage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mobile' element={<MobilePage />} />
        <Route path='/watch' element={<WatchPage />} />
        <Route path='/Computers' element={<ComputerPage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/women' element={<WomenPage />} />
        <Route path='/ac' element={<AcPage />} />
        <Route path='/kit' element={<KitchenPage />} />
        <Route path='/fun' element={<FurniturePage />} />
        <Route path='/tv' element={<TvPage />} />
        <Route path='/speak' element={<SpeakersPage />} />
        <Route path='/speak/:id' element={<SpeakerSinglePage />} />
        <Route path='/book' element={<BooksPage />} />
        <Route path='/tv/:id' element={<TvSinglePage />} />
        <Route path='/book/:id' element={<BookSinglePage />} />
        <Route path='/mobile/:id' element={<MobileSinglePage />} />
        <Route path='/Computers/:id' element={<ComputerSinglePage />} />
        <Route path='/ac/:id' element={<AcSinglePage/>} />
        <Route path='/watch/:id' element={<WatchSinglePage />} />
        <Route path='/men/:id' element={<MenSinglePage />} />
        <Route path='/woman/:id' element={<WomenSinglePage />} />
        <Route path='/kit/:id' element={<KitchenSinglePage />} />
        <Route path='/fun/:id' element={<FurnitureSinglePage />} />
    
        <Route path='/fri' element={<FridgePage />} />
        <Route path='/fri/:id' element={<FridgeSinglePage />} />
        <Route path='/cart' element={<UserCart/>} />
      </Routes>
    </div>
  )
}

export default App