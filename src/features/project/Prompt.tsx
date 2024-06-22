import styled from "styled-components";
import { Column, Row } from "../../ui/Flexbox";
import { IoSend } from "react-icons/io5";
import { ICON_SIZE_MEDIUM, PROMPT_COLS, PROMPT_ROWS } from "../../ui/UiConstants";
import { useState } from "react";
import { useCreateProject } from "./ProjectQueries";
import { useUserSettingsStore } from "../settings/UserSettingsStore";
import Loader from "./Loader";
import { PromptArea } from "../../ui/PromptArea";


function Prompt() {
  const [prompt, setPrompt] = useState("");
  const { createProject, isCreatingProject } = useCreateProject();
  const { token } = useUserSettingsStore();

  if (isCreatingProject) return <Loader />;

  return (
    <Row $justify="center" $gap="var(--space-short)">
      <PromptArea
        rows={PROMPT_ROWS}
        cols={PROMPT_COLS}
        placeholder="Describe your system"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Column $justify="center">
        <button
          disabled={!prompt}
          onClick={() => createProject({ prompt, token })}
        >
          <IoSend size={ICON_SIZE_MEDIUM} />
        </button>
      </Column>
    </Row>
  );
}

export default Prompt;
