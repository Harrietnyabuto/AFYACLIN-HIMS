import Image from "next/image";

export default function Home() {
  return (
    <section className="relative bg-gray-100">
    
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-10 h-20">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src="" 
              alt="afyaclini Logo"
              width={40}
              height={40}
            />
            
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <a href="#browse" className="text-gray-900 hover:underline">
              Home
            </a>

            <a href="#browse" className="text-gray-900 hover:underline">
              About
            </a>
                        
            <a href="#browse" className="text-gray-900 hover:underline">
              Login
            </a>

            <a
              href="#register"
              className="px-4 py-2 bg-cyan-800 text-white rounded-lg hover:bg-gray-800"
            >
              Register Now
            </a>
          </nav>
          
              
      </div>
      <div className="text-center mb-6 bg-white">
            <h1 className="text-3xl font-bold text-gray-800">
                Smart Health. Simple Access.
            </h1>
            </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-white mt-4 h-[700px] w-full">
        {/* Background Image */}
        <div className="relative bg-white h-[600px] w-full">
          <Image
            src="/bg1.avif"
            alt="Afyaclin Health Centre"
            layout="fill"
            
           
            quality={100}
            className="rounded-l-lg"
          />
        </div>

        {/* Hero Content */}
        <div className="items-start-4 absolute inset-0 flex flex-col justify-center   text-white px-6">
          <h2 className="items-start text-3xl font-bold md:text-4xl ">
          WELCOME TO AFYACLIN  <br />
          — your all-in-one healthcare platform —
          </h2>
          <hr className="my-4 w-1/2 border-gray-300" />
          <div className="flex flex-col items-start space-y-4">
            <div className="text-lg font-semibold">
              <p></p>
              <p className="flex items-start space-x-2">
                <span className="material-icons"></span>
                <span></span>
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-200">
                Login
              </button>
              <button className="px-6 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-200">
                Get Started
              </button>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </section> 
  );
}