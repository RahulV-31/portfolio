import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, GraduationCap, BookOpen, FolderGit2, Mail, FileText, ChevronDown, Github } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    education: false,
    skills: false,
    projects: false,
    certifications: false,
    contact: false
  });
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsNavOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'skills', 'projects', 'certifications', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          setIsVisible(prev => ({
            ...prev,
            [section]: rect.top <= window.innerHeight * 0.75
          }));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [{
    id: 'home',
    label: 'Home',
    icon: Home
  }, {
    id: 'about',
    label: 'About',
    icon: User
  }, {
    id: 'education',
    label: 'Education',
    icon: GraduationCap
  }, {
    id: 'skills',
    label: 'Skills',
    icon: BookOpen
  }, {
    id: 'projects',
    label: 'Projects',
    icon: FolderGit2
  }, {
    id: 'certifications',
    label: 'Certifications',
    icon: FileText
  }, {
    id: 'contact',
    label: 'Contact',
    icon: Mail
  }];

  const projects = [{
    title: "Neural Network Ship Classification",
    shortDesc: "Developed and deployed a deep learning model to classify ships, enhancing maritime traffic monitoring.",
    fullDesc: "Built a deep learning model to classify ships using a Kaggle dataset. The project utilized Convolutional Neural Networks (CNNs) in TensorFlow to extract and classify image features. The model achieved 95% accuracy, significantly improving maritime traffic monitoring. A Flask web application was created to allow real-time ship classification by uploading images. This project demonstrates expertise in deep learning, image processing, and model deployment.",
    technologies: ["Deep Learning", "Flask", "Kaggle"],
    github: "https://github.com/RahulV-31/Neural-Networks-Ahoy-Cutting-edge-Ship-Classification-for-Maritime-Mastery"
  }, {
    title: "BBC Text Category Classification",
    shortDesc: "Implemented an NLP-based model to classify BBC news articles and deployed a real-time Flask web app.",
    fullDesc: "Developed a Natural Language Processing (NLP) model to classify BBC news articles into five categories: Business, Entertainment, Politics, Sport, and Tech. Applied text preprocessing techniques such as tokenization, stopword removal, and stemming. TF-IDF vectorization was used to extract features, and models like Naïve Bayes and Logistic Regression were evaluated. The best-performing model achieved 92% accuracy. A Flask web app was built for real-time classification, enabling users to enter text and receive instant predictions.",
    technologies: ["Python", "Scikit-learn", "NLP (TF-IDF)", "Flask", "HTML/CSS"],
    github: "https://github.com/RahulV-31/BBC-Text-Category-Classification"
  }, {
    title: "House Price Prediction",
    shortDesc: "Built a predictive model using regression techniques to estimate house prices based on key features.",
    fullDesc: "Created a machine learning model to predict house prices based on features like square footage, number of rooms, and location. Preprocessing steps included handling missing values, feature scaling, and encoding categorical variables. Implemented regression models including Linear Regression, Decision Tree, and Random Forest, with the final model achieving an R-squared value of 0.89. This project demonstrates expertise in predictive modeling and feature engineering, providing valuable insights for real estate investment.",
    technologies: ["Regression", "Real Estate", "Predictive Modeling"],
    github: "https://github.com/RahulV-31/House-Price-Prediction"
  }, {
    title: "Electricity Consumption Forecasting",
    shortDesc: "Forecasted electricity demand using historical consumption data and weather factors.",
    fullDesc: "Analyzed electricity consumption patterns to forecast future demand using time-series modeling. The dataset included historical energy usage along with weather parameters. Applied preprocessing techniques such as missing value imputation, feature scaling, and time-series decomposition. Evaluated forecasting models like ARIMA, SARIMA, and Random Forest Regression to predict consumption trends accurately. This project helps in optimizing energy distribution and reducing wastage, demonstrating expertise in time-series forecasting and predictive analytics.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/RahulV-31/Electricity-Consumption-Forecasting"
  }, {
    title: "Diabetes Prediction",
    shortDesc: "Developed a classification model to predict diabetes risk based on patient health data.",
    fullDesc: "Created a machine learning model to assess diabetes risk using patient health metrics such as blood pressure, glucose levels, and BMI. The dataset was cleaned and preprocessed, including handling missing values and feature scaling. Multiple classification models were tested, with the best model achieving an 85% accuracy. The project highlights predictive modeling in healthcare and includes a Flask web app where users can enter their health details to receive real-time predictions.",
    technologies: ["Machine Learning", "Classification", "Healthcare"],
    github: "https://github.com/your-username/diabetes-prediction"
  }, {
    title: "Superstore Sales Dashboard (Power BI)",
    shortDesc: "Designed an interactive Power BI dashboard for in-depth sales trend analysis.",
    fullDesc: "Built a Power BI dashboard to analyze Superstore sales data, focusing on revenue trends, product performance, and customer insights. Cleaned and transformed raw data for accurate visualization. Implemented interactive filters and slicers for dynamic exploration of key metrics such as total sales, profit margins, and region-wise performance. Used DAX for advanced calculations, helping businesses make data-driven decisions on inventory and pricing strategies.",
    technologies: ["Power BI", "DAX", "Data Cleaning", "Data Visualization"],
    github: ""
  }, {
    title: "Netflix Dashboard (Tableau)",
    shortDesc: "Created an interactive Tableau dashboard to visualize Netflix content trends and user engagement.",
    fullDesc: "Developed a Tableau dashboard to analyze Netflix's content library, examining trends in genre distribution, regional availability, and release patterns over time. Cleaned and structured the dataset for consistency. Created interactive visualizations, including filters and drill-down capabilities, to explore various content categories. The insights help understand audience preferences and content evolution, making it a valuable tool for media analytics.",
    technologies: ["Tableau", "Data Cleaning", "Data Visualization"],
    github: ""
  }];


  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div whileHover={{
              scale: 1.05
            }} className="text-xl font-bold text-primary">
                Portfolio
              </motion.div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {navItems.map(item => <motion.button key={item.id} whileHover={{
              scale: 1.05
            }} className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors" onClick={() => scrollToSection(item.id === 'home' ? 'intro' : item.id)}>
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </motion.button>)}
            </div>

            <button className="md:hidden p-2" onClick={() => setIsNavOpen(!isNavOpen)}>
              {isNavOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isNavOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="md:hidden bg-white">
            {navItems.map(item => <button key={item.id} className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => scrollToSection(item.id === 'home' ? 'intro' : item.id)}>
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </button>)}
          </motion.div>}
      </nav>

      <section id="intro" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-orange-500 via-purple-500 to-blue-500 opacity-50 blur-3xl"></div>
        </div>
        <div className="relative z-10 glass-effect p-8 rounded-2xl max-w-4xl mx-4">
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
              Hi and Hello!
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              I am Rahul Veggilam, a passionate Data Science Enthusiast
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Expertise in Machine Learning, Deep Learning, and Data Analytics
            </p>
            <a href="resume.pdf" download className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              <span className="mr-2">Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section-padding bg-gray-50">
        <motion.div initial={{
        opacity: 0
      }} animate={isVisible.about ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto">
          <h2 className="heading text-center">About Me</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed">
            <p>
              I am a data science enthusiast currently pursuing my Master of Science in Data Science at B.K. Birla College, Mumbai University (Expected 2025). My passion lies in uncovering insights from data, building predictive models, and leveraging AI for real-world applications.
            </p>
            <p>
              I have hands-on experience with Python, SQL, Machine Learning, Deep Learning, and Data Visualization tools. I have worked on projects involving predictive analytics, image classification, NLP, and data-driven insights, and I am always eager to explore new opportunities, internships, and collaborations in the field of Data Science.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="education" className="section-padding">
        <motion.div initial={{
        opacity: 0
      }} animate={isVisible.education ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto">
          <h2 className="heading text-center">Education</h2>
          <div className="mt-12 space-y-8">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold flex items-center">
                <span className="mr-2">📌</span>
                Master of Science in Data Science
              </h3>
              <p className="text-gray-600">B.K. Birla College, Mumbai University | 2023-2025</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold flex items-center">
                <span className="mr-2">📌</span>
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-gray-600">B.K. Birla College, Mumbai University | 2020-2023</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold flex items-center">
                <span className="mr-2">📌</span>
                Higher Secondary Certificate (HSC) – Science
              </h3>
              <p className="text-gray-600">B.K. Birla College, Maharashtra State Board | 2018-2020</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold flex items-center">
                <span className="mr-2">📌</span>
                Secondary School Certificate (SSC)
              </h3>
              <p className="text-gray-600">Sacred Heart School, Maharashtra State Board | 2017-2018</p>
            </div>
          </div>
        </motion.div>
      </section>

      
      <section id="skills" className="section-padding bg-gray-50">
        <motion.div initial={{
        opacity: 0
      }} animate={isVisible.skills ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto">
          <h2 className="heading text-center">Skills</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Python", "SQL", "R", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau", "Excel", "Regression Models", "Classification Models", "Supervised Learning", "Unsupervised Learning", "Predictive Analytics", "TensorFlow", "Keras", "Convolutional Neural Networks (CNN)", "Recurrent Neural Networks (RNN)", "Long Short-Term Memory (LSTMs)", "OpenCV", "Flask"].map(skill => <motion.div key={skill} className="glass-effect p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300 cursor-pointer" whileHover={{
            y: -5
          }} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3
          }}>
                <p className="font-semibold">{skill}</p>
              </motion.div>)}
          </div>
        </motion.div>
      </section>

      
      <section id="projects" className="section-padding">
        <motion.div initial={{
        opacity: 0
      }} animate={isVisible.projects ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto">
          <h2 className="heading text-center">Projects</h2>
          <div className="mt-12 space-y-8">
            {projects.map(project => <motion.div key={project.title} className="glass-effect p-6 rounded-xl" whileHover={{
            scale: 1.02
          }}>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.shortDesc}</p>
                
                {expandedProject === project.title ? <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} className="mt-4 space-y-4">
                    <p className="text-gray-700">{project.fullDesc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map(tech => <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tech}
                        </span>)}
                    </div>
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline mt-4">
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>}
                    <button onClick={() => setExpandedProject(null)} className="block w-full text-center text-gray-600 mt-4 hover:text-primary">
                      Show Less
                    </button>
                  </motion.div> : <button onClick={() => setExpandedProject(project.title)} className="inline-flex items-center text-primary hover:underline">
                    View Details
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>}
              </motion.div>)}
          </div>
        </motion.div>
      </section>

      
      <section id="certifications" className="section-padding bg-gray-50">
        <motion.div initial={{
        opacity: 0
      }} animate={isVisible.certifications ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto">
          <h2 className="heading text-center">Certifications</h2>
          <div className="mt-12 space-y-8">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold">LnT Machine Learning Certification</h3>
              <p className="text-gray-600">May 2024</p>
              <p className="mt-2">Supervised & Unsupervised Learning, Regression Models</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold">Google Developers & SmartInternz Externship</h3>
              <p className="text-gray-600">March – May 2024</p>
              <p className="mt-2">Neural Network Ahoy: Ship Classification using Deep Learning</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold">LinkedIn Learning Data Analyst Certification</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {["The Non-Technical Skills of Effective Data Scientists", "Learning Excel: Data Analysis", "Data Literacy: Exploring and Describing Data", "Learning Data Analytics (Parts 1 & 2)", "Excel Statistics Essential Training", "Predictive Analytics Essential Training: Data Mining", "Power BI Essential Training", "Learning Data Visualization", "Tableau Essential Training", "SQL: Data Reporting and Analysis", "R Essential Training: Wrangling and Visualizing Data", "Data Cleaning in Python Essential Training"].map(course => <p key={course} className="text-gray-600">✔ {course}</p>)}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      
      <section id="contact" className="section-padding bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible.contact ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading text-center text-4xl font-bold mb-16">Contact Me</h2>
          
          <div className="glass-effect p-8 rounded-xl mb-12">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input h-40 resize-none"
                  placeholder="Your message"
                  required
                />
              </div>
              
              <a
                href={`mailto:rahulveggilam@gmail.com?subject=Portfolio Contact: ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (formData.name && formData.email && formData.message) {
                    window.location.href = `mailto:rahulveggilam@gmail.com?subject=Portfolio Contact: ${formData.name}&body=${encodeURIComponent(formData.message)}\n\nFrom: ${formData.email}`;
                    setFormData({ name: '', email: '', message: '' });
                  }
                }}
                className="form-button inline-block text-center"
              >
                Send Message
              </a>
            </form>
          </div>

          <div className="flex justify-center space-x-8">
            <motion.a
              href="https://linkedin.com/in/rahul-veggilam"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span className="ml-2">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/RahulV-31"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <Github className="w-6 h-6" />
              <span className="ml-2">GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
