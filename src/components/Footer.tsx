// import { SocialIcon } from "react-social-icons"
// const Footer = () => (
//   <footer className="py-6 bg-white text-black text-center text-sm space-y-4">
//     <div className="footer-links space-x-4">
//       <a href="#">About Us</a>
//       <a href="#">Help Center</a>
//       <a href="#">Jobs</a>
//       <a href="#">Terms of Service</a>
//       <a href="#">Privacy Policy</a>
//       <a href="#">Contact Us</a>
//     </div>
//     <div className="social-icons space-x-4">
//       <a href="#">
//         <SocialIcon network="facebook" bgColor="#ff5a01" />
//       </a>
//       <a href="#">
//         <SocialIcon network="twitter" bgColor="#ff5a01" />
//       </a>
//       <a href="#">
//         <SocialIcon network="instagram" bgColor="#ff5a01" />
//       </a>
//     </div>
//     &copy; 2023 Your Streaming Service. All rights reserved.
//   </footer>
// )

// export default Footer
import { useState } from "react"
import { SocialIcon } from "react-social-icons"

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <footer className="py-6 bg-white text-black text-center text-sm space-y-4">
      <div className="footer-links space-x-4 md:space-x-0 md:flex md:flex-col md:items-center">
        <a href="#" className="hover:text-blue-500 transition-colors duration-200 ease-in-out">
          About Us
        </a>
        <a href="#" className="hover:text-blue-500 transition-colors duration-200 ease-in-out">
          Help Center
        </a>
        <a href="#" className="hover:text-blue-500 transition-colors duration-200 ease-in-out">
          Jobs
        </a>
        <a href="#" className="hover:text-blue-500 transition-colors duration-200 ease-in-out">
          Terms of Service
        </a>
        <a href="#" className="hover:text-blue-500 transition-colors duration-200 ease-in-out">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-blue-500 transition-colors duration-200 ease-in-out">
          Contact Us
        </a>
      </div>
      <div className="social-icons space-x-4 pb-3">
        <a href="#">
          <SocialIcon network="facebook" bgColor="black" />
        </a>
        <a href="#">
          <SocialIcon network="twitter" bgColor="black" />
        </a>
        <a href="#">
          <SocialIcon className="social-icons" network="instagram" bgColor="black" />
        </a>
      </div>
      &copy; 2023 Your Streaming Service. All rights reserved.
    </footer>
  )
}
export default Footer
