import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1C2D] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Company Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Virgin Integrated Limited
          </h3>
          <p className="text-sm leading-relaxed">
            2nd Floor, Unity Bank Building,  
            69 Mission Road,  
            Benin City, Edo State.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Contact
          </h3>
          <p className="text-sm">
           📞 +234 0802 303 8559 <br />
           <br />
           📞 +234 0902 557 9473
          </p>
          <br />
          <p className="text-sm mt-2">
           📧 virginintegrated@yahoo.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Virgin Integrated Limited. All Rights Reserved.
      </div>
    </footer>
  );
}
