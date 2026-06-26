import React from 'react';
import { ArrowLeft, FileText, Building, CreditCard, GraduationCap, Calendar, Shield, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';
const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/">
            <button
            className="flex items-center cursor-pointer space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
            </button>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white text-center">
            <FileText className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
            <p className="text-blue-100">Penguin Academy Singapore</p>
          </div>

          <div className="p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">1. Ownership & Governance</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Penguin Academy operates under Penguin Swim School Pte. Ltd. (UEN: 202215517W). All certification courses, training materials, and operational decisions are managed and governed by Penguin Swim School.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">2. Course Enrolment & Payments</h2>
                </div>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• All course enrolments are confirmed only upon full payment.</li>
                  <li>• All fees paid are strictly non-refundable and non-transferable, regardless of participant withdrawal, absence, or failure to complete any part of the course.</li>
                  <li>• No refunds will be issued for changes in personal circumstances, including medical conditions, scheduling conflicts, or inability to attend.</li>
                </ul>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">3. Attendance & Certification Requirements</h2>
                </div>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Participants must complete all required training days and fulfil any assessment or attachment criteria to receive certification.</li>
                  <li>• Penguin Academy reserves the right to withhold certification if minimum requirements are not met, even if full payment has been made.</li>
                </ul>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">4. Course Changes & Cancellations by Penguin Academy</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Penguin Academy reserves the right to postpone, reschedule, or cancel any course due to unforeseen circumstances (e.g. instructor availability, minimum participant requirements, venue issues). In such cases, participants will be offered an alternative date or course, but no refunds will be issued.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">5. Intellectual Property</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  All course materials, training content, and digital resources (including the Penguin Swim Coach Handbook) are the intellectual property of Penguin Swim School and Penguin Academy. They may not be copied, distributed, or shared without written permission.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">6. Code of Conduct</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  All participants are expected to behave professionally and respectfully during training. Penguin Academy reserves the right to remove any participant who breaches conduct expectations, without refund.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">7. Acceptance of Terms</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  By enrolling in any Penguin Academy course, participants acknowledge that they have read, understood, and agreed to abide by these Terms & Conditions.
                </p>
              </div>

            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Company:</strong> Penguin Swim School Pte. Ltd.</p>
                <p><strong>UEN:</strong> 202215517W</p>
                <p><strong>Phone:</strong> +65 8955 3399</p>
                <p><strong>Email:</strong> swim@penguinswimschool.sg</p>
                <p><strong>Location:</strong> Singapore</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;