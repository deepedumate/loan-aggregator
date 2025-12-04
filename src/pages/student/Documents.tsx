import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  FileText,
  CheckCircle,
  Clock,
  Download,
  Trash2,
  Eye,
} from 'lucide-react';
import HeaderBar from '../../components/student/HeaderBar';
import { applications } from '../../data/applications';

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedDate: string;
  status: 'verified' | 'pending' | 'rejected';
  applicationId: string;
}

export default function Documents() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 'doc-1',
      name: 'Passport Copy',
      type: 'PDF',
      size: '2.4 MB',
      uploadedDate: '2024-01-20',
      status: 'verified',
      applicationId: 'app-001',
    },
    {
      id: 'doc-2',
      name: 'Academic Transcripts',
      type: 'PDF',
      size: '1.8 MB',
      uploadedDate: '2024-01-18',
      status: 'verified',
      applicationId: 'app-001',
    },
    {
      id: 'doc-3',
      name: 'Bank Statements',
      type: 'PDF',
      size: '3.2 MB',
      uploadedDate: '2024-01-22',
      status: 'pending',
      applicationId: 'app-002',
    },
    {
      id: 'doc-4',
      name: 'Income Proof',
      type: 'PDF',
      size: '1.5 MB',
      uploadedDate: '2024-01-15',
      status: 'verified',
      applicationId: 'app-003',
    },
  ]);

  const pendingDocuments = documents.filter((doc) => doc.status === 'pending');
  const verifiedDocuments = documents.filter((doc) => doc.status === 'verified');

  return (
    <>
      <HeaderBar
        title="Documents"
        subtitle={`${documents.length} documents uploaded • ${pendingDocuments.length} pending review`}
      />

      <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
        {/* Upload Section */}
        <section className="glass-card p-6 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-600">
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            >
              <Upload className="text-white" size={28} />
            </motion.div>
            <h3 className="font-display font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">
              Upload Documents
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Drag and drop files here or click to browse
            </p>
            <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg transition-all">
              Choose Files
            </button>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">
              Supported formats: PDF, JPG, PNG • Max size: 10 MB
            </p>
          </div>
        </section>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Verified</p>
                <p className="font-display font-bold text-xl text-slate-800 dark:text-slate-100">
                  {verifiedDocuments.length}
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                <Clock size={20} className="text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Pending</p>
                <p className="font-display font-bold text-xl text-slate-800 dark:text-slate-100">
                  {pendingDocuments.length}
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <FileText size={20} className="text-primary dark:text-primary-light" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Total</p>
                <p className="font-display font-bold text-xl text-slate-800 dark:text-slate-100">
                  {documents.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Documents List */}
        <section className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
          <h2 className="font-display font-bold text-xl text-slate-800 dark:text-slate-100 mb-6">
            All Documents
          </h2>

          <div className="space-y-3">
            {documents.map((doc, index) => {
              const application = applications.find((app) => app.id === doc.applicationId);

              return (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600">
                      <FileText size={24} className="text-primary dark:text-primary-light" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-100 truncate">
                        {doc.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {doc.type} • {doc.size}
                        </span>
                        {application && (
                          <>
                            <span className="text-slate-300 dark:text-slate-600">•</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {application.lenderName}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      {doc.status === 'verified' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">
                          <CheckCircle size={14} />
                          Verified
                        </span>
                      )}
                      {doc.status === 'pending' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-semibold">
                          <Clock size={14} />
                          Pending
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 ml-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      title="Preview"
                    >
                      <Eye size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      title="Download"
                    >
                      <Download size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Required Documents */}
        <section className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
          <h2 className="font-display font-bold text-xl text-slate-800 dark:text-slate-100 mb-4">
            Commonly Required Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Passport Copy',
              'Academic Transcripts',
              'Bank Statements (6 months)',
              'Income Proof',
              'Admission Letter',
              'English Proficiency Test',
              'Resume/CV',
              'Reference Letters',
            ].map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
              >
                <FileText size={16} className="text-slate-400" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{doc}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
