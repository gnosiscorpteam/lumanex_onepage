import { Link } from 'react-scroll';
import './App.css';
import AboutUs from './sections/aboutus';
import ContactUs from './sections/contactus';
import Footer from './sections/footer';
import Gallery from './sections/gallery';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <div className='h-[100vh] w-[100vw] bg-intro flex flex-col justify-around items-center py-[10vh] px-[5vw]' id='intro'>
        <div className='flex flex-col items-center'>
          <img src='./assests/bug.png' className='h-[150px]' />
          <img src='./assests/logo.png' className='h-[50px] mt-[30px] mb-[40px]' />
          <div className='w-[200px] border-b-4 border-[white] mb-[40px]'></div>
          <p className='text-[white] text-center'>We take care of the details, so you can focus on what you do best.</p>
        </div>
        <img src='./assests/icons/arrow-down.png' />
        <Link
          activeClass="active"
          to="aboutus"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className='border border-[white] py-3 px-8 text-[white]'>Go to the site</button>
        </Link>
      </div>
      <AboutUs />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
