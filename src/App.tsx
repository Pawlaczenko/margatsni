import {FC} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';

import MainFeed from './pages/MainFeed/MainFeed';
import Profile from './pages/Profile/Profile';

const App : FC = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainFeed />} />
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/profile/:id" element={<Profile />}></Route>
				</Route>
				
			</Routes>
		</BrowserRouter>
	)
}

export default App
