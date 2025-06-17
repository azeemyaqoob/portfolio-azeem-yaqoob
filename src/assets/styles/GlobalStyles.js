import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  section {
    padding: 5rem 0;

    @media ${({ theme }) => theme.breakpoints.md} {
      padding: 3.5rem 0;
    }
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 5rem;
    color: ${({ theme }) => theme.colors.white};

    span {
      color: ${({ theme }) => theme.colors.secondary};
    }

    @media ${({ theme }) => theme.breakpoints.md} {
      font-size: 2rem;
      margin-bottom: 3rem;
    }
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
  }
`;