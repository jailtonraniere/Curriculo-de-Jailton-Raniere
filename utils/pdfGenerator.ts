
import { jsPDF } from "https://esm.sh/jspdf";
import { PROJECTS, EXPERIENCES, EDUCATION, COMPETENCIES } from "../constants";

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let cursorY = 20;

  // Helpers
  const addLine = (y: number) => {
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.line(margin, y, pageWidth - margin, y);
  };

  const checkPageOverflow = (needed: number) => {
    if (cursorY + needed > 280) {
      doc.addPage();
      cursorY = 20;
    }
  };

  // --- HEADER ---
  doc.setFillColor(15, 23, 42); // slate-900 (azul escuro institucional)
  doc.rect(0, 0, pageWidth, 55, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.text("JAILTON RANIERE", margin, 25);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.text("Assistente Social | Transformação Digital | Inovação Pública", margin, 35);

  doc.setFontSize(10);
  doc.text("(81) 99507-8087 | jailtonraniere@gmail.com | linkedin.com/in/jailton-raniere-a14240b5/", margin, 45);

  cursorY = 70;

  // --- PERFIL PROFISSIONAL ---
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("PERFIL PROFISSIONAL", margin, cursorY);
  cursorY += 5;
  doc.setDrawColor(21, 128, 61); // green-700
  doc.setLineWidth(1);
  doc.line(margin, cursorY, margin + 20, cursorY);
  cursorY += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(51, 65, 85); // slate-700
  const profileText = "Profissional com formação em Serviço Social e atuação sólida no setor público, com vasta experiência em políticas públicas, transformação digital e inovação social. Gestor de projetos estratégicos que unem tecnologia e humanização, atuando no desenvolvimento de soluções digitais e modernização de serviços públicos.";
  const splitProfile = doc.splitTextToSize(profileText, pageWidth - (margin * 2));
  doc.text(splitProfile, margin, cursorY);
  cursorY += (splitProfile.length * 6) + 10;

  // --- EXPERIÊNCIA ---
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("EXPERIÊNCIA PROFISSIONAL", margin, cursorY);
  cursorY += 5;
  doc.line(margin, cursorY, margin + 20, cursorY);
  cursorY += 10;

  EXPERIENCES.forEach(exp => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(30, 41, 59);
    doc.text(`${exp.company} - ${exp.role}`, margin, cursorY);
    cursorY += 7;
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(71, 85, 105);
    const desc = doc.splitTextToSize(exp.description, pageWidth - (margin * 2));
    doc.text(desc, margin, cursorY);
    cursorY += (desc.length * 5) + 5;

    exp.tasks.forEach(task => {
      doc.text(`• ${task}`, margin + 5, cursorY);
      cursorY += 5;
    });
    cursorY += 5;
  });

  // --- FORMAÇÃO ---
  checkPageOverflow(40);
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("FORMAÇÃO ACADÊMICA", margin, cursorY);
  cursorY += 5;
  doc.line(margin, cursorY, margin + 20, cursorY);
  cursorY += 10;

  EDUCATION.forEach(edu => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(edu.degree, margin, cursorY);
    cursorY += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(edu.institution, margin, cursorY);
    cursorY += 10;
  });

  // --- PROJETOS EM DESTAQUE ---
  checkPageOverflow(60);
  cursorY += 5;
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("PROJETOS EM DESTAQUE", margin, cursorY);
  cursorY += 5;
  doc.line(margin, cursorY, margin + 20, cursorY);
  cursorY += 10;

  // Listamos os 5 primeiros projetos para não poluir o PDF
  PROJECTS.slice(0, 5).forEach(proj => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(proj.name, margin, cursorY);
    cursorY += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`${proj.impactArea} | ${proj.solutionType}`, margin, cursorY);
    cursorY += 5;
    doc.setTextColor(71, 85, 105);
    const pDesc = doc.splitTextToSize(proj.description, pageWidth - (margin * 2));
    doc.text(pDesc, margin, cursorY);
    cursorY += (pDesc.length * 5) + 5;
    checkPageOverflow(20);
  });

  // --- COMPETÊNCIAS ---
  checkPageOverflow(40);
  cursorY += 5;
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("COMPETÊNCIAS E HABILIDADES", margin, cursorY);
  cursorY += 5;
  doc.line(margin, cursorY, margin + 20, cursorY);
  cursorY += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const skillsText = COMPETENCIES.join(" | ");
  const splitSkills = doc.splitTextToSize(skillsText, pageWidth - (margin * 2));
  doc.text(splitSkills, margin, cursorY);

  // Footer do PDF
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text(`Gerado via portfólio digital - ${new Date().toLocaleDateString('pt-BR')}`, margin, 285);

  doc.save("Curriculo_Jailton_Raniere.pdf");
};
