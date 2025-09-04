import { create } from 'zustand'

export type SnackbarSeverity = 'success' | 'info' | 'warning' | 'error'

interface UIState {
  loading: boolean
  setLoading: (v: boolean) => void
  snackbar: { open: boolean; message: string; severity: SnackbarSeverity }
  openSnackbar: (message: string, severity?: SnackbarSeverity) => void
  closeSnackbar: () => void
}

export const useUIStore = create<UIState>((set) => ({
  loading: false,
  setLoading: (v) => set({ loading: v }),
  snackbar: { open: false, message: '', severity: 'info' },
  openSnackbar: (message, severity = 'info') => set({ snackbar: { open: true, message, severity } }),
  closeSnackbar: () => set((s) => ({ snackbar: { ...s.snackbar, open: false } })),
}))
