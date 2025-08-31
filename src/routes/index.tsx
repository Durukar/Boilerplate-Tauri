import { BrowserRouter, Route, Routes } from 'react-router'
import App from '../App'

const RouterApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<App />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export { RouterApp }
