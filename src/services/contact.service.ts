import apiClient from './api-client';
import type { ContactPayload } from '@/types/api.types';

export const contactService = {
  send: async (payload: ContactPayload): Promise<void> => {
    await apiClient.post('/contact', payload);
  },
};
