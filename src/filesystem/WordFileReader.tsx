import styles from '../css/WordFileReader.module.css';

function isAlpha(ch: string): boolean {
  return (
    typeof ch === 'string' &&
    ch.length === 1 &&
    ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
  );
}

function isComma(ch: string): boolean {
  return typeof ch === 'string' && ch === ',';
}

function cleanInputData(fileData: string): string[] {
  let count = 0;
  let cleanString = '';
  let state = 0;
  let ch = '';
  let result = 'accept';

  for (let idx = 0; idx < fileData.length; idx++) {
    ch = fileData.charAt(idx);
    switch (state) {
      case 0:
        count = 0;
        if (isAlpha(ch)) {
          cleanString = cleanString.concat(ch);
          state = 1;
        }
        break;
      case 1:
        if (isAlpha(ch)) {
          cleanString = cleanString.concat(ch);
          count++;
          if (count > 15) {
            result = 'fail';
            state = 100;
          }
        } else if (isComma(ch)) {
          state = 2;
        }
        break;
      case 2:
        if (isAlpha(ch)) {
          cleanString = cleanString.concat(',');
          cleanString = cleanString.concat(ch);
          state = 1;
        }
        break;
      default:
    }
  }
  return [cleanString, result];
}

type WordFileReaderProps = {
  // eslint-disable-next-line
  handleUpdateFileList: ([]) => void;
};

export default function WordFileReader({
  handleUpdateFileList,
}: WordFileReaderProps) {
  function parseWordFile(fileData: string) {
    const cleanResult = cleanInputData(fileData);
    if (cleanResult[1] === 'fail') {
      alert('File contains errors. Word list was not changed.');
    } else {
      const words = cleanResult[0].split(',');
      handleUpdateFileList(words);
    }
  }

  function handleFileData(e: any) {
    const content: string = e.target.result;
    parseWordFile(content);
  }

  function handleChangeFile(file: File) {
    try {
      let fileReader = new FileReader();
      fileReader.onloadend = handleFileData;
      fileReader.readAsText(file);
    } catch (error) {
      console.log('cancel error.');
      return;
    }
  }

  return (
    <div>
      <input
        className={styles.btn}
        type="file"
        accept=".txt"
        onChange={(e) => handleChangeFile(e.target.files![0])}
      />
    </div>
  );
}
