import { useState, useEffect } from 'react'

const Fact = () => {
    const [fact, setFact] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchFact = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch('https://catfact.ninja/fact')
            if (!response.ok) {
                throw new Error('Failed to fetch fact')
            }
            const data = await response.json()
            setFact(data.fact)
        } catch (err) {
            console.error(err)
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <button 
                onClick={fetchFact} 
                disabled={isLoading}
                className={`px-6 py-2 rounded-lg text-white font-semibold transition-all duration-200
                    ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}
                `}
            >
                {isLoading ? 'Loading...' : 'Get Random Fact'}
            </button>
            
            {error && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    Error: {error}
                </div>
            )}
            
            {fact && !isLoading && (
                <div className="mt-6 p-6 bg-white rounded-lg shadow-lg max-w-2xl text-center">
                    <h1 className="text-2xl font-medium text-gray-800">{fact}</h1>
                </div>
            )}
        </div>
    )
}

export default Fact