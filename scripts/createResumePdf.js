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

  const drawText = (font, size, x, y, text) => {
    // Escape PDF special characters: ( ) \
    const escaped = text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    currentPageOps.push(`BT /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${escaped}) Tj ET`);
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
  drawText('F1', 19, 185, curY, 'SHIVAM KESARWANI');
  curY -= 14;
  drawText('F2', 8.5, 138, curY, '+91-9336991973   |   shivamkesarwani2107@gmail.com   |   Prayagraj, Uttar Pradesh');
  addLink(138, curY - 2, 215, curY + 9, 'tel:+919336991973');
  addLink(225, curY - 2, 360, curY + 9, 'mailto:shivamkesarwani2107@gmail.com');
  
  curY -= 11;
  drawText('F2', 8.5, 122, curY, 'github.com/shivamkesarwani2107-hash   |   linkedin.com/in/shivam-kesarwani-634162353');
  addLink(122, curY - 2, 305, curY + 9, 'https://github.com/shivamkesarwani2107-hash');
  addLink(315, curY - 2, 490, curY + 9, 'https://linkedin.com/in/shivam-kesarwani-634162353');
  curY -= 14;

  // SECTION 1: Professional Summary
  drawText('F1', 10.5, 40, curY, 'Professional Summary');
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  const summaryText = 'Software Engineer and MERN Stack Developer with hands-on experience developing, integrating, debugging and deploying full-stack web applications using React.js, Node.js, Express.js and MongoDB. Proficient in RESTful API development, JWT-based Authentication and Authorization, Protected Routes, CRUD workflows, server-side pagination, search, filtering, sorting, API integration and responsive UI development. Experienced with Redis caching, TanStack Query, payment gateway integration, third-party service integration, Git-based development and production deployment using Vercel and Render.';
  const summaryLines = wrapText(summaryText, 532, 4.8);
  for (const line of summaryLines) {
    drawText('F2', 8.5, 40, curY, line);
    curY -= 10.5;
  }
  curY -= 4;

  // SECTION 2: Technical Skills
  drawText('F1', 10.5, 40, curY, 'Technical Skills');
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  const technicalSkills = [
    { label: 'Languages:', val: 'JavaScript (ES6+), HTML5, CSS3' },
    { label: 'Frontend Engineering:', val: 'React.js, React Router DOM, Tailwind CSS, TanStack Query, Axios, Responsive Web Design' },
    { label: 'Backend Engineering:', val: 'Node.js, Express.js, RESTful APIs, API Design, API Integration, CRUD Operations' },
    { label: 'Databases & Caching:', val: 'MongoDB, Mongoose, Redis, Data Modeling, Database Operations' },
    { label: 'Security & Payments:', val: 'JWT, Authentication, Authorization, Protected Routes, bcrypt.js, Razorpay, Payment Integration' },
    { label: 'Developer Tools & Deployment:', val: 'Git, GitHub, Postman, VS Code, Vercel, Render, Nodemailer' },
    { label: 'Software Engineering Concepts:', val: 'Client-Server Architecture, Server-Side Pagination, Search, Filtering, Sorting, API Caching, Query Invalidation, State Management, Data Validation, Debugging' }
  ];

  for (const s of technicalSkills) {
    drawText('F1', 8.5, 40, curY, s.label);
    const labelWidth = s.label.length * 4.9;
    
    // Check if value fits on one line or needs wrapping
    const valMaxWidth = 532 - (labelWidth + 4);
    const valLines = wrapText(s.val, valMaxWidth, 4.6);
    
    drawText('F2', 8.5, 40 + labelWidth + 4, curY, valLines[0]);
    curY -= 10.5;
    for (let i = 1; i < valLines.length; i++) {
      drawText('F2', 8.5, 40 + labelWidth + 4, curY, valLines[i]);
      curY -= 10.5;
    }
  }
  curY -= 4;

  // SECTION 3: Experience
  drawText('F1', 10.5, 40, curY, 'Experience');
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  drawText('F1', 9.5, 40, curY, 'MERN Stack Developer Intern');
  drawText('F2', 8.5, 470, curY, 'Nov 2025 – May 2026');
  curY -= 10.5;
  drawText('F3', 8.5, 40, curY, 'Devlupers');
  curY -= 11;

  const expBullets = [
    'Developed and maintained full-stack application features across React.js frontends and Node.js/Express.js backend services, implementing end-to-end business workflows and client-server communication.',
    'Built modular, reusable and component-driven React interfaces using React.js, Tailwind CSS and React Router DOM, following responsive UI development practices.',
    'Designed and implemented RESTful API services using Node.js and Express.js for resource management, request processing, CRUD operations and MongoDB integration.',
    'Implemented JWT-based Authentication and Authorization workflows with token-based identity verification, protected API resources and route-level access control.',
    'Integrated third-party APIs and application services while troubleshooting functional issues, debugging API workflows and delivering feature enhancements across web application modules.',
    'Utilized Git and GitHub for source-code management, version control, feature development and maintaining collaborative software development workflows.'
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

  // SECTION 4: Projects (Starts on Page 1)
  drawText('F1', 10.5, 40, curY, 'Projects');
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  // Project 1: AstroGanesh – Production Astrology Platform
  drawText('F1', 9.5, 40, curY, 'AstroGanesh – Production Astrology Platform');
  drawText('F1', 8.5, 510, curY, 'Live Website');
  addLink(510, curY - 2, 572, curY + 9, 'https://www.astroganesh.in/');
  curY -= 10.5;
  drawText('F3', 8.5, 40, curY, 'React.js  |  Node.js  |  Express.js  |  MongoDB  |  Payment Integration');
  curY -= 11;

  const astroGaneshBullets = [
    'Contributed to a production astrology platform by developing responsive customer-facing interfaces and integrating application workflows across frontend and administrative modules.',
    'Developed reusable, component-driven React interfaces with responsive layouts, focusing on usability, consistency, and maintainable frontend implementation.',
    'Implemented and enhanced administrative dashboard interfaces for managing platform operations, content, and user-facing service workflows.',
    'Integrated online payment workflows, coordinating frontend payment interactions with backend services to support secure transaction flows.',
    'Implemented call-based service workflows that enable users to access astrology consultation services through the application interface.',
    'Collaborated across application modules to integrate APIs, troubleshoot functional issues, and deliver production-ready features for the live platform.'
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

  // End of Page 1
  startNewPage();

  // ================= PAGE 2 =================
  curY = 755;

  // Project 2: MegaMart – Full-Stack Grocery E-Commerce Platform
  drawText('F1', 9.5, 40, curY, 'MegaMart – Full-Stack Grocery E-Commerce Platform');
  drawText('F1', 8.5, 520, curY, 'Live Demo');
  addLink(520, curY - 2, 572, curY + 9, 'https://mega-mart-frontend-kr6t.vercel.app/');
  curY -= 10.5;
  drawText('F3', 8.5, 40, curY, 'React.js  |  Node.js  |  Express.js  |  MongoDB  |  Redis  |  Razorpay');
  curY -= 11;

  const megaMartBullets = [
    'Developed a full-stack e-commerce application using React.js, Node.js, Express.js and MongoDB, implementing product discovery, category management, cart, wishlist and order-processing workflows.',
    'Designed and implemented RESTful backend services for products, categories, subcategories, cart, wishlist and orders with JWT-based Authentication, Authorization and protected resources.',
    'Implemented Redis-based server-side caching for frequently accessed application data and improved backend data-access workflows.',
    'Integrated Razorpay payment processing and Nodemailer-based transactional email workflows for online payments and automated order confirmations.',
    'Developed administrative CRUD workflows for product, category and subcategory management with structured frontend-backend API communication.',
    'Built responsive, component-driven React interfaces using Tailwind CSS and configured production deployment across Vercel and Render.'
  ];

  for (const b of megaMartBullets) {
    const lines = wrapText(b, 514, 4.6);
    drawText('F2', 8.5, 40, curY, '–');
    drawText('F2', 8.5, 50, curY, lines[0]);
    curY -= 10;
    for (let i = 1; i < lines.length; i++) {
      drawText('F2', 8.5, 50, curY, lines[i]);
      curY -= 10;
    }
  }
  curY -= 10;

  // Project 3: Library Management System
  drawText('F1', 9.5, 40, curY, 'Library Management System');
  drawText('F1', 8.5, 520, curY, 'Live Demo');
  addLink(520, curY - 2, 572, curY + 9, 'https://frontend-library-pearl.vercel.app/');
  curY -= 10.5;
  drawText('F3', 8.5, 40, curY, 'React.js  |  Node.js  |  Express.js  |  MongoDB  |  TanStack Query');
  curY -= 11;

  const libraryBullets = [
    'Developed a full-stack library management application using React.js, Node.js, Express.js and MongoDB for managing books, authors, categories, users and wishlist workflows.',
    'Designed and implemented RESTful API endpoints with JWT-based Authentication, Authorization and protected resources for secure application access.',
    'Implemented end-to-end CRUD workflows with server-side pagination, search, filtering and sorting for efficient book-data retrieval and management.',
    'Integrated TanStack Query for asynchronous server-state management, API caching, mutation handling, query invalidation and data synchronization.',
    'Developed reusable React components and responsive interfaces using Tailwind CSS and integrated the frontend with the production backend API.'
  ];

  for (const b of libraryBullets) {
    const lines = wrapText(b, 514, 4.6);
    drawText('F2', 8.5, 40, curY, '–');
    drawText('F2', 8.5, 50, curY, lines[0]);
    curY -= 10;
    for (let i = 1; i < lines.length; i++) {
      drawText('F2', 8.5, 50, curY, lines[i]);
      curY -= 10;
    }
  }
  curY -= 14;

  // SECTION 5: Education
  drawText('F1', 10.5, 40, curY, 'Education');
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  drawText('F1', 9.5, 40, curY, 'University of Allahabad');
  drawText('F2', 8.5, 445, curY, 'Expected Graduation: 2027');
  curY -= 10.5;
  drawText('F2', 8.5, 40, curY, 'Bachelor of Commerce (B.Com.)');
  drawText('F2', 8.5, 460, curY, 'Prayagraj, Uttar Pradesh');

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
  objects[fontF3Id] = `${fontF3Id} 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>\nendobj\n`;

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
