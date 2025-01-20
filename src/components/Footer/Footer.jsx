"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
          <img
              src="/WarelineLogo.png"
              alt="WareLineTech Logo"
              className="w-60 h-24"
              
            />
            <h4 className="font-bold text-lg mb-4">India-Mohali</h4>
            <p className="text-sm">
            Wareline Technologies, 4th Floor, <br />
              Plot No. - D-176, Phase 8 B, Industrial Area,<br />
              Sector 74, Mohali, Punjab, 140501
            </p>
           
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/mobile-apps" className="hover:text-blue-600">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-apps" className="hover:text-blue-600">
                  Web App Development
                </Link>
              </li>
             
              <li>
                <Link href="/services/ai-ml" className="hover:text-blue-600">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="hover:text-blue-600">
                  Cloud Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/enterprise-solutions" className="hover:text-blue-600">
                  Enterprise App Development
                </Link>
              </li>
             
              <li>
                <Link href="/services/iOS" className="hover:text-blue-600">
                  iOS App Development
                </Link>
              </li>
              <li>
                <Link href="/services/android" className="hover:text-blue-600">
                  Android App Development
                </Link>
              </li>
              <li>
                <Link href="/services/flutter" className="hover:text-blue-600">
                  Flutter App Development
                </Link>
              </li>
              <li>
                <Link href="/services/react-native" className="hover:text-blue-600">
                  React Native App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industries/healthcare" className="hover:text-blue-600">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/fintech" className="hover:text-blue-600">
                  Fintech
                </Link>
              </li>
              <li>
                <Link href="/industries/e-commerce" className="hover:text-blue-600">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/industries/insuretech" className="hover:text-blue-600">
                  Insure Tech
                </Link>
              </li>
              <li>
                <Link href="/industries/real-estate" className="hover:text-blue-600">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/industries/education" className="hover:text-blue-600">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/industries/sports" className="hover:text-blue-600">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/industries/travel" className="hover:text-blue-600">
                  Travel
                </Link>
              </li>
              <li>
                <Link href="/industries/hospitality" className="hover:text-blue-600">
                 Hospitality
                </Link>
              </li>
              <li>
                <Link href="/industries/construction" className="hover:text-blue-600">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/industries/education" className="hover:text-blue-600">
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/company/careers" className="hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/about-us" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
             
              <li>
                <Link href="/hire-developers" className="hover:text-blue-600">
                  Hire Developers
                </Link>
              </li>
             
              <li>
                <Link href="/press" className="hover:text-blue-600">
                  Press Release
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col lg:flex-row items-center justify-between">
          <p className="text-sm">
            Driving Digital Innovation with Data-Driven and AI-Integrated Mobile and Web App Development Services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
