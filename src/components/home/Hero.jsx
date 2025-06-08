'use client'
export default function Hero() {
    return (
        <div className="bg-secondary min-h-[80vh] relative flex items-center">
            <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('/maldives.avif')",
                    opacity: 1
                }}
            />
            <div className="absolute inset-0 bg-black opacity-70 z-1" />

            <div className="container mx-auto px-4 relative z-10 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                            International Conference On Advances In Science, Technology And Management
                        </h1>
                        
                        <div className="space-y-2">
                            <p className="text-xl md:text-2xl text-white font-medium">
                                Department of Mathematics, Dr Bhimrao Ambedkar University, Agra, India
                            </p>
                            <p className="text-xl text-white">in collaboration with</p>
                            <p className="text-xl md:text-2xl text-white font-medium">
                                Shanti Education Research Foundation, Jaipur, India
                            </p>
                        </div>

                        <div className="bg-red-600 inline-block px-6 py-3 rounded-lg mt-8">
                            <p className="text-2xl text-white font-bold">Interdisciplinary Conference</p>
                            <p className="text-xl text-white mt-2">ICOSTEM 2023</p>
                        </div>

                        <div className="mt-8 space-y-4">
                            <p className="text-2xl text-white font-semibold">November 24 - 27, 2023</p>
                            <p className="text-xl text-white">Natural Science • Medical Science • Applied Sciences • Technology • Management</p>
                            <p className="text-2xl text-white font-semibold flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Venue: Maldives
                            </p>
                        </div>

                        <div className="mt-12">
                            <button className="bg-primary hover:bg-primary-dark text-white text-xl font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}