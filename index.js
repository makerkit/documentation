import fs from 'fs/promises';
import path from 'path';

const DIST_FOLDER = 'dist';
const WORDS_PER_FILE = 5000;
const OUTPUT_EXTENSION = '.md';

/**
 * Find all .mdx files in a directory
 * @param dir
 * @returns {Promise<*[]>}
 */
async function findMdxFiles(dir) {
    const files = await fs.readdir(dir, {withFileTypes: true});
    let mdxFiles = [];

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            mdxFiles = mdxFiles.concat(await findMdxFiles(fullPath));
        } else if (path.extname(file.name) === '.mdx') {
            mdxFiles.push(fullPath);
        }
    }

    return mdxFiles;
}

/**
 * Get the word count of a file
 * @param filePath
 * @returns {Promise<number>}
 */
async function getWordCount(filePath) {
    const content = await fs.readFile(filePath, 'utf-8');

    return content.split(/\s+/).length;
}

/**
 * Concatenate files based on strategy (word count or folder-based)
 * @param files
 * @param strategy - number for word count or string for special handling
 * @returns {Promise<void>}
 */
async function concatenateFiles(files, strategy) {
    if (typeof strategy === 'number') {
        await concatenateByWordCount(files, strategy);
    } else if (strategy === 'folder') {
        await concatenateByFolder(files);
    } else {
        throw new Error(`Unknown concatenation strategy: ${strategy}`);
    }
}

/**
 * Original word count based concatenation
 */
async function concatenateByWordCount(files, wordsPerFile) {
    let concatenatedContent = '';
    let fileCounter = 1;
    let wordCounter = 0;
    let combinedNames = [];

    await fs.mkdir(DIST_FOLDER, {recursive: true});

    for (const file of files) {
        const content = await fs.readFile(file, 'utf-8');

        let fileContent = `-----------------\n`;
        fileContent += `FILE PATH: ${file}\n\n${content}\n\n`;

        concatenatedContent += fileContent;
        wordCounter += fileContent.split(/\s+/).length;
        combinedNames.push(path.basename(file, '.mdx'));

        if (wordCounter >= wordsPerFile || files.indexOf(file) === files.length - 1) {
            const combinedFileName = combinedNames
                .slice(0, 3)  // Take up to 3 file names
                .map(name => sanitizeFileName(name))
                .join('_');

            const outputFileName = `${DIST_FOLDER}/${combinedFileName}_${fileCounter}${OUTPUT_EXTENSION}`;
            await fs.writeFile(outputFileName, concatenatedContent);
            console.log(`Created file: ${outputFileName}`);

            concatenatedContent = '';
            wordCounter = 0;
            fileCounter++;
            combinedNames = [];
        }
    }

    if (concatenatedContent) {
        await fs.writeFile(`${DIST_FOLDER}/concatenated_${fileCounter}.mdx`, concatenatedContent);
    }
}

/**
 * New folder-based concatenation
 */
async function concatenateByFolder(files) {
    await fs.mkdir(DIST_FOLDER, {recursive: true});
    
    // Group files by their full relative path
    const filesByFolder = files.reduce((acc, file) => {
        // Get the relative path from the source directory
        const relativePath = path.relative(process.argv[2], path.dirname(file));
        if (!acc[relativePath]) {
            acc[relativePath] = [];
        }
        acc[relativePath].push(file);
        return acc;
    }, {});

    // Create one file per folder, maintaining folder structure
    for (const [folderPath, folderFiles] of Object.entries(filesByFolder)) {
        let concatenatedContent = '';
        
        for (const file of folderFiles) {
            const content = await fs.readFile(file, 'utf-8');
            concatenatedContent += `-----------------\n`;
            concatenatedContent += `FILE PATH: ${file}\n\n${content}\n\n`;
        }

        // Create the full output directory path
        const outputDir = path.dirname(path.join(DIST_FOLDER, folderPath));
        await fs.mkdir(outputDir, {recursive: true});

        // Use the last folder name as the file name
        const folderName = path.basename(folderPath);
        const outputFileName = path.join(outputDir, `${sanitizeFileName(folderName)}${OUTPUT_EXTENSION}`);
        
        await fs.writeFile(outputFileName, concatenatedContent);
        console.log(`Created folder-based file: ${outputFileName}`);
    }
}

function sanitizeFileName(name) {
    return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

async function clearDistFolder() {
    // clear the dist folder
    await fs.rm(DIST_FOLDER, { force: true, recursive: true });
}

async function createDistFolder() {
    await clearDistFolder().catch();

    // create the dist folder if it doesn't exist
    try {
        await fs.access(DIST_FOLDER);
    } catch (e) {
        await fs.mkdir(DIST_FOLDER);
    }
}

/**
 * @name main
 * @returns {Promise<void>}
 */
async function main() {
    const sourcePath = process.argv[2];
    const strategyParam = process.argv[3];
    
    // Parse strategy - either number or keyword
    const strategy = isNaN(strategyParam) ? strategyParam : parseInt(strategyParam) || WORDS_PER_FILE;

    if (!sourcePath) {
        console.error('Please provide a source path as an argument.');
        process.exit(1);
    }

    try {
        await createDistFolder();
        const mdxFiles = await findMdxFiles(sourcePath);
        await concatenateFiles(mdxFiles, strategy);
        console.log('Files have been concatenated and saved in the "dist" folder.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

void main();