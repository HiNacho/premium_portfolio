export interface Project {
  id: string;
  title: string;
  category: 'Data Analytics' | 'Machine Learning' | 'NLP' | 'Computer Vision' | 'Automation';
  tags: string[];
  summary: string;
  image: string;
  tech: string[];
  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
  details: {
    overview: string;
    problem: string;
    dataset: string;
    methodology: string;
    architecture: string;
    toolsUsed: string[];
    visualizations: { title: string; desc: string; type: string }[];
    challenges: string;
    lessonsLearned: string;
    results: string;
    impact: string;
    codeSnippet?: {
      language: string;
      code: string;
    };
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  category: 'AI' | 'Machine Learning' | 'Healthcare' | 'Data Analytics' | 'SQL' | 'Career' | 'Automation' | 'NLP';
  summary: string;
  date: string;
  readTime: string;
  thumbnail: string;
  content: string;
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  description: string;
}

export interface Certification {
  provider: string;
  credential: string;
  year: string;
  url: string;
  logoType: 'aws' | 'deeplearning' | 'wqu' | 'ibm' | 'google';
}

export interface ExperienceItem {
  id: string;
  category: 'Internships' | 'Projects' | 'Leadership' | 'Volunteer' | 'Research';
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Victor Iheanacho",
    title: "Data Analyst & AI Engineer",
    brandName: "Nacho.AI",
    email: "hellotonachoai@gmail.com",
    location: "Lagos, Nigeria",
    experienceYears: "2+",
    availability: "Open to opportunities",
    resumeUrl: "/resume.pdf",
    calendlyUrl: "https://calendly.com",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com/HiNacho",
      email: "mailto:hellotonachoai@gmail.com",
      kaggle: "https://www.kaggle.com/hinacho"
    }
  },
  
  projects: [
    {
      id: "lassa-tracer",
      title: "Lassa Tracer",
      category: "Data Analytics",
      tags: ["Data Analytics", "Healthcare AI", "Dashboards"],
      summary: "Predictive surveillance dashboard for Lassa Fever in Nigeria (2020-2025) using time series & ML models.",
      image: "/img/lasa_tracer.png", // fallback styling will be handled
      tech: ["Python", "D3.js", "React", "Scikit-Learn"],
      links: {
        github: "https://github.com/HiNacho/lassa_dashboard",
        demo: "https://youtu.be/VbnFKrIWyR0",
        caseStudy: "/projects/lassa-tracer"
      },
      details: {
        overview: "Lassa Tracer is a real-time data-driven surveillance system designed to track, analyze, and predict outbreaks of Lassa Fever across endemic states in Nigeria. Integrating historical epidemiological data with environmental factors, the platform provides actionable insights for healthcare authorities to allocate resources preemptively.",
        problem: "Lassa Fever is a severe zoonotic virus endemic to West Africa. Outbreak responses are historically reactive, suffering from delayed reporting and an absence of predictive modeling, resulting in high mortality rates and overwhelmed localized clinics.",
        dataset: "Collected in partnership with public epidemiological bulletins (2020-2025). The data contains localized weekly case numbers, climatic inputs (rainfall levels, relative humidity), and demographic density estimates.",
        methodology: "Developed an ETL pipeline in Python to clean and aggregate raw epidemiological feeds. Employed SARIMAX (Seasonal AutoRegressive Integrated Moving Average with eXogenous factors) and Random Forest Regressors to model outbreak probabilities based on climate lags (e.g., rainfall 4 weeks prior directly driving rodent population growth).",
        architecture: "The application uses a serverless FastAPI backend serving analytical endpoints, a PostgreSQL database for structured disease records, and a Next.js / D3.js interactive dashboard overlaying risk heats maps on top of Nigerian geographic boundaries.",
        toolsUsed: ["FastAPI", "PostgreSQL", "Pandas", "Scikit-learn", "D3.js", "Next.js"],
        visualizations: [
          { title: "Epidemiological Heat Map", desc: "Interactive map plotting geographic density of cases categorized by local government areas (LGAs).", type: "Choropleth Map" },
          { title: "Predictive Incidence Curve", desc: "Line chart plotting predicted cases vs. actuals with confidence intervals up to 8 weeks out.", type: "Line Chart" }
        ],
        challenges: "Epidemiological records had missing cells due to clinical disruption in remote facilities. This was solved by applying K-Nearest Neighbor (KNN) imputation backed by historical averages of identical seasonal windows.",
        lessonsLearned: "Climatic predictors are highly correlated but require lag shifting (e.g. humidity leads disease spike by exactly 3 weeks). Simple models often outperformed overly complex deep neural networks given the size of historical samples.",
        results: "Achieved an R² of 0.84 on next-month incidence rate predictions. The models successfully identified early spikes in Edo and Ondo states ahead of official clinical declarations.",
        impact: "Allowed local health agencies to preposition personal protective equipment (PPE) and therapeutic ribavirin 14 days before peak outbreaks, lowering case fatality ratios within testing centers by 18%.",
        codeSnippet: {
          language: "python",
          code: `import pandas as pd
from statsmodels.tsa.statespace.sarimax import SARIMAX

def train_lassa_predictor(data, exogenous_features):
    # Setup SARIMAX with environmental factors
    model = SARIMAX(
        data['cases'],
        exog=data[exogenous_features],
        order=(1, 1, 1),
        seasonal_order=(1, 1, 0, 52) # Weekly seasonality
    )
    results = model.fit(disp=False)
    return results`
        }
      }
    },
    {
      id: "ai-medical-assistant",
      title: "AI Medical Assistant",
      category: "NLP",
      tags: ["NLP", "Healthcare AI", "Transformers"],
      summary: "NLP-powered assistant that helps doctors extract insights from patient conversations and notes.",
      image: "/img/medical_assistant.png",
      tech: ["Python", "Transformers", "FastAPI", "Hugging Face"],
      links: {
        github: "https://github.com/HiNacho/Pulse_Point_Intelligence",
        demo: "https://youtu.be/i1S8tlOGb6k",
        caseStudy: "/projects/ai-medical-assistant"
      },
      details: {
        overview: "The AI Medical Assistant is a specialized clinical NLP system that processes unstructured clinical notes, patient-doctor transcriptions, and medical histories. It extracts symptoms, diagnoses, and treatments automatically, mapping them to standard clinical vocabularies like ICD-10 and SNOMED-CT.",
        problem: "Clinicians spend up to 40% of their day typing reports and documenting consultations. This administrative burden reduces the time spent on direct patient care and leads to burnout.",
        dataset: "De-identified medical logs, clinical summaries, and transcriptions annotated for named entities (symptoms, drugs, dosages, body parts).",
        methodology: "Fine-tuned a BioBERT (Bidirectional Encoder Representations from Transformers for Biomedical Text) model on a Named Entity Recognition (NER) task. Designed relation extraction layers to link symptoms with diagnoses and prescribe drugs with specific dosage quantities.",
        architecture: "Containerized Python API using FastAPI and Hugging Face pipelines. Employs a custom asynchronous queue to handle batch text transcription and processing tasks concurrently.",
        toolsUsed: ["PyTorch", "Hugging Face", "BioBERT", "FastAPI", "Docker", "NLTK"],
        visualizations: [
          { title: "Entity Linking Graph", desc: "Visual node map linking extracted symptoms to corresponding diagnoses and drugs.", type: "Network Graph" },
          { title: "Extraction Accuracy by Category", desc: "F1 score breakdown comparing accuracy across drugs, anatomy, symptoms, and procedures.", type: "Horizontal Bar Chart" }
        ],
        challenges: "Medical notes are full of abbreviations (e.g., 'bid', 'prn', 'hx') and colloquial descriptions. Solved by pre-processing notes with a clinical expander dictionary before model inference.",
        lessonsLearned: "General-purpose language models fail on niche medical jargon. Using models pre-trained on medical corpora (like BioBERT or clinicalBERT) is necessary to achieve high accuracy.",
        results: "Achieved an F1 score of 92.4% on Named Entity Recognition and 88.1% on entity relation mapping, reducing documentation times by over 50%.",
        impact: "Allowed pilot practitioners to generate structured clinical reports directly from audio transcriptions, freeing up an estimated 2 hours per day per doctor.",
        codeSnippet: {
          language: "python",
          code: `from transformers import AutoTokenizer, AutoModelForTokenClassification
from transformers import pipeline

def load_clinical_ner():
    # Load BioBERT fine-tuned for clinical NER
    tokenizer = AutoTokenizer.from_pretrained("dmis-lab/biobert-v1.1")
    model = AutoModelForTokenClassification.from_pretrained("path/to/fine-tuned-biobert-ner")
    ner_pipeline = pipeline("ner", model=model, tokenizer=tokenizer, aggregation_strategy="simple")
    return ner_pipeline`
        }
      }
    },
    {
      id: "cdc-diabetes-dashboard",
      title: "CDC Diabetes Dashboard",
      category: "Data Analytics",
      tags: ["Data Analytics", "Healthcare AI", "Dashboards"],
      summary: "Interactive health intelligence dashboard analyzing national diabetes prevalence and patient indicators.",
      image: "/img/cdc_dashboard.jpg",
      tech: ["Power BI", "SQL", "Excel", "DAX"],
      links: {
        github: "https://github.com/HiNacho/Diabetes_CDC_data",
        demo: "https://youtu.be/G6QosSTyA7E",
        caseStudy: "/projects/cdc-diabetes-dashboard"
      },
      details: {
        overview: "An interactive epidemiological dashboard designed using public health records to highlight behavioral patterns, age factors, and socio-economic indicators associated with diabetes, supporting preventative health outreach.",
        problem: "Public health planners lack digestible visual reports to identify which demographic groups require targeted diabetes education and screening interventions.",
        dataset: "CDC Behavioral Risk Factor Surveillance System (BRFSS) survey results spanning over 250,000 respondents.",
        methodology: "Normalized survey records using SQL, computed complex DAX indicators in Power BI to measure risk ratios, and established dynamic drill-down dashboards.",
        architecture: "Standalone Power BI dashboard linked to a cloud SQL database repository containing aggregated CDC survey answers.",
        toolsUsed: ["Power BI", "SQL Server", "DAX", "Excel"],
        visualizations: [
          { title: "Risk Factor Matrix", desc: "A cross-filter matrix showing correlation between physical inactivity, smoking, and diabetes rates.", type: "Correlation Heatmap" }
        ],
        challenges: "Handling highly nested survey response codes. Solved by designing a clear dimensional model in SQL before loading records into BI engines.",
        lessonsLearned: "Color schemes in dashboards must be carefully designed for accessibility (color-blind friendly) when dealing with public health data.",
        results: "Consolidated a complex 250+ question survey into a single, cohesive 3-page interactive dashboard. Highlighted a clear risk spike in specific age brackets combined with high blood pressure.",
        impact: "Used by local community advocates to justify funding for neighborhood-level fitness and clinical screening programs.",
        codeSnippet: {
          language: "sql",
          code: `-- SQL query to categorize age groups and aggregate diabetes metrics
SELECT 
    CASE 
        WHEN Age BETWEEN 1 AND 4 THEN '18-29'
        WHEN Age BETWEEN 5 AND 8 THEN '30-49'
        ELSE '50+'
    END AS AgeGroup,
    COUNT(*) as TotalRespondents,
    SUM(CASE WHEN Diabetes = 2 THEN 1 ELSE 0 END) as DiabeticCount
FROM cdc_brfss_data
GROUP BY AgeGroup;`
        }
      }
    },
    {
      id: "marketing-campaign-analysis",
      title: "Direct Marketing Campaign Analysis",
      category: "Data Analytics",
      tags: ["Data Analytics", "Statistics"],
      summary: "Statistical analysis and customer segmentation to optimize direct banking marketing strategies.",
      image: "/img/marketing.png",
      tech: ["R", "Python", "Tableau", "Pandas"],
      links: {
        github: "https://github.com/HiNacho/Analyst_lab/tree/main/week%205",
        demo: "https://drive.google.com/file/d/1QZmjj8POdGwSPE9OFZqwrilpwNpoe2jj/view?usp=drive_link",
        caseStudy: "/projects/marketing-campaign-analysis"
      },
      details: {
        overview: "A statistical analytics project evaluating banking campaign effectiveness, highlighting key customer segments to maximize subscription rates for term deposits.",
        problem: "Direct telephone marketing is costly. Indiscriminate cold-calling causes customer annoyance and low conversion rates (under 10%), leading to wasted marketing budget.",
        dataset: "Historical banking campaign records containing customer demographics, contact history, and campaign outcomes.",
        methodology: "Conducted RFM (Recency, Frequency, Monetary) segmentation. Utilized Logistic Regression and Decision Trees in Python to find features that drive conversion.",
        architecture: "Offline analytics pipeline rendering dashboard summaries in Tableau.",
        toolsUsed: ["Python", "Pandas", "Scikit-learn", "Tableau", "Statsmodels"],
        visualizations: [
          { title: "Customer Conversion Funnel", desc: "A segmented view showing conversion success based on previous call duration and contact history.", type: "Funnel Chart" }
        ],
        challenges: "Phone duration is a strong predictor of campaign success, but it is only known after the call starts. Resolved by training a model that excludes duration to evaluate pre-call customer profiles.",
        lessonsLearned: "Customer financial stability indices (e.g., employment variation rate) hold significant weight in predicting term deposit interest.",
        results: "Identified segments representing 20% of the customer base that accounted for 75% of positive conversions.",
        impact: "Recommended targeting criteria that would raise conversion rates from 11% to 28% while cutting marketing call volume by 45%.",
        codeSnippet: {
          language: "python",
          code: `# Logistic Regression modeling using Statsmodels
import statsmodels.api as sm

def analyze_conversion(df):
    X = df[['age', 'balance', 'campaign', 'previous']]
    y = df['subscribed']
    X = sm.add_constant(X)
    model = sm.Logit(y, X).fit()
    return model.summary()`
        }
      }
    },
    {
      id: "agrivision30",
      title: "AgriVision30",
      category: "Computer Vision",
      tags: ["Computer Vision", "Deep Learning", "Mobile App"],
      summary: "Mobile computer vision app that identifies 30 different fruit varieties in real-time with high accuracy.",
      image: "/img/agrivision30.png",
      tech: ["Python", "PyTorch", "FastAPI", "ONNX"],
      links: {
        github: "https://github.com/HiNacho/AgriVision",
        demo: "https://youtu.be/UHBJ25DsnYU",
        caseStudy: "/projects/agrivision30"
      },
      details: {
        overview: "AgriVision30 is a mobile-first computer vision system that classifies 30 different classes of agricultural fruits and crop outputs. Sourced for local distribution and farm processing, it uses an optimized convolutional neural network (CNN) model running locally on-device or served via FastAPI, assisting workers in automated sorting, grading, and quality control.",
        problem: "Manual crop and fruit classification in sorting facilities is slow, prone to human fatigue, and delays shipping logistics. Automated optical sorters exist but are prohibitively expensive for local smallholder farming collectives.",
        dataset: "A curated collection of over 15,000 high-resolution images across 30 fruit categories, pre-processed with color normalization and geometric augmentations to match varying farm lighting conditions.",
        methodology: "Developed and trained a MobileNetV3 CNN in PyTorch for lightweight, fast inference. Fine-tuned with transfer learning, utilized learning rate decay and dropout layers to prevent overfitting on localized crop features, and compiled to ONNX for fast deployment.",
        architecture: "FastAPI microservice backend serving PyTorch predictions, connected to a mobile app client that triggers on-device camera inputs.",
        toolsUsed: ["PyTorch", "OpenCV", "FastAPI", "ONNX", "Python"],
        visualizations: [
          { title: "Model Accuracy & Confusion Matrix", desc: "Correlation matrix demonstrating low error rates across similarly shaped fruits (e.g. orange vs. grapefruit).", type: "Confusion Matrix" }
        ],
        challenges: "Fruits present varying shapes, blemishes, and degrees of ripeness, along with extreme shadows in sorting bins. Resolved by using heavy brightness, scale, and color jitter augmentations during training.",
        lessonsLearned: "Lightweight models like MobileNet or ShuffleNet are essential for mobile deployments. Heavy ResNet architectures are too slow for real-time mobile camera feeds.",
        results: "Achieved a classification accuracy score of 93.6% on the test set, with model inference times of under 45ms per frame.",
        impact: "Allows sorting facilities to implement automated quality checks using affordable tablet mounts, accelerating packing times by 40%.",
        codeSnippet: {
          language: "python",
          code: `# PyTorch mobile crop classification inference script
import torch
import torchvision.transforms as transforms
from PIL import Image

def predict_fruit(image_path, model_path):
    # Load MobileNetV3 model
    model = torch.load(model_path, map_location='cpu')
    model.eval()

    # Preprocess image to match training dimensions
    transform = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    
    image = Image.open(image_path)
    tensor = transform(image).unsqueeze(0)
    
    with torch.no_grad():
        outputs = model(tensor)
        _, predicted = torch.max(outputs, 1)
    return predicted.item()`
        }
      }
    },
    {
      id: "daily-price-list-downloader",
      title: "Daily Price List Downloader",
      category: "Automation",
      tags: ["Automation", "Email API", "Data Pipelines"],
      summary: "Automated system that connects to Gmail, scans for specific daily market price sheets, extracts PDF attachments, and stores them locally.",
      image: "/img/daily_price_list_downloader.png",
      tech: ["Python", "IMAP", "Gmail API", "OS API"],
      links: {
        github: "https://github.com/HiNacho/Email_downloader",
        demo: "https://youtu.be/jt2afxMiz9E",
        caseStudy: "/projects/daily-price-list-downloader"
      },
      details: {
        overview: "Daily Price List Downloader is an automated python micro-utility that automatically logs into a configured email account via secure IMAP or Gmail API, filters messages matching specific subject keywords (e.g. 'DAILY PRICE LIST'), extracts the latest PDF market sheets from financial institutions, and organizes them sequentially inside local download directories.",
        problem: "Victor receives stock price lists from brokers every trading afternoon. Manually opening the email app, searching for the message, downloading the PDF, and sorting it into local archive folders takes valuable time and is easily forgotten.",
        dataset: "Email inbox data streams containing headers, attachments, and transmission timestamps.",
        methodology: "Developed a lightweight, scheduled script utilizing python's IMAP library for server connections and email/pypdf libraries to parse MIME messages. Implemented config-driven keyword filters and download path directories to make it customizable.",
        architecture: "Desktop automation tool served locally, utilizing background scheduling via cron or systemd.",
        toolsUsed: ["Python", "IMAPlib", "Gmail API", "dotenv", "email"],
        visualizations: [
          { title: "Automation Pipeline Flow", desc: "Step-by-step flowchart from initial scheduler trigger to email search, file download, and archive indexing.", type: "Activity Diagram" }
        ],
        challenges: "Email login credentials must be secure, and network disruptions during download tasks can result in partial or corrupt PDF archives. Solved by storing tokens securely in environment variables and writing transaction check blocks that verify the file size after download completion.",
        lessonsLearned: "Using app-specific passwords and environment variables is crucial to avoid storing plain-text passwords in configuration profiles.",
        results: "Fully automated the daily download pipeline, scanning and extracting attachments in under 2.5 seconds per trigger.",
        impact: "Saves 10-15 minutes of manual sorting every trading day, guaranteeing that daily stock sheets are archived and ready for analysis.",
        codeSnippet: {
          language: "python",
          code: `# Secure IMAP email PDF downloader script
import imaplib
import email
import os

def download_daily_pdf(username, password, folder, keyword):
    # Connect to IMAP server
    mail = imaplib.IMAP4_SSL("imap.gmail.com")
    mail.login(username, password)
    mail.select("inbox")
    
    # Search for emails matching the keyword
    status, data = mail.search(None, f'SUBJECT "{keyword}"')
    mail_ids = data[0].split()
    
    if not mail_ids:
        return "No emails matching subject found."
        
    latest_id = mail_ids[-1]
    status, data = mail.fetch(latest_id, "(RFC822)")
    raw_email = data[0][1]
    
    # Parse message contents
    msg = email.message_from_bytes(raw_email)
    for part in msg.walk():
        if part.get_content_maintype() == 'multipart':
            continue
        if part.get('Content-Disposition') is None:
            continue
            
        filename = part.get_filename()
        if filename and filename.endswith('.pdf'):
            filepath = os.path.join(folder, filename)
            with open(filepath, 'wb') as f:
                f.write(part.get_payload(decode=True))
            return f"Downloaded {filename} to {filepath}"
    return "No PDF attachment discovered."`
        }
      }
    },
    {
      id: "stock-market-analysis",
      title: "Stock Market Analysis",
      category: "Data Analytics",
      tags: ["Data Analytics", "Financial Tech", "Dashboards"],
      summary: "Interactive financial analytics dashboard analyzing company equities, sector performance, moving averages, MACD, and price forecasting models.",
      image: "/img/stock_market_analysis.png",
      tech: ["Python", "Pandas", "Plotly", "Streamlit"],
      links: {
        github: "https://github.com/HiNacho/stock_market-analysis",
        demo: "https://youtu.be/yJv3TKHmUhQ",
        caseStudy: "/projects/stock-market-analysis"
      },
      details: {
        overview: "Stock Market Analysis is an interactive equity analytics application that processes historical stock price streams. It enables users to select specific company ticker symbols, compute key technical indicators (Moving Averages, MACD, Drawdown ratios, volatility spreads), and render visual candlestick charts, return histograms, and forecasting models to guide financial decisions.",
        problem: "Retail investors and stock analysts lack a clean, self-hosted interactive tool to quickly slice market records, run custom moving average windows, and visualize risk metrics without signing up for expensive subscription models.",
        dataset: "Historical market listings containing daily transaction records, closing prices, and trading volumes.",
        methodology: "Designed financial indicators (exponential moving averages, MACD signals) using Pandas, built custom interactive charts using Plotly for smooth zoom/pan gestures, and orchestrated the dashboard using Streamlit.",
        architecture: "Self-hosted analytical client built in Python, connecting to historical price feeds and caching calculation loops for speed.",
        toolsUsed: ["Python", "Pandas", "Plotly", "Streamlit", "NumPy"],
        visualizations: [
          { title: "Moving Average Overlay & MACD", desc: "Interactive candlestick chart displaying closing prices, 20/50 day moving average lines, and MACD divergence histograms.", type: "Candlestick Chart & Divergence Plot" }
        ],
        challenges: "Calculating technical metrics across thousands of historical records dynamically can create performance lags on standard hosting plans. Resolved by caching computation frames (using Streamlit cache decorators) so that changing indicators doesn't trigger full recalculations.",
        lessonsLearned: "Interactive vector plots (like Plotly) are far superior to static matplotlib charts for financial data, allowing users to zoom in on specific daily candlestick bounds easily.",
        results: "Enables complete portfolio audits and indicator comparisons in under 0.5 seconds, running calculation pipelines on-the-fly.",
        impact: "Provides users with a robust, accessible financial playground to test moving average crossover strategies and monitor risk spreads.",
        codeSnippet: {
          language: "python",
          code: `# Financial indicators calculation pipeline using Pandas
import pandas as pd
import numpy as np

def calculate_indicators(df, short_window=12, long_window=26, signal_window=9):
    # Compute simple & exponential moving averages
    df['MA_20'] = df['Close'].rolling(window=20).mean()
    df['MA_50'] = df['Close'].rolling(window=50).mean()
    
    # Compute MACD line
    ema_short = df['Close'].ewm(span=short_window, adjust=False).mean()
    ema_long = df['Close'].ewm(span=long_window, adjust=False).mean()
    df['MACD'] = ema_short - ema_long
    
    # Compute Signal Line
    df['Signal_Line'] = df['MACD'].ewm(span=signal_window, adjust=False).mean()
    df['MACD_Histogram'] = df['MACD'] - df['Signal_Line']
    
    # Volatility metric (rolling std)
    df['Volatility'] = df['Close'].pct_change().rolling(window=20).std() * np.sqrt(252)
    return df`
        }
      }
    }
  ],

  blogs: [
    {
      slug: "how-ai-saved-my-anniversary",
      title: "How AI saved my Anniversary",
      category: "Career",
      summary: "What happens when technology stops helping us search and starts helping us act? One forgotten anniversary becomes the perfect test of an AI personal assistant. The result reveals how agentic AI could remove friction from everyday life.",
      date: "Jul 11, 2026",
      readTime: "4 min read",
      thumbnail: "/img/blog_anniversary.png",
      externalLink: "https://medium.com/@HiNacho/the-night-ai-saved-my-anniversary-7bb044579369",
      content: `### How AI Saved My Anniversary

What happens when technology stops helping us search and starts helping us act? One forgotten anniversary becomes the perfect test of an AI personal assistant. The result reveals how agentic AI could remove friction from everyday life.

Read the full story on Medium: [How AI saved my Anniversary](https://medium.com/@HiNacho/the-night-ai-saved-my-anniversary-7bb044579369).`
    },
    {
      slug: "family-group-chat-prompting-ai",
      title: "What a Family Group Chat Can Teach Us About Prompting AI",
      category: "Career",
      summary: "Ever noticed how chaotic family group chats are? Turns out, the same communication breakdowns happen when we prompt AI — and fixing them requires the same clarity and structure.",
      date: "Jul 11, 2026",
      readTime: "5 min read",
      thumbnail: "/img/blog_family_chat.jpg",
      externalLink: "https://medium.com/@HiNacho/what-a-family-group-chat-can-teach-us-about-prompting-ai-9da49b2c6e28",
      content: `### What a Family Group Chat Can Teach Us About Prompting AI

Ever noticed how chaotic family group chats are? Turns out, the same communication breakdowns happen when we prompt AI — and fixing them requires the same clarity and structure.

Read the full story on Medium: [What a Family Group Chat Can Teach Us About Prompting AI](https://medium.com/@HiNacho/what-a-family-group-chat-can-teach-us-about-prompting-ai-9da49b2c6e28).`
    },
    {
      slug: "local-ai-privacy-rules",
      title: "Local AI: Your Privacy, Your Rules",
      category: "Privacy & AI",
      summary: "What if your AI never needed the internet? Explore how local AI processing keeps your data on your device — no cloud, no leaks, just privacy by design.",
      date: "Jul 11, 2026",
      readTime: "4 min read",
      thumbnail: "/img/blog_local_ai.png",
      externalLink: "https://medium.com/@HiNacho/local-ai-your-privacy-your-rules-e954adbede5c",
      content: `### Local AI: Your Privacy, Your Rules

What if your AI never needed the internet? Explore how local AI processing keeps your data on your device — no cloud, no leaks, just privacy by design.

Read the full story on Medium: [Local AI: Your Privacy, Your Rules](https://medium.com/@HiNacho/local-ai-your-privacy-your-rules-e954adbede5c).`
    },
    {
      slug: "you-might-not-need-cameras-to-make-movies",
      title: "You Might Not Need Cameras to Make Movies Anymore",
      category: "AI & Film",
      summary: "AI filmmaking tools are evolving fast — from generating actors to scripting entire scenes. Could the future of cinema be completely virtual? Here's what's already possible.",
      date: "Jul 11, 2026",
      readTime: "5 min read",
      thumbnail: "/img/blog_no_cameras.jpg",
      externalLink: "https://medium.com/@HiNacho/you-might-not-need-cameras-to-make-movies-anymore-b398c2b84ef0",
      content: `### You Might Not Need Cameras to Make Movies Anymore

AI filmmaking tools are evolving fast — from generating actors to scripting entire scenes. Could the future of cinema be completely virtual? Here's what's already possible.

Read the full story on Medium: [You Might Not Need Cameras to Make Movies Anymore](https://medium.com/@HiNacho/you-might-not-need-cameras-to-make-movies-anymore-b398c2b84ef0).`
    },
    {
      slug: "1986-ghost-ai-stealing-children-brains",
      title: "The 1986 Ghost: Is AI Stealing Our Children's Brains?",
      category: "AI & Education",
      summary: "From calculator panic to AI anxiety — every generation fears new tools will ruin young minds. But what if AI is less of a threat and more of a cognitive exoskeleton?",
      date: "Jul 11, 2026",
      readTime: "5 min read",
      thumbnail: "/img/blog_1986_ghost.jpg",
      externalLink: "https://medium.com/@HiNacho/the-1986-ghost-is-ai-stealing-our-childrens-brains-a7f88998eb2d",
      content: `### The 1986 Ghost: Is AI Stealing Our Children's Brains?

From calculator panic to AI anxiety — every generation fears new tools will ruin young minds. But what if AI is less of a threat and more of a cognitive exoskeleton?

Read the full story on Medium: [The 1986 Ghost: Is AI Stealing Our Children's Brains?](https://medium.com/@HiNacho/the-1986-ghost-is-ai-stealing-our-childrens-brains-a7f88998eb2d).`
    },
    {
      slug: "surviving-ai-search-apocalypse",
      title: "The Day the Links Died: Surviving the AI Search Apocalypse",
      category: "AI & SEO",
      summary: "SEO traffic is collapsing as AI answers replace clicks. What happens when zero-click searches become the norm — and how creators can adapt to a world where Google sends no one to your site.",
      date: "Jul 11, 2026",
      readTime: "5 min read",
      thumbnail: "/img/blog_links_died.jpg",
      externalLink: "https://medium.com/@HiNacho/the-day-the-links-died-surviving-the-ai-search-apocalypse-c80f93797472",
      content: `### The Day the Links Died: Surviving the AI Search Apocalypse

SEO traffic is collapsing as AI answers replace clicks. What happens when zero-click searches become the norm — and how creators can adapt to a world where Google sends no one to your site.

Read the full story on Medium: [The Day the Links Died: Surviving the AI Search Apocalypse](https://medium.com/@HiNacho/the-day-the-links-died-surviving-the-ai-search-apocalypse-c80f93797472).`
    }
  ],

  education: [
    {
      period: "2026",
      title: "AWS AI & ML Scholars Program",
      institution: "AWS Academy",
      description: "Advanced study of machine learning, cloud-native deployments, deep learning models, and AWS SageMaker pipelines."
    },
    {
      period: "2025",
      title: "Applied Data Science Lab",
      institution: "WorldQuant University",
      description: "Hands-on project-based program building predictive models, linear regressions, time-series, and interactive dashboards."
    },
    {
      period: "2026 - Date",
      title: "Data Analytics Programs",
      institution: "AnalystLab Africa / Codveda",
      description: "Intensive training in Advanced SQL, Python for Data Science, Excel analytics, and Power BI visualization systems."
    },
    {
      period: "2017 - 2026",
      title: "Doctor of Medicine (MBBS)",
      institution: "Ambrose Alli University, Ekpoma",
      description: "Clinical medicine, pathology, pharmacology, and patient care. Founded my interest in AI solutions for clinical workflows."
    },
    {
      period: "2011 - 2017",
      title: "Secondary Education",
      institution: "St. Peter's College, Agbara",
      description: "Science focus with awards in physics and mathematics."
    }
  ],

  certifications: [
    {
      provider: "AWS / Udacity",
      credential: "AWS AI & ML Scholars",
      year: "2026",
      url: "/img/aws_ai_ml_scholars.jpg",
      logoType: "aws"
    },
    {
      provider: "SPaRK Academy",
      credential: "Sprint AI Training (Deep Learning)",
      year: "2025",
      url: "/img/spark_academy_2025.png",
      logoType: "spark"
    },
    {
      provider: "WorldQuant University",
      credential: "Applied Data Science Lab Certificate",
      year: "2025",
      url: "https://www.credly.com/badges/e38049e7-d997-4379-aaa5-d63343cab536/linked_in_profile",
      logoType: "wqu"
    },
    {
      provider: "freeCodeCamp",
      credential: "Data Analysis with Python",
      year: "2025",
      url: "https://freecodecamp.org/certification/fcc62a551c5-bafd-45fb-ab22-7143b877246c/data-analysis-with-python-v7",
      logoType: "freecodecamp"
    },
    {
      provider: "Genomac Institute",
      credential: "Bioinformatics Course 201",
      year: "2025",
      url: "/img/genomac_bioinformatics_2025.png",
      logoType: "genomac"
    }
  ],

  experience: [
    {
      id: "exp-1",
      category: "Internships",
      role: "Data Analyst Intern",
      organization: "Codveda Technologies",
      period: "2026",
      bullets: [
        "Built automated analytical pipelines in Python to process client transactional records, saving 12 hours of manual excel work per week.",
        "Designed interactive client dashboards tracking customer acquisition costs and retention rates.",
        "Optimized client database queries, cutting report generation runtimes by 30%."
      ]
    },
    {
      id: "exp-5",
      category: "Internships",
      role: "Data Analyst Intern",
      organization: "AnalystLab",
      period: "2025",
      bullets: [
        "Designed and built clean automation pipelines and ETL scripts that save hours of operational work.",
        "Optimized slow client database queries and built indexes, reducing report generation runtimes.",
        "Built interactive dashboards and reports tracking key business metrics and KPIs."
      ]
    },
    {
      id: "exp-6",
      category: "Internships",
      role: "Machine Learning Intern",
      organization: "EpochZero",
      period: "2024 - 2025",
      bullets: [
        "Optimized machine learning models using hyperparameter tuning, reducing training time and improving accuracy.",
        "Enhanced machine learning model accuracy by implementing advanced algorithms and feature engineering.",
        "Evaluated the performance of different algorithms on benchmark datasets to guide selection."
      ]
    },
    {
      id: "exp-2",
      category: "Research",
      role: "Machine Learning Researcher",
      organization: "SPaRK Academy",
      period: "2025",
      bullets: [
        "Fine-tuned MedSAM (Segment Anything Model for Medicine) for glioblastoma brain tumor image segmentation.",
        "Preprocessed and curated neuroimaging datasets, implementing normalization, resizing, and data augmentation pipelines.",
        "Evaluated segmentation accuracy using domain-relevant metrics including Dice Coefficient, IoU, Precision, and Recall."
      ]
    },

    {
      id: "exp-4",
      category: "Leadership",
      role: "Medical Informatics Coordinator",
      organization: "Student Clinical Association",
      period: "2021 - 2023",
      bullets: [
        "Coordinated training workshops introducing clinical informatics, patient-data systems, and basic analytical tools to medical students.",
        "Led a student taskforce designing digital databases for managing clinical rotations, eliminating paper spreadsheets.",
        "Organized panel discussions linking healthcare professionals and technology builders in Nigeria."
      ]
    }
  ],

  testimonials: [
    {
      name: "Victor Iheanacho",
      role: "AI Developer & Medical Doctor",
      company: "Personal Endorsement",
      quote: "Bridging the gap between clinical medicine and engineering rigor. I build clean, optimized, and automated machine learning pipelines, clinical databases, and agentic AI systems designed to remove friction from everyday workflows.",
      avatar: "VI"
    }
  ],

  techStack: {
    programming: [
      { name: "Python", logo: "Py" },
      { name: "SQL", logo: "SQL" }
    ],
    frameworks: [
      { name: "LangChain", logo: "LC" }
    ],
    machineLearning: [
      { name: "PyTorch", logo: "Tor" },
      { name: "Scikit-learn", logo: "Sk" },
      { name: "Hugging Face", logo: "HF" }
    ],
    cloud: [
      { name: "Docker", logo: "Doc" },
      { name: "Git & GitHub", logo: "Git" }
    ],
    databases: [
      { name: "PostgreSQL", logo: "PG" },
      { name: "MySQL", logo: "My" },
      { name: "MongoDB", logo: "DB" }
    ],
    visualization: [
      { name: "Excel", logo: "Xl" },
      { name: "Tableau", logo: "Tab" }
    ]
  }
};
