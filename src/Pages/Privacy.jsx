import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          PRIVACY & POLICY
        </h1>

        <p className="text-gray-700 text-sm leading-relaxed">
          This privacy policy describes how we collect, protect, and use the personally identifiable information 
          ("Personal Information"). You ("User") provide on the 
          website and any of its products or services (collectively, "Website" or "Services"). It also describes the choices available 
          to you regarding our use of your personal information and how you can access and update this information. This Policy does not 
          apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <h2 className="font-semibold text-gray-800">Collection of personal information</h2>
            <p className="text-gray-700 text-sm">
              We receive and store any information you knowingly provide to us when you publish content or fill any online forms 
              on the Website. You can choose not to provide us with certain information, but then you may not be able to take 
              advantage of some of the Website's features.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">Collection of non-personal information</h2>
            <p className="text-gray-700 text-sm">
              When you visit the Website, our servers automatically record information that your browser sends. This data may include 
              information such as your computer's IP address, browser type and version, operating system type and version, language 
              preferences, or the webpage you were visiting before you came to our Website. It also includes the pages of our Website 
              that you visit, the time spent on those pages, information you search for on our Website, access times and dates, and 
              other statistics.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">Use of collected information</h2>
            <p className="text-gray-700 text-sm">
              Any of the information we collect from you may be used to personalize your experience; improve our website; improve 
              customer service and respond to queries and emails of our customers; send notification emails such as password reminders, 
              updates, etc.; and run and operate our Website and Services. Non-personal information collected is used only to identify 
              potential cases of abuse and establish statistical information regarding Website traffic and usage. This statistical 
              information is not otherwise aggregated in such a way that would identify any particular user of the system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
