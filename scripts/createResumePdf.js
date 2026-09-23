import fs from 'fs';
import path from 'path';

function createResumePdf() {
  // Pure PDF 1.4 multi-page document generator with clickable annotations and ATS formatting
  // Page size: Letter (612 x 792 pt), Margins: left=40, right=572, width=532

  const pages = [];
  let currentPageOps = [];
  let currentPageAnnots = [];

  const startNewPage = () => {
    if (currentPageOps.length > 0) {
      pages.push({ ops: currentPageOps, annots: currentPageAnnots });
    }
    currentPageOps = [];
    currentPageAnnots = [];
  };

  const drawLine = (y, x1 = 40, x2 = 572) => {
    currentPageOps.push(`0.75 w 0.2 0.2 0.2 RG ${x1} ${y} m ${x2} ${y} l S`);
  };

  const drawText = (font, size, x, y, text, color = [0, 0, 0]) => {
    // Escape PDF special characters: ( ) \
    const escaped = text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    const [r, g, b] = color;
    currentPageOps.push(`BT /${font} ${size} Tf ${r} ${g} ${b} rg 1 0 0 1 ${x} ${y} Tm (${escaped}) Tj ET`);
  };

  const addLink = (x1, y1, x2, y2, url) => {
    currentPageAnnots.push(`<< /Type /Annot /Subtype /Link /Rect [${Math.round(x1)} ${Math.round(y1)} ${Math.round(x2)} ${Math.round(y2)}] /Border [0 0 0] /A << /Type /Action /S /URI /URI (${url}) >> >>`);
  };

  // Text wrap utility
  const wrapText = (text, maxWidth, charWidth) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = testLine.length * charWidth;
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  };

  // ================= PAGE 1 =================
  let curY = 755;

  // Header (Centered)
  drawText('F1', 19, 210, curY, 'Shivam Kesarwani');
  curY -= 15;
  
  // Contact row with clickable links
  const contactY = curY;
  drawText('F2', 8.5, 90, contactY, '+91-9336991973');
  addLink(90, contactY - 2, 160, contactY + 9, 'tel:+919336991973');

  drawText('F2', 8.5, 168, contactY, '|');

  drawText('F2', 8.5, 178, contactY, 'shivamkesarwani2107@gmail.com');
  addLink(178, contactY - 2, 320, contactY + 9, 'mailto:shivamkesarwani2107@gmail.com');

  drawText('F2', 8.5, 328, contactY, '|');

  drawText('F2', 8.5, 338, contactY, 'LinkedIn', [0, 0.35, 0.75]);
  addLink(338, contactY - 2, 375, contactY + 9, 'https://www.linkedin.com/in/shivam-kesarwani-634162353');

  drawText('F2', 8.5, 383, contactY, '|', [0, 0, 0]);

  drawText('F2', 8.5, 393, contactY, 'Portfolio', [0, 0.35, 0.75]);
  addLink(393, contactY - 2, 435, contactY + 9, 'https://github.com/shivamkesarwani2107-hash');

  drawText('F2', 8.5, 443, contactY, '|', [0, 0, 0]);

  drawText('F2', 8.5, 453, contactY, 'GitHub', [0, 0.35, 0.75]);
  addLink(453, contactY - 2, 490, contactY + 9, 'https://github.com/shivamkesarwani2107-hash');

  curY -= 16;

  // SECTION 1: SUMMARY
  drawText('F1', 10.5, 40, curY, 'SUMMARY', [0, 0.35, 0.75]);
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  const summaryText = 'MERN Stack Developer with 6 months of internship experience designing and developing full-stack web applications using React.js, Node.js, Express.js and MongoDB. Hands-on experience in RESTful API development, authentication and authorization, CRUD operations, database integration, responsive UI engineering, API integration, debugging and deployment. Worked on applications involving AI-powered features, payment processing, Redis caching, third-party APIs and production workflows. Strong understanding of client-server architecture, asynchronous programming, reusable components and Git-based software development.';
  const summaryLines = wrapText(summaryText, 532, 4.75);
  for (const line of summaryLines) {
    drawText('F2', 8.5, 40, curY, line);
    curY -= 10.5;
  }
  curY -= 4;

  // SECTION 2: TECHNICAL SKILLS
  drawText('F1', 10.5, 40, curY, 'TECHNICAL SKILLS', [0, 0.35, 0.75]);
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  const technicalSkills = [
    { label: 'Languages: ', val: 'JavaScript (ES6+), HTML5, CSS3' },
    { label: 'Frontend: ', val: 'React.js, React Router DOM, Tailwind CSS, TanStack Query, Axios, Responsive Web Design, Component-Based Architecture' },
    { label: 'Backend: ', val: 'Node.js, Express.js, RESTful APIs, API Development, API Integration, CRUD Operations, Middleware, Asynchronous Programming' },
    { label: 'Database & Caching: ', val: 'MongoDB, Mongoose, Redis, Data Modeling, Database Operations, Query Handling, Server-Side Caching' },
    { label: 'AI & Integration: ', val: 'OpenRouter AI, AI API Integration, AI-Powered Features, Prompt-Based AI Workflows, Third-Party API Integration' },
    { label: 'Authentication & Payments: ', val: 'JWT, Authentication, Authorization, Protected Routes, bcrypt.js, Razorpay, Payment Gateway Integration' },
    { label: 'Tools & Deployment: ', val: 'Git, GitHub, Postman, Vercel, Render, Nodemailer, VS Code' }
  ];

  for (const s of technicalSkills) {
    drawText('F1', 8.5, 40, curY, s.label);
    const labelWidth = s.label.length * 4.9;
    
    const valMaxWidth = 532 - labelWidth;
    const valLines = wrapText(s.val, valMaxWidth, 4.6);
    
    drawText('F2', 8.5, 40 + labelWidth, curY, valLines[0]);
    curY -= 10.5;
    for (let i = 1; i < valLines.length; i++) {
      drawText('F2', 8.5, 40 + labelWidth, curY, valLines[i]);
      curY -= 10.5;
    }
  }
  curY -= 4;

  // SECTION 3: EXPERIENCE
  drawText('F1', 10.5, 40, curY, 'EXPERIENCE', [0, 0.35, 0.75]);
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  drawText('F1', 9.5, 40, curY, 'Devlupers – MERN Stack Developer Intern');
  drawText('F2', 8.5, 475, curY, 'Feb 2026 – Aug 2026');
  curY -= 12;

  const expBullets = [
    'Contributed to full-stack web application development using React.js, Node.js, Express.js and MongoDB across frontend, backend and database layers.',
    'Engineered responsive React.js interfaces and reusable UI components using Tailwind CSS and React Router DOM for application workflows.',
    'Developed and integrated RESTful APIs using Node.js and Express.js, implementing CRUD operations, middleware and MongoDB data workflows.',
    'Implemented JWT-based authentication and authorization with protected routes and secure API access.',
    'Integrated frontend applications with backend REST APIs using asynchronous JavaScript and handled API responses, errors and integration issues.',
    'Contributed to feature development, debugging, code improvements and application maintenance using Git and GitHub.'
  ];

  for (const b of expBullets) {
    const lines = wrapText(b, 514, 4.6);
    drawText('F2', 8.5, 40, curY, '–');
    drawText('F2', 8.5, 50, curY, lines[0]);
    curY -= 10;
    for (let i = 1; i < lines.length; i++) {
      drawText('F2', 8.5, 50, curY, lines[i]);
      curY -= 10;
    }
  }
  curY -= 4;

  // SECTION 4: KEY PROJECTS (Starts on Page 1)
  drawText('F1', 10.5, 40, curY, 'KEY PROJECTS', [0, 0.35, 0.75]);
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  // Project 1: AstroGanesh – Production Astrology Platform
  drawText('F1', 9.5, 40, curY, 'AstroGanesh – Production Astrology Platform');
  drawText('F1', 8.5, 520, curY, 'LIVE URL', [0, 0.35, 0.75]);
  addLink(520, curY - 2, 572, curY + 9, 'https://www.astroganesh.in/');
  curY -= 10.5;
  drawText('F3', 8.5, 40, curY, 'React.js | Node.js | Express.js | MongoDB | REST APIs | Payment Integration');
  curY -= 11;

  const astroGaneshBullets = [
    'Contributed to a production astrology platform by improving customer-facing interfaces, administrative modules and application workflows.',
    'Engineered reusable React.js components and responsive UI layouts for user-facing features and service workflows.',
    'Contributed to administrative dashboard modules for platform operations, content management and service workflows.',
    'Integrated frontend workflows with backend REST APIs and worked on payment and consultation-related application functionality.',
    'Troubleshot frontend-backend integration issues and supported production feature enhancements and API integrations.'
  ];

  for (const b of astroGaneshBullets) {
    const lines = wrapText(b, 514, 4.6);
    drawText('F2', 8.5, 40, curY, '–');
    drawText('F2', 8.5, 50, curY, lines[0]);
    curY -= 10;
    for (let i = 1; i < lines.length; i++) {
      drawText('F2', 8.5, 50, curY, lines[i]);
      curY -= 10;
    }
  }
  curY -= 7;

  // Project 2: FitAI – AI-Powered Fitness Platform (Page 1)
  drawText('F1', 9.5, 40, curY, 'FitAI – AI-Powered Fitness Platform');
  drawText('F1', 8.5, 520, curY, 'LIVE URL', [0, 0.35, 0.75]);
  addLink(520, curY - 2, 572, curY + 9, 'https://fit-ai-frontend-seven.vercel.app/');
  curY -= 10.5;
  drawText('F3', 8.5, 40, curY, 'React.js | Node.js | Express.js | MongoDB | OpenRouter AI | REST APIs');
  curY -= 11;

  const fitAiBullets = [
    'Engineered a full-stack AI-powered fitness platform using React.js, Node.js, Express.js and MongoDB for personalized fitness, nutrition and product recommendation workflows.',
    'Integrated OpenRouter AI to generate AI-powered workout plans, AI diet plans and AI-based product recommendations using user inputs and application context.',
    'Implemented AI API integration and prompt-based workflows between the React.js frontend, Node.js backend and external AI services for dynamic personalized responses.',
    'Engineered reusable React.js components for Profile, Workout, Nutrition, Progress, Shop, Cart, Orders and Checkout workflows.',
    'Implemented authentication, protected routes and user-specific workflows with token-based access control and REST API integration.',
    'Designed frontend-backend data flows for user fitness data, AI-generated recommendations and application state management.'
  ];

  for (const b of fitAiBullets) {
    const lines = wrapText(b, 514, 4.6);
    drawText('F2', 8.5, 40, curY, '–');
    drawText('F2', 8.5, 50, curY, lines[0]);
    curY -= 10;
    for (let i = 1; i < lines.length; i++) {
      drawText('F2', 8.5, 50, curY, lines[i]);
      curY -= 10;
    }
  }

  // End of Page 1
  startNewPage();

  // ================= PAGE 2 =================
  curY = 755;

  // Project 3: MegaMart – Full-Stack Grocery E-Commerce Platform
  drawText('F1', 9.5, 40, curY, 'MegaMart – Full-Stack Grocery E-Commerce Platform');
  drawText('F1', 8.5, 520, curY, 'LIVE URL', [0, 0.35, 0.75]);
  addLink(520, curY - 2, 572, curY + 9, 'https://mega-mart-frontend-kr6t.vercel.app/');
  curY -= 10.5;
  drawText('F3', 8.5, 40, curY, 'React.js | Node.js | Express.js | MongoDB | Redis | Razorpay');
  curY -= 11;

  const megaMartBullets = [
    'Engineered a full-stack grocery e-commerce platform using React.js, Node.js, Express.js and MongoDB with product, category, cart, wishlist and order management workflows.',
    'Designed and implemented RESTful APIs for products, categories, subcategories, cart, wishlist and orders with protected resources.',
    'Implemented JWT-based authentication and authorization for secure user sessions and protected e-commerce operations.',
    'Integrated Redis caching for frequently accessed application data to optimize backend data retrieval and reduce repeated database operations.',
    'Integrated Razorpay payment gateway for online payment processing and implemented payment-success order workflows.',
    'Implemented Nodemailer transactional email workflows and administrative CRUD operations for product and category management.',
    'Built responsive React.js interfaces using Tailwind CSS for product discovery, search, filtering, cart, wishlist, checkout and order workflows.',
    'Configured production deployment using Vercel for frontend and Render for backend services.'
  ];

  for (const b of megaMartBullets) {
    const lines = wrapText(b, 514, 4.6);
    drawText('F2', 8.5, 40, curY, '•');
    drawText('F2', 8.5, 50, curY, lines[0]);
    curY -= 10;
    for (let i = 1; i < lines.length; i++) {
      drawText('F2', 8.5, 50, curY, lines[i]);
      curY -= 10;
    }
  }
  curY -= 12;

  // Project 4: Library Management System
  drawText('F1', 9.5, 40, curY, 'Library Management System');
  drawText('F1', 8.5, 520, curY, 'LIVE URL', [0, 0.35, 0.75]);
  addLink(520, curY - 2, 572, curY + 9, 'https://frontend-library-pearl.vercel.app/');
  curY -= 10.5;
  drawText('F3', 8.5, 40, curY, 'React.js | Node.js | Express.js | MongoDB | JWT | REST APIs');
  curY -= 11;

  const libraryBullets = [
    'Engineered a full-stack library management system using React.js, Node.js, Express.js and MongoDB for book, user and wishlist management.',
    'Designed and implemented RESTful APIs for authentication, user management, book management and wishlist operations.',
    'Implemented JWT-based authentication, authorization and protected API resources for secure application access.',
    'Implemented CRUD operations with server-side pagination, search, filtering and sorting for efficient data retrieval.',
    'Implemented age-group filtering and query-based data retrieval using Express.js request parameters and MongoDB operations.',
    'Developed reusable React.js components and responsive interfaces using Tailwind CSS with frontend-backend API integration.'
  ];

  for (const b of libraryBullets) {
    const lines = wrapText(b, 514, 4.6);
    drawText('F2', 8.5, 40, curY, '•');
    drawText('F2', 8.5, 50, curY, lines[0]);
    curY -= 10;
    for (let i = 1; i < lines.length; i++) {
      drawText('F2', 8.5, 50, curY, lines[i]);
      curY -= 10;
    }
  }
  curY -= 16;

  // SECTION 5: EDUCATION
  drawText('F1', 10.5, 40, curY, 'EDUCATION', [0, 0.35, 0.75]);
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  drawText('F1', 9.5, 40, curY, 'University of Allahabad');
  drawText('F2', 8.5, 440, curY, 'Expected Graduation: 2027');
  curY -= 10.5;
  drawText('F2', 8.5, 40, curY, 'Bachelor of Commerce (B.Com.)');
  drawText('F2', 8.5, 455, curY, 'Prayagraj, Uttar Pradesh');

  // Finish current page
  startNewPage();

  // ================= CONSTRUCT MULTI-PAGE PDF 1.4 =================
  let objects = [];
  const pageCount = pages.length;
  const pageObjIds = [];
  const contentObjIds = [];

  for (let i = 0; i < pageCount; i++) {
    pageObjIds.push(3 + i);
  }
  for (let i = 0; i < pageCount; i++) {
    contentObjIds.push(3 + pageCount + i);
  }
  const fontF1Id = 3 + pageCount * 2;
  const fontF2Id = fontF1Id + 1;
  const fontF3Id = fontF1Id + 2;

  objects[1] = `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`;
  objects[2] = `2 0 obj\n<< /Type /Pages /Kids [${pageObjIds.map(id => `${id} 0 R`).join(' ')}] /Count ${pageCount} >>\nendobj\n`;

  for (let i = 0; i < pageCount; i++) {
    const page = pages[i];
    const annotsStr = page.annots.length > 0 ? `/Annots [ ${page.annots.join(' ')} ]` : '';
    objects[pageObjIds[i]] = `${pageObjIds[i]} 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents ${contentObjIds[i]} 0 R ${annotsStr} /Resources << /Font << /F1 ${fontF1Id} 0 R /F2 ${fontF2Id} 0 R /F3 ${fontF3Id} 0 R >> >> >>\nendobj\n`;
  }

  for (let i = 0; i < pageCount; i++) {
    const contentStream = pages[i].ops.join('\n');
    const streamLen = Buffer.byteLength(contentStream, 'utf-8');
    objects[contentObjIds[i]] = `${contentObjIds[i]} 0 obj\n<< /Length ${streamLen} >>\nstream\n${contentStream}\nendstream\nendobj\n`;
  }

  objects[fontF1Id] = `${fontF1Id} 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`;
  objects[fontF2Id] = `${fontF2Id} 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`;
  objects[fontF3Id] = `${fontF3Id} 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`;

  const totalObjCount = fontF3Id;

  let header = '%PDF-1.4\n';
  let body = '';
  let offsets = [];
  let currentOffset = Buffer.byteLength(header, 'utf-8');

  for (let i = 1; i <= totalObjCount; i++) {
    offsets[i] = currentOffset;
    body += objects[i];
    currentOffset += Buffer.byteLength(objects[i], 'utf-8');
  }

  let xrefOffset = currentOffset;
  let xref = `xref\n0 ${totalObjCount + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= totalObjCount; i++) {
    xref += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
  }

  let trailer = `trailer\n<< /Size ${totalObjCount + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const finalPdf = header + body + xref + trailer;

  const destPath = path.resolve('./public/resume.pdf');
  fs.writeFileSync(destPath, finalPdf, 'utf-8');
  console.log('Successfully generated public/resume.pdf at', destPath);
}

createResumePdf();
