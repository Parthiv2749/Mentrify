import Navbar from "./Components/UI/NavigationBar/NavigationBar";
import Footer from "./Components/UI/Footer/footer";
import HomePage from "./Components/Pages/HomePage/Homepage";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
