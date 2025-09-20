interface CodeBlockProps {
  language: string;
  code: string;
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  const getLanguageClass = (lang: string) => {
    switch (lang) {
      case 'iecst':
        return 'language-iecst';
      case 'json':
        return 'language-json';
      default:
        return 'language-text';
    }
  };

  const formatCode = (code: string, language: string) => {
    if (language === 'iecst') {
      return code
        .replace(/\b(PROGRAM|VAR|END_VAR|IF|THEN|ELSIF|END_IF|REAL|BOOL)\b/g, '<span class="text-blue-400">$1</span>')
        .replace(/\b(TRUE|FALSE|\d+\.\d+)\b/g, '<span class="text-orange-400">$1</span>')
        .replace(/\b(\w+_\w+)\s*:/g, '<span class="text-yellow-400">$1</span>:')
        .replace(/\(\*([^*]|\*(?!\)))*\*\)/g, '<span class="text-gray-500">$&</span>');
    }
    
    if (language === 'json') {
      return code
        .replace(/"([^"]+)":/g, '<span class="text-blue-400">"$1"</span>:')
        .replace(/:\s*"([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
        .replace(/:\s*(\d+\.?\d*)/g, ': <span class="text-orange-400">$1</span>')
        .replace(/:\s*(true|false|null)/g, ': <span class="text-purple-400">$1</span>');
    }
    
    return code;
  };

  return (
    <pre className={`text-sm overflow-x-auto ${getLanguageClass(language)}`}>
      <code dangerouslySetInnerHTML={{ __html: formatCode(code, language) }} />
    </pre>
  );
}
