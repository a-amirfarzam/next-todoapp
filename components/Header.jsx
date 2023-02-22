const Header = () => {
   const funSetDark = () => {
      localStorage.setItem("theme", "dark");
      console.log(localStorage.getItem("theme"));
   };

   const funSetLight = () => {
      localStorage.setItem("theme", "light");
      console.log(localStorage.getItem("theme"));
   };

   return (
      <header>
         <div className="container mx-auto">
            <div className="flex">
               <div
                  onClick={funSetDark}
                  className="px-3 py-1 border border-gray-400 cursor-pointer transition-all hover:bg-blue-400 hover: text-white rounded-md mx-3"
               >
                  DARK
               </div>
               <div onClick={funSetLight} className="px-3 py-1 border border-gray-400 cursor-pointer transition-all hover:bg-blue-400 hover: text-white rounded-md mx-3">
                  LIGHT
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
