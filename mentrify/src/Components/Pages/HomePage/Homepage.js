import { Button } from "../../UI/Button/button";
import { Card, CardContent } from "../../UI/Card/card";

// Import new sections
import ExpectationReality from "../../Pages/HomePage/ExpectationReality";
import MenteeToMentorPath from "../../Pages/HomePage/MenteeToMentorPath";
import ContactSection from "./ContactAs"
export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Connecting Aspiring Minds with Expert Mentors
        </h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Your journey from learner to leader starts here.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Find a Mentor</Button>
          <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
            Join as Mentor
          </Button>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We aim to bridge the gap between expectations and reality by connecting mentees
          with experienced mentors across industries.
        </p>
      </section>

      {/* Expectation vs Reality */}
      <ExpectationReality />

      {/* Path from Mentee to Mentor */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Path from Mentee to Mentor
          </h2>
          <MenteeToMentorPath />
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "500+", label: "Mentors" },
            { number: "1200+", label: "Mentees" },
            { number: "100+", label: "Organizations" },
            { number: "95%", label: "Success Rate" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-3xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <p className="italic text-gray-700">
                  "This platform changed my career path!"
                </p>
                <span className="text-sm text-gray-500 mt-2 block">- User {item}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
        <ContactSection/>
    </div>
  );
}
