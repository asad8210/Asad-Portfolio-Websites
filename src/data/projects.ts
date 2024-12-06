import { ProjectCategory } from '../types/project';

export const projectCategories: ProjectCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Deep Learning",
    description: "Advanced artificial intelligence and deep learning solutions using neural networks and machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    subProjects: [
      {
        title: "DeepFake Detection",
        description: "Advanced AI system that detects manipulated videos using deep learning and computer vision techniques.",
        image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
        links: {
          demo: "https://www.linkedin.com/posts/asad-khan-173900267_artificialintelligence-deeplearning-machinelearning-activity-7269536878490492928-gW3n?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/asad8210/deepfake-video-detection"
        }
      },
      {
        title: "Brain Tumor Detection",
        description: "Medical imaging AI system that assists in detecting and classifying brain tumors from MRI scans.",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "PyTorch", "Medical Imaging", "CNN"],
        links: {
          demo: "https://www.linkedin.com/posts/asad-khan-173900267_braintumordetection-artificialintelligence-activity-7270698777378783232-J64r?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/asad8210/brain-tumor-detection"
        }
      },
      {
        title: "Virtual AI Assistant",
        description: "Intelligent virtual assistant with natural language processing capabilities for task automation and scheduling.",
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "NLP", "React", "FastAPI", "WebSocket"],
        links: {
          demo: "https://example.com",
          github: "https://github.com"
        }
      },
      {
        title: "AI Chatbot",
        description: "Advanced conversational AI system with natural language understanding and contextual responses.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "BERT", "TensorFlow", "NLP"],
        links: {
          demo: "https://www.linkedin.com/in/asad-khan-173900267/",
          github: "https://github.com/asad8210"
        }
      }
    ]
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    description: "Comprehensive web applications with modern front-end and back-end technologies.",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=800",
    subProjects: [
      {
        title: "Student Dashboard",
        description: "A comprehensive full-stack web application for managing student activities, assignments, and progress tracking with real-time updates.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
        links: {
          demo: "https://www.linkedin.com/in/asad-khan-173900267/",
          github: "https://github.com/asad8210"
        }
      },
      {
        title: "University Chatbot",
        description: "An AI-powered chatbot that assists students with degree-related queries, course selection, and academic requirements.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "NLP", "React", "FastAPI", "MongoDB"],
        links: {
          demo: "https://www.linkedin.com/posts/asad-khan-173900267_webdevelopment-universityproject-csvtu-activity-7256938458168893440-aRtx?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/asad8210"
        }
      },
      {
        title: "Campus Food Ordering",
        description: "A mobile-first platform for students to order food from university cafeterias with real-time order tracking and dietary preferences.",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800",
        tags: ["React Native", "Node.js", "MongoDB", "Stripe", "Redux"],
        links: {
          demo: "https://www.linkedin.com/posts/asad-khan-173900267_webdevelopment-universityproject-csvtu-activity-7256938458168893440-aRtx?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/asad8210"
        }
      },
      {
        title: "E-Learning Course with Student DashBoard Websites Development",
        description: "An E-Learning Course with Student DashBoard to facilities to Provide course selection, and Exam and Time table and academic requirements.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "NLP", "React", "FastAPI", "MongoDB"],
        links: {
          demo: "https://www.linkedin.com/posts/asad-khan-173900267_webdeveloper-webdevelopment-webdesign-activity-7246622295211859970-1U5r?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/asad8210/E-Learning"
        }
      }
    ]
  }
];