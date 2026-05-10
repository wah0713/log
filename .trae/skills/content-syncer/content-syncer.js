const fs = require('fs');
const path = require('path');

const CATEGORIES = {
  Css: ['css', 'style', '样式', '布局', '颜色', '字体', 'favicon'],
  Js: ['javascript', 'js', '函数', 'api', '性能', '优化', '面试题', 'iframe'],
  Git: ['git', 'version', '版本控制', 'commit', 'branch'],
  Software: ['软件', '工具', '插件', '配置', '网站', 'vscode'],
  Idea: ['想法', '观点', '知识', '设计原则', '原则'],
  Vue: ['vue', 'vuex', 'vue-router'],
  React: ['react', 'react-dom', 'redux'],
  RegExp: ['regexp', '正则', '正则表达式'],
  Chrome: ['chrome', 'devtools', '浏览器'],
  Markdown: ['markdown', 'md'],
  Html: ['html', '标签', '语义化', 'seo', 'favicon'],
  Emoji: ['emoji', '表情']
};

const CATEGORY_PRIORITY = ['favicon', 'iframe', '性能', '优化', '面试题', '字体', '颜色', '布局'];

function getCategory(entry) {
  const lowerEntry = entry.toLowerCase();

  for (const keyword of CATEGORY_PRIORITY) {
    if (lowerEntry.includes(keyword)) {
      if (keyword === 'favicon') return 'Html';
      if (keyword === 'iframe') return 'Js';
      if (keyword === '性能' || keyword === '优化' || keyword === '面试题') return 'Js';
      if (keyword === '字体' || keyword === '颜色' || keyword === '布局') return 'Css';
    }
  }

  for (const [category, keywords] of Object.entries(CATEGORIES)) {
    for (const keyword of keywords) {
      if (lowerEntry.includes(keyword)) {
        return category;
      }
    }
  }

  return 'Idea';
}

function removeNumberPrefix(text) {
  return text.replace(/^\d+[、.\s]+/, '');
}

function parseEntries(content) {
  const entries = [];
  const lines = content.split('\n');
  let currentEntry = null;

  for (const line of lines) {
    if (line.match(/^#{1,3}\s+/)) {
      if (currentEntry) {
        entries.push(currentEntry);
      }
      const title = removeNumberPrefix(line.replace(/^#{1,3}\s+/, ''));
      currentEntry = { title, content: line + '\n' };
    } else if (currentEntry) {
      currentEntry.content += line + '\n';
    }
  }

  if (currentEntry) {
    entries.push(currentEntry);
  }

  return entries;
}

function getExistingEntries(filePath) {
  if (!fs.existsSync(filePath)) {
    return new Set();
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const entries = new Set();
  const parsed = parseEntries(content);

  for (const entry of parsed) {
    entries.add(entry.title);
    entries.add(entry.content.trim());
  }

  return entries;
}

function syncFile(filePath, collectionsPath) {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === '.md') {
    const content = fs.readFileSync(filePath, 'utf-8');
    const entries = parseEntries(content);

    for (const entry of entries) {
      const category = getCategory(entry.content);
      const targetFile = path.join(collectionsPath, category, 'index.md');
      const existingEntries = getExistingEntries(targetFile);

      if (!existingEntries.has(entry.title) && !existingEntries.has(entry.content.trim())) {
        let targetDir = path.dirname(targetFile);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }

        fs.appendFileSync(targetFile, entry.content + '\n');
        console.log(`  → ${category}: ${entry.title}`);
      }
    }
  } else {
    let category = 'Js';
    if (ext === '.css' || ext === '.less') category = 'Css';
    else if (ext === '.js') category = 'Js';

    const fileName = path.basename(filePath);
    const targetDir = path.join(collectionsPath, category);
    const targetFile = path.join(targetDir, fileName);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    if (!fs.existsSync(targetFile)) {
      fs.copyFileSync(filePath, targetFile);
      console.log(`  → ${category}: ${fileName}`);
    }
  }
}

function syncYearMonth(year, month, logPath, collectionsPath) {
  const yearDir = path.join(logPath, year.toString());
  const monthDir = path.join(yearDir, month.toString().padStart(2, '0'));

  if (!fs.existsSync(monthDir)) {
    console.log(`目录不存在: ${monthDir}`);
    return;
  }

  console.log(`\n同步 ${year}年${month}月...`);

  const files = fs.readdirSync(monthDir);
  for (const file of files) {
    const filePath = path.join(monthDir, file);
    if (fs.statSync(filePath).isFile()) {
      syncFile(filePath, collectionsPath);
    }
  }
}

function updateLog(collectionsPath) {
  const logFile = path.join(collectionsPath, 'Log', 'todo.md');
  const logDir = path.dirname(logFile);

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  const date = new Date().toISOString().split('T')[0];
  fs.appendFileSync(logFile, `\n同步完成: ${date}`);
}

function main() {
  const args = process.argv.slice(2);
  const logPath = path.join(__dirname, '../../../');
  const collectionsPath = path.join(logPath, 'collections');

  console.log('Content Syncer - 日志文件同步工具');
  console.log('==================================');

  if (args[0] === '23上半年') {
    const year = 23;
    for (let month = 1; month <= 6; month++) {
      syncYearMonth(year, month, logPath, collectionsPath);
    }
  } else if (args[0] === '24上半年') {
    const year = 24;
    for (let month = 1; month <= 6; month++) {
      syncYearMonth(year, month, logPath, collectionsPath);
    }
  } else if (args.length === 2) {
    const year = parseInt(args[0]);
    const month = parseInt(args[1]);
    syncYearMonth(year, month, logPath, collectionsPath);
  } else if (args.length === 1 && args[0].match(/^\d+$/)) {
    const year = parseInt(args[0]);
    for (let month = 1; month <= 12; month++) {
      syncYearMonth(year, month, logPath, collectionsPath);
    }
  } else {
    console.log('用法: node content-syncer.js <年> <月>');
    console.log('   或: node content-syncer.js <年>  (同步全年)');
    console.log('   或: node content-syncer.js 23上半年');
    return;
  }

  updateLog(collectionsPath);
  console.log('\n同步完成！');
}

main();
