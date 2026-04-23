import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../../redux/slices/authSlice';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';
import authService from '../../../services/authServices';

const Login = () => {
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState('Admin@123');
    const [showPassword, setShowPassword] = useState(false);
    
    const { loading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginStart());

        try {
            // Call auth service login
            const response = await authService.login(email, password);

            // Dispatch success with user data
            const userData = response.user || {
                email: response.email,
                role: response.role,
            };

            dispatch(loginSuccess(userData));
            navigate('/admin/dashboard');
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Invalid email or password';
            dispatch(loginFailure(errorMessage));
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/* Logo or Brand */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-corporate-navy">
                        Noisto <span className="text-corporate-orange">Admin</span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Management Console Access
                    </p>
                </div>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-10 px-6 shadow-2xl shadow-gray-200/50 rounded-2xl border border-gray-100 sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                    <Mail size={18} />
                                </span>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-corporate-orange/20 focus:border-corporate-orange transition-all sm:text-sm"
                                    placeholder="admin@gmail.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                    <Lock size={18} />
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-corporate-orange/20 focus:border-corporate-orange transition-all sm:text-sm"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg flex items-center gap-2">
                                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                                {error}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white transition-all
                                    ${loading 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-corporate-orange hover:bg-[#e66e00] hover:shadow-corporate-orange/30 active:scale-[0.98]'
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Authenticating...
                                    </>
                                ) : (
                                    <>
                                        Sign In <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-100 italic text-[10px] text-gray-300">Authorized personnel only</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <p className="mt-6 text-center text-xs text-gray-400">
                    Difficulty logging in? Contact IT Support.
                </p>
            </div>
        </div>
    );
};

export default Login;
