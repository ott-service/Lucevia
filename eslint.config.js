import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import parserTypescript from '@typescript-eslint/parser';
import pluginTypescript from '@typescript-eslint/eslint-plugin';

const browser = Object.entries(globals.browser).reduce((browser, [key, value]) => {
  if (key === 'AudioWorkletGlobalScope') {
    browser.AudioWorkletGlobalScope = value;
  } else {
    browser[key] = value;
  }
  return browser;
}, {});

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'], // 처리할 파일 확장자
    languageOptions: {
      ecmaVersion: 2020,
      parser: parserTypescript, // TypeScript 파서 사용
      globals: { browser, ...globals.node }, // 브라우저와 Node.js의 글로벌 변수 설정
    },
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks,
      '@typescript-eslint': pluginTypescript,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17 이상에서는 필요하지 않음
      'react/jsx-uses-react': 'error', // JSX에서 React를 잘못 사용하면 오류
      'react/jsx-uses-vars': 'error', // 사용되지 않은 JSX 변수에 대한 오류
      'react-hooks/rules-of-hooks': 'error', // hooks 사용 규칙 필수
      'react-hooks/exhaustive-deps': 'warn', // useEffect 의존성 배열 검사 경고
      '@typescript-eslint/no-unused-vars': 'error', // 사용되지 않은 변수에 대한 오류
      '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입을 명시하지 않아도 됨
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // 인터페이스 사용 강제
      '@typescript-eslint/no-explicit-any': 'off', // 'any' 타입 사용 허용
    },
    settings: {
      react: {
        version: 'detect', // React 버전을 자동으로 감지
      },
    },
  },
  {
    // JavaScript 파일에 대한 기본 ESLint 추천 규칙 적용
    files: ['**/*.{js,mjs,cjs}'],
    rules: js.configs.recommended.rules,
  },
  {
    // TypeScript 파일에 대한 ESLint 추천 규칙 적용
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...pluginTypescript.configs['eslint-recommended'].overrides[0].rules, // TypeScript 관련 ESLint 추천 규칙
      ...pluginTypescript.configs['recommended'].rules, // TypeScript 플러그인의 추천 규칙
      '@typescript-eslint/no-explicit-any': 'warn', // 'any' 타입 사용 부분 경고
    },
  },
];
