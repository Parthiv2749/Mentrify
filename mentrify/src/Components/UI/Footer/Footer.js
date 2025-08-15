export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* About */}
        <div>
          <h2 className="text-white font-bold mb-3">MentorConnect</h2>
          <p className="text-sm">
            Bridging the gap between learners and leaders through meaningful mentorship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/mentors" className="hover:underline">Mentors</a></li>
            <li><a href="/organizations" className="hover:underline">Organizations</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white font-bold mb-3">Contact</h2>
          <p>Email: contact@mentorconnect.com</p>
          <p>Phone: +91-9876543210</p>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-white font-bold mb-3">Follow Us</h2>
          <div className="flex gap-3">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        © 2025 MentorConnect. All Rights Reserved.
      </div>
    </footer>
  );
}
