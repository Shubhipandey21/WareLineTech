"use client";
const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Section */}
            <div>
              <h4 className="font-bold text-lg mb-4">USA</h4>
              <p className="text-sm">
                28720 Roadside Dr, STE 254,<br />
                Agoura Hills, CA 91301<br />
                +1 (818) 318-0727
              </p>
              <h4 className="font-bold text-lg mt-6 mb-4">India</h4>
              <p className="text-sm">
                Floor 7A, Tower C, Noida One,<br />
                Sector 62, Noida, Delhi-NCR 201309<br />
                +91 120 6039900
              </p>
            </div>
  
            {/* Services Section */}
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Mobile App Development</li>
                <li>Web App Development</li>
                <li>Internet Of Things (IoT)</li>
                <li>Artificial Intelligence</li>
                <li>Cloud Engineering</li>
                <li>Enterprise App Development</li>
                <li>Legacy Modernization</li>
                <li>Application Maintenance</li>
                <li>iOS App Development</li>
                <li>Android App Development</li>
                <li>Flutter App Development</li>
                <li>React Native App Development</li>
              </ul>
            </div>
  
            {/* Industries Section */}
            <div>
              <h4 className="font-bold text-lg mb-4">Industries</h4>
              <ul className="space-y-2 text-sm">
                <li>Healthcare</li>
                <li>Social Media</li>
                <li>Finance</li>
                <li>Insurance</li>
                <li>Real Estate</li>
                <li>Education</li>
                <li>Sports</li>
              </ul>
            </div>
  
            {/* Resources Section */}
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Careers</li>
                <li>Knowledge Center</li>
                <li>Technologies</li>
                <li>Staff Augmentation</li>
                <li>Hire Developers</li>
                <li>Featured Companies</li>
                <li>Client Reviews</li>
                <li>Press Release</li>
                <li>Fraud Alert</li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col lg:flex-row items-center justify-between">
            <p className="text-sm">
              Driving Digital Innovation with Data-Driven and AI-Integrated Mobile and Web App Development Services.
            </p>
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <img src="/path-to-clutch-badge.png" alt="Clutch Badge" className="h-10" />
              <img src="/path-to-iso-certification.png" alt="ISO Certified" className="h-10" />
              <img src="/path-to-aws-partner.png" alt="AWS Partner" className="h-10" />
              <img src="/path-to-great-place-to-work.png" alt="Great Place to Work" className="h-10" />
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  