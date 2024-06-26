import { ReactNode, useContext, createContext, useState } from "react";
import styled, { css } from "styled-components";

type TabsContextType = {
  openId?: string;
};

export type Tab = {
  id: string;
  children: ReactNode;
};

const TabStyled = styled.div<{ $active: boolean }>`
  padding: var(--space-short);
  border-right: 1px solid var(--color-border);
  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-active);
    `}

  &:hover {
    background-color: var(--color-hover);
  }
`;

const HeaderContainerStyled = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-border);
`;

const WindowContainerStyled = styled.div`
  flex: 1;
`;

const TabsContainerStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
`;

const TabsContext = createContext<TabsContextType>({});

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsContext was used outside of his scope");
  return context;
}

function Tabs({ tabs, children }: { tabs: Tab[]; children: ReactNode }) {
  const [openId, setOpenId] = useState<string | undefined>(
    tabs[0] ? tabs[0].id : ""
  );

  return (
    <TabsContext.Provider value={{ openId }}>
      <TabsContainerStyled>
        <HeaderContainerStyled>
          {tabs.map((tab) => (
            <TabStyled
              key={tab.id}
              $active={openId === tab.id}
              onClick={() => setOpenId(tab.id)}
            >
              {tab.children}
            </TabStyled>
          ))}
        </HeaderContainerStyled>
        <WindowContainerStyled>{children}</WindowContainerStyled>
      </TabsContainerStyled>
    </TabsContext.Provider>
  );
}

function Window({ id, children }: { id: string; children: ReactNode }) {
  const { openId } = useTabsContext();
  if (openId !== id) return null;

  return children;
}

Tabs.Window = Window;

export default Tabs;
