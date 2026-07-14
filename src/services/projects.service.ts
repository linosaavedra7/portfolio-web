import apiClient from './api-client';
import type { Project } from '@/types/project.types';

export const projectsService = {
  getAll: async (): Promise<Project[]> => {
    const { data } = await apiClient.get<{ data: Project[] }>('/projects');
    return data.data;
  },

  getById: async (id: string): Promise<Project> => {
    const { data } = await apiClient.get<{ data: Project }>(`/projects/${id}`);
    return data.data;
  },
};
