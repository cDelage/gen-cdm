import styled from "styled-components";

export const PageColumn = styled.div<{$gap?: string}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--space-medium);
  box-sizing: border-box;
  gap: ${(props) => props.$gap};
  `;
  
  export const PageRow = styled.div<{$gap?: string}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--space-medium);
  box-sizing: border-box;
  gap: ${(props) => props.$gap};
  `;