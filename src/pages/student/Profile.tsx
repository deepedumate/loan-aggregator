import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  FileText,
  Edit2,
  Save,
} from 'lucide-react';
import HeaderBar from '../../components/student/HeaderBar';
import { currentStudent, formatDate } from '../../data/user';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(currentStudent);

  const handleSave = () => {
    // TODO: Save profile data to backend
    setIsEditing(false);
    console.log('Saving profile:', profile);
  };

  return (
    <>
      <HeaderBar title="Profile Settings" subtitle="Manage your personal information" />

      <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
        {/* Profile Header */}
        <section className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={`${profile.firstName} ${profile.lastName}`}
                className="w-24 h-24 rounded-2xl object-cover ring-4 ring-white dark:ring-slate-700 shadow-lg"
              />
              <button className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-r from-primary to-accent rounded-full text-white shadow-lg hover:shadow-xl transition-all">
                <Edit2 size={14} />
              </button>
            </div>

            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl text-slate-800 dark:text-slate-100">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">{profile.email}</p>
              
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Phone size={16} />
                  {profile.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin size={16} />
                  {profile.address.city}, {profile.address.country}
                </div>
              </div>
            </div>

            <button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                isEditing
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {isEditing ? (
                <>
                  <Save size={18} />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit2 size={18} />
                  Edit Profile
                </>
              )}
            </button>
          </div>

          {/* Profile Completion */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Profile Completion
              </span>
              <span className="text-sm font-bold text-primary dark:text-primary-light">
                {profile.profileCompletion}%
              </span>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${profile.profileCompletion}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <section className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-6">
              <User className="text-primary dark:text-primary-light" size={20} />
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-slate-100">
                Personal Information
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={`${profile.firstName} ${profile.lastName}`}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={profile.dateOfBirth}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                  Nationality
                </label>
                <input
                  type="text"
                  value={profile.nationality}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                  Address
                </label>
                <textarea
                  value={`${profile.address.street}, ${profile.address.city}, ${profile.address.state}, ${profile.address.country} - ${profile.address.pincode}`}
                  disabled={!isEditing}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50 resize-none"
                />
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-6">
              <Mail className="text-accent dark:text-accent-light" size={20} />
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-slate-100">
                Contact Information
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={profile.email}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profile.phone}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                />
              </div>
            </div>
          </section>

          {/* Educational Background */}
          <section className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-green-600 dark:text-green-400" size={20} />
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-slate-100">
                Educational Background
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                  Degree
                </label>
                <input
                  type="text"
                  value={profile.education.degree}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                  Institution
                </label>
                <input
                  type="text"
                  value={profile.education.institution}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                    Graduation Year
                  </label>
                  <input
                    type="number"
                    value={profile.education.graduationYear}
                    disabled={!isEditing}
                    className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                    Percentage
                  </label>
                  <input
                    type="number"
                    value={profile.education.percentage}
                    disabled={!isEditing}
                    className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {profile.education.gre && (
                  <div>
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                      GRE
                    </label>
                    <input
                      type="number"
                      value={profile.education.gre}
                      disabled={!isEditing}
                      className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                    />
                  </div>
                )}
                {profile.education.ielts && (
                  <div>
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                      IELTS
                    </label>
                    <input
                      type="number"
                      value={profile.education.ielts}
                      disabled={!isEditing}
                      className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Target Study */}
          <section className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="text-amber-600 dark:text-amber-400" size={20} />
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-slate-100">
                Target Study Program
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                  Course
                </label>
                <input
                  type="text"
                  value={profile.targetStudy.course}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                  University
                </label>
                <input
                  type="text"
                  value={profile.targetStudy.university}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    value={profile.targetStudy.country}
                    disabled={!isEditing}
                    className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                    Intake
                  </label>
                  <input
                    type="text"
                    value={profile.targetStudy.intake}
                    disabled={!isEditing}
                    className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-1">
                  Estimated Cost
                </label>
                <input
                  type="text"
                  value={`₹${(profile.targetStudy.estimatedCost / 100000).toFixed(1)}L`}
                  disabled
                  className="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 opacity-50"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
