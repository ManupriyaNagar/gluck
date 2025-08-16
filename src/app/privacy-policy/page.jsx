import React from 'react';

const Page = () => {
  return (
    <div className=" p-8 bg-white shadow-xl rounded-lg text-gray-800">
      <div className="border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">Privacy Policy</h1>
       
      </div>

      <div className="prose prose-gray max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-blue-800 mb-0">
            Welcome to <strong>Gluckscare Pharmaceuticals Private Limited</strong>. Your privacy and data protection are fundamental to our operations. This Privacy Policy describes how we collect, use, process, store, and protect your personal information in compliance with applicable data protection laws and regulations.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">1. Scope and Application</h2>
        <p className="mb-4">
          This Privacy Policy applies to all interactions with Gluckscare Pharmaceuticals, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Our website at <span className="text-blue-600 font-medium">www.gluckscare.com</span></li>
          <li>Mobile applications and digital platforms</li>
          <li>Healthcare services and pharmaceutical products</li>
          <li>Customer support and communication channels</li>
          <li>Business partnerships and vendor relationships</li>
        </ul>
        <p className="mb-4">
          By accessing our services or providing your information, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. Information Collection</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Personal Information</h3>
        <p className="mb-3">We collect personal information that you voluntarily provide, including:</p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Contact Information:</h4>
            <ul className="list-disc pl-4 text-sm space-y-1">
              <li>Full name and title</li>
              <li>Email address</li>
              <li>Phone and mobile numbers</li>
              <li>Postal and billing addresses</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Professional Information:</h4>
            <ul className="list-disc pl-4 text-sm space-y-1">
              <li>Company/organization name</li>
              <li>Job title and department</li>
              <li>Professional licenses (if applicable)</li>
              <li>Healthcare provider credentials</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Health and Medical Information</h3>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-yellow-800 mb-2">
            <strong>Sensitive Data Notice:</strong> We may collect health-related information only when explicitly provided and with your express consent for legitimate healthcare purposes.
          </p>
          <ul className="list-disc pl-4 text-sm text-yellow-800 space-y-1">
            <li>Medical history and conditions</li>
            <li>Prescription and medication information</li>
            <li>Healthcare provider interactions</li>
            <li>Treatment outcomes and feedback</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.3 Technical and Usage Data</h3>
        <p className="mb-3">We automatically collect technical information, including:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1 text-sm">
          <li>IP address and geographic location</li>
          <li>Device information (type, model, operating system)</li>
          <li>Browser type, version, and settings</li>
          <li>Website navigation patterns and user interactions</li>
          <li>Session duration and frequency of visits</li>
          <li>Referral sources and search terms</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.4 Cookies and Tracking Technologies</h3>
        <p className="mb-3">We utilize various tracking technologies:</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border-b text-left font-medium">Type</th>
                <th className="px-4 py-2 border-b text-left font-medium">Purpose</th>
                <th className="px-4 py-2 border-b text-left font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Essential Cookies</td>
                <td className="px-4 py-2 border-b">Website functionality</td>
                <td className="px-4 py-2 border-b">Session</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Analytics Cookies</td>
                <td className="px-4 py-2 border-b">Usage analysis and improvement</td>
                <td className="px-4 py-2 border-b">2 years</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Marketing Cookies</td>
                <td className="px-4 py-2 border-b">Personalized content delivery</td>
                <td className="px-4 py-2 border-b">1 year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">3. Legal Basis for Processing</h2>
        <p className="mb-4">We process your personal information based on the following legal grounds:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Consent:</strong> When you provide explicit consent for specific processing activities</li>
          <li><strong>Contract Performance:</strong> To fulfill our contractual obligations to you</li>
          <li><strong>Legitimate Interest:</strong> For business operations, security, and service improvement</li>
          <li><strong>Legal Compliance:</strong> To meet regulatory and legal requirements in the pharmaceutical industry</li>
          <li><strong>Vital Interest:</strong> To protect health and safety when necessary</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. Information Usage</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Primary Purposes:</h3>
            <ul className="list-disc pl-4 text-sm space-y-1">
              <li>Service delivery and customer support</li>
              <li>Order processing and fulfillment</li>
              <li>Quality assurance and safety monitoring</li>
              <li>Regulatory compliance and reporting</li>
              <li>Research and development activities</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Secondary Purposes:</h3>
            <ul className="list-disc pl-4 text-sm space-y-1">
              <li>Marketing and promotional communications</li>
              <li>Website analytics and optimization</li>
              <li>Fraud prevention and security measures</li>
              <li>Business intelligence and strategic planning</li>
              <li>Training and educational purposes</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. Information Sharing and Disclosure</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-700 font-medium mb-2">
            We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>
        </div>
        
        <p className="mb-4">We may share your information with:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Authorized Service Providers:</strong> IT services, payment processors, logistics partners, and marketing agencies under strict confidentiality agreements</li>
          <li><strong>Healthcare Partners:</strong> Licensed healthcare providers, hospitals, and medical institutions for treatment coordination</li>
          <li><strong>Regulatory Bodies:</strong> Government agencies, health authorities, and regulatory organizations as required by law</li>
          <li><strong>Legal Compliance:</strong> Law enforcement, courts, or legal counsel when mandated by legal proceedings</li>
          <li><strong>Business Transitions:</strong> In case of merger, acquisition, or asset transfer, with appropriate data protection safeguards</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">6. Location Data and Background Access</h2>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-orange-800 mb-2">Location Services Notice</h3>
          <p className="text-sm text-orange-700 mb-2">
            Our mobile applications may collect precise location data, including when the app is running in the background or closed. This enables:
          </p>
          <ul className="list-disc pl-4 text-sm text-orange-700 space-y-1 mb-3">
            <li>Emergency service notifications and healthcare alerts</li>
            <li>Pharmacy location services and delivery optimization</li>
            <li>Compliance monitoring for controlled substances</li>
            <li>Epidemiological research and public health initiatives</li>
          </ul>
          <p className="text-xs text-orange-600">
            You can modify location permissions through your device settings. Some features may be unavailable if location access is denied.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">7. Data Security and Protection</h2>
        <p className="mb-4">We implement comprehensive security measures including:</p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Safeguards:</h3>
            <ul className="list-disc pl-4 text-sm space-y-1">
              <li>256-bit SSL/TLS encryption</li>
              <li>Multi-factor authentication systems</li>
              <li>Regular security audits and penetration testing</li>
              <li>Secure cloud infrastructure with backup systems</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Administrative Safeguards:</h3>
            <ul className="list-disc pl-4 text-sm space-y-1">
              <li>Role-based access controls</li>
              <li>Employee training and confidentiality agreements</li>
              <li>Incident response and breach notification procedures</li>
              <li>Regular compliance assessments</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">8. Data Retention</h2>
        <p className="mb-4">We retain your information for the following periods:</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-sm mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border-b text-left font-medium">Data Type</th>
                <th className="px-4 py-2 border-b text-left font-medium">Retention Period</th>
                <th className="px-4 py-2 border-b text-left font-medium">Legal Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Customer Records</td>
                <td className="px-4 py-2 border-b">7 years after last interaction</td>
                <td className="px-4 py-2 border-b">Regulatory compliance</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Health Information</td>
                <td className="px-4 py-2 border-b">As required by healthcare laws</td>
                <td className="px-4 py-2 border-b">Medical record regulations</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Marketing Data</td>
                <td className="px-4 py-2 border-b">Until consent withdrawal</td>
                <td className="px-4 py-2 border-b">Consent-based</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">9. Your Rights and Control</h2>
        <p className="mb-4">You have the following rights regarding your personal information:</p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Access Rights:</h3>
            <ul className="list-disc pl-4 text-sm text-blue-700 space-y-1">
              <li>Request copies of your data</li>
              <li>Information about processing purposes</li>
              <li>Details of data recipients</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Control Rights:</h3>
            <ul className="list-disc pl-4 text-sm text-green-700 space-y-1">
              <li>Correct inaccurate information</li>
              <li>Delete personal data (right to erasure)</li>
              <li>Restrict or object to processing</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-yellow-800 mb-2">How to Exercise Your Rights:</h3>
          <p className="text-sm text-yellow-700 mb-2">
            To exercise any of these rights, please contact our Data Protection Officer using the contact information below. We will respond within 30 days of receiving your request.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">10. International Transfers</h2>
        <p className="mb-4">
          If we transfer your data internationally, we ensure appropriate safeguards through standard contractual clauses, adequacy decisions, or other approved mechanisms as required by applicable data protection laws.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">11. Children's Privacy</h2>
        <p className="mb-4">
          Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors without parental consent. If you become aware that a child has provided us with personal information, please contact us immediately.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">12. Policy Updates</h2>
        <p className="mb-4">
          We may update this Privacy Policy to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes through email or website notice at least 30 days before the effective date.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">13. Contact Information</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">General Inquiries:</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Gluckscare Pharmaceuticals Private Limited</strong></p>
              <p className="text-sm text-gray-700 mb-2">
                Office No. T3-236, Plot No. 11, Golden-I, Block T3<br/>
                Techzone IV, Bishrakh, Greater Noida West<br/>
                Noida, Gautam Buddha Nagar<br/>
                Uttar Pradesh 201306, India
              </p>
              <p className="text-sm text-gray-700">
                📧 Email: <a href="mailto:care@gluckscare.com" className="text-blue-600 hover:underline">care@gluckscare.com</a><br/>
                📞 Phone: 993964486
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Data Protection Officer:</h3>
              <p className="text-sm text-gray-700 mb-2">
                📧 Email: <a href="mailto:privacy@gluckscare.com" className="text-blue-600 hover:underline">privacy@gluckscare.com</a><br/>
              
              </p>
              <h3 className="font-semibold text-gray-800 mb-3 mt-4">Regulatory Compliance:</h3>
              <p className="text-sm text-gray-700">
                📧 Email: <a href="mailto:compliance@gluckscare.com" className="text-blue-600 hover:underline">compliance@gluckscare.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            This Privacy Policy is governed by the laws of India and applicable international data protection regulations.
            <br/>
            Document Version: 2.0 | Last Review: [Date] | Next Review: [Date]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;