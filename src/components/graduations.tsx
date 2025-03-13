import { Download } from 'lucide-react';
import React from 'react';

type GraduationFile = {
  id: number;
  title: string;
  description: string;
  fileType: 'pdf' | 'image';
  fileUrl: string;
  previewUrl?: string;
};

const graduationFiles: GraduationFile[] = [
  {
    id: 1,
    title: 'שם תואר',
    description: 'הסבר קצר על הלמידה בתואר',
    fileType: 'pdf',
    fileUrl: '/files/graduation1.pdf',
    previewUrl: '/mair.jpg',
  },
  {
    id: 2,
    title: 'שם תואר',
    description: 'הסבר קצר על הלמידה בתואר',
    fileType: 'pdf',
    fileUrl: '/files/graduation1.pdf',
    previewUrl: '/mair.jpg',
  },
  {
    id: 3,
    title: 'שם תואר',
    description: 'הסבר קצר על הלמידה בתואר',
    fileType: 'pdf',
    fileUrl: '/files/graduation1.pdf',
    previewUrl: '/mair.jpg',
  },
];

const GraduationFullPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">   

      {graduationFiles.map((file) => (
        <section key={file.id} className="w-full py-12 border-b border-blue-300">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-4">
            {/* Info Column – appears first in DOM so in RTL desktop it appears on the right */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-12">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                {file.title}
              </h2>
              <p className="text-xl text-gray-700 mb-6">{file.description}</p>
              

            </div>
            {/* Image Column – on mobile it appears on top */}
            <div className="w-full md:w-1/2">
              {file.fileType === 'pdf' ? (
                <img
                  src={file.previewUrl || '/default-pdf-preview.jpg'}
                  alt={file.title}
                  className="w-full h-auto rounded"
                />
              ) : (
                <img
                  src={file.fileUrl}
                  alt={file.title}
                  className="w-full h-auto rounded"
                />
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default GraduationFullPage;
