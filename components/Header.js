import Link from 'next/link'


const navigation = [
    { names: 'ASolutions', href: '#' },
    { names: 'Pricing', href: 'pricing' },
    { names: 'Docs', href: 'docs' },
    { names: 'Company', href: 'company' },
  ]
  
  export default function Header() {
    return (
      <header className="bg-green-200 sticky top-0">
        <nav className="bg-pink-400 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="bg-yellow-200 flex items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <Link href={link.href}><a className="text-base font-medium text-blue hover:text-indigo-50">
                  {link.names}
                  </a></Link>
                  // 
                ))}
              </div>
            </div>
            <div className="bg-red-800 ml-10 space-x-4">
              <a
                href="#"
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </a>
              <a
                href="#"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}<h1>hello</h1>
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  