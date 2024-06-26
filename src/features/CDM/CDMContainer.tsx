import { useTablesAsNodes } from "./CDMService";
import CDMViewport from "./CDMViewport";

function CDMContainer() {
  const { nodes } = useTablesAsNodes();

  if (!nodes.length) return null;

  return <CDMViewport />;
}

export default CDMContainer;
