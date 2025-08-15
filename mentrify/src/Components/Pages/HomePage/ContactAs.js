import { Button } from "../../UI/Button/button";
import { Input } from "../../UI/Input/input";
import { MapPin, Phone, Mail, User, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-white text-black py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* Left side - Info */}
        <div className="md:w-1/2">
          <p className="uppercase tracking-widest text-gray-500 mb-2">Contact</p>
          <h2 className="text-4xl font-extrabold mb-4 leading-snug">
            Have You Any Project? <br /> Please Drop a Message
          </h2>
          <p className="text-gray-600 mb-8">
            Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-black" />
              <p><strong>Address:</strong> Sarkhej-Gandhinagar Hwy, Gota, Ahmedabad, Gujarat 382481</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-black" />
              <p><strong>Phone:</strong> (+91) 635195 7339</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-black" />
              <p><strong>Email:</strong> parthvekaria123@gmail.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition">IG</a>
            <a href="#" className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition">X</a>
            <a href="#" className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition">IN</a>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="md:w-1/2 bg-gray-100 p-8 rounded-xl shadow-lg">
          <form className="space-y-5">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-500" />
              <Input
                type="text"
                placeholder="e.g Full Name"
                className="pl-10 bg-white text-black border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-500" />
              <Input
                type="email"
                placeholder="e.g example@mail.com"
                className="pl-10 bg-white text-black border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-500" />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="pl-10 bg-white text-black border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-500" />
              <textarea
                placeholder="Write message..."
                className="pl-10 bg-white text-black border border-gray-300 rounded-lg w-full h-32 resize-none"
              />
            </div>
            <Button type="submit" className="w-full bg-black text-white font-bold rounded-lg py-3 hover:bg-gray-800">
              SEND
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
