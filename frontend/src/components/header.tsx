import Link from "next/link";
import Image from "next/image";

export default function Header () {
    return (
        <header className="bg-white shadow-md fixed w-full z-10 h-auto">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
    
  
        <div className="flex items-center space-x-4">
      <Image
        src="/IMAS LOGO.jpg" 
        alt="afyaclini Logo"
        width={40}
        height={40}
      />
    </div>

    {/* Navigation Links and Register Button */}
    <div className="flex items-center space-x-6 ml-6">
      <Link href="/home" className="text-gray-900 hover:underline">Home</Link>
      <a href="#browse" className="text-gray-900 hover:underline">About</a>
      <Link href="/login" className="text-gray-900 hover:underline">Login</Link>
      <Link href="/register" className="px-4 py-2 bg-cyan-800 text-white rounded-lg hover:bg-gray-800">
          Register Now
      </Link>
    </div>
  </div>
  

  <div className="text-center mb-6 bg-white mt-24 py-4"> 
    <h1 className="text-3xl font-bold text-gray-800">
      Smart Health. Simple Access.
    </h1>
  </div>
</header>
    )
}