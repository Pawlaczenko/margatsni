import {FC} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';

import MainFeed from './pages/MainFeed/MainFeed';

const App : FC = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainFeed />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
