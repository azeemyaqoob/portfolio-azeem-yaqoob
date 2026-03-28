import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  li {
    list-style: none;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 3px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  section {
    padding: 6rem 0;
    position: relative;

    @media ${({ theme }) => theme.breakpoints.md} {
      padding: 4rem 0;
    }
  }

  .section-title {
    font-size: 2.8rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 4rem;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: -0.02em;
    position: relative;

    span {
      background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
      margin: 1rem auto 0;
      border-radius: 2px;
    }

    @media ${({ theme }) => theme.breakpoints.md} {
      font-size: 2rem;
      margin-bottom: 3rem;
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.9rem 2rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 50px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    letter-spacing: 0.02em;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }

    &:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 15px 35px -5px ${({ theme }) => theme.colors.secondaryGlow},
                  0 5px 15px -5px ${({ theme }) => theme.colors.accentGlow};

      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(-1px) scale(0.98);
    }
  }

  .btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.9rem 2rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.glassBorder};
    border-radius: 50px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(10px);

    &:hover {
      border-color: ${({ theme }) => theme.colors.secondary};
      background: ${({ theme }) => theme.colors.secondaryGlow};
      transform: translateY(-3px);
      box-shadow: 0 10px 25px -5px ${({ theme }) => theme.colors.secondaryGlow};
    }
  }
`;
