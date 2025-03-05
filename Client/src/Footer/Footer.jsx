

const Footer = () => {
  return (
    <footer  className='m-auto bg-black  p-8 overflow-hidden'>
          <div className=" flex justify-center relative mt-6 ">
   
     <div className="  ml-[20vw]  bg-gradient-to-t from-pink-600 via-red-500 to-pink-400 rounded-[50%] h-[10vh] w-lvw blur-3xl z-[1]"> </div>
    </div>
      <div id="footer" className="w-full bg-black  flex flex-col justify-center items-center z-[2]">
        {/* <div id="footer-div" className="h-[10vh] w-full bg-red-600"></div> */}
        <h1 className="text-[16vw] text-[#ff266e] font-serif">Classic</h1>
        <div id="footer-bottom" className="w-full h-[4vh]  border-t border-gray-300"></div>
      </div>

      <div className='flex justify-between text-slate-400 mt-[-2%] max-sm:flex-col p-1 text-1xl max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
// data-scroll-section data-scroll-speed="0.5" 