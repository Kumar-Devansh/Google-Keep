import { Navigate } from 'react-router-dom';

const getStoredUser = () => {
	try {
		const stored = localStorage.getItem('user');
		if (!stored) return null;
		return JSON.parse(stored);
	} catch (error) {
		localStorage.removeItem('user');
		return null;
	}
};

const ProtectedRoute = ({ children }) => {
	const user = getStoredUser();
	if (!user) {
		return <Navigate to='/' />;
	}
	return children;
};

export default ProtectedRoute;