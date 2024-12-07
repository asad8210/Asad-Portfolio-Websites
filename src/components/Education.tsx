import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { education } from '../data/education';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Education</h2>
          <p className="mt-4 text-xl text-gray-600">
            My academic journey and achievements
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Education Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-semibold">{education.degree}</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  {education.duration}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  {education.location}
                </div>
              </div>

              <p className="text-gray-600">{education.description}</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <h4 className="text-lg font-medium">Achievements</h4>
                </div>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full mr-2" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Courses */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h4 className="text-xl font-medium">Key Courses</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {education.courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    <span className="text-gray-700">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Virtual Internship Experience */}
          <div className="space-y-6 mt-12">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-600" />
              <h4 className="text-xl font-medium">Virtual Internship Experience</h4>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="text-lg font-semibold">Paid Internships</h5>
                <ul className="space-y-2">
                  {education.virtualInternshipExperience.paid.map((internship, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full mr-2" />
                      <span className="text-gray-600">{internship}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold">Unpaid Internships</h5>
                <ul className="space-y-2">
                  {education.virtualInternshipExperience.unpaid.map((internship, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full mr-2" />
                      <span className="text-gray-600">{internship}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6 mt-12">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-600" />
              <h4 className="text-xl font-medium">Certifications</h4>
            </div>
            <ul className="space-y-2">
              {education.certifications.map((certification, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full mr-2" />
                  <span className="text-gray-600">{certification}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
