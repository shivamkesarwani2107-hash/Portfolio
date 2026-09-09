import fs from 'fs';
import path from 'path';

function createLetterOfCompletionPdf() {
  // Pure PDF 1.4 single-page document generator with clickable annotations and clean executive styling
  // Page size: Letter (612 x 792 pt), Margins: left=50, right=562, width=512

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

  const drawLine = (y, x1 = 50, x2 = 562, width = 0.75, r = 0.8, g = 0.8, b = 0.8) => {
    currentPageOps.push(`${width} w ${r} ${g} ${b} RG ${x1} ${y} m ${x2} ${y} l S`);
  };

  const drawFilledRect = (x, y, w, h, r = 0.95, g = 0.96, b = 0.98) => {
    currentPageOps.push(`${r} ${g} ${b} rg ${x} ${y} ${w} ${h} re f`);
  };

  const drawText = (font, size, x, y, text, r = 0.1, g = 0.1, b = 0.15) => {
    const escaped = text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
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
  let curY = 740;

  // Top Decorative Accent Band
  drawFilledRect(50, 755, 512, 4, 0.1, 0.45, 0.9);

  // Top Header Area
  drawText('F1', 22, 50, curY, 'LETTER OF COMPLETION', 0.08, 0.18, 0.38);
  drawText('F1', 18, 460, curY, 'Devlupers', 0.15, 0.4, 0.85);
  curY -= 8;
  drawLine(curY, 50, 562, 1, 0.85, 0.88, 0.92);
  curY -= 28;

  // Recipient Title
  drawText('F1', 14, 50, curY, 'Shivam Kesarwani', 0.1, 0.15, 0.25);
  curY -= 20;

  // Letter Body Paragraphs
  const paragraphs = [
    'This is to certify that Shivam Kesarwani has successfully completed his internship with Devlupers. He served as a "MERN Stack Intern" from 20.2.2026 to 20.08.2026.',
    'During his tenure, Shivam demonstrated commendable eagerness to learn, understand, and adapt to new technologies and assigned responsibilities. He worked diligently on various projects involving MERN stack development, complex business logic, API development, database management, and frontend/backend integration.',
    'His commitment to acquiring new skills and knowledge, along with his ability to effectively contribute to development tasks, has positioned him well for future professional endeavors. Throughout the internship, he exhibited the qualities of a dedicated, responsible, and promising professional.',
    'In recognition of his performance and contribution, Shivam is always welcome to work with Devlupers again in the future. This reflects the dedication, professionalism, and value he brought to our team during his internship.',
    'We extend our best wishes to Shivam Kesarwani for his future endeavors and continued success.'
  ];

  for (const para of paragraphs) {
    const lines = wrapText(para, 512, 5.0);
    for (const line of lines) {
      drawText('F2', 9.5, 50, curY, line, 0.2, 0.23, 0.28);
      curY -= 14;
    }
    curY -= 8; // paragraph spacing
  }

  curY -= 10;

  // Sign-off section
  drawText('F2', 10, 50, curY, 'Sincerely,', 0.2, 0.25, 0.3);
  curY -= 16;
  drawText('F1', 11, 50, curY, 'Shivam Prajapati', 0.1, 0.15, 0.25);
  curY -= 13;
  drawText('F2', 9.5, 50, curY, 'CEO', 0.3, 0.35, 0.4);
  curY -= 10;

  // Signature representation line
  drawText('F3', 13, 50, curY - 5, 'Shivam Prajapati (Signature)', 0.15, 0.35, 0.7);
  drawLine(curY - 10, 50, 220, 0.75, 0.7, 0.75, 0.85);

  // Devlupers Contact Information Block (Right-aligned / bottom box)
  const contactBoxY = curY - 55;
  drawFilledRect(340, contactBoxY, 222, 65, 0.96, 0.97, 0.99);
  drawLine(contactBoxY + 65, 340, 562, 0.5, 0.85, 0.88, 0.93);
  drawLine(contactBoxY, 340, 562, 0.5, 0.85, 0.88, 0.93);

  drawText('F1', 9.5, 350, contactBoxY + 48, 'Devlupers Official Verification', 0.1, 0.2, 0.4);
  drawText('F2', 8.5, 350, contactBoxY + 34, 'Phone: +91 6386821819', 0.3, 0.35, 0.4);
  addLink(350, contactBoxY + 32, 480, contactBoxY + 44, 'tel:+916386821819');

  drawText('F2', 8.5, 350, contactBoxY + 20, 'Email: shivam@devlupers.com / info@devlupers.com', 0.3, 0.35, 0.4);
  addLink(350, contactBoxY + 18, 550, contactBoxY + 30, 'mailto:info@devlupers.com');

  drawText('F2', 8.5, 350, contactBoxY + 6, 'Website: https://devlupers.com/', 0.15, 0.4, 0.85);
  addLink(350, contactBoxY + 4, 520, contactBoxY + 16, 'https://devlupers.com/');

  // Footer section
  curY = 70;
  drawLine(curY + 15, 50, 562, 0.5, 0.88, 0.9, 0.93);
  drawText('F1', 9, 270, curY, 'Devlupers', 0.2, 0.3, 0.5);
  drawText('F2', 8, 225, curY - 12, '+91 6386821819   |   info@devlupers.com   |   https://devlupers.com/', 0.4, 0.45, 0.5);
  addLink(225, curY - 14, 500, curY - 2, 'https://devlupers.com/');

  startNewPage();

  // ================= CONSTRUCT SINGLE-PAGE PDF 1.4 =================
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

  const destPath = path.resolve('./public/letter-of-completion.pdf');
  fs.writeFileSync(destPath, finalPdf, 'utf-8');
  console.log('Successfully generated public/letter-of-completion.pdf at', destPath);
}

createLetterOfCompletionPdf();
