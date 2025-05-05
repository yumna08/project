import React from 'react'

const NatureLoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
        {/* Header with Nature text */}
        <div className="bg-green-600 py-4 px-6">
          <h1 className="text-white text-2xl font-bold">Nature</h1>
        </div>
        
        {/* Login form */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Login Here!</h2>
          <p className="text-green-600 italic mb-6">Relaxing Your Mind From Madness</p>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-gray-700">Remember Password</label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              LOGIN
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 italic">calm & relaxed</p>
            <p className="text-gray-600 mt-2">Contact: +6281 7333 8801</p>
            <p className="text-gray-600 mt-4">
              Don't have an account? <a href="#" className="text-green-600 hover:underline">Create your account back!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NatureLoginPage