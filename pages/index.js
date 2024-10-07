import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();  // Next.js router for navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication check (you would replace this with actual logic)
    if (email === 'Hanah@edumental.com' && password === 'password123') {
      // Redirect to dashboard after successful login
      router.push('./dashboard.js');
    } else {
      // Display error if login fails
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left side: Form */}
      <div className="flex flex-col justify-center w-full md:w-1/2 bg-white p-8 md:p-16">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-black mb-4">Edumental</h2>

          {/* Title */}
          <h3 className="text-lg font-semibold text-black mb-6">
            Sign Up to Edumental
          </h3>

          {/* Display error if login fails */}
          {error && <div className="text-red-500 mb-4">{error}</div>}

          {/* Form */}
          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-600 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              Sign In
            </button>
          </form>

          {/* Social Sign-up */}
          <div className="mt-6 text-center text-gray-500">Or sign up with</div>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="p-3 border rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.498v-9.294H9.691v-3.622h3.132V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.796.144v3.24l-1.919.001c-1.504 0-1.794.715-1.794 1.763v2.311h3.588l-.467 3.622h-3.121V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </button>

            <button className="p-3 border rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="h-6">
              <path fill="#4285F4" d="M24 9.5c2.38 0 4.53.82 6.23 2.17l4.62-4.62C31.73 4.46 28.06 3 24 3 14.71 3 7.12 9.58 5.08 18h5.87C12.92 13.26 17.04 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.3 24.45c0-1.59-.14-3.09-.41-4.55H24v9.09h12.54c-.55 2.91-2.15 5.37-4.57 7.05v5.85h7.39c4.33-3.99 6.94-9.86 6.94-17.44z"/>
              <path fill="#FBBC05" d="M10.95 28.34C9.5 24.8 9.5 21.19 10.95 17.66v-5.86H5.08c-2.77 5.21-2.77 11.36 0 16.57l5.87-5.86z"/>
              <path fill="#EA4335" d="M24 46c4.06 0 7.72-1.42 10.62-3.84l-5.85-5.85c-1.7 1.16-3.85 1.85-6.23 1.85-6.96 0-12.75-4.76-14.05-11.03H5.08l-5.87 5.86C7.12 38.42 14.71 45 24 45z"/>
            </svg>
            </button>

            <button className="p-3 border rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M16.5 3.5c-.78.75-1.45 1.9-1.28 3.02 1.22.1 2.44-.65 3.16-1.44.71-.78 1.26-1.9 1.26-3.05-.01-.13-.04-.26-.06-.38-1.15.05-2.33.72-3.08 1.85zM12.64 6.18c-1.7 0-3.13.99-3.94.99-.9 0-2.27-.95-3.73-.92-1.91.03-3.72 1.11-4.72 2.83-2.02 3.51-.52 8.71 1.4 11.57.94 1.42 2.05 2.94 3.53 2.89 1.42-.06 1.96-.94 3.68-.94 1.71 0 2.2.94 3.7.91 1.49-.03 2.45-1.4 3.39-2.82.67-1.02.92-1.55 1.43-2.71-3.76-1.43-4.37-6.77-.65-8.78-.95-1.24-2.38-1.94-3.69-1.94z"/>
              </svg>
            </button>
          </div>

          {/* Already have an account */}
          <div className="mt-8 text-center">
            <span className="text-gray-500">Have an account?</span>
            <a href="#" className="text-black font-semibold ml-2 hover:underline">
              Sign in
            </a>
          </div>
        </div>
      </div>

      {/* Right side: Background image */}
      <div className="hidden md:flex w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/abstract-placeholder.jpg')" }}>
        {/* Background could be replaced with a more artistic image or gradient */}
      </div>
    </div>
  );
}
