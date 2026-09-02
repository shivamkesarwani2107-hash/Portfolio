import fs from 'fs';
import path from 'path';

function createResumePdf() {
  // We will build a pure PDF 1.4 document with exact font mapping and graphics state
  // Page size: Letter (612 x 792 pt), Margins: left=40, right=572, width=532

  const streamOps = [];

  // Helper functions
  const drawLine = (y) => {
    streamOps.push(`0.75 w 0.2 0.2 0.2 RG 40 ${y} m 572 ${y} l S`);
  };

  const drawText = (font, size, x, y, text) => {
    // Escape special characters: ( ) \
    const escaped = text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    streamOps.push(`BT /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${escaped}) Tj ET`);
  };

  let curY = 758;

  // HEADER (Centered)
  drawText('F1', 18, 205, curY, 'SHIVAM KESARWANI');
  curY -= 14;
  drawText('F2', 8.5, 140, curY, '+91-9336991973   |   shivamkesarwani2107@gmail.com   |   Prayagraj, Uttar Pradesh');
  curY -= 11;
  drawText('F2', 8.5, 125, curY, 'github.com/shivamkesarwani2107-hash   |   linkedin.com/in/shivam-kesarwani-634162353');
  curY -= 14;

  // SECTION 1: Professional Summary
  drawText('F1', 10.5, 40, curY, 'Professional Summary');
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  const summaryLines = [
    'MERN Stack Developer with hands-on experience developing and deploying full-stack web applications using React.js, Node.js,',
    'Express.js and MongoDB. Skilled in RESTful API development, JWT authentication, React Query, Redis caching, Razorpay integration',
    'and responsive UI development. Currently working as a MERN Stack Developer Intern with experience in Git, GitHub, Postman and',
    'cloud deployment using Vercel and Render.'
  ];
  for (const line of summaryLines) {
    drawText('F2', 8.2, 40, curY, line);
    curY -= 10;
  }
  curY -= 3;

  // SECTION 2: Technical Skills
  drawText('F1', 10.5, 40, curY, 'Technical Skills');
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  const skills = [
    { label: 'Languages:', val: 'JavaScript (ES6+), HTML5, CSS3' },
    { label: 'Frontend:', val: 'React.js, React Router DOM, Tailwind CSS, TanStack Query, Axios' },
    { label: 'Backend:', val: 'Node.js, Express.js, RESTful APIs' },
    { label: 'Database:', val: 'MongoDB, Mongoose, Redis' },
    { label: 'Authentication & Payment:', val: 'JWT, Authorization, bcrypt.js, Razorpay' },
    { label: 'Tools:', val: 'Git, GitHub, Postman, VS Code, Vercel, Render, Nodemailer' },
    { label: 'Core Concepts:', val: 'CRUD, Pagination, Search, Filtering, Sorting, Protected Routes, API Integration, Responsive Design' }
  ];

  for (const s of skills) {
    drawText('F1', 8.2, 40, curY, s.label);
    const labelWidth = s.label.length * 4.8;
    drawText('F2', 8.2, 40 + labelWidth + 4, curY, s.val);
    curY -= 10;
  }
  curY -= 3;

  // SECTION 3: Experience
  drawText('F1', 10.5, 40, curY, 'Experience');
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  drawText('F1', 9, 40, curY, 'MERN Stack Developer Intern');
  drawText('F2', 8.5, 475, curY, 'Nov 2025 - May 2026');
  curY -= 10;
  drawText('F3', 8.5, 40, curY, 'Devlupers');
  curY -= 10;

  const expBullets = [
    '- Developed and maintained full-stack web applications using React.js, Node.js, Express.js and MongoDB.',
    '- Built reusable and responsive UI components using React.js, Tailwind CSS and React Router DOM.',
    '- Developed RESTful APIs and implemented JWT-based Authentication, Authorization and Protected Routes.',
    '- Integrated third-party APIs, debugged application issues and contributed to feature development and performance improvements.',
    '- Used Git and GitHub for version control, collaboration and maintaining application code.'
  ];
  for (const b of expBullets) {
    drawText('F2', 8.2, 48, curY, b);
    curY -= 9.5;
  }
  curY -= 3;

  // SECTION 4: Projects
  drawText('F1', 10.5, 40, curY, 'Projects');
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  // Project 1: MegaMart
  drawText('F1', 9, 40, curY, 'MegaMart - Grocery Shopping Platform');
  drawText('F1', 8.5, 520, curY, 'Live Demo');
  curY -= 9.5;
  drawText('F3', 8, 40, curY, 'React.js  |  Node.js  |  Express.js  |  MongoDB  |  Redis  |  Razorpay');
  curY -= 9.5;

  const megaMartBullets = [
    '- Developed a full-stack grocery shopping platform with product browsing, categories, cart, wishlist and order management.',
    '- Built RESTful APIs for products, categories, subcategories, cart, wishlist and orders with JWT-based authentication and protected routes.',
    '- Integrated Razorpay for online payments and Nodemailer for automated order confirmation emails.',
    '- Implemented Redis caching and admin CRUD operations for categories, subcategories and products.',
    '- Designed a responsive interface using Tailwind CSS and deployed the frontend on Vercel and backend on Render.'
  ];
  for (const b of megaMartBullets) {
    drawText('F2', 8, 48, curY, b);
    curY -= 9;
  }
  curY -= 2;

  // Project 2: Library Management System
  drawText('F1', 9, 40, curY, 'Library Management System');
  drawText('F1', 8.5, 520, curY, 'Live Demo');
  curY -= 9.5;
  drawText('F3', 8, 40, curY, 'React.js  |  Node.js  |  Express.js  |  MongoDB  |  TanStack Query');
  curY -= 9.5;

  const libraryBullets = [
    '- Developed a full-stack library management system for managing books, authors, categories, users and wishlists.',
    '- Implemented JWT Authentication, Authorization, Protected Routes and RESTful APIs for secure application access.',
    '- Implemented CRUD operations, pagination, search, sorting and wishlist functionality.',
    '- Used TanStack Query for API fetching, caching and mutations with a responsive Tailwind CSS interface.'
  ];
  for (const b of libraryBullets) {
    drawText('F2', 8, 48, curY, b);
    curY -= 9;
  }
  curY -= 2;

  // Project 3: Movie Ticket Booking Platform
  drawText('F1', 9, 40, curY, 'Movie Ticket Booking Platform');
  drawText('F1', 8.5, 520, curY, 'Live Demo');
  curY -= 9.5;
  drawText('F3', 8, 40, curY, 'React.js  |  Node.js  |  Express.js  |  MongoDB  |  Razorpay');
  curY -= 9.5;

  const movieBullets = [
    '- Developed a full-stack movie ticket booking platform with authentication, movie browsing, seat selection and booking workflow.',
    '- Implemented JWT Authentication, Protected Routes and RESTful APIs for users, movies and bookings.',
    '- Integrated Razorpay for online payments and Nodemailer for booking confirmation emails.',
    '- Built responsive React components with React Router DOM and MongoDB/Mongoose for application data management.'
  ];
  for (const b of movieBullets) {
    drawText('F2', 8, 48, curY, b);
    curY -= 9;
  }
  curY -= 3;

  // SECTION 5: Education
  drawText('F1', 10.5, 40, curY, 'Education');
  curY -= 3;
  drawLine(curY);
  curY -= 11;

  drawText('F1', 9, 40, curY, 'University of Allahabad');
  drawText('F2', 8.5, 455, curY, 'Expected Graduation: 2027');
  curY -= 9.5;
  drawText('F2', 8.5, 40, curY, 'Bachelor of Commerce (B.Com.)');
  drawText('F2', 8.5, 470, curY, 'Prayagraj, Uttar Pradesh');

  const streamContent = streamOps.join('\n');
  const streamLength = Buffer.byteLength(streamContent, 'utf-8');

  // Construct PDF Objects with exact byte offsets
  let header = '%PDF-1.4\n';
  let objects = [];

  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n');
  objects.push('3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R /F3 7 0 R >> >> >>\nendobj\n');
  objects.push(`4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj\n`);
  objects.push('5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n');
  objects.push('6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n');
  objects.push('7 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>\nendobj\n');

  let body = '';
  let offsets = [];
  let currentOffset = Buffer.byteLength(header, 'utf-8');

  for (let i = 0; i < objects.length; i++) {
    offsets.push(currentOffset);
    body += objects[i];
    currentOffset += Buffer.byteLength(objects[i], 'utf-8');
  }

  let xrefOffset = currentOffset;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 0; i < offsets.length; i++) {
    xref += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
  }

  let trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const finalPdf = header + body + xref + trailer;

  const destPath = path.resolve('./public/resume.pdf');
  fs.writeFileSync(destPath, finalPdf, 'utf-8');
  console.log('Successfully generated public/resume.pdf at', destPath);
}

createResumePdf();
