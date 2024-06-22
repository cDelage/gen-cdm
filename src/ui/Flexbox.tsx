import styled from 'styled-components'

export const Row = styled.div<{ $gap?: string; $justify?: string; $align?: string; $grow?: number, $padding?: string }>`
  display: flex;
  gap: ${(props) => props.$gap};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  flex-grow: ${(props) => props.$grow};
  padding: ${(props) => props.$padding};
  `

export const Column = styled.div<{ $gap?: string; $justify?: string; $align?: string ; $grow?: number, $padding?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  flex-grow: ${(props) => props.$grow};
  padding: ${(props) => props.$padding};
`
