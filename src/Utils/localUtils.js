export const exportTxtFile = (content) => {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'file.txt');
  document.body.appendChild(link);
  link.click();
}