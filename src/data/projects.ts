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
        image: "https://private-user-images.githubusercontent.com/123837152/391663919-f4843b56-aefb-47ae-957d-9e155aefb9c3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM1NzY4NjQsIm5iZiI6MTczMzU3NjU2NCwicGF0aCI6Ii8xMjM4MzcxNTIvMzkxNjYzOTE5LWY0ODQzYjU2LWFlZmItNDdhZS05NTdkLTllMTU1YWVmYjljMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwN1QxMzAyNDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mOTMwZGZiYmQ4MDZkNzcxYTJlMDMwZWIyZGMyYTgwNGUyZTJmZDcyYjhkYmMyNTQ4MmI4MTMzZjNiNzk2NGRkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.MEnZsXW-nc41BGsc8hjgdteceVuNUMhql31zEXcVGoE",
        tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
        links: {
          demo: "https://www.linkedin.com/posts/asad-khan-173900267_artificialintelligence-deeplearning-machinelearning-activity-7269536878490492928-gW3n?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/asad8210/deepfake-video-detection"
        }
      },
      {
        title: "Brain Tumor Detection",
        description: "Medical imaging AI system that assists in detecting and classifying brain tumors from MRI scans.",
        image: "https://th.bing.com/th/id/OIP.Y_C18N0qXPg8Xrh81SfyjQHaEK?rs=1&pid=ImgDetMain",
        tags: ["Python", "PyTorch", "Medical Imaging", "CNN"],
        links: {
          demo: "https://www.linkedin.com/posts/asad-khan-173900267_braintumordetection-artificialintelligence-activity-7270698777378783232-J64r?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/asad8210/brain-tumor-detection"
        }
      },
      {
        title: "Email Spam Detection",
        description: "Machine learning system for detecting spam emails based on text content and sender patterns.",
        image: "https://th.bing.com/th/id/OIP.-EHra7AA4gsRxQPzvNET8gHaEK?rs=1&pid=ImgDetMain",
        tags: ["Python", "NLP", "Scikit-Learn", "Text Classification"],
        links: {
          demo: "https://example.com",
          github: "https://github.com/asad8210/email-spam-detection"
        }
      },
      {
        title: "Healthcare Study and Analysis",
        description: "Predictive modeling system for healthcare data analysis and disease prediction using ML algorithms.",
        image: "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/08/Heathcare-analytics.jpg",
        tags: ["Python", "Pandas", "Scikit-Learn", "Data Analysis"],
        links: {
          demo: "https://example.com",
          github: "https://github.com/asad8210/healthcare-analysis"
        }
      },
      {
        title: "Stock Market Price Prediction",
        description: "AI-powered system that predicts stock prices using historical market data and time-series forecasting.",
        image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "LSTM", "Data Science", "Finance"],
        links: {
          demo: "https://example.com",
          github: "https://github.com/asad8210/stock-market-prediction"
        }
      },
      {
        title: "Movie Recommendation System",
        description: "Content-based and collaborative filtering system recommending movies based on user preferences.",
        image: "https://media.licdn.com/dms/image/v2/D4D22AQEkU8a2JcobVA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1709562449267?e=1736380800&v=beta&t=m3uIOBHuhjQSkLollQeJsi9cOvyjGT4cAA62q1cqElE",
        tags: ["Python", "Flask", "ML", "Recommendation System"],
        links: {
          demo: "https://www.linkedin.com/posts/asad-khan-173900267_innovation-management-humanresources-activity-7170424622151024641-pW4A?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/asad8210/movie-recommendation-system"
        }
      },
      {
        title: "Iris Classifier",
        description: "Simple ML model that classifies iris flowers based on petal and sepal dimensions.",
        image: "https://media.licdn.com/dms/image/v2/D4D22AQEFP6V-84xIkg/feedshare-shrink_1280/feedshare-shrink_1280/0/1710012158758?e=1736380800&v=beta&t=TncMEqQt22it-2H43rPZoquZofI_OZX4K5LIY3cxwRY",
        tags: ["Python", "Scikit-Learn", "Data Science", "ML"],
        links: {
          demo: "https://www.linkedin.com/posts/asad-khan-173900267_trending-trend-inteligenciaartificial-activity-7172310842766475264-v9sb?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/asad8210/iris-classifier"
        }
      },
      {
        title: "House Price Prediction",
        description: "ML-based system predicting house prices based on features like area, location, and condition.",
        image: "https://media.licdn.com/dms/image/v2/D4D22AQEkN0KKLQkq4A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1710324438577?e=1736380800&v=beta&t=60_zt78Y5nejX_4nVJyhG8wXinc2etvjSmFC8jN1qCc",
        tags: ["Python", "ML", "Scikit-Learn", "Data Analysis"],
        links: {
          demo: "https://www.linkedin.com/posts/asad-khan-173900267_trending-trend-inteligenciaartificial-activity-7173620642813095936-qDv_?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/asad8210/house-price-prediction"
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
      },
      {
        title: "Text Sentiment Analyzer",
        description: "Sentiment analysis tool for extracting emotional context from text data using natural language processing.",
        image: "https://www.altexsoft.com/media/2018/09/sentiment_analysis.jpg",
        tags: ["Python", "NLP", "Flask", "TextBlob"],
        links: {
          demo: "https://example.com",
          github: "https://github.com/asad8210/text-sentiment-analyzer"
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
        image: "https://private-user-images.githubusercontent.com/123837152/366564849-5a241ca7-eb92-40d9-9b5d-3287b3745446.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM1NzcyMTYsIm5iZiI6MTczMzU3NjkxNiwicGF0aCI6Ii8xMjM4MzcxNTIvMzY2NTY0ODQ5LTVhMjQxY2E3LWViOTItNDBkOS05YjVkLTMyODdiMzc0NTQ0Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwN1QxMzA4MzZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hYWQ0YWY1NGNhM2U4NGY1MjRkZjdhYjFhZDk0MWE0MmEzMGY1NmMxOTJkMWIxMTc3Njg5YzJiYTgyNDIxMjgwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.mk_Xj22Eig72fcGfKIJKOllPUA99WN3k93KDQ4j7zY0",
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
          github: "https://github.com/asad8210/Campus-Food-Ordering"
        }
      },
      {
        title: "E-Learning Platform",
        description: "An E-Learning platform with student dashboard for course selection, exam management, and academic requirements tracking.",
        image: "https://private-user-images.githubusercontent.com/123837152/372225301-13e8e313-5326-4304-bfd7-c195eafe0d87.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM1NzcyODEsIm5iZiI6MTczMzU3Njk4MSwicGF0aCI6Ii8xMjM4MzcxNTIvMzcyMjI1MzAxLTEzZThlMzEzLTUzMjYtNDMwNC1iZmQ3LWMxOTVlYWZlMGQ4Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwN1QxMzA5NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNjcyZGZlYzAzZjBkYjAzZjZkYmFmZDE3MDJlMTg2YTcwMzgzN2YwYzFmM2YxY2Q4NzI0MjZmMjk1MDdjMWIzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.EtSjqHOPwhXOziks80SOSdoQ19J5snR5Ha6re9XrwMU",
        tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        links: {
          demo: "https://www.linkedin.com/posts/asad-khan-173900267_webdeveloper-webdevelopment-webdesign-activity-7246622295211859970-1U5r?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/asad8210/E-Learning"
        }
      }
    ]
  }
];