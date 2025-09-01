import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
const ProjectDetailModal = ({ project, onClose }) => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (project?.detailedDescription && typeof project.detailedDescription === 'string' && project.detailedDescription.endsWith('.md')) {
      setIsLoading(true);
      fetch(project.detailedDescription)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(text => {
          setMarkdownContent(text);
          setIsLoading(false);
        })
        .catch(error => {
          console.error("Failed to fetch markdown:", error);
          setMarkdownContent("Failed to load project details.");
          setIsLoading(false);
        });
    } else {
      // Fallback for old string/array format
      setMarkdownContent(Array.isArray(project?.detailedDescription) ? project.detailedDescription.join('\n') : project?.detailedDescription || '');
      setIsLoading(false);
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative max-w-2xl w-full bg-gray-900 rounded-2xl p-8 card-glow animate-fade-in max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="sticky top-0 right-0 float-right -mt-4 -mr-4 text-gray-400 hover:text-white transition-colors bg-gray-800 rounded-full p-1 z-10"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
        
        <div className="prose prose-invert prose-headings:text-pink-400 prose-strong:text-white">
          {isLoading ? <p>Loading...</p> : <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>}
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map(tech => (
            <span key={tech} className="bg-gray-700 text-pink-400 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectDetailModal;