type UseDownloadFile<TData> = {
  fileName?: string;
  fileExtension?: string;
  fetch?: () => Promise<TData>;
};

export const useDownloadFile = <TData extends { data: any }>({
  fileName = new Date().toDateString(),
  fileExtension = 'xlsx',
  fetch,
}: UseDownloadFile<TData>) => {
  const downloadFile = async ({
    fetch: fetchOverride,
    fileName: fileNameOverride,
    fileExtension: extensOverride,
  }: UseDownloadFile<TData>) => {
    const rf = fetchOverride || fetch;
    const fName = fileNameOverride || fileName;
    const extension = extensOverride || fileExtension;
    if (!rf) return;
    try {
      const file = (await rf()).data as ArrayBuffer;
      if (file) {
        const dl = new Blob([file], { type: 'octet-stream' });
        const element = document.createElement('a');
        element.href = URL.createObjectURL(dl);
        element.setAttribute('download', `${fName}.${extension}`);
        document.body.appendChild(element);
        element.click();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return downloadFile;
};
