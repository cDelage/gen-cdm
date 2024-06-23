import { db } from "../database";
import { CreateProjectPayload, Project } from "../types/Project.type";
import { runPrompt } from "./PromptService";
import { generateUUID } from "./generateUUIDService";

export const createProject = async ({
  prompt,
  token,
}: CreateProjectPayload): Promise<Project> => {
  try {
    const newProject = runPrompt(prompt, token);
    const newProjectWithIds = generateIdForTables(newProject);
    const projectSaved = await db.projects.insert(newProjectWithIds);
    return projectSaved;
  } catch (error) {
    throw new Error(`Erreur lors de la création du projet: ${error}`);
  }
};

const generateIdForTables = (project: Project): Project => {
  return {
    ...project,
    model: {
      tables: project.model
        ? project.model.tables.map((table) => {
            const _id = generateUUID();
            return {
              ...table,
              _id,
              fields: table.fields.map((field) => {
                const fieldId = generateUUID();
                return {
                  ...field,
                  _id: fieldId,
                };
              }),
            };
          })
        : [],
    },
  };
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  try {
    const project = (await db.projects.findOne({ _id: id })) as Project;
    return project;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération du projet: ${error}`);
  }
};

export const updateProject = async (
  id: string,
  updatedProject: Partial<Project>
): Promise<number> => {
  try {
    const numUpdated = await db.projects.update(
      { _id: id },
      { $set: updatedProject }
    );
    return numUpdated;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du projet: ${error}`);
  }
};

export const deleteProject = async (id: string): Promise<number> => {
  try {
    const numRemoved = await db.projects.remove({ _id: id }, { multi: false });
    return numRemoved;
  } catch (error) {
    throw new Error(`Erreur lors de la suppression du projet: ${error}`);
  }
};

export const getAllProjects = async () => {
  try {
    const projects = await db.projects.find({});
    return projects;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des projets: ${error}`);
  }
};
