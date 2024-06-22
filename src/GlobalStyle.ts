import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    :root, body{
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 20px;
        font-size: 14px;
        font-weight: 400;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    
        --color-gray-50: #F8FAFC;
        --color-gray-100: #F1F5F9;
        --color-gray-200: #E2E8F0;
        --color-gray-300: #CBD5E1;
        --color-gray-400: #94A3B8;
        --color-gray-500: #64748B;
        --color-gray-600: #475569;
        --color-gray-700: #334155;
        --color-gray-800: #1E293B;
        --color-gray-900: #0F172A;
        --color-gray-950: #020617;

        --space-XXL: 48px;
        --space-XL: 32px;
        --space-large : 20px;
        --space-medium : 16px;
        --space-short : 8px;

        --icon-large : 100px;
    }

    html, body, #root {
        height: 100vh;
        max-height: 100vh;
        width: 100%;
        padding: 0;
        margin: 0;
        border: 0;
    }

    h1 {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 24px;
        line-height  : 28px;
        font-weight: 500;
        margin: 0px;
        user-select: none;
    }

    h2 {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 20px;
        line-height  : 24px;
        font-weight: 500;
        margin: 0px;
        user-select: none;
    }
`

export default GlobalStyle
